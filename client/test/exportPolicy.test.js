import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { jsPDF } from 'jspdf'

import {
  getExportPolicy,
  getPreviewWatermarkPolicy,
  hasCleanPrintReadyAccess
} from '../src/utils/exportPolicy.js'

test('allows only the public Free and Print-Ready export matrix', () => {
  assert.deepEqual(getExportPolicy('jpg', 0.6), { tier: 'free', includeWatermark: true })
  assert.deepEqual(getExportPolicy('png', 1), { tier: 'print_ready', includeWatermark: false })
  assert.deepEqual(getExportPolicy('png', 1.5), { tier: 'print_ready', includeWatermark: false })
  assert.deepEqual(getExportPolicy('pdf', 1), { tier: 'print_ready', includeWatermark: false })
  assert.deepEqual(getExportPolicy('pdf', 1.5), { tier: 'print_ready', includeWatermark: false })

  assert.equal(getExportPolicy('jpg', 1), null)
  assert.equal(getExportPolicy('png', 0.6), null)
  assert.equal(getExportPolicy('pdf', 0.3), null)
})

test('removes all preview watermarks when Print-Ready is unlocked', () => {
  assert.deepEqual(getPreviewWatermarkPolicy(true, false), {
    includeWatermark: true,
    includePatternWatermark: true
  })
  assert.deepEqual(getPreviewWatermarkPolicy(false, false), {
    includeWatermark: true,
    includePatternWatermark: false
  })
  assert.deepEqual(getPreviewWatermarkPolicy(true, true), {
    includeWatermark: false,
    includePatternWatermark: false
  })
})

test('recognizes both album purchases and full-account access as clean access', () => {
  assert.equal(hasCleanPrintReadyAccess({
    authorized: true,
    tier: 'print_ready',
    reason: 'unlocked'
  }), true)
  assert.equal(hasCleanPrintReadyAccess({
    authorized: true,
    tier: 'print_ready',
    reason: 'account_grant'
  }), true)
  assert.equal(hasCleanPrintReadyAccess({
    authorized: true,
    tier: 'free',
    reason: 'free_export'
  }), false)
  assert.equal(hasCleanPrintReadyAccess({
    authorized: false,
    tier: 'print_ready',
    reason: 'purchase_required'
  }), false)
})

test('generates a valid A4 PDF from the PNG export path', () => {
  const png = readFileSync(new URL('../src/components/3d/back_transparent.png', import.meta.url))
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4', compress: true })
  pdf.addImage(png, 'PNG', 0, 0, 210, 297, undefined, 'FAST')

  const bytes = new Uint8Array(pdf.output('arraybuffer'))
  assert.equal(new TextDecoder().decode(bytes.slice(0, 4)), '%PDF')
})
