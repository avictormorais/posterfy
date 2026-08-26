import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { FiFileText, FiMaximize, FiShield, FiX } from 'react-icons/fi'
import styled, { keyframes } from 'styled-components'
import { formatCurrency } from '../../utils/formatCurrency'

const overlayIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const dialogIn = keyframes`
  from { opacity: 0; transform: translateY(8px) scale(0.99); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: grid;
  place-items: center;
  width: 100vw;
  min-height: 100dvh;
  padding: 16px;
  overflow-y: auto;
  box-sizing: border-box;
  overscroll-behavior: contain;
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(7px);
  animation: ${overlayIn} 160ms ease-out;

  @media (max-width: 560px) {
    padding: 10px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

const Dialog = styled.div`
  --modal-gutter: clamp(24px, 4vw, 44px);

  width: min(980px, 100%);
  max-height: calc(100dvh - 32px);
  overflow-y: auto;
  box-sizing: border-box;
  border: 1px solid var(--borderColor);
  border-radius: 24px;
  background: var(--backgroundColor);
  color: var(--textColor);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.32);
  animation: ${dialogIn} 190ms cubic-bezier(0.2, 0.75, 0.3, 1);

  @media (max-width: 560px) {
    --modal-gutter: 20px;
    max-height: calc(100dvh - 20px);
    border-radius: 20px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

const Header = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding: 28px var(--modal-gutter) 22px;

  @media (max-width: 560px) {
    gap: 12px;
    padding-top: 22px;
    padding-bottom: 18px;
  }
`

const Heading = styled.div`
  flex: 1;
  min-width: 0;
`

const Title = styled.h2`
  margin: 0 0 8px;
  font-size: clamp(1.8rem, 3.6vw, 2.65rem);
  line-height: 1.04;
  letter-spacing: -0.05em;
  overflow-wrap: anywhere;
`

const Intro = styled.p`
  max-width: 680px;
  margin: 0;
  color: var(--textSecondary);
  font-size: 0.9rem;
  line-height: 1.5;
`

const CloseButton = styled.button`
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  margin-top: 0;
  padding: 0;
  border: 1px solid var(--borderColor);
  border-radius: 50%;
  background: transparent;
  color: var(--textColor);
  cursor: pointer;
  transition: background 150ms ease, border-color 150ms ease, transform 150ms ease;

  &:hover:not(:disabled) {
    border-color: var(--textSecondary);
    background: color-mix(in srgb, var(--textColor) 5%, transparent);
    transform: scale(1.03);
  }

  &:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--AccentColor) 34%, transparent);
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }
`

const Body = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.28fr) minmax(300px, 0.96fr);
  gap: clamp(34px, 5vw, 58px);
  align-items: start;
  padding: 24px var(--modal-gutter) 26px;
  border-top: 1px solid var(--borderColor);

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  @media (max-width: 560px) {
    padding-top: 20px;
    padding-bottom: 22px;
  }
`

const Benefits = styled.ul`
  display: grid;
  gap: 18px;
  margin: 0;
  padding: 0;
  list-style: none;
`

const Benefit = styled.li`
  display: grid;
  grid-template-columns: 40px minmax(0, 1fr);
  gap: 13px;
  align-items: start;
`

const BenefitIcon = styled.span`
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border: 1px solid color-mix(in srgb, var(--AccentColor) 18%, var(--borderColor));
  border-radius: 10px;
  background: color-mix(in srgb, var(--AccentColor) 5%, transparent);
  color: var(--AccentColor);
  font-size: 1.5rem;
  margin-left: 2px;
`

const BenefitText = styled.div`
  padding-top: 5px;
  margin-left: 10px;

  h3 {
    margin: 0 0 0px;
    font-size: 0.92rem;
    line-height: 1.35;
  }

  p {
    max-width: 440px;
    margin: 0;
    color: var(--textSecondary);
    font-size: 0.81rem;
    line-height: 1.45;
  }
`

const PurchasePanel = styled.section`
  display: grid;
  gap: 16px;
`

const Price = styled.strong`
  display: block;
  color: var(--AccentColor);
  font-size: clamp(2.5rem, 5vw, 3.2rem);
  line-height: 0.95;
  letter-spacing: -0.055em;
`

const PaymentSummary = styled.p`
  margin: -5px 0 1px;
  color: var(--textSecondary);
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1.4;
`

const UnlockNote = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 13px 14px;
  border: 1px solid var(--borderColor);
  border-radius: 14px;
  background: color-mix(in srgb, var(--textColor) 2.5%, transparent);

  strong {
    display: block;
    margin-bottom: 2px;
    font-size: 0.87rem;
    line-height: 1.35;
  }

  p {
    margin: 0;
    color: var(--textSecondary);
    font-size: 0.77rem;
    line-height: 1.45;
  }
`

const ErrorText = styled.p`
  margin: 0;
  padding: 10px 12px;
  border-radius: 10px;
  background: rgba(190, 40, 40, 0.12);
  color: #e45757;
  font-size: 0.8rem;
  line-height: 1.45;
`

const Actions = styled.div`
  display: grid;
  grid-template-columns: auto minmax(210px, 1fr);
  grid-template-areas: 'cancel primary';
  gap: 12px;
  align-items: center;
  width: 90%;
  margin: 4px auto 28px;

  @media (max-width: 780px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      'primary'
      'cancel';
    gap: 7px;
  }
