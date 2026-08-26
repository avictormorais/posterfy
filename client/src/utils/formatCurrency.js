const CURRENCY_LOCALES = Object.freeze({
  en: 'en-GB',
  pt: 'pt-BR',
  es: 'es-ES',
  zh: 'zh-CN'
})

export const formatCurrency = ({ unitAmount, currency, language = 'en' }) => {
  const languageCode = language.toLowerCase().split('-')[0]
  const locale = CURRENCY_LOCALES[languageCode] || CURRENCY_LOCALES.en

  const formatted = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency.toUpperCase()
  }).format(unitAmount / 100)

  if (currency.toLowerCase() === 'usd' && ['en', 'pt'].includes(languageCode)) {
    return formatted.replace(/^US\$\s*/, 'US$ ')
  }

  return formatted
}
