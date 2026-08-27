import test from 'node:test'
import assert from 'node:assert/strict'
import mongoose from 'mongoose'

import Payment from '../src/models/payment.js'
import PrintUnlock from '../src/models/printUnlock.js'
import {
  createPolicyAcceptance,
  getPublicPolicyInfo,
  POLICY_VERSIONS
} from '../src/config/policyVersions.js'
import {
  buildExportAccessDecision,
  getExportTier,
  getRefundState,
  isConfirmedPaymentStatus,
  isSpotifyAlbumId,
  sanitizeReturnPath
} from '../src/services/printReadyService.js'

const album = {
  provider: 'spotify',
  providerAlbumId: '4aawyAB9vmqN3uQ7FjRGTy',
  albumName: 'Global Access',
  artistNames: ['Young Thug'],
  trackCount: 15
}

test('accepts only Spotify album IDs and local return paths', () => {
  assert.equal(isSpotifyAlbumId(album.providerAlbumId), true)
  assert.equal(isSpotifyAlbumId('not an album id'), false)
  assert.equal(sanitizeReturnPath('/p/507f1f77bcf86cd799439011'), '/p/507f1f77bcf86cd799439011')
  assert.equal(sanitizeReturnPath('https://attacker.example'), '/')
  assert.equal(sanitizeReturnPath('//attacker.example'), '/')
})

test('classifies only supported free and Print-Ready export combinations', () => {
  assert.equal(getExportTier('jpg', 0.6), 'free')
  assert.equal(getExportTier('png', 1), 'print_ready')
  assert.equal(getExportTier('png', 1.5), 'print_ready')
  assert.equal(getExportTier('pdf', 1), 'print_ready')
  assert.equal(getExportTier('pdf', 1.5), 'print_ready')
  assert.equal(getExportTier('jpg', 1), null)
  assert.equal(getExportTier('png', 0.6), null)
})

test('authorizes exports with the correct paywall and watermark policy', () => {
  const enabledOffer = { enabled: true, unitAmount: 199, currency: 'usd', policies: {} }
  const disabledOffer = { ...enabledOffer, enabled: false }

  assert.deepEqual(
    buildExportAccessDecision({ offer: enabledOffer, tier: 'free' }),
    {
      authorized: true,
      paywallEnabled: true,
      tier: 'free',
      reason: 'free_export',
      watermarks: { top: true, pattern: true },
      offer: enabledOffer
    }
  )
  assert.deepEqual(
    buildExportAccessDecision({ offer: disabledOffer, tier: 'print_ready' }),
    {
      authorized: true,
      paywallEnabled: false,
      tier: 'print_ready',
      reason: 'print_ready_disabled',
      watermarks: { top: true, pattern: false },
      offer: disabledOffer
    }
  )
  assert.equal(
    buildExportAccessDecision({ offer: enabledOffer, tier: 'print_ready' }).reason,
    'authentication_required'
  )
  assert.deepEqual(
    buildExportAccessDecision({
      offer: enabledOffer,
      tier: 'print_ready',
      userId: 'user-id',
      unlock: { active: true }
    }).watermarks,
    { top: false, pattern: false }
  )
  assert.equal(
    buildExportAccessDecision({
      offer: enabledOffer,
      tier: 'print_ready',
      userId: 'user-id',
      unlock: { active: false }
    }).reason,
    'revoked'
  )
})

test('maps Stripe refund totals without coupling them to unlock state', () => {
  assert.deepEqual(getRefundState(0, 199), { refundStatus: 'none', paymentStatus: null })
  assert.deepEqual(getRefundState(50, 199), {
    refundStatus: 'partial',
    paymentStatus: 'partially_refunded'
  })
  assert.deepEqual(getRefundState(199, 199), {
    refundStatus: 'full',
    paymentStatus: 'refunded'
  })
  assert.deepEqual(getRefundState(0, 199, 'pending'), {
    refundStatus: 'pending',
    paymentStatus: null
  })
  assert.deepEqual(getRefundState(0, 199, 'failed'), {
    refundStatus: 'failed',
    paymentStatus: null
  })
})

test('only Stripe-confirmed financial states qualify for purchase analytics', () => {
  assert.equal(isConfirmedPaymentStatus('unpaid'), false)
  assert.equal(isConfirmedPaymentStatus('failed'), false)
  assert.equal(isConfirmedPaymentStatus('paid'), true)
  assert.equal(isConfirmedPaymentStatus('partially_refunded'), true)
  assert.equal(isConfirmedPaymentStatus('refunded'), true)
})

test('payment and unlock documents validate the portable album identity', () => {
  const userId = new mongoose.Types.ObjectId()
  const payment = new Payment({
    userId,
    album,
    stripePriceId: 'price_test',
    amountSubtotal: 199,
    amountTotal: 199,
    policyAcceptance: createPolicyAcceptance(new Date('2026-08-26T12:00:00.000Z'))
  })
  const unlock = new PrintUnlock({ userId, album, source: 'payment', paymentId: payment._id })

  assert.equal(payment.validateSync(), undefined)
  assert.equal(unlock.validateSync(), undefined)
  assert.equal(unlock.active, true)
  assert.equal(payment.currency, 'usd')
  assert.deepEqual(payment.policyAcceptance.toObject(), {
    ...POLICY_VERSIONS,
    acceptedAt: new Date('2026-08-26T12:00:00.000Z')
  })
})

test('publishes and records the same immutable policy versions', () => {
  const publicInfo = getPublicPolicyInfo()
  const acceptance = createPolicyAcceptance(new Date('2026-08-26T12:00:00.000Z'))

  assert.deepEqual(publicInfo, { ...POLICY_VERSIONS, effectiveDate: '2026-08-26' })
  assert.deepEqual(acceptance, {
    ...POLICY_VERSIONS,
    acceptedAt: new Date('2026-08-26T12:00:00.000Z')
  })
})

test('schemas enforce the database uniqueness used for duplicate protection', () => {
  const paymentIndexes = Payment.schema.indexes()
  const unlockIndexes = PrintUnlock.schema.indexes()

  assert.ok(paymentIndexes.some(([keys, options]) => (
    keys.userId === 1 && keys['album.providerAlbumId'] === 1 && options.unique === true
  )))
  assert.ok(paymentIndexes.some(([keys, options]) => (
    keys.stripeCheckoutSessionId === 1 && options.unique === true
  )))
  assert.ok(unlockIndexes.some(([keys, options]) => (
    keys.userId === 1 && keys['album.providerAlbumId'] === 1 && options.unique === true
  )))
})
