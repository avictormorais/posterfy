/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { POLICY_INFO } from '../../config/policies'
import { getLegalContent, SUPPORT_EMAIL } from './legalContent'

const Page = styled.main`
  width: min(920px, calc(100% - 40px));
  margin: 120px auto 64px;
  color: var(--textColor);
`

const Header = styled.header`
  max-width: 780px;
  margin-bottom: 34px;
`

const Eyebrow = styled.p`
  margin: 0 0 10px;
  color: var(--AccentColor);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const Title = styled.h1`
  margin: 0 0 14px;
  font-size: clamp(2.1rem, 6vw, 3.5rem);
  line-height: 1.05;
`

const Intro = styled.p`
  margin: 0;
  color: var(--textSecondary);
  font-size: clamp(1rem, 2vw, 1.12rem);
  line-height: 1.7;
`

const Meta = styled.dl`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 28px;
  margin: 24px 0 0;
  padding: 16px 0;
  border-block: 1px solid var(--borderColor);

  div { display: flex; gap: 7px; }
  dt { color: var(--textSecondary); }
  dd { margin: 0; font-weight: 700; }
`

const Contents = styled.nav`
  margin: 0 0 42px;
  padding: 20px 22px;
  border: 1px solid var(--borderColor);
  border-radius: 16px;

  strong { display: block; margin-bottom: 12px; }
  ol {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px 26px;
    margin: 0;
    padding-left: 20px;
  }
  a {
    color: var(--textSecondary);
    line-height: 1.4;
    text-decoration-color: transparent;
    text-underline-offset: 3px;
  }
  a:hover, a:focus-visible {
    color: var(--AccentColor);
    text-decoration-color: currentColor;
  }

  @media (max-width: 620px) {
    ol { grid-template-columns: 1fr; }
  }
`

const Section = styled.section`
  max-width: 780px;
  margin: 0 0 38px;
  scroll-margin-top: 100px;

  h2 {
    margin: 0 0 12px;
    font-size: clamp(1.25rem, 3vw, 1.5rem);
    line-height: 1.25;
  }
  p, li { color: var(--textSecondary); line-height: 1.75; }
  p { margin: 0 0 12px; }
  ul { display: grid; gap: 7px; margin: 14px 0 0; padding-left: 22px; }
`

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  margin-top: 4px;
  padding: 0 22px;
  border-radius: 999px;
  background: var(--AccentColor);
  color: #fff;
  font-weight: 800;
  text-decoration: none;
`

const LOCALES = { en: 'en-US', pt: 'pt-BR', es: 'es-ES', zh: 'zh-CN' }

const formatPolicyDate = (date, language) => {
  const [year, month, day] = date.split('-').map(Number)
  return new Intl.DateTimeFormat(LOCALES[language] || 'en-US', {
    dateStyle: 'long',
    timeZone: 'UTC'
  }).format(new Date(Date.UTC(year, month - 1, day)))
}

export default function LegalPage({ type }) {
  const { i18n } = useTranslation()
  const language = (i18n.resolvedLanguage || i18n.language || 'en').toLowerCase().split('-')[0]
  const localized = getLegalContent(language)
  const page = localized[type]
  const policy = POLICY_INFO[type]

  useEffect(() => {
    document.documentElement.lang = LOCALES[language] || language
    document.title = `${page.title} | Posterfy`
  }, [language, page.title])

  return (
    <Page>
      <Header>
        {policy && <Eyebrow>Posterfy · {localized.common.version} {policy.version}</Eyebrow>}
        <Title>{page.title}</Title>
        <Intro>{page.intro}</Intro>
        {policy && (
          <Meta>
            <div><dt>{localized.common.version}</dt><dd>{policy.version}</dd></div>
            <div>
              <dt>{localized.common.effective}</dt>
              <dd><time dateTime={policy.effectiveDate}>{formatPolicyDate(policy.effectiveDate, language)}</time></dd>
            </div>
            <div>
              <dt>{localized.common.updated}</dt>
              <dd><time dateTime={policy.lastUpdated}>{formatPolicyDate(policy.lastUpdated, language)}</time></dd>
            </div>
          </Meta>
        )}
      </Header>

      <Contents aria-label={localized.common.contents}>
        <strong>{localized.common.contents}</strong>
        <ol>
          {page.sections.map(item => (
            <li key={item.id}><a href={`#${item.id}`}>{item.title.replace(/^\d+\.\s*/, '')}</a></li>
          ))}
        </ol>
      </Contents>

      {page.sections.map(item => (
        <Section id={item.id} key={item.id}>
          <h2>{item.title}</h2>
          {item.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {item.bullets.length > 0 && (
            <ul>{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
          )}
          {type === 'support' && item.id === 'contact' && (
            <ContactButton href={`mailto:${SUPPORT_EMAIL}`}>{localized.common.contactSupport}</ContactButton>
          )}
        </Section>
      ))}
    </Page>
  )
}
