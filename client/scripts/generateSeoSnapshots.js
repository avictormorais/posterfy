import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadEnv } from 'vite'
import process from 'node:process'
import {
  SITE_URL,
  homeMetadata,
  isValidIndexableProfile,
  isValidPublicPoster,
  legalMetadata,
  posterMetadata,
  profileMetadata,
} from '../src/seo/metadata.js'

const scriptDirectory = dirname(fileURLToPath(import.meta.url))
const clientDirectory = join(scriptDirectory, '..')
const distDirectory = join(clientDirectory, 'dist')
const shellPath = join(distDirectory, 'index.html')
const env = loadEnv('production', clientDirectory, '')
const apiUrl = (process.env.VITE_API_URL || env.VITE_API_URL || '').replace(/\/+$/, '')
const SEO_BLOCK = /<!-- posterfy-seo:start -->[\s\S]*?<!-- posterfy-seo:end -->/

const escapeHtml = (value) => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;')

const safeJson = (value) => JSON.stringify(value)
  .replaceAll('<', '\\u003c')
  .replaceAll('>', '\\u003e')
  .replaceAll('&', '\\u0026')
  .replaceAll('\u2028', '\\u2028')
  .replaceAll('\u2029', '\\u2029')

const metadataHtml = (metadata) => {
  const ld = metadata.jsonLd
    ? `\n    <script type="application/ld+json" data-posterfy-seo>${safeJson(metadata.jsonLd)}</script>`
    : ''
  return `<!-- posterfy-seo:start -->
    <title>${escapeHtml(metadata.title)}</title>
    <meta name="description" content="${escapeHtml(metadata.description)}" />
    <meta name="robots" content="${escapeHtml(metadata.robots)}" />
    <link rel="canonical" href="${escapeHtml(metadata.canonical)}" />
    <meta property="og:title" content="${escapeHtml(metadata.openGraph.title)}" />
    <meta property="og:description" content="${escapeHtml(metadata.openGraph.description)}" />
    <meta property="og:url" content="${escapeHtml(metadata.openGraph.url)}" />
    <meta property="og:image" content="${escapeHtml(metadata.openGraph.image)}" />
    <meta property="og:type" content="${escapeHtml(metadata.openGraph.type)}" />
    <meta property="og:site_name" content="Posterfy" />
    <meta name="twitter:card" content="${escapeHtml(metadata.twitter.card)}" />
    <meta name="twitter:title" content="${escapeHtml(metadata.twitter.title)}" />
    <meta name="twitter:description" content="${escapeHtml(metadata.twitter.description)}" />
    <meta name="twitter:image" content="${escapeHtml(metadata.twitter.image)}" />${ld}
    <!-- posterfy-seo:end -->`
}

const renderShell = (shell, metadata) => {
  if (!SEO_BLOCK.test(shell)) throw new Error('SEO markers were not found in dist/index.html')
  return shell.replace(SEO_BLOCK, metadataHtml(metadata))
}

const writeSnapshot = async (shell, routeSegments, metadata) => {
  const directory = join(distDirectory, ...routeSegments)
  await mkdir(directory, { recursive: true })
  await writeFile(join(directory, 'index.html'), renderShell(shell, metadata), 'utf8')
}

const fetchJson = async (pathname) => {
  const response = await fetch(`${apiUrl}${pathname}`, { signal: AbortSignal.timeout(15000) })
  if (!response.ok) throw new Error(`${response.status} ${response.statusText} for ${pathname}`)
  return response.json()
}

const fetchAllPages = async (pathname, resultKey) => {
  const items = []
  for (let page = 1; page <= 1000; page += 1) {
    const separator = pathname.includes('?') ? '&' : '?'
    const result = await fetchJson(`${pathname}${separator}page=${page}&limit=50`)
    items.push(...(Array.isArray(result[resultKey]) ? result[resultKey] : []))
    if (!result.hasMore) return items
  }
  throw new Error(`Pagination safety limit reached for ${pathname}`)
}

const collectPublicContent = async () => {
  if (!apiUrl) {
    if (process.env.SEO_REQUIRE_API === 'true') {
      throw new Error('VITE_API_URL is required when SEO_REQUIRE_API=true.')
    }
    console.warn('SEO snapshots: VITE_API_URL is not configured; dynamic snapshots were skipped.')
    return { posters: [], profiles: [] }
  }

  try {
    const [posterCandidates, activeUsers] = await Promise.all([
      fetchAllPages('/api/community?sort=recent', 'posters'),
      fetchAllPages('/api/community/search-users?q=', 'users'),
    ])
    const posters = posterCandidates.filter(isValidPublicPoster)
    const usernamesWithPosters = new Set(
      posters.map(poster => poster.authorId?.username?.toLowerCase()).filter(Boolean)
    )
    const profiles = activeUsers.filter(profile =>
      isValidIndexableProfile(profile) && usernamesWithPosters.has(profile.username.toLowerCase())
    )
    return { posters, profiles }
  } catch (error) {
    if (process.env.SEO_REQUIRE_API === 'true') throw error
    console.warn(`SEO snapshots: public API unavailable; dynamic snapshots were skipped (${error.message}).`)
    return { posters: [], profiles: [] }
  }
}

const xmlEscape = (value) => escapeHtml(value)
const reliableDate = (value) => {
  if (!value) return null
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? null : date.toISOString().slice(0, 10)
}

const sitemapXml = (entries) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(({ url, lastmod }) => `  <url><loc>${xmlEscape(url)}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`).join('\n')}
</urlset>
`

const main = async () => {
  const shell = await readFile(shellPath, 'utf8')
  const { posters, profiles } = await collectPublicContent()

  await writeFile(shellPath, renderShell(shell, homeMetadata()), 'utf8')

  const sitemapEntries = [{ url: `${SITE_URL}/` }]
  for (const type of ['terms', 'privacy', 'refund', 'support']) {
    const metadata = legalMetadata(type)
    await writeSnapshot(shell, [type], metadata)
    sitemapEntries.push({ url: metadata.canonical })
  }

  for (const poster of posters) {
    const id = String(poster._id)
    const metadata = posterMetadata(poster)
    await writeSnapshot(shell, ['p', id], metadata)
    sitemapEntries.push({ url: metadata.canonical, lastmod: reliableDate(poster.createdAt) })
  }

  const latestPosterByUsername = new Map()
  for (const poster of posters) {
    const username = poster.authorId?.username?.toLowerCase()
    const date = reliableDate(poster.createdAt)
    if (username && date > (latestPosterByUsername.get(username) || '')) latestPosterByUsername.set(username, date)
  }
  for (const profile of profiles) {
    const metadata = profileMetadata(profile)
    await writeSnapshot(shell, ['u', profile.username], metadata)
    sitemapEntries.push({ url: metadata.canonical, lastmod: latestPosterByUsername.get(profile.username.toLowerCase()) })
  }

  await writeFile(join(distDirectory, 'sitemap.xml'), sitemapXml(sitemapEntries), 'utf8')
  await writeFile(join(distDirectory, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`, 'utf8')
  console.log(`SEO snapshots generated: ${posters.length} posters, ${profiles.length} profiles, 4 static pages.`)
}

await main()
