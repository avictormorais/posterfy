import test from 'node:test'
import assert from 'node:assert/strict'

import { formatCurrency } from '../src/utils/formatCurrency.js'

const normalizeSpacing = value => value.replace(/\s/g, ' ')

test('formats Print-Ready USD price using the selected interface language', () => {
  const offer = { unitAmount: 199, currency: 'usd' }

  assert.equal(formatCurrency({ ...offer, language: 'en' }), 'US$ 1.99')
  assert.equal(normalizeSpacing(formatCurrency({ ...offer, language: 'pt-BR' })), 'US$ 1,99')
  assert.equal(normalizeSpacing(formatCurrency({ ...offer, language: 'es' })), '1,99 US$')
  assert.equal(formatCurrency({ ...offer, language: 'zh' }), 'US$1.99')
})
