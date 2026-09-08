export const SITE_URL = 'https://posterfy.pics'
export const DEFAULT_IMAGE = `${SITE_URL}/albuns.png`

const HOME_TITLE = 'Posterfy'
const HOME_DESCRIPTION = 'Create custom album posters from your favorite music with Posterfy. Choose a template, customize your design and export your poster.'

const LEGAL_PAGES = {
  terms: { title: 'Terms of Service | Posterfy', description: 'Read the terms that apply when you use Posterfy.' },
  privacy: { title: 'Privacy Policy | Posterfy', description: 'Learn how Posterfy collects, uses and protects information.' },
  refund: { title: 'Refund Policy | Posterfy', description: 'Read the Posterfy refund policy for eligible purchases.' },
  support: { title: 'Support | Posterfy', description: 'Get help with your Posterfy account, posters and purchases.' },
}

const text = (value, fallback = '') => {
  if (typeof value !== 'string') return fallback
  const normalized = value.replace(/\s+/g, ' ').trim()
  return normalized || fallback
}

const publicImage = (value, fallback = DEFAULT_IMAGE) => {
  const candidate = text(value)
  if (!candidate) return fallback
  try {
    const url = new URL(candidate, SITE_URL)
    return ['https:', 'http:'].includes(url.protocol) ? url.href : fallback
  } catch {
    return fallback
  }
}

export const normalizePathname = (pathname = '/') => {
  let path = text(pathname, '/').split('?')[0].split('#')[0]
  if (!path.startsWith('/')) path = `/${path}`
  path = path.replace(/\/{2,}/g, '/')
  if (path.length > 1) path = path.replace(/\/+$/, '')
  return path
}

const canonicalFor = (pathname) => `${SITE_URL}${pathname === '/' ? '/' : pathname}`

const baseMetadata = ({ pathname, title, description, image = DEFAULT_IMAGE, robots = 'index, follow', type = 'website', jsonLd }) => {
  const path = normalizePathname(pathname)
  const canonical = canonicalFor(path)
  const safeImage = publicImage(image)
  return {
    title, description, canonical, robots, image: safeImage,
    openGraph: { title, description, url: canonical, image: safeImage, type },
    twitter: { card: 'summary_large_image', title, description, image: safeImage },
    jsonLd,
  }
}

export const homeMetadata = () => baseMetadata({
  pathname: '/', title: HOME_TITLE, description: HOME_DESCRIPTION,
  jsonLd: [
    { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Posterfy', url: `${SITE_URL}/`, description: HOME_DESCRIPTION },
    { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Posterfy', applicationCategory: 'DesignApplication', operatingSystem: 'Web browser', url: `${SITE_URL}/`, description: HOME_DESCRIPTION },
  ],
})

export const posterMetadata = (poster) => {
  const id = text(String(poster?._id || poster?.id || ''))
  const pathname = `/p/${encodeURIComponent(id)}`
  const album = text(poster?.albumName, 'Music')
  const artist = text(poster?.artistsName, 'Unknown artist')
  const creator = poster?.authorId || poster?.creator || {}
  const creatorName = text(creator.name || creator.username)
  const title = `${album} Poster — ${artist} | Posterfy`
  const description = creatorName
    ? `A custom ${album} poster by ${artist}, created by ${creatorName} on Posterfy.`
    : `A custom ${album} poster by ${artist}, created on Posterfy.`
  const image = publicImage(poster?.posterJson?.albumCover || poster?.image)
  const canonical = canonicalFor(pathname)
  return baseMetadata({
    pathname, title, description, image, type: 'article',
    jsonLd: {
      '@context': 'https://schema.org', '@type': 'CreativeWork', name: `${album} Poster`,
      description, url: canonical, image,
      ...(creatorName ? { creator: { '@type': 'Person', name: creatorName } } : {}),
    },
  })
}

export const profileMetadata = (profile) => {
  const username = text(profile?.username)
  const displayName = text(profile?.name, username)
  const pathname = `/u/${encodeURIComponent(username)}`
  const title = `${displayName} (@${username}) — Posters on Posterfy`
  const description = text(profile?.bio, `See public music posters created by ${displayName} (@${username}) on Posterfy.`)
  const image = publicImage(profile?.avatar)
  const canonical = canonicalFor(pathname)
  const person = {
    '@type': 'Person', name: displayName, alternateName: `@${username}`, url: canonical,
    ...(image !== DEFAULT_IMAGE ? { image } : {}),
  }
  return baseMetadata({
    pathname, title, description, image, type: 'profile',
    jsonLd: { '@context': 'https://schema.org', '@type': 'ProfilePage', name: title, description, url: canonical, mainEntity: person },
  })
}

export const legalMetadata = (type) => {
  const page = LEGAL_PAGES[type]
  if (!page) return null
  const pathname = `/${type}`
  const canonical = canonicalFor(pathname)
  return baseMetadata({
    pathname, ...page,
    jsonLd: { '@context': 'https://schema.org', '@type': 'WebPage', name: page.title, description: page.description, url: canonical },
  })
}

export const routeMetadata = ({ pathname = '/', poster, profile } = {}) => {
  const path = normalizePathname(pathname)
  if (path === '/') return homeMetadata()
  if (/^\/p\/[^/]+$/.test(path) && poster) return posterMetadata(poster)
  if (/^\/u\/[^/]+$/.test(path) && profile) return profileMetadata(profile)
  const legal = legalMetadata(path.slice(1))
  if (legal) return legal
  return baseMetadata({ pathname: path, title: 'Posterfy', description: HOME_DESCRIPTION, robots: 'noindex, nofollow', jsonLd: null })
}

export const isValidPublicPoster = (poster) => Boolean(
  poster && /^[a-f\d]{24}$/i.test(String(poster._id || poster.id || '')) &&
  poster.visibility === 'public' && poster.isDeleted !== true && text(poster.albumName) && text(poster.artistsName)
)

export const isValidIndexableProfile = (profile) => Boolean(
  profile && /^[a-zA-Z0-9]{3,}$/.test(text(profile.username))
)
