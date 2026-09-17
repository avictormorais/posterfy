import test, { mock } from 'node:test'
import assert from 'node:assert/strict'
import User from '../src/models/user.js'
import { findCommerceUser } from '../src/controllers/adminController.js'

test('admin grant lookup accepts @username without requiring a user ID', async () => {
  const queries = []
  const target = { _id: '507f1f77bcf86cd799439011', username: 'posterfy' }
  mock.method(User, 'findOne', filter => {
    queries.push(filter)
    return { select: async () => target }
  })

  try {
    assert.equal(await findCommerceUser(' @Posterfy '), target)
    assert.deepEqual(queries[0], {
      $or: [{ email: 'posterfy' }, { username: 'posterfy' }],
      status: 'active'
    })

    assert.equal(await findCommerceUser('posterfy'), target)
    assert.equal(await findCommerceUser('507f1f77bcf86cd799439011'), target)
    assert.deepEqual(queries[2], { _id: '507f1f77bcf86cd799439011', status: 'active' })
    assert.equal(await findCommerceUser('@'), null)
    assert.equal(queries.length, 3)
  } finally {
    mock.restoreAll()
  }
})
