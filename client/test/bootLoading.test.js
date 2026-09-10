import test from 'node:test'
import assert from 'node:assert/strict'

function installLoader(t, reducedMotion = false) {
  const state = { leaving: false, removed: false, unlocked: false, duration: '' }
  const loader = {
    remove: () => { state.removed = true },
    classList: { add: () => { state.leaving = true } },
    style: { setProperty: (_, value) => { state.duration = value } }
  }
  const globals = {
    document: {
      getElementById: () => loader,
      documentElement: { classList: { remove: () => { state.unlocked = true } } }
    },
    matchMedia: () => ({ matches: reducedMotion })
  }
  for (const [key, value] of Object.entries(globals)) {
    const original = Object.getOwnPropertyDescriptor(globalThis, key)
    Object.defineProperty(globalThis, key, { value, configurable: true })
    t.after(() => {
      if (original) Object.defineProperty(globalThis, key, original)
      else delete globalThis[key]
    })
  }
  return state
}

test('home is released only after the original 2s hold and 1s exit', async t => {
  t.mock.timers.enable({ apis: ['setTimeout'] })
  const state = installLoader(t)
  const { dismissBootLoading } = await import('../src/bootLoading.js?timing')
  const ready = dismissBootLoading()
  assert.equal(dismissBootLoading(), ready, 'StrictMode must share one sequence')
  assert.equal(state.duration, '1000ms')
  t.mock.timers.tick(1999)
  assert.equal(state.leaving, false)
  t.mock.timers.tick(1)
  assert.equal(state.leaving, true)
  assert.equal(state.removed, false)
  t.mock.timers.tick(999)
  assert.equal(state.unlocked, false)
  t.mock.timers.tick(1)
  await ready
  assert.equal(state.removed, true)
  assert.equal(state.unlocked, true)
})

test('reduced motion releases the home without waiting for an animation', async t => {
  const state = installLoader(t, true)
  const { dismissBootLoading } = await import('../src/bootLoading.js?reduced')
  await dismissBootLoading()
  assert.equal(state.leaving, false)
  assert.equal(state.removed, true)
  assert.equal(state.unlocked, true)
})