`

const Button = styled.button`
  grid-area: ${({ $primary }) => $primary ? 'primary' : 'cancel'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  min-width: 350px;
  min-height: 46px;
  margin: 0;
  padding: ${({ $primary }) => $primary ? '10px 28px' : '10px 16px'};
  border: 1px solid ${({ $primary }) => $primary ? 'var(--AccentColor)' : 'var(--borderColor)'};
  border-radius: 999px;
  background: ${({ $primary }) => $primary ? 'var(--AccentColor)' : 'transparent'};
  color: ${({ $primary }) => $primary ? '#fff' : 'var(--textSecondary)'};
  font-size: 0.86rem;
  font-weight: ${({ $primary }) => $primary ? 850 : 700};
  cursor: pointer;
  transition: background 150ms ease, color 150ms ease, transform 150ms ease, opacity 150ms ease;
  margin-left: ${({ $primary }) => $primary ? 'auto' : '0'};
  &:hover:not(:disabled) {
    color: ${({ $primary }) => $primary ? '#fff' : 'var(--textColor)'};
    background: ${({ $primary }) => $primary
      ? 'color-mix(in srgb, var(--AccentColor) 90%, #000)'
      : 'color-mix(in srgb, var(--textColor) 5%, transparent)'};
    transform: ${({ $primary }) => $primary ? 'translateY(-1px)' : 'none'};
  }

  &:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--AccentColor) 34%, transparent);
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media (max-width: 780px) {
    width: 100%;
    min-width: 0;
    margin-left: 0;
  }
`

const LegalFooter = styled.footer`
  padding: 20px var(--modal-gutter) 22px;
  border-top: 1px solid var(--borderColor);
  text-align: center;
`

const Legal = styled.p`
  margin: 0;
  color: var(--textSecondary);
  font-size: 0.68rem;
  line-height: 1.5;

  a {
    color: var(--textSecondary);
    text-underline-offset: 3px;
  }

  a:hover,
  a:focus-visible {
    color: var(--AccentColor);
  }
`

const PolicyVersions = styled.p`
  margin: 5px 0 0;
  color: var(--textSecondary);
  font-size: 0.61rem;
  line-height: 1.4;
  opacity: 0.72;
`

const benefits = [
  ['PRINT_READY_BenefitFormats', 'PRINT_READY_BenefitFormatsDescription', FiFileText],
  ['PRINT_READY_BenefitSizes', 'PRINT_READY_BenefitSizesDescription', FiMaximize],
  ['PRINT_READY_BenefitWatermark', 'PRINT_READY_BenefitWatermarkDescription', FiShield]
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

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && !loading) {
        onClose()
        return
      }
      if (event.key !== 'Tab') return

      const focusable = dialogRef.current?.querySelectorAll(
        'a[href], button:not(:disabled), [tabindex]:not([tabindex="-1"])'
      )
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [loading, onClose])

  const price = offer
    ? formatCurrency({
      unitAmount: offer.unitAmount,
      currency: offer.currency,
      language: locale
    })
    : t('Loading')

  return createPortal(
    <Overlay onMouseDown={(event) => event.target === event.currentTarget && !loading && onClose()}>
      <Dialog
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="print-ready-title"
        aria-describedby="print-ready-description"
      >
        <Header>
          <Heading>
            <Title id="print-ready-title">{t('PRINT_READY_Headline')}</Title>
            <Intro id="print-ready-description">
              {t('PRINT_READY_Description', { album: albumName })}
            </Intro>
          </Heading>
          <CloseButton
            ref={closeRef}
            type="button"
            onClick={onClose}
            disabled={loading}
            aria-label={t('PRINT_READY_Close')}
          >
            <FiX aria-hidden="true" />
          </CloseButton>
        </Header>

        <Body>
          <section aria-label={t('PRINT_READY_BenefitsLabel')}>
            <Benefits>
              {benefits.map(([titleKey, descriptionKey, BenefitSvg]) => (
                <Benefit key={titleKey}>
                  <BenefitIcon><BenefitSvg aria-hidden="true" /></BenefitIcon>
                  <BenefitText>
                    <h3>{t(titleKey)}</h3>
                    <p>{t(descriptionKey)}</p>
                  </BenefitText>
                </Benefit>
              ))}
            </Benefits>
          </section>

          <PurchasePanel aria-label={t('PRINT_READY_PurchaseSummary')}>
            <Price>{price}</Price>
            <PaymentSummary>{t('PRINT_READY_PaymentSummary')}</PaymentSummary>

            <UnlockNote>
              <strong>{t('PRINT_READY_PermanentTitle')}</strong>
              <p>{t('PRINT_READY_PermanentDescription', { album: albumName })}</p>
            </UnlockNote>

            {error && <ErrorText role="alert">{error}</ErrorText>}

          </PurchasePanel>
        </Body>

        <Actions>
          <Button type="button" onClick={onClose} disabled={loading}>{t('Cancel')}</Button>
          <Button
            ref={confirmRef}
            type="button"
            $primary
            onClick={onConfirm}
            disabled={loading || offer?.enabled !== true}
          >
            {loading ? t('PRINT_READY_StartingCheckout') : t('PRINT_READY_Buy', { price })}
          </Button>
        </Actions>

        <LegalFooter>
          <Legal>
            {t('PRINT_READY_LegalPrefix')} <Link to="/terms">{t('FooterTerms')}</Link>{' '}
            {t('PRINT_READY_LegalAcknowledge')} <Link to="/refund">{t('FooterRefund')}</Link>{' '}
            {t('PRINT_READY_LegalAnd')} <Link to="/privacy">{t('FooterPrivacy')}</Link>.
          </Legal>
          {offer?.policies && (
            <PolicyVersions>
              {t('PRINT_READY_PolicyVersions', {
                terms: offer.policies.termsVersion,
                refund: offer.policies.refundPolicyVersion,
                privacy: offer.policies.privacyPolicyVersion
              })}
            </PolicyVersions>
          )}
        </LegalFooter>
      </Dialog>
    </Overlay>,
    document.body
  )
}
