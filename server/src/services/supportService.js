import { Resend } from 'resend'

let resendClient
const getResend = () => {
  if (!process.env.RESEND_API_KEY) {
    const error = new Error('Resend is not configured')
    error.status = 503
    throw error
  }
  if (!resendClient) resendClient = new Resend(process.env.RESEND_API_KEY)
  return resendClient
}

const unwrap = ({ data, error }) => {
  if (error) {
    const failure = new Error(error.message || 'Resend request failed')
    failure.status = error.statusCode === 404 ? 404 : 502
    throw failure
  }
  return data
}

const summary = email => ({
  id: email.id,
  from: email.from,
  to: email.to,
  subject: email.subject,
  created_at: email.created_at
})

const detail = email => ({
  ...summary(email),
  text: email.text,
  html: email.html,
  message_id: email.message_id
})

export const SUPPORT_SENDERS = {
  support: 'Posterfy Support <support@posterfy.pics>',
  welcome: 'Posterfy <welcome@posterfy.pics>',
  receipts: 'Posterfy <receipts@posterfy.pics>'
}

const senderAddress = from => {
  const value = String(from || '').trim()
  const address = value.includes('<') ? value.match(/<([^<>]+)>$/)?.[1] : value
  if (!address || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(address)) {
    throw new Error('Original sender address is invalid')
  }
  return address
}

const threadSubject = subject => String(subject || '')
  .replace(/^(?:(?:re|fw|fwd):\s*)+/ig, '')
  .trim()
  .toLowerCase()

const matchesContact = (email, direction, address) => {
  try {
    if (direction === 'received') return senderAddress(email.from).toLowerCase() === address
    return (email.to || []).some(recipient => senderAddress(recipient).toLowerCase() === address)
  } catch {
    return false
  }
}

const originalMessageId = value => {
  const id = String(value || '').trim()
  if (!id || /[\r\n]/.test(id) || id.length > 512 || !/^(?:<[^<>\s]+@[^<>\s]+>|[^<>\s]+@[^<>\s]+)$/.test(id)) {
    throw new Error('Original Message-ID is unavailable')
  }
  return id.startsWith('<') ? id : `<${id}>`
}

export const listSupportEmails = async (client = getResend()) => {
  const result = unwrap(await client.emails.receiving.list({ limit: 100 }))
  return (result?.data || [])
    .map(summary)
    .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
}

export const getSupportEmail = async (emailId, client = getResend()) => {
  const email = unwrap(await client.emails.receiving.get(emailId))
  return detail(email)
}

export const listSentEmails = async (client = getResend()) => {
  const result = unwrap(await client.emails.list({ limit: 100 }))
  return (result?.data || [])
    .map(summary)
    .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
}

export const getSentEmail = async (emailId, client = getResend()) => {
  const email = unwrap(await client.emails.get(emailId))
  return detail(email)
}

export const getSupportThread = async (emailId, source = 'received', client = getResend()) => {
  const direction = source === 'sent' ? 'sent' : 'received'
  const selected = direction === 'sent'
    ? await getSentEmail(emailId, client)
    : await getSupportEmail(emailId, client)
  const contact = direction === 'sent'
    ? senderAddress(selected.to?.[0]).toLowerCase()
    : senderAddress(selected.from).toLowerCase()
  const subject = threadSubject(selected.subject)
  const [receivedResponse, sentResponse] = await Promise.all([
    client.emails.receiving.list({ limit: 100 }),
    client.emails.list({ limit: 100 })
  ])
  const receivedPage = unwrap(receivedResponse)
  const sentPage = unwrap(sentResponse)
  const received = (receivedPage?.data || []).map(summary)
  const sent = (sentPage?.data || []).map(summary)
  const candidates = [
    ...received.filter(email => threadSubject(email.subject) === subject && matchesContact(email, 'received', contact))
      .map(email => ({ ...email, direction: 'received' })),
    ...sent.filter(email => threadSubject(email.subject) === subject && matchesContact(email, 'sent', contact))
      .map(email => ({ ...email, direction: 'sent' }))
  ].sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))

  const limited = candidates.slice(0, 30)
  if (!limited.some(email => email.id === selected.id && email.direction === direction)) {
    limited.push({ ...selected, direction })
  }
  const messages = []
  let missingMessages = false
  for (let index = 0; index < limited.length; index += 5) {
    const batch = await Promise.allSettled(limited.slice(index, index + 5).map(async email => ({
      ...(email.id === selected.id && email.direction === direction
        ? selected
        : email.direction === 'sent'
          ? await getSentEmail(email.id, client)
          : await getSupportEmail(email.id, client)),
      direction: email.direction
    })))
    for (const result of batch) {
      if (result.status === 'fulfilled') messages.push(result.value)
      else missingMessages = true
    }
  }
  messages.sort((a, b) => Date.parse(a.created_at) - Date.parse(b.created_at))
  return {
    messages,
    partial: missingMessages || candidates.length > 30 || Boolean(receivedPage?.has_more || sentPage?.has_more),
    contact
  }
}

export const sendSupportEmail = async ({ sender, to, subject, mode, message }, client = getResend()) => {
  const from = SUPPORT_SENDERS[sender]
  if (!from) throw new Error('Invalid sender')
  const sent = unwrap(await client.emails.send({
    from,
    to,
    subject,
    replyTo: 'support@posterfy.pics',
    [mode === 'html' ? 'html' : 'text']: message
  }))
  return { id: sent.id }
}

export const replyToSupportEmail = async (emailId, message, client = getResend()) => {
  const original = await getSupportEmail(emailId, client)
  const to = senderAddress(original.from)
  const messageId = originalMessageId(original.message_id)
  const subject = String(original.subject || '').replace(/[\r\n]+/g, ' ').trim() || '(no subject)'
  const sent = unwrap(await client.emails.send({
    from: 'Posterfy Support <support@posterfy.pics>',
    to,
    subject: /^Re:/i.test(subject) ? subject : `Re: ${subject}`,
    text: message,
    replyTo: 'support@posterfy.pics',
    headers: {
      'In-Reply-To': messageId,
      References: messageId
    }
  }))
  return { id: sent.id }
}
