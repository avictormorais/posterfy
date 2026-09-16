import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { Resend } from 'resend'
import {
  getSupportEmail, listSupportEmails, replyToSupportEmail,
  listSentEmails, getSentEmail, sendSupportEmail, getSupportThread
} from '../src/services/supportService.js'

const inbound = {
  id: '22222222-2222-4222-8222-222222222222',
  from: 'Ana Silva <ana@example.com>',
  to: ['support@posterfy.pics'],
  subject: 'Help with an order',
  created_at: '2026-09-16T12:00:00.000Z',
  text: 'Hello',
  html: '<p>Hello</p>',
  message_id: '<original@example.com>',
  attachments: [{ filename: 'ignored.txt' }]
}

test('support routes inherit existing admin authentication and authorization', () => {
  const routes = readFileSync(new URL('../src/routes/admin.js', import.meta.url), 'utf8')
  const protection = routes.indexOf('router.use(authenticateToken, requireAdmin, adminLimiter)')
  assert.ok(protection >= 0)
  for (const path of ['/support', '/support/:emailId', '/support/:emailId/reply', '/support/sent', '/support/sent/:emailId', '/support/send', '/support/thread/:emailId']) {
    assert.ok(routes.indexOf(`'${path}'`) > protection)
  }
})

test('sent list and detail use the Resend outbound email API', async () => {
  const client = { emails: {
    list: async options => {
      assert.deepEqual(options, { limit: 100 })
      return { data: { data: [inbound] }, error: null }
    },
    get: async id => {
      assert.equal(id, inbound.id)
      return { data: inbound, error: null }
    }
  } }
  assert.deepEqual(Object.keys((await listSentEmails(client))[0]), ['id', 'from', 'to', 'subject', 'created_at'])
  assert.equal((await getSentEmail(inbound.id, client)).text, 'Hello')
})

test('thread combines received and sent messages for the same contact and subject chronologically', async () => {
  const earlier = { ...inbound, id: 'in-1', subject: 'Teste de painel adm', created_at: '2026-09-15T10:00:00Z', text: 'First message' }
  const outgoing = { ...inbound, id: 'out-1', from: 'Posterfy Support <support@posterfy.pics>', to: ['ana@example.com'], subject: 'Re: Teste de painel adm', created_at: '2026-09-15T11:00:00Z', text: 'Our response' }
  const latest = { ...inbound, id: 'in-2', subject: 'Re: Teste de painel adm', created_at: '2026-09-15T12:00:00Z', text: 'Follow-up' }
  const unrelated = { ...inbound, id: 'out-other', to: ['someone-else@example.com'], subject: 'Re: Teste de painel adm' }
  const client = { emails: {
    receiving: {
      list: async () => ({ data: { data: [latest, earlier] }, error: null }),
      get: async id => ({ data: id === latest.id ? latest : earlier, error: null })
    },
    list: async () => ({ data: { data: [outgoing, unrelated] }, error: null }),
    get: async () => ({ data: outgoing, error: null })
  } }
  const thread = await getSupportThread(latest.id, 'received', client)
  assert.deepEqual(thread.messages.map(message => message.id), ['in-1', 'out-1', 'in-2'])
  assert.deepEqual(thread.messages.map(message => message.direction), ['received', 'sent', 'received'])
  assert.equal(thread.contact, 'ana@example.com')
  assert.equal(thread.partial, false)
})

test('new mail supports allowlisted senders and text or HTML bodies', async () => {
  const sent = []
  const client = { emails: { send: async payload => {
    sent.push(payload)
    return { data: { id: `sent-${sent.length}` }, error: null }
  } } }
  await sendSupportEmail({ sender: 'welcome', to: 'user@example.com', subject: 'Hello', mode: 'text', message: 'Hi' }, client)
  await sendSupportEmail({ sender: 'receipts', to: 'user@example.com', subject: 'Hello', mode: 'html', message: '<p>Hi</p>' }, client)
  assert.equal(sent[0].from, 'Posterfy <welcome@posterfy.pics>')
  assert.equal(sent[0].text, 'Hi')
  assert.equal(sent[0].html, undefined)
  assert.equal(sent[1].from, 'Posterfy <receipts@posterfy.pics>')
  assert.equal(sent[1].html, '<p>Hi</p>')
  assert.equal(sent[1].replyTo, 'support@posterfy.pics')
  await assert.rejects(sendSupportEmail({ sender: 'attacker@example.com', to: 'user@example.com', subject: 'Hi', mode: 'text', message: 'Hi' }, client), /Invalid sender/)
  assert.equal(sent.length, 2)
})

