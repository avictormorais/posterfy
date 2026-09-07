import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Icon from '../svgs/icon'
import { useTheme } from '../../contexts/ThemeContext'
import ThemeSelector from '../Navbar/ThemeSelector'

const Container = styled.footer`
  width: 100%;
  margin-top: 120px;
  border-top: 1px solid var(--borderColor);
  background: var(--backgroundColor);

  @media (max-width: 768px) {
    margin-top: 80px;
  }
`

const Content = styled.div`
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;
  padding: 64px 0 30px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 1.6fr) repeat(2, minmax(150px, 0.7fr));
  gap: clamp(40px, 7vw, 96px);
  padding-bottom: 52px;

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 34px;
  }
`

const Brand = styled.div`
  @media (max-width: 720px) {
    grid-column: 1 / -1;
  }
`

const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--textColor);
  text-decoration: none;

  span {
    font-size: 1.65rem;
    font-weight: 800;
    letter-spacing: -0.04em;
  }
`

const Description = styled.p`
  max-width: 430px;
  margin: 18px 0 0;
  color: var(--textSecondary);
  line-height: 1.7;
  font-weight: bold;
  opacity: 0.7;
`

const LinkGroup = styled.nav`
  h2 {
    margin: 0 0 16px;
    color: var(--textColor);
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  div {
    display: grid;
    gap: 12px;
  }

  a {
    width: fit-content;
    color: var(--textSecondary);
    line-height: 1.4;
    text-decoration: none;
    text-underline-offset: 4px;
    font-weight: bolder;
    opacity: 0.85;
  }

  a:hover,
  a:focus-visible {
    color: var(--AccentColor);
    opacity: 1;
  }
`

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-top: 26px;
  border-top: 1px solid var(--borderColor);
  color: var(--textSecondary);
  font-size: 0.84rem;
  font-weight: bold;

  p {
    margin: 0;
    opacity: 0.5;
  }

  @media (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;
  }
`

const FooterControls = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  p {
    opacity: 0.5;
  }

  @media (max-width: 640px) {
    width: 100%;
    justify-content: space-between;
  }
`

function Footer() {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const currentYear = new Date().getFullYear()

  return (
    <Container>
      <Content>
        <Grid>
          <Brand>
            <Logo to="/" aria-label="Posterfy">
              <Icon
                fill={theme === 'light' ? '#2c2929' : 'white'}
                width="42px"
                height="37px"
              />
              <span>Posterfy</span>
            </Logo>
            <Description>{t('FooterDescription')}</Description>
          </Brand>

          <LinkGroup aria-labelledby="footer-product-heading">
            <h2 id="footer-product-heading">{t('FooterProduct')}</h2>
            <div>
              <Link to="/#poster-generator">{t('startCreating')}</Link>
              <Link to="/#community">{t('Community')}</Link>
              <Link to="/support">{t('FooterSupport')}</Link>
            </div>
          </LinkGroup>

          <LinkGroup aria-labelledby="footer-legal-heading">
            <h2 id="footer-legal-heading">{t('FooterPolicies')}</h2>
            <div>
              <Link to="/terms">{t('FooterTerms')}</Link>
              <Link to="/privacy">{t('FooterPrivacy')}</Link>
              <Link to="/refund">{t('FooterRefund')}</Link>
            </div>
          </LinkGroup>
        </Grid>

        <Bottom>
          <p>© {currentYear} Posterfy. {t('AllRights', 'All rights reserved.')}</p>
          <FooterControls>
            <p>{t('FooterIndependent')}</p>
            <ThemeSelector />
          </FooterControls>
        </Bottom>
      </Content>
    </Container>
  )
}

export default Footer
