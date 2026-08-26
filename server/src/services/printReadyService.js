import Stripe from 'stripe'
import Payment from '../models/payment.js'
import {
  createPolicyAcceptance,
  getPublicPolicyInfo,
  POLICY_VERSIONS
} from '../config/policyVersions.js'
import PrintUnlock from '../models/printUnlock.js'
import PosterService from './posterService.js'
import User from '../models/user.js'
import { normalizeAlbumMetadata } from '../utils/albumMetadata.js'

const PRICE_CENTS = 199
const OFFER_CACHE_MS = 5 * 60 * 1000
const ALBUM_ID_PATTERN = /^[A-Za-z0-9]{22}$/
const FLOW_ID_PATTERN = /^[A-Za-z0-9-]{8,100}$/

let stripeClient
let cachedOffer
let spotifyToken

const serviceError = (message, status = 500, code = 'PRINT_READY_ERROR') => {
  const error = new Error(message)
  error.status = status
  error.code = code
  return error
}

const getStripe = () => {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw serviceError('Print-Ready checkout is not configured', 503, 'PRINT_READY_DISABLED')
  }
  if (!stripeClient) stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY)
  return stripeClient
}

const isLiveKey = () => process.env.STRIPE_SECRET_KEY?.startsWith('sk_live_') || false

export const isSpotifyAlbumId = (value) => typeof value === 'string' && ALBUM_ID_PATTERN.test(value)

export const sanitizeReturnPath = (value) => {
  if (value === '/') return '/'
  if (typeof value === 'string' && /^\/p\/[a-f\d]{24}$/i.test(value)) return value
  return '/'
}

export const getRefundState = (amountRefunded, amountTotal, status = 'succeeded') => {
  if (status === 'pending') return { refundStatus: 'pending', paymentStatus: null }
  if (status === 'failed' || status === 'canceled') {
    return { refundStatus: 'failed', paymentStatus: null }
  }
  if (!amountRefunded) return { refundStatus: 'none', paymentStatus: null }
  if (amountTotal > 0 && amountRefunded >= amountTotal) {
    return { refundStatus: 'full', paymentStatus: 'refunded' }
  }
  return { refundStatus: 'partial', paymentStatus: 'partially_refunded' }
}

export const isConfirmedPaymentStatus = (status) => (
  ['paid', 'partially_refunded', 'refunded'].includes(status)
)

const getOffer = async () => {
  const enabled = process.env.PRINT_READY_ENABLED !== 'false' && Boolean(
    process.env.STRIPE_SECRET_KEY &&
    process.env.STRIPE_WEBHOOK_SECRET &&
    process.env.STRIPE_PRINT_READY_PRICE_ID
  )

  if (!enabled) {
    return {
      enabled: false,
      unitAmount: PRICE_CENTS,
      currency: 'usd',
      policies: getPublicPolicyInfo()
    }
  }

  if (cachedOffer && Date.now() - cachedOffer.cachedAt < OFFER_CACHE_MS) return cachedOffer

  const price = await getStripe().prices.retrieve(process.env.STRIPE_PRINT_READY_PRICE_ID)
  if (!price.active || price.type !== 'one_time' || price.currency !== 'usd' || price.unit_amount !== PRICE_CENTS) {
    throw serviceError('Print-Ready Price is misconfigured', 503, 'INVALID_PRICE')
  }
  if (price.livemode !== isLiveKey()) {
    throw serviceError('Stripe key and Price modes do not match', 503, 'STRIPE_MODE_MISMATCH')
  }

  cachedOffer = {
    enabled: true,
    priceId: price.id,
    unitAmount: price.unit_amount,
    currency: price.currency,
    livemode: price.livemode,
    policies: getPublicPolicyInfo(),
    cachedAt: Date.now()
  }
  return cachedOffer
}

