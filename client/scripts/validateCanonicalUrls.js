import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'
import { SITE_URL, canonicalFor } from '../src/seo/metadata.js'

const dist = fileURLToPath(new URL('../dist/', import.meta.url))
const locations = xml => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1])
const urls = locations(await readFile(join(dist, 'sitemap.xml'), 'utf8'))
assert.ok(urls.length, 'The build sitemap must not be empty')
const normalized = urls.map(value => canonicalFor(new URL(value).pathname))
assert.equal(new Set(normalized).size, urls.length, 'Duplicate sitemap URLs, including slash/slashless variants')

for (const url of urls) {
  const parsed = new URL(url)
  assert.equal(parsed.origin, SITE_URL)
  assert.equal(url, canonicalFor(parsed.pathname), `Non-final sitemap URL: ${url}`)
  assert.ok(parsed.pathname.endsWith('/'), `Missing directory slash: ${url}`)
  const segments = parsed.pathname.split('/').filter(Boolean).map(decodeURIComponent)
  assert.ok(segments.every(segment => !/[\\/]/.test(segment) && segment !== '..'))
  const html = await readFile(join(dist, ...segments, 'index.html'), 'utf8')
  const canonicals = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"[^>]*>/g)]
  assert.equal(canonicals.length, 1, `Expected exactly one canonical: ${url}`)
  assert.equal(canonicals[0][1], url, `Non-self-referencing canonical: ${url}`)
  const og = html.match(/<meta\b[^>]*property="og:url"[^>]*content="([^"]+)"/)
  assert.equal(og?.[1], url, `Open Graph URL mismatch: ${url}`)
  const structured = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
  assert.ok(structured.length, `Missing JSON-LD: ${url}`)
  const checkUrls = value => {
    if (!value || typeof value !== 'object') return
    for (const [key, child] of Object.entries(value)) {
      if (key === 'url') assert.equal(child, url, `JSON-LD URL mismatch: ${url}`)
      else checkUrls(child)
    }
  }
  structured.forEach(match => checkUrls(JSON.parse(match[1])))
}

const sampleGroups = ['/p/', '/u/', '/terms/', '/privacy/', '/refund/', '/support/']
// Fail rather than silently passing a build that skipped all dynamic snapshots.
for (const prefix of sampleGroups) assert.ok(urls.some(url => new URL(url).pathname.startsWith(prefix)), `Missing snapshot sample: ${prefix}`)
console.log(`PASS: ${urls.length} snapshots: self-referencing canonical, OG, JSON-LD, final sitemap URLs, no duplicates.`)

if (process.argv.includes('--live')) {
  const get = url => fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(20000) })
  const sitemapResponse = await get(`${SITE_URL}/sitemap.xml`)
  assert.equal(sitemapResponse.status, 200, 'Production sitemap must return 200 without redirect')
  const deployed = new Set(locations(await sitemapResponse.text()).map(url => canonicalFor(new URL(url).pathname)))
  // Use samples already present in production, not brand-new posters awaiting deployment.
  for (const prefix of sampleGroups) {
    const url = urls.find(url => new URL(url).pathname.startsWith(prefix) && deployed.has(url))
    assert.ok(url, `No deployed sample for ${prefix}`)
    const response = await get(url)
    assert.equal(response.status, 200, `${url} must return 200 without redirect`)
    assert.equal(response.headers.get('location'), null, `${url} must not redirect`)
    await response.body?.cancel()
    const redirect = await get(url.slice(0, -1))
    assert.equal(redirect.status, 301, 'Keep the GitHub Pages directory redirect')
    assert.equal(new URL(redirect.headers.get('location'), url).href, url)
    await redirect.body?.cancel()
    console.log(`PASS: ${url} → 200, no redirect; slashless → 301 → final URL`)
  }
  console.log('Production HTTP checked; HTML/canonical assertions above apply to the local build awaiting deployment.')
}
