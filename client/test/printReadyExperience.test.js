import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const editor = readFileSync(new URL('../src/components/PosterEditor/PosterEditor.jsx', import.meta.url), 'utf8')
const modal = readFileSync(new URL('../src/components/PosterEditor/PrintReadyModal.jsx', import.meta.url), 'utf8')
const translations = readFileSync(new URL('../src/i18n/i18n.js', import.meta.url), 'utf8')

test('selecting export options never opens the Print-Ready modal', () => {
  const selectionHandler = editor.match(/const handleExportSelection[\s\S]*?\n    };/)?.[0]
  assert.ok(selectionHandler)
  assert.doesNotMatch(selectionHandler, /setShowPrintReadyModal/)
  assert.equal((editor.match(/setShowPrintReadyModal\(true\)/g) || []).length, 1)
  const unlockHandler = editor.match(/const handlePrintReadyUnlockClick[\s\S]*?\n    };/)?.[0]
  assert.match(unlockHandler, /setShowPrintReadyModal\(true\)/)
})

test('modal remains dismissible by x, backdrop and escape without a cancel action', () => {
  assert.match(modal, /onClose\('x'\)/)
  assert.match(modal, /onClose\('backdrop'\)/)
  assert.match(modal, /onClose\('escape'\)/)
  assert.doesNotMatch(modal, /t\('Cancel'\)/)
})

test('the Print-Ready footer exposes value and price before the unlock action', () => {
  for (const key of [
    'EXPORT_PrintReadyBenefits',
    'EXPORT_PrintReadyReexports',
    'EXPORT_PrintReadyPrice',
    'EXPORT_UnlockPrintReady',
  ]) assert.match(editor, new RegExp(key))
})

test('the paid footer omits the format, size and pixel summary', () => {
  assert.doesNotMatch(editor, /EXPORT_PrintReadySummary/)
  assert.doesNotMatch(translations, /EXPORT_PrintReadySummary/)
  assert.match(translations, /EXPORT_PrintReadyBenefits: "Alta resolução · Sem marca Posterfy"/)
  assert.match(translations, /EXPORT_PrintReadyReexports: "PNG e PDF incluídos · Reexportações ilimitadas"/)
  assert.match(translations, /PRINT_READY_BenefitSizes: "Alta resolução: Normal e Extreme"/)
})

test('format labels stay fixed while size labels follow the complete selection', () => {
  assert.match(editor, /const showsPrintReady = format\.requiresPremium/)
  assert.match(editor, /getExportPolicy\(exportFormat, size\.scale\)\?\.tier === 'print_ready'/)
})
