import test from 'node:test'
import assert from 'node:assert/strict'
import Poster from '../src/models/poster.js'
import PosterService from '../src/services/posterService.js'

function mockPage(t) {
  const captured = {}
  const chain = {
    sort() { return this },
    skip(value) { captured.skip = value; return this },
    limit(value) { captured.limit = value; return this },
    lean: async () => [{ _id: 'match' }]
  }
  t.mock.method(Poster, 'find', filter => { captured.filter = filter; return chain })
  t.mock.method(Poster, 'countDocuments', async filter => {
    assert.deepEqual(filter, captured.filter)
    return 25
  })
  return captured
}

test('profile search filters album and artist before pagination and counts matching results', async t => {
  const captured = mockPage(t)
  const result = await PosterService.findByUser('owner', 'owner', 2, 12, false, { q: '  A+B (live)  ', visibility: 'private' })
  assert.equal(captured.filter.authorId, 'owner')
  assert.equal(captured.filter.isDeleted, false)
  assert.equal(captured.filter.visibility, 'private')
  assert.deepEqual(captured.filter.$or, [
    { albumName: { $regex: 'A\\+B \\(live\\)', $options: 'i' } },
    { artistsName: { $regex: 'A\\+B \\(live\\)', $options: 'i' } }
  ])
  assert.equal(captured.skip, 12)
  assert.equal(captured.limit, 12)
  assert.equal(result.total, 25)
  assert.equal(result.hasMore, true)
})

test('visitor search cannot broaden access to private posters', async t => {
  const captured = mockPage(t)
  await PosterService.findByUser('owner', null, 1, 12, false, { q: 'Starboy', visibility: 'private' })
  assert.equal(captured.filter.authorId, 'owner')
  assert.equal(captured.filter.visibility, 'public')
  assert.equal(captured.filter.isDeleted, false)
})

test('clearing the query restores the unsearched profile filter', async t => {
  const captured = mockPage(t)
  await PosterService.findByUser('owner', 'owner', 1, 12, false, { q: '   ' })
  assert.equal(captured.filter.$or, undefined)
  assert.equal(captured.skip, 0)
})
