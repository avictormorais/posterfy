export const POLICY_VERSIONS = Object.freeze({
  termsVersion: '1.0',
  refundPolicyVersion: '1.0',
  privacyPolicyVersion: '1.0'
})

export const POLICY_EFFECTIVE_DATE = '2026-08-26'

export const getPublicPolicyInfo = () => ({
  ...POLICY_VERSIONS,
  effectiveDate: POLICY_EFFECTIVE_DATE
})

export const createPolicyAcceptance = (acceptedAt = new Date()) => ({
  ...POLICY_VERSIONS,
  acceptedAt
})
