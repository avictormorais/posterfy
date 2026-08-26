import test from 'node:test'
import assert from 'node:assert/strict'

import { POLICY_INFO } from '../src/config/policies.js'
import { LEGAL_CONTENT } from '../src/pages/Legal/legalContent.js'

const languages = ['en', 'pt', 'es', 'zh']
const pageTypes = ['terms', 'privacy', 'refund', 'support']

test('all supported languages contain the same material legal sections', () => {
  for (const pageType of pageTypes) {
    const expectedSections = LEGAL_CONTENT.en[pageType].sections.map(section => section.id)

    for (const language of languages) {
      const page = LEGAL_CONTENT[language][pageType]
      assert.ok(page.title)
      assert.ok(page.intro)
      assert.deepEqual(page.sections.map(section => section.id), expectedSections)
      assert.ok(page.sections.every(section => section.paragraphs.length > 0))
    }
  }
})

test('public legal copy avoids implementation-specific terms', () => {
  const publicCopy = JSON.stringify(LEGAL_CONTENT)
  const internalTerms = [
    'Spotify Album ID',
    'MongoDB',
    'JWT',
    'PaymentIntent',
    'webhook',
    'AdminLog',
    'localStorage',
    'flowId'
  ]

  for (const internalTerm of internalTerms) {
    assert.equal(publicCopy.includes(internalTerm), false, internalTerm)
  }
})

test('versioned policies expose complete v1.0 metadata', () => {
  for (const policy of Object.values(POLICY_INFO)) {
    assert.equal(policy.version, '1.0')
    assert.equal(policy.effectiveDate, '2026-08-26')
    assert.equal(policy.lastUpdated, '2026-08-26')
  }
})