const getSpotifyToken = async () => {
  if (spotifyToken && spotifyToken.expiresAt > Date.now() + 30_000) return spotifyToken.value
  if (!process.env.SPOTIFY_CLIENT_ID || !process.env.SPOTIFY_CLIENT_SECRET) {
    throw serviceError('Album validation is unavailable', 503, 'ALBUM_VALIDATION_UNAVAILABLE')
  }

  const credentials = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  })
  if (!response.ok) throw serviceError('Album validation is unavailable', 503, 'ALBUM_VALIDATION_UNAVAILABLE')

  const data = await response.json()
  spotifyToken = {
    value: data.access_token,
    expiresAt: Date.now() + Math.max((data.expires_in || 3600) - 60, 60) * 1000
  }
  return spotifyToken.value
}

const fetchSpotifyAlbum = async (albumId) => {
  const token = await getSpotifyToken()
  const response = await fetch(`https://api.spotify.com/v1/albums/${encodeURIComponent(albumId)}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  if (response.status === 404) throw serviceError('Album not found', 404, 'ALBUM_NOT_FOUND')
  if (!response.ok) throw serviceError('Album validation is unavailable', 503, 'ALBUM_VALIDATION_UNAVAILABLE')

  const album = await response.json()
  return normalizeAlbumMetadata({
    providerAlbumId: album.id,
    albumName: album.name,
    artistNames: album.artists?.map(artist => artist.name),
    releaseDate: album.release_date,
    trackCount: album.total_tracks,
    externalIds: album.external_ids
  })
}

const metadataFromPoster = (poster) => normalizeAlbumMetadata({
  providerAlbumId: poster.providerAlbumId || poster.spotifyAlbumId,
  albumName: poster.albumNameOriginal || poster.albumName,
  artistNames: poster.artistNames?.length
    ? poster.artistNames
    : [poster.artistsNameOriginal || poster.artistsName],
  releaseDate: poster.releaseDate,
  trackCount: poster.trackCount,
  externalIds: poster.externalIds
})

const resolveAlbum = async ({ albumId, posterId, userId, isAdmin = false }) => {
  if (!isSpotifyAlbumId(albumId)) throw serviceError('Invalid album ID', 400, 'INVALID_ALBUM_ID')

  if (!posterId) return fetchSpotifyAlbum(albumId)

  const poster = await PosterService.findById(posterId, userId, isAdmin)
  if (!poster) throw serviceError('Poster not found', 404, 'POSTER_NOT_FOUND')
  if (poster.spotifyAlbumId !== albumId) {
    throw serviceError('Poster and album do not match', 400, 'ALBUM_MISMATCH')
  }
  return metadataFromPoster(poster)
}

const getUnlock = (userId, albumId) => PrintUnlock.findOne({
  userId,
  'album.provider': 'spotify',
  'album.providerAlbumId': albumId
})

const checkoutUrls = ({ returnPath, flowId }) => {
  const clientUrl = process.env.CLIENT_URL
  if (!clientUrl) throw serviceError('CLIENT_URL is not configured', 503, 'PRINT_READY_DISABLED')
  if (!FLOW_ID_PATTERN.test(flowId || '')) throw serviceError('Invalid flow ID', 400, 'INVALID_FLOW_ID')

  const success = new URL(sanitizeReturnPath(returnPath), clientUrl)
  success.searchParams.set('print_ready', 'success')
  success.searchParams.set('flow', flowId)
  success.searchParams.set('session_id', '__CHECKOUT_SESSION_ID__')

  const cancel = new URL(sanitizeReturnPath(returnPath), clientUrl)
  cancel.searchParams.set('print_ready', 'cancel')
  cancel.searchParams.set('flow', flowId)

  return {
    successUrl: success.toString().replace('__CHECKOUT_SESSION_ID__', '{CHECKOUT_SESSION_ID}'),
    cancelUrl: cancel.toString()
  }
}

const sessionPaymentIntentId = (session) => (
  typeof session.payment_intent === 'string' ? session.payment_intent : session.payment_intent?.id || null
)

const sessionChargeId = (session) => {
  const intent = typeof session.payment_intent === 'object' ? session.payment_intent : null
  return typeof intent?.latest_charge === 'string' ? intent.latest_charge : intent?.latest_charge?.id || null
}

const verifyPaidSession = async (sessionId) => {
  const session = await getStripe().checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'payment_intent.latest_charge']
  })
  const paymentId = session.metadata?.paymentId
  const payment = paymentId
    ? await Payment.findOne({ _id: paymentId, stripeCheckoutSessionId: session.id })
    : null

  if (!payment) throw serviceError('Payment record not found', 500, 'PAYMENT_NOT_FOUND')
  if (session.mode !== 'payment' || session.livemode !== payment.livemode) {
    throw serviceError('Checkout Session validation failed', 400, 'INVALID_SESSION')
  }

  const line = session.line_items?.data?.[0]
  if (
    !line ||
    line.price?.id !== payment.stripePriceId ||
    line.quantity !== 1 ||
    session.currency !== payment.currency ||
    session.amount_total !== payment.amountTotal
  ) {
    throw serviceError('Checkout Session totals do not match', 400, 'INVALID_SESSION')
  }

  return { payment, session }
}

const fulfillSession = async (sessionId, eventId) => {
  const { payment, session } = await verifyPaidSession(sessionId)
  if (session.payment_status !== 'paid') return payment

  const paymentIntentId = sessionPaymentIntentId(session)
  const chargeId = sessionChargeId(session)
  const userExists = payment.userId && await User.exists({ _id: payment.userId, status: 'active' })

  if (userExists && !payment.fulfilledAt) {
    await PrintUnlock.findOneAndUpdate(
      {
        userId: payment.userId,
        'album.provider': 'spotify',
        'album.providerAlbumId': payment.album.providerAlbumId
      },
      {
        $setOnInsert: {
          userId: payment.userId,
          album: payment.album.toObject(),
          active: true,
          source: 'payment',
          paymentId: payment._id
        }
      },
      { upsert: true }
    )
  }

  await Payment.updateOne(
    { _id: payment._id, paymentStatus: { $nin: ['partially_refunded', 'refunded'] } },
    { $set: { paymentStatus: 'paid' } }
  )
  await Payment.updateOne(
    { _id: payment._id },
    {
      $set: {
        stripePaymentIntentId: paymentIntentId,
        stripeChargeId: chargeId,
        checkoutStatus: 'complete',
        checkoutOpen: false,
        fulfilledAt: payment.fulfilledAt || new Date(),
        lastStripeEventId: eventId
      }
    }
  )
  return payment
}

const findPaymentForStripeObject = async (object) => {
  const paymentIntentId = typeof object.payment_intent === 'string'
    ? object.payment_intent
    : object.payment_intent?.id
  const chargeId = typeof object.charge === 'string'
    ? object.charge
    : object.charge?.id || object.id

  const clauses = []
  if (paymentIntentId) clauses.push({ stripePaymentIntentId: paymentIntentId })
  if (chargeId) clauses.push({ stripeChargeId: chargeId })
  if (object.metadata?.paymentId) clauses.push({ _id: object.metadata.paymentId })
  if (clauses.length) {
    const payment = await Payment.findOne({ $or: clauses })
    if (payment) return payment
  }

  if (paymentIntentId) {
    const intent = await getStripe().paymentIntents.retrieve(paymentIntentId)
    if (intent.metadata?.paymentId) return Payment.findById(intent.metadata.paymentId)
  }
  return null
}

const updateRefund = async (refund, eventId) => {
  const payment = await findPaymentForStripeObject(refund)
  if (!payment) return

  let amountRefunded = payment.amountRefunded
  if (refund.object === 'charge') amountRefunded = refund.amount_refunded || 0
  else if (refund.charge) {
    const charge = await getStripe().charges.retrieve(
      typeof refund.charge === 'string' ? refund.charge : refund.charge.id
    )
    amountRefunded = charge.amount_refunded || amountRefunded
  }

  const state = getRefundState(amountRefunded, payment.amountTotal, refund.status)
  const update = {
    amountRefunded,
    refundStatus: state.refundStatus,
    lastStripeEventId: eventId
  }
  if (state.paymentStatus) update.paymentStatus = state.paymentStatus
  await Payment.updateOne({ _id: payment._id }, { $set: update })
}

const updateDispute = async (dispute, eventId) => {
  const payment = await findPaymentForStripeObject(dispute)
  if (!payment) return
  await Payment.updateOne({ _id: payment._id }, {
    $set: {
      disputeStatus: dispute.status || 'open',
      disputeReason: dispute.reason || '',
      lastStripeEventId: eventId
    }
  })
}

class PrintReadyService {
  getOffer() {
    return getOffer()
  }

  async getAlbumStatus(userId, albumId) {
    if (!isSpotifyAlbumId(albumId)) throw serviceError('Invalid album ID', 400, 'INVALID_ALBUM_ID')
    const unlock = await getUnlock(userId, albumId).lean()
    return {
      unlocked: Boolean(unlock?.active),
      revoked: Boolean(unlock && !unlock.active),
      unlock: unlock || null
    }
  }

  async createCheckout({ userId, albumId, posterId, flowId, returnPath, isAdmin = false }) {
    const existingUnlock = await getUnlock(userId, albumId)
    if (existingUnlock?.active) return { status: 'unlocked', unlock: existingUnlock }
    if (existingUnlock && !existingUnlock.active) {
      throw serviceError('This unlock was revoked. Contact support.', 409, 'UNLOCK_REVOKED')
    }

    const [offer, album] = await Promise.all([
      getOffer(),
      resolveAlbum({ albumId, posterId, userId, isAdmin })
    ])
    if (!offer.enabled) throw serviceError('Print-Ready checkout is not configured', 503, 'PRINT_READY_DISABLED')

    let payment = await Payment.findOne({
      userId,
      'album.provider': 'spotify',
      'album.providerAlbumId': albumId,
      checkoutOpen: true
    }).select('+stripeCheckoutUrl')

    if (payment?.checkoutExpiresAt && payment.checkoutExpiresAt <= new Date()) {
      await Payment.updateOne({ _id: payment._id }, { $set: { checkoutOpen: false, checkoutStatus: 'expired' } })
      payment = null
    }

    if (payment && (
      payment.stripePriceId !== offer.priceId ||
      payment.amountTotal !== offer.unitAmount ||
      payment.currency !== offer.currency ||
      payment.livemode !== offer.livemode ||
      payment.policyAcceptance?.termsVersion !== POLICY_VERSIONS.termsVersion ||
      payment.policyAcceptance?.refundPolicyVersion !== POLICY_VERSIONS.refundPolicyVersion ||
      payment.policyAcceptance?.privacyPolicyVersion !== POLICY_VERSIONS.privacyPolicyVersion
    )) {
      await Payment.updateOne(
        { _id: payment._id },
        { $set: { checkoutOpen: false, checkoutStatus: 'expired' } }
      )
      payment = null
    }

    if (!payment) {
      try {
        payment = await Payment.create({
          userId,
          album,
          stripePriceId: offer.priceId,
          amountSubtotal: offer.unitAmount,
          amountTotal: offer.unitAmount,
          currency: offer.currency,
          livemode: offer.livemode,
          policyAcceptance: createPolicyAcceptance(),
          checkoutStatus: 'creating',
          checkoutOpen: true
        })
      } catch (error) {
        if (error?.code !== 11000) throw error
        payment = await Payment.findOne({
          userId,
          'album.provider': 'spotify',
          'album.providerAlbumId': albumId,
          checkoutOpen: true
        }).select('+stripeCheckoutUrl')
      }
    }

    if (payment?.stripeCheckoutSessionId && payment.stripeCheckoutUrl) {
      return { status: 'checkout', sessionId: payment.stripeCheckoutSessionId, url: payment.stripeCheckoutUrl }
    }

    const { successUrl, cancelUrl } = checkoutUrls({ returnPath, flowId })
    const stripe = getStripe()
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: offer.priceId, quantity: 1 }],
      client_reference_id: payment._id.toString(),
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        paymentId: payment._id.toString(),
        userId: userId.toString(),
        albumId
      },
      payment_intent_data: {
        metadata: {
          paymentId: payment._id.toString(),
          userId: userId.toString(),
          albumId
        }
      }
    }, { idempotencyKey: `print-ready-${payment._id}` })

    await Payment.updateOne({ _id: payment._id }, {
      $set: {
        stripeCheckoutSessionId: session.id,
        stripeCheckoutUrl: session.url,
        checkoutStatus: 'open',
        checkoutExpiresAt: session.expires_at ? new Date(session.expires_at * 1000) : null
      }
    })

    return { status: 'checkout', sessionId: session.id, url: session.url }
  }

  async getCheckoutStatus(userId, sessionId) {
    const payment = await Payment.findOne({ stripeCheckoutSessionId: sessionId, userId }).lean()
    if (!payment) throw serviceError('Checkout not found', 404, 'CHECKOUT_NOT_FOUND')
    const unlock = await getUnlock(userId, payment.album.providerAlbumId).lean()

    let status = 'confirming'
    if (unlock?.active) status = 'unlocked'
    else if (unlock && !unlock.active) status = 'revoked'
    else if (payment.checkoutStatus === 'expired') status = 'expired'
    else if (payment.paymentStatus === 'failed' || payment.checkoutStatus === 'failed') status = 'failed'

    const paymentConfirmed = isConfirmedPaymentStatus(payment.paymentStatus)
    const purchaseNumber = status === 'unlocked' && paymentConfirmed
      ? await Payment.countDocuments({ userId, fulfilledAt: { $ne: null } })
      : null

    return {
      status,
      sessionId,
      paymentId: payment._id,
      amount: payment.amountTotal,
      currency: payment.currency,
      paymentConfirmed,
      purchaseNumber
    }
  }

  constructEvent(body, signature) {
    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      throw serviceError('Stripe webhook is not configured', 503, 'PRINT_READY_DISABLED')
    }
    return getStripe().webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET)
  }

  async processEvent(event) {
    const object = event.data.object

    if (event.type === 'checkout.session.completed') {
      if (object.payment_status === 'paid') await fulfillSession(object.id, event.id)
      else {
        await Payment.updateOne({ stripeCheckoutSessionId: object.id, paymentStatus: 'unpaid' }, {
          $set: { checkoutStatus: 'complete', lastStripeEventId: event.id }
        })
      }
      return
    }

    if (event.type === 'checkout.session.async_payment_succeeded') {
      await fulfillSession(object.id, event.id)
      return
    }

    if (event.type === 'checkout.session.async_payment_failed') {
      await Payment.updateOne({ stripeCheckoutSessionId: object.id, paymentStatus: 'unpaid' }, {
        $set: { checkoutStatus: 'failed', paymentStatus: 'failed', checkoutOpen: false, lastStripeEventId: event.id }
      })
      return
    }

    if (event.type === 'checkout.session.expired') {
      await Payment.updateOne({ stripeCheckoutSessionId: object.id, paymentStatus: 'unpaid' }, {
        $set: { checkoutStatus: 'expired', checkoutOpen: false, lastStripeEventId: event.id }
      })
      return
    }

    if (event.type === 'charge.refunded' || event.type.startsWith('refund.')) {
      await updateRefund(object, event.id)
      return
    }

    if (event.type.startsWith('charge.dispute.')) await updateDispute(object, event.id)
  }

  resolveAlbum(input) {
    return resolveAlbum(input)
  }
}

export default new PrintReadyService()
