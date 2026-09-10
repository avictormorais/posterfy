import test from 'node:test'
import assert from 'node:assert/strict'
import { scheduleRouteReveal } from '../src/utils/routeTransitionTiming.js'

test('a fast page waits for the minimum before fading and revealing', t => {
  t.mock.timers.enable({ apis: ['setTimeout'] })
  const events = []
  scheduleRouteReveal({ elapsedMs: 50, onExit: () => events.push('exit'), onComplete: () => events.push('ready') })
  t.mock.timers.tick(249)
  assert.deepEqual(events, [])
  t.mock.timers.tick(1)
  assert.deepEqual(events, ['exit'])
  t.mock.timers.tick(179)
  assert.deepEqual(events, ['exit'])
  t.mock.timers.tick(1)
  assert.deepEqual(events, ['exit', 'ready'])
})

test('a slow page does not pay another minimum wait', t => {
  t.mock.timers.enable({ apis: ['setTimeout'] })
  const events = []
  scheduleRouteReveal({ elapsedMs: 4000, onExit: () => events.push('exit'), onComplete: () => events.push('ready') })
  t.mock.timers.tick(0)
  assert.deepEqual(events, ['exit'])
  t.mock.timers.tick(180)
  assert.deepEqual(events, ['exit', 'ready'])
})

test('navigating away cancels both a pending hold and an active exit', t => {
  t.mock.timers.enable({ apis: ['setTimeout'] })
  const events = []
  const callbacks = { onExit: () => events.push('exit'), onComplete: () => events.push('ready') }
  const cancelHold = scheduleRouteReveal({ elapsedMs: 0, ...callbacks })
  cancelHold()
  t.mock.timers.tick(1000)
  assert.deepEqual(events, [])
  const cancelExit = scheduleRouteReveal({ elapsedMs: 500, ...callbacks })
  t.mock.timers.tick(0)
  cancelExit()
  t.mock.timers.tick(1000)
  assert.deepEqual(events, ['exit'])
})
