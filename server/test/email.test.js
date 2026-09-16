import test, { mock } from 'node:test'
import assert from 'node:assert/strict'
import User from '../src/models/user.js'
import Payment from '../src/models/payment.js'
import PrintUnlock from '../src/models/printUnlock.js'
import UserService from '../src/services/userService.js'
import emailService, {
  sendWelcomeEmail,
  sendPurchaseReceiptEmail,
  renderEmailTemplate
} from '../src/services/emailService.js'
import { requestPurchaseReceiptOnce } from '../src/services/printReadyService.js'

test('templates replace and escape every placeholder, with actual purchase data', async () => {
  const messages = []
  const client = { emails: { send: async message => {
    messages.push(message)
    return { data: { id: 'email-1' }, error: null }
  } } }
  const user = { name: 'Ana Silva', email: 'ana@example.com' }
  await sendWelcomeEmail(user, client)
  await sendPurchaseReceiptEmail({
    user,
    albumTitle: 'A & B <Deluxe>',
    amount: 199,
    currency: 'usd'
  }, client)

  assert.equal(messages.length, 2)
  assert.equal(messages[0].from, 'Posterfy <welcome@posterfy.pics>')
  assert.equal(messages[0].replyTo, 'support@posterfy.pics')
  assert.equal(messages[0].subject, 'Welcome to Posterfy, Ana!')
  assert.equal(messages[1].from, 'Posterfy <receipts@posterfy.pics>')
  assert.equal(messages[1].subject, 'Thanks for your Posterfy purchase!')
  assert.match(messages[1].html, /A &amp; B &lt;Deluxe&gt;/)
  assert.match(messages[1].html, /US\$ 1\.99/)
  for (const message of messages) assert.doesNotMatch(message.html, /{{[^}]+}}/)
  assert.throws(() => renderEmailTemplate('{{missing}}', {}), /Missing email placeholder/)
})

test('account creation requests welcome once and survives email failure', async () => {
  const restores = [
    mock.method(User, 'findOne', async () => null),
    mock.method(User.prototype, 'save', async function () { this._id = 'user-1'; return this }),
    mock.method(emailService, 'sendWelcomeEmail', async () => { throw new Error('Resend unavailable') }),
    mock.method(console, 'error', () => {})
  ]
  try {
    const user = await UserService.handleGoogleLogin({
      id: 'google-1',
      emails: [{ value: 'ana@example.com' }],
      displayName: 'Ana Silva',
      photos: []
    })
    assert.equal(user.email, 'ana@example.com')
    assert.equal(emailService.sendWelcomeEmail.mock.callCount(), 1)
    assert.equal(console.error.mock.callCount(), 1)
  } finally {
    restores.reverse().forEach(item => item.mock.restore())
  }
})

test('confirmed receipt is requested once on reprocessing and failure does not propagate', async () => {
  let claimed = false
  const restores = [
    mock.method(User, 'findById', async () => ({ name: 'Ana Silva', email: 'ana@example.com' })),
    mock.method(PrintUnlock, 'findOne', async () => ({ active: true })),
    mock.method(Payment, 'updateOne', async () => {
      if (claimed) return { modifiedCount: 0 }
      claimed = true
      return { modifiedCount: 1 }
    }),
    mock.method(emailService, 'sendPurchaseReceiptEmail', async () => { throw new Error('Resend unavailable') }),
    mock.method(console, 'error', () => {})
  ]
  const payment = {
    _id: 'payment-1',
    userId: 'user-1',
    album: { providerAlbumId: 'album-1', albumName: 'Real Album' },
    amountTotal: 199,
    currency: 'usd'
  }
  try {
    await requestPurchaseReceiptOnce(payment)
    await requestPurchaseReceiptOnce(payment)
    assert.equal(emailService.sendPurchaseReceiptEmail.mock.callCount(), 1)
    assert.equal(Payment.updateOne.mock.callCount(), 2)
    assert.equal(console.error.mock.callCount(), 1)
    assert.equal(emailService.sendPurchaseReceiptEmail.mock.calls[0].arguments[0].albumTitle, 'Real Album')
    assert.equal(Payment.updateOne.mock.calls[0].arguments[0].receiptEmailRequestedAt, null)
  } finally {
    restores.reverse().forEach(item => item.mock.restore())
  }
})