test('list maps only needed fields and sorts newest first', async () => {
  const client = { emails: { receiving: { list: async options => {
    assert.deepEqual(options, { limit: 100 })
    return { data: { data: [{ ...inbound, id: 'older', created_at: '2026-09-15T12:00:00Z' }, inbound] }, error: null }
  } } } }
  const emails = await listSupportEmails(client)
  assert.deepEqual(emails.map(email => email.id), [inbound.id, 'older'])
  assert.deepEqual(Object.keys(emails[0]), ['id', 'from', 'to', 'subject', 'created_at'])
})

test('detail includes plain text, HTML and the original Message-ID but excludes attachments', async () => {
  const client = { emails: { receiving: { get: async id => {
    assert.equal(id, inbound.id)
    return { data: inbound, error: null }
  } } } }
  const email = await getSupportEmail(inbound.id, client)
  assert.equal(email.message_id, '<original@example.com>')
  assert.equal(email.text, 'Hello')
  assert.equal(email.html, '<p>Hello</p>')
  assert.equal('attachments' in email, false)
})

test('reply targets the original sender and preserves Gmail thread headers', async () => {
  let sent
  const client = {
    emails: {
      receiving: { get: async () => ({ data: inbound, error: null }) },
      send: async message => { sent = message; return { data: { id: 'sent-1' }, error: null } }
    }
  }
  const result = await replyToSupportEmail(inbound.id, 'Thanks, Ana.', client)
  assert.deepEqual(result, { id: 'sent-1' })
  assert.deepEqual(sent, {
    from: 'Posterfy Support <support@posterfy.pics>',
    to: 'ana@example.com',
    subject: 'Re: Help with an order',
    text: 'Thanks, Ana.',
    replyTo: 'support@posterfy.pics',
    headers: { 'In-Reply-To': '<original@example.com>', References: '<original@example.com>' }
  })
  assert.equal(sent.to, 'ana@example.com')
  // The API only takes an email ID and message. It never accepts a client-supplied `to`.
})

test('reply preserves an existing Re: prefix and does not send if the original lookup fails', async () => {
  const client = {
    emails: {
      receiving: { get: async () => ({ data: { ...inbound, subject: 'Re: Existing thread' }, error: null }) },
      send: async message => ({ data: { id: message.subject }, error: null })
    }
  }
  assert.deepEqual(await replyToSupportEmail(inbound.id, 'Reply', client), { id: 'Re: Existing thread' })
  client.emails.receiving.get = async () => ({ data: null, error: { message: 'Not found', statusCode: 404 } })
  await assert.rejects(replyToSupportEmail(inbound.id, 'Reply', client), error => error.status === 404)
})

test('Resend send errors propagate to the controller without reporting a successful reply', async () => {
  const client = {
    emails: {
      receiving: { get: async () => ({ data: inbound, error: null }) },
      send: async () => ({ data: null, error: { message: 'Forbidden', statusCode: 403 } })
    }
  }
  await assert.rejects(replyToSupportEmail(inbound.id, 'Reply', client), error => error.status === 502)
})

test('installed Resend SDK exposes Receiving under emails and the service uses that path', async () => {
  const client = new Resend('re_test_no_network')
  assert.equal(typeof client.emails.receiving.list, 'function')
  assert.equal(typeof client.emails.receiving.get, 'function')
  client.emails.receiving.list = async () => ({ data: { data: [inbound] }, error: null })
  assert.equal((await listSupportEmails(client))[0].id, inbound.id)
})
