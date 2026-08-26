import test from 'node:test'
import assert from 'node:assert/strict'

import {
  PENDING_FLOW_KEY,
  clearPendingOAuthFlow,
  clearPendingFlow,
  getPendingFlowReturnUrl,
  readPendingOAuthFlow,
  readPendingFlow,
  rememberPendingOAuthFlow,
  savePendingFlow,
  updatePendingFlow
} from '../src/utils/pendingFlow.js'

class MemoryStorage {
  constructor() {
    this.values = new Map()
  }

  getItem(key) {
    return this.values.get(key) ?? null
  }

  setItem(key, value) {
    this.values.set(key, String(value))
  }

  removeItem(key) {
    this.values.delete(key)
  }

  clear() {
    this.values.clear()
  }
}

const editor = {
  albumId: '4aawyAB9vmqN3uQ7FjRGTy',
  posterJson: { albumName: 'Global Access', backgroundColor: '#111111' }
}

test.beforeEach(() => {
  globalThis.localStorage = new MemoryStorage()
  globalThis.sessionStorage = new MemoryStorage()
  globalThis.window = { location: { origin: 'https://posterfy.pics' } }
})

test('preserves and restores a publish action through OAuth', () => {
  const flow = savePendingFlow({
    reason: 'login',
    returnTo: '/',
    editor,
    action: { type: 'publish', visibility: 'private' }
  })

  assert.deepEqual(readPendingFlow(), flow)
  assert.equal(
    getPendingFlowReturnUrl(flow),
    `https://posterfy.pics/?resume=${encodeURIComponent(flow.flowId)}`
  )
})

test('keeps the same flow while checkout data is attached', () => {
  const flow = savePendingFlow({
    reason: 'login',
    returnTo: '/p/507f1f77bcf86cd799439011',
    editor,
    action: { type: 'print_ready_export', format: 'pdf', scale: 1.5 }
  })

  const updated = updatePendingFlow(flow.flowId, {
    reason: 'checkout',
    checkout: { sessionId: 'cs_test_123' }
  })

  assert.equal(updated.flowId, flow.flowId)
  assert.equal(updated.checkout.sessionId, 'cs_test_123')
  assert.equal(updated.action.format, 'pdf')
  assert.equal(clearPendingFlow('another-flow'), false)
  assert.equal(clearPendingFlow(flow.flowId), true)
  assert.equal(readPendingFlow(), null)
})

test('recovers the intended poster when OAuth falls back to the login route', () => {
  const flow = savePendingFlow({
    reason: 'login',
    returnTo: '/p/507f1f77bcf86cd799439011',
    editor,
    action: { type: 'print_ready_export', format: 'png', scale: 1 }
  })

  assert.equal(rememberPendingOAuthFlow(flow.flowId), true)
  assert.deepEqual(readPendingOAuthFlow(), flow)
  assert.equal(clearPendingOAuthFlow(flow.flowId), true)
  assert.equal(readPendingOAuthFlow(), null)
})

test('rejects expired, corrupt, unsafe, and unsupported flows', () => {
  const base = {
    version: 1,
    flowId: 'expired',
    createdAt: Date.now() - (25 * 60 * 60 * 1000),
    reason: 'login',
    returnTo: '/',
    editor,
    action: { type: 'publish', visibility: 'public' }
  }

  localStorage.setItem(PENDING_FLOW_KEY, JSON.stringify(base))
  assert.equal(readPendingFlow(), null)

  localStorage.setItem(PENDING_FLOW_KEY, '{not-json')
  assert.equal(readPendingFlow(), null)

  assert.throws(() => savePendingFlow({
    reason: 'checkout',
    returnTo: 'https://attacker.example',
    editor,
    action: { type: 'print_ready_export', format: 'jpg', scale: 2 }
  }))
})
