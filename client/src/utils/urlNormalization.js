import { SITE_URL, normalizePathname } from '../seo/metadata'

export const normalizeUrl = (value) => {
  if (!value) return ''
  try {
    const url = new URL(value, SITE_URL)
    const pathname = normalizePathname(url.pathname)
    return `${url.protocol}//${url.hostname.toLowerCase()}${url.port ? `:${url.port}` : ''}${pathname}`
  } catch {
    return normalizePathname(value)
  }
}

export const getCanonicalUrl = (pathname = window.location.pathname) => {
  const normalized = normalizePathname(pathname)
  return `${SITE_URL}${normalized === '/' ? '/' : normalized}`
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
