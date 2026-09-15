import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { FiCheck, FiX } from 'react-icons/fi'
import styled, { keyframes } from 'styled-components'
import { formatCurrency } from '../../utils/formatCurrency'

const overlayIn = keyframes`from { opacity: 0; } to { opacity: 1; }`
const dialogIn = keyframes`
  from { opacity: 0; transform: translateY(8px) scale(.99); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`

const Overlay = styled.div`
  position: fixed; inset: 0; z-index: 10000;
  display: grid; place-items: center;
  padding: 16px; overflow-y: auto; box-sizing: border-box;
  background: rgba(10, 10, 10, .7);
  animation: ${overlayIn} 160ms ease-out;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`
const Dialog = styled.div`
  width: min(540px, 100%); max-height: calc(100dvh - 32px); overflow-y: auto;
  box-sizing: border-box; padding: clamp(24px, 5vw, 38px);
  border: 1px solid var(--borderColor); border-radius: 20px;
  background: var(--backgroundColor); color: var(--textColor);
  box-shadow: 0 24px 70px rgba(0, 0, 0, .32);
  animation: ${dialogIn} 190ms cubic-bezier(.2, .75, .3, 1);
  @media (max-width: 560px) { max-height: calc(100dvh - 20px); padding: 24px 20px; border-radius: 16px; }
  @media (prefers-reduced-motion: reduce) { animation: none; }
`
const Header = styled.header`display: flex; align-items: flex-start; gap: 16px;`
const Heading = styled.div`flex: 1; min-width: 0;`
const Title = styled.h2`
  margin: 0; font-size: clamp(1.55rem, 4vw, 2rem); line-height: 1.1; letter-spacing: -.04em;
`
const Album = styled.p`
  margin: 8px 0 0; color: var(--textSecondary); font-size: .9rem; font-weight: 600; overflow-wrap: anywhere;
`
const CloseButton = styled.button`
  display: grid; place-items: center; flex: 0 0 34px; width: 34px; height: 34px; padding: 0;
  border: 1px solid var(--borderColor); border-radius: 50%; background: transparent;
  color: var(--textColor); cursor: pointer;
  &:hover:not(:disabled) { border-color: var(--textSecondary); }
  &:focus-visible { outline: 2px solid var(--AccentColor); outline-offset: 2px; }
  &:disabled { cursor: not-allowed; opacity: .45; }
`
const Benefits = styled.ul`
  display: grid; gap: 11px; margin: 28px 0; padding: 0; list-style: none;
`
const Benefit = styled.li`
  display: flex; align-items: center; gap: 10px;
  color: var(--textColor); font-size: .88rem; line-height: 1.4;
  svg { flex-shrink: 0; color: var(--AccentColor); }
`
const Price = styled.strong`
  display: block; color: var(--textColor); font-size: 2rem; line-height: 1; letter-spacing: -.04em;
`
const PaymentSummary = styled.p`
  margin: 8px 0 20px; color: var(--textSecondary); font-size: .78rem; font-weight: 600;
`
const ErrorText = styled.p`
  margin: 0 0 14px; padding: 10px 12px; border-radius: 8px;
  background: rgba(190, 40, 40, .12); color: #e45757; font-size: .8rem;
`
const ConfirmButton = styled.button`
  width: 100%; min-height: 46px; padding: 11px 20px;
  border: 1px solid var(--AccentColor); border-radius: 999px;
  background: var(--AccentColor); color: #fff; font: inherit; font-size: .86rem; font-weight: 750;
  cursor: pointer;
  &:hover:not(:disabled) { transform: translateY(-1px); }
  &:focus-visible { outline: 2px solid var(--textColor); outline-offset: 3px; }
  &:disabled { cursor: not-allowed; opacity: .5; }
`
const Legal = styled.p`
  margin: 18px 0 0; color: var(--textSecondary); font-size: .66rem; line-height: 1.55; text-align: center;
  a { color: inherit; text-underline-offset: 3px; }
  a:hover, a:focus-visible { color: var(--AccentColor); }
`
const PolicyVersions = styled.p`
  margin: 5px 0 0; color: var(--textSecondary); font-size: .6rem; line-height: 1.4; text-align: center; opacity: .72;
`

const benefitKeys = [
  'PRINT_READY_BenefitFormats',
  'PRINT_READY_BenefitSizes',
  'PRINT_READY_BenefitWatermark',
  'PRINT_READY_BenefitReexports',
]

export default function PrintReadyModal({ albumName, offer, loading, error, locale, onClose, onConfirm, t }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const confirmRef = useRef(null)

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow
    const previousHtmlOverflow = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    window.dispatchEvent(new CustomEvent('posterfy:scroll-lock', { detail: { locked: true } }))
    return () => {
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousHtmlOverflow
      window.dispatchEvent(new CustomEvent('posterfy:scroll-lock', { detail: { locked: false } }))
    }
  }, [])

  useEffect(() => {
    const preferredFocus = confirmRef.current?.disabled ? closeRef.current : confirmRef.current
    preferredFocus?.focus()
    const handleKeyDown = event => {
      if (event.key === 'Escape' && !loading) { onClose('escape'); return }
      if (event.key !== 'Tab') return
      const focusable = dialogRef.current?.querySelectorAll('a[href], button:not(:disabled), [tabindex]:not([tabindex="-1"])')
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [loading, onClose])

  const price = formatCurrency({
    unitAmount: offer?.unitAmount || 199,
    currency: offer?.currency || 'usd',
    language: locale,
  })

  return createPortal(
    <Overlay onMouseDown={event => event.target === event.currentTarget && !loading && onClose('backdrop')}>
      <Dialog ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="print-ready-title">
        <Header>
          <Heading>
            <Title id="print-ready-title">{t('PRINT_READY_Headline')}</Title>
            <Album>{albumName}</Album>
          </Heading>
          <CloseButton ref={closeRef} type="button" onClick={() => onClose('x')} disabled={loading} aria-label={t('PRINT_READY_Close')}>
            <FiX aria-hidden="true" />
          </CloseButton>
        </Header>

        <Benefits aria-label={t('PRINT_READY_BenefitsLabel')}>
          {benefitKeys.map(key => <Benefit key={key}><FiCheck aria-hidden="true" />{t(key)}</Benefit>)}
        </Benefits>

        <Price>{price}</Price>
        <PaymentSummary>{t('PRINT_READY_PaymentSummary')}</PaymentSummary>
        {error && <ErrorText role="alert">{error}</ErrorText>}
        <ConfirmButton ref={confirmRef} type="button" onClick={onConfirm} disabled={loading || offer?.enabled !== true}>
          {loading ? t('PRINT_READY_StartingCheckout') : t('EXPORT_UnlockPrintReady', { price })}
        </ConfirmButton>

        <Legal>
          {t('PRINT_READY_LegalPrefix')} <Link to="/terms/">{t('FooterTerms')}</Link>{' '}
          {t('PRINT_READY_LegalAcknowledge')} <Link to="/refund/">{t('FooterRefund')}</Link>{' '}
          {t('PRINT_READY_LegalAnd')} <Link to="/privacy/">{t('FooterPrivacy')}</Link>.
        </Legal>
        {offer?.policies && <PolicyVersions>{t('PRINT_READY_PolicyVersions', {
          terms: offer.policies.termsVersion,
          refund: offer.policies.refundPolicyVersion,
          privacy: offer.policies.privacyPolicyVersion,
        })}</PolicyVersions>}
      </Dialog>
    </Overlay>,
    document.body
  )
}
