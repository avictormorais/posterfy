import { readFileSync } from 'node:fs'
import { Resend } from 'resend'

const templates = {
  welcome: readFileSync(new URL('../emails/welcome.html', import.meta.url), 'utf8'),
  receipt: readFileSync(new URL('../emails/receipt.html', import.meta.url), 'utf8')
}

const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[character])

export const firstNameForEmail = (user) => (
  String(user?.name || user?.username || 'there').trim().split(/\s+/)[0] || 'there'
)

export const renderEmailTemplate = (template, values) => {
  const html = template.replace(/{{\s*(\w+)\s*}}/g, (_, key) => {
    if (!(key in values)) throw new Error(`Missing email placeholder: ${key}`)
    return escapeHtml(values[key])
  })
  if (/{{\s*\w+\s*}}/.test(html)) throw new Error('Unresolved email placeholder')
  return html
}

export const formatReceiptAmount = (amount, currency) => {
  const code = String(currency || '').toUpperCase()
  const formatted = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount / 100)
  return code === 'USD' ? `US$ ${formatted}` : `${code} ${formatted}`
}

let resendClient
const getResend = () => {
  if (!process.env.RESEND_API_KEY) throw new Error('RESEND_API_KEY is not configured')
  if (!resendClient) resendClient = new Resend(process.env.RESEND_API_KEY)
  return resendClient
}

const send = async (message, client = getResend()) => {
  const { error } = await client.emails.send(message)
  if (error) throw new Error(`Resend rejected email: ${error.message || error.name || 'unknown error'}`)
}

export const sendWelcomeEmail = (user, client) => {
  const firstName = firstNameForEmail(user)
  return send({
    from: 'Posterfy <welcome@posterfy.pics>',
    to: user.email,
    replyTo: 'support@posterfy.pics',
    subject: `Welcome to Posterfy, ${firstName}!`,
    html: renderEmailTemplate(templates.welcome, { firstName })
  }, client)
}

export const sendPurchaseReceiptEmail = ({ user, albumTitle, amount, currency }, client) => send({
  from: 'Posterfy <receipts@posterfy.pics>',
  to: user.email,
  replyTo: 'support@posterfy.pics',
  subject: 'Thanks for your Posterfy purchase!',
  html: renderEmailTemplate(templates.receipt, {
    firstName: firstNameForEmail(user),
    albumTitle,
    amount: formatReceiptAmount(amount, currency)
  })
}, client)

export default { sendWelcomeEmail, sendPurchaseReceiptEmail }
