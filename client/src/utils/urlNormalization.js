import { SITE_URL, normalizePathname, canonicalPathname, canonicalFor } from '../seo/metadata.js'

export const normalizeUrl = (value) => {
  if (!value) return ''
  try {
    const url = new URL(value, SITE_URL)
    const pathname = url.origin === SITE_URL ? canonicalPathname(url.pathname) : normalizePathname(url.pathname)
    return `${url.protocol}//${url.hostname.toLowerCase()}${url.port ? `:${url.port}` : ''}${pathname}`
  } catch {
    return normalizePathname(value)
  }
}

export const getCanonicalUrl = (pathname = window.location.pathname) => {
  return canonicalFor(pathname)
}

export const shouldRedirect = (currentUrl) => {
  try {
    const current = new URL(currentUrl)
    const canonicalOrigin = new URL(SITE_URL)
    return current.protocol !== canonicalOrigin.protocol || current.hostname.toLowerCase() !== canonicalOrigin.hostname
  } catch {
    return false
  }
}

export const validateCurrentUrl = () => {
  const currentUrl = window.location.href
  const canonicalUrl = getCanonicalUrl()
  const redirectNeeded = shouldRedirect(currentUrl)
  return {
    isValid: !redirectNeeded,
    issues: redirectNeeded ? [{
      type: 'redirect_needed', current: currentUrl, canonical: canonicalUrl,
      message: 'Current URL should use the canonical protocol and hostname',
    }] : [],
    currentUrl,
    canonicalUrl,
  }
}
