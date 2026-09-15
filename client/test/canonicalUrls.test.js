import test from 'node:test'
import assert from 'node:assert/strict'
import { SITE_URL, canonicalFor, canonicalPathname, normalizePathname, posterMetadata, profileMetadata, legalMetadata, routeMetadata } from '../src/seo/metadata.js'
import { getCanonicalUrl, normalizeUrl } from '../src/utils/urlNormalization.js'

test('directory snapshot URLs normalize to one trailing slash across shared helpers', () => {
  for (const path of ['/p/507f1f77bcf86cd799439011', '/u/posterfy', '/terms', '/privacy', '/refund', '/support']) {
    for (const input of [path, `${path}/`, `${path}///?utm_source=test#section`]) {
      assert.equal(canonicalFor(input), `${SITE_URL}${path}/`)
      assert.equal(getCanonicalUrl(input), `${SITE_URL}${path}/`)
      assert.equal(canonicalPathname(input), `${path}/`)
    }
    assert.equal(normalizeUrl(`${SITE_URL}${path}`), `${SITE_URL}${path}/`)
  }
})

test('canonical, Open Graph and JSON-LD use the same final directory URL', () => {
  const poster = { _id: '507f1f77bcf86cd799439011', albumName: 'Album', artistsName: 'Artist' }
  const profile = { username: 'posterfy', name: 'Posterfy' }
  for (const metadata of [posterMetadata(poster), profileMetadata(profile), ...['terms', 'privacy', 'refund', 'support'].map(legalMetadata)]) {
    assert.ok(metadata.canonical.endsWith('/'))
    assert.equal(metadata.openGraph.url, metadata.canonical)
    assert.equal(metadata.jsonLd.url, metadata.canonical)
    if (metadata.jsonLd.mainEntity) assert.equal(metadata.jsonLd.mainEntity.url, metadata.canonical)
  }
  assert.deepEqual(routeMetadata({ pathname: '/p/507f1f77bcf86cd799439011/', poster }), posterMetadata(poster))
  assert.deepEqual(routeMetadata({ pathname: '/u/posterfy/', profile }), profileMetadata(profile))
  assert.deepEqual(routeMetadata({ pathname: '/terms/' }), legalMetadata('terms'))
})

test('home, asset URLs and non-snapshot routes keep their existing format', () => {
  for (const path of ['/', '/login', '/sitemap.xml', '/robots.txt', '/assets/logo.svg']) {
    assert.equal(canonicalFor(path), `${SITE_URL}${path}`)
  }
  assert.equal(normalizePathname('/p/507f1f77bcf86cd799439011/'), '/p/507f1f77bcf86cd799439011')
})
