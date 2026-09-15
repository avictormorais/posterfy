import test from 'node:test'
import assert from 'node:assert/strict'
import {
  PRINT_READY_FLOW_VERSION,
  trackPrintReadyBeginCheckout,
  trackPrintReadyModalClose,
  trackPrintReadyModalView,
  trackPrintReadyOfferView,
  trackPrintReadyOptionSelected,
  trackPrintReadyPurchase,
  trackPrintReadyUnlockClick,
  trackPrintReadyView,
} from '../src/services/analytics.js'

test('emits the transparent Print-Ready funnel with the required properties', () => {
  const events = []
  globalThis.window = { gtag: (...args) => events.push(args) }

  trackPrintReadyView('album-1', 'editor')
  trackPrintReadyOptionSelected('album-1', 'png', 'medium')
  trackPrintReadyOfferView('album-1')
  trackPrintReadyUnlockClick('album-1', 'png', 'medium')
  trackPrintReadyModalView('album-1')
  trackPrintReadyModalClose('album-1', 'escape')
  trackPrintReadyBeginCheckout('album-1', 1.99, 'USD')
  trackPrintReadyPurchase({
    paymentId: 'payment-1',
    albumId: 'album-1',
    value: 1.99,
    currency: 'usd',
    purchaseNumber: 1,
  })

  const byName = new Map(events.map(([, name, details]) => [name, details]))
  const versionedEvents = [
    'export_options_view',
    'print_ready_option_selected',
    'print_ready_offer_view',
    'print_ready_unlock_click',
    'print_ready_modal_view',
    'print_ready_modal_close',
    'checkout_started',
    'purchase',
  ]

  assert.equal(PRINT_READY_FLOW_VERSION, 'v2')
  for (const eventName of versionedEvents) {
    assert.equal(events.filter(([, name]) => name === eventName).length, 1)
    assert.equal(byName.get(eventName).print_ready_flow_version, 'v2')
  }
  assert.equal(byName.get('export_options_view').source, 'editor')
  assert.deepEqual(
    { format: byName.get('print_ready_option_selected').format, size: byName.get('print_ready_option_selected').size },
    { format: 'png', size: 'medium' }
  )
  assert.equal(byName.get('print_ready_offer_view').album_id, 'album-1')
  assert.equal(byName.get('print_ready_unlock_click').format, 'png')
  assert.equal(byName.get('print_ready_modal_view').album_id, 'album-1')
  assert.equal(byName.get('print_ready_modal_close').method, 'escape')
  assert.equal(byName.get('checkout_started').value, 1.99)
  assert.equal(byName.get('begin_checkout').value, 1.99)
  assert.equal(byName.get('purchase').transaction_id, 'payment-1')
})
