const normalizeApiUrl = (value) => {
  const url = (value || 'http://localhost:5000').trim().replace(/\/+$/, '')
  if (/^https?:\/\//i.test(url) || url.startsWith('/')) return url
  if (/^(localhost|127\.0\.0\.1|\[::1\])(?::|$)/i.test(url)) return `http://${url}`
  return `https://${url.replace(/^\/\//, '')}`
}

export const API_CONFIG = {
  BASE_URL: normalizeApiUrl(import.meta.env.VITE_API_URL),
  TIMEOUT: 10000,
}

export const OAUTH_CONFIG = {
  GOOGLE_REDIRECT_URI: `${window.location.origin}/login`,
  SPOTIFY_REDIRECT_URI: `${window.location.origin}/login`,
}
