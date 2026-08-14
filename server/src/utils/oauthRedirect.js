const OFFICIAL_FRONTEND_ORIGINS = [
  'https://posterfy.pics',
  'https://www.posterfy.pics'
]

const DEVELOPMENT_FRONTEND_ORIGINS = [
  'http://localhost:5173',
  'http://localhost:3000'
]

const parseHttpOrigin = (value) => {
  if (!value || typeof value !== 'string') return null

  try {
    const url = new URL(value)
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return null
    return url.origin
  } catch {
    return null
  }
}

const isLocalOrigin = (origin) => {
  if (!origin) return false
  const hostname = new URL(origin).hostname
  return hostname === 'localhost' || hostname === '127.0.0.1'
}

const isDevelopmentEnvironment = () => {
  const configuredOrigin = parseHttpOrigin(process.env.CLIENT_URL)
  return process.env.NODE_ENV === 'development' || isLocalOrigin(configuredOrigin)
}

export const getAllowedOAuthRedirectOrigins = () => {
  const configuredOrigins = [
    process.env.CLIENT_URL,
    ...(process.env.OAUTH_REDIRECT_ORIGINS || '').split(',')
  ]

  const origins = [
    ...OFFICIAL_FRONTEND_ORIGINS,
    ...configuredOrigins
  ]

  if (isDevelopmentEnvironment()) {
    origins.push(...DEVELOPMENT_FRONTEND_ORIGINS)
  }

  return new Set(origins.map(parseHttpOrigin).filter(Boolean))
}

export const getOAuthFallbackUrl = (path = '/login') => {
  const allowedOrigins = getAllowedOAuthRedirectOrigins()
  const configuredOrigin = parseHttpOrigin(process.env.CLIENT_URL)
  const defaultOrigin = isDevelopmentEnvironment()
    ? DEVELOPMENT_FRONTEND_ORIGINS[0]
    : OFFICIAL_FRONTEND_ORIGINS[0]
  const origin = configuredOrigin && allowedOrigins.has(configuredOrigin)
    ? configuredOrigin
    : defaultOrigin

  return new URL(path, origin).toString()
}

export const getSafeOAuthRedirect = (raw, fallback = getOAuthFallbackUrl()) => {
  if (!raw || typeof raw !== 'string') return fallback

  try {
    const fallbackUrl = new URL(fallback)
    const url = new URL(raw, fallbackUrl.origin)
    if (!getAllowedOAuthRedirectOrigins().has(url.origin)) return fallback
    return url.toString()
  } catch {
    return fallback
  }
}

export const addOAuthResult = (destination, token) => {
  const url = new URL(destination)
  const fragment = new URLSearchParams({ token, login: 'success' })
  url.hash = fragment.toString()
  return url.toString()
}
