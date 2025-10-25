export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  TIMEOUT: 10000,
}

export const OAUTH_CONFIG = {
  GOOGLE_REDIRECT_URI: `${window.location.origin}/dashboard`,
  SPOTIFY_REDIRECT_URI: `${window.location.origin}/dashboard`,
}