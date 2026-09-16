import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import adminService from '../../../services/adminService'
import { TabHeader, TabTitle } from '../AdminStyles'

const READ_KEY = 'posterfy-admin-support-read-v1'
const storedReadIds = () => {
  try {
    const value = JSON.parse(localStorage.getItem(READ_KEY) || '[]')
    return Array.isArray(value) ? value : []
  }
  catch { return [] }
}

const Tabs = styled.div`
  display: flex; gap: 6px; margin-bottom: 16px;
  border-bottom: 1px solid var(--borderColor); overflow-x: auto;
`
const Tab = styled.button`
  border: 0; border-bottom: 2px solid ${({ $active }) => $active ? 'var(--AccentColor)' : 'transparent'};
  background: transparent; color: ${({ $active }) => $active ? 'var(--AccentColor)' : 'var(--textColor)'};
  padding: 10px 14px; white-space: nowrap; font: inherit; font-size: .85em; font-weight: 700; cursor: pointer;
  &:hover { color: var(--AccentColor); }
  &:focus-visible { outline: 2px solid var(--AccentColor); outline-offset: -2px; }
`
const Layout = styled.div`
  display: grid; grid-template-columns: minmax(250px, 330px) minmax(0, 1fr); gap: 16px; align-items: start;
  @media (max-width: 760px) { grid-template-columns: minmax(0, 1fr); }
`
const Pane = styled.section`
  min-width: 0; border: 1px solid var(--borderColor); border-radius: 12px; overflow: hidden;
`
const Content = styled.div`padding: 20px; overflow-wrap: anywhere;`
const Muted = styled.p`margin: 0; color: var(--textSecondary); font-size: .85em;`
const ErrorAction = styled.div`margin-top: 12px;`
const Toolbar = styled.div`
  display: flex; align-items: center; justify-content: space-between; gap: 8px;
  padding: 10px 14px; border-bottom: 1px solid var(--borderColor);
`
const ToolbarLabel = styled.span`
  color: var(--textSecondary); font-size: .78em; font-weight: 700;
`
const ToolbarActions = styled.div`display: flex; align-items: center; gap: 8px; flex-wrap: wrap;`
const QuietButton = styled.button`
  border: 1px solid var(--borderColor); border-radius: 8px; background: transparent;
  color: var(--textColor); padding: 7px 10px; font: inherit; font-size: .76em; font-weight: 700; cursor: pointer;
  &:hover { border-color: var(--AccentColor); color: var(--AccentColor); }
  &:focus-visible { outline: 2px solid var(--AccentColor); outline-offset: 2px; }
  &:disabled { opacity: .5; cursor: wait; }
`
const ListFooter = styled.div`
  padding: 12px 14px; display: flex; align-items: center; justify-content: space-between; gap: 10px;
  color: var(--textSecondary); font-size: .75em;
  button { border: 1px solid var(--borderColor); border-radius: 8px; background: transparent; color: var(--textColor); padding: 7px 10px; font: inherit; font-weight: 700; cursor: pointer; }
  button:hover { border-color: var(--AccentColor); }
  button:focus-visible { outline: 2px solid var(--AccentColor); outline-offset: 2px; }
  button:disabled { opacity: .5; cursor: wait; }
`
const Filter = styled.button`
  padding: 6px 10px; border-radius: 999px; cursor: pointer;
  border: 1px solid ${({ $active }) => $active ? 'var(--AccentColor)' : 'var(--borderColor)'};
  background: ${({ $active }) => $active ? 'var(--AccentColor)' : 'transparent'};
  color: ${({ $active }) => $active ? '#fff' : 'var(--textColor)'}; font: inherit; font-size: .76em; font-weight: 700;
  &:focus-visible { outline: 2px solid var(--AccentColor); outline-offset: 2px; }
`
const Item = styled.button`
  display: grid; gap: 5px; width: 100%; padding: 14px 16px; text-align: left; cursor: pointer;
  border: 0; border-bottom: 1px solid var(--borderColor); color: var(--textColor);
  border-left: 3px solid ${({ $active }) => $active ? 'var(--AccentColor)' : 'transparent'};
  background: ${({ $active }) => $active ? 'var(--glassBackground)' : 'transparent'};
  &:hover { background: var(--glassBackground); }
  &:focus-visible { outline: 2px solid var(--AccentColor); outline-offset: -2px; }
`
const Line = styled.span`
  display: flex; justify-content: space-between; gap: 10px; min-width: 0; font-size: .8em; color: var(--textSecondary);
  > span:last-child { flex: none; }
`
const Name = styled.span`
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--textColor); font-weight: 700;
`
const Subject = styled.span`overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: .85em;`
const Dot = styled.span`
  display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: var(--AccentColor); margin-right: 7px;
`
const Part = styled.pre`
  margin: 18px 0; padding: ${({ $quoted }) => $quoted ? '12px 16px' : '0'};
  border-left: ${({ $quoted }) => $quoted ? '3px solid var(--borderColor)' : '0'};
  background: ${({ $quoted }) => $quoted ? 'var(--glassBackground)' : 'transparent'};
  border-radius: ${({ $quoted }) => $quoted ? '0 8px 8px 0' : '0'};
  white-space: pre-wrap; overflow-wrap: anywhere; font: inherit; font-size: .9em; line-height: 1.6;
  color: ${({ $quoted }) => $quoted ? 'var(--textSecondary)' : 'var(--textColor)'};
`
const Quoted = styled.details`
  margin: 10px 0 18px;
  summary { color: var(--textSecondary); font-size: .78em; font-weight: 700; cursor: pointer; }
`
const ThreadTitle = styled.h3`margin: 0 0 6px; font-size: 1.08em;`
const ThreadCard = styled.article`
  padding: 16px 0;
  border-top: 1px solid var(--borderColor);
  &:first-of-type { border-top: 0; }
`
const ThreadMeta = styled.div`
  display: flex; align-items: baseline; justify-content: space-between; gap: 12px; flex-wrap: wrap;
  strong { font-size: .87em; }
  span { color: var(--textSecondary); font-size: .76em; }
`
const ThreadDirection = styled.span`
  display: inline-block; margin: 0 0 10px; color: ${({ $sent }) => $sent ? 'var(--AccentColor)' : 'var(--textSecondary)'};
  font-size: .69em; font-weight: 800; text-transform: uppercase; letter-spacing: .06em;
`
const Form = styled.form`
  display: grid; gap: 10px; max-width: 720px;
  border-top: ${({ $reply }) => $reply ? '1px solid var(--borderColor)' : '0'};
  padding-top: ${({ $reply }) => $reply ? '18px' : '0'};
  label { font-size: .85em; font-weight: 700; }
  input, select, textarea {
    width: 100%; box-sizing: border-box; padding: 11px 12px; border: 1px solid var(--borderColor);
    border-radius: 8px; background: var(--glassBackground); color: var(--textColor); font: inherit; outline: none;
  }
  input:focus, select:focus, textarea:focus { border-color: var(--AccentColor); }
  input:focus-visible, select:focus-visible, textarea:focus-visible { outline: 2px solid var(--AccentColor); outline-offset: 2px; }
  textarea { min-height: 130px; resize: vertical; }
  button {
    justify-self: start; padding: 9px 16px; border: 0; border-radius: 8px;
    background: var(--AccentColor); color: #fff; font: inherit; font-weight: 700; cursor: pointer;
  }
  button:disabled { opacity: .55; cursor: not-allowed; }
  button:focus-visible { outline: 2px solid var(--AccentColor); outline-offset: 2px; }
`
const FormRow = styled.div`
  display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px;
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`
const Field = styled.div`display: grid; gap: 8px; min-width: 0;`

const bodyText = email => email.text || (email.html
  ? new DOMParser().parseFromString(email.html, 'text/html').body.textContent || '' : '')

const MessageBody = ({ email }) => {
  const { t } = useTranslation()
  const parts = []
  for (const line of bodyText(email).split(/\r?\n/)) {
    const quoted = /^\s*>/.test(line)
    const value = quoted ? line.replace(/^\s*(?:>\s?)+/, '') : line
    if (parts.at(-1)?.quoted === quoted) parts.at(-1).lines.push(value)
    else parts.push({ quoted, lines: [value] })
  }
  return parts.map((part, index) => part.quoted
    ? <Quoted key={index}><summary>{t('ADMIN_SupportQuoted')}</summary><Part $quoted>{part.lines.join('\n')}</Part></Quoted>
    : <Part key={index}>{part.lines.join('\n')}</Part>)
}

export default function SupportTab() {
  const { t, i18n } = useTranslation()
  const [section, setSection] = useState('inbox')
  const [emails, setEmails] = useState([])
  const [inboxEmails, setInboxEmails] = useState([])
  const [refreshCount, setRefreshCount] = useState(0)
  const [listLoading, setListLoading] = useState(true)
  const [listError, setListError] = useState(false)
  const [selectedId, setSelectedId] = useState(null)
  const [selected, setSelected] = useState(null)
  const [thread, setThread] = useState(null)
  const [visibleCount, setVisibleCount] = useState(12)
  const [messageLoading, setMessageLoading] = useState(false)
  const [messageError, setMessageError] = useState(false)
  const [messageRetry, setMessageRetry] = useState(0)
  const [historyLoading, setHistoryLoading] = useState(false)
  const [historyError, setHistoryError] = useState(false)
  const [historyLoaded, setHistoryLoaded] = useState(false)
  const [readIds, setReadIds] = useState(storedReadIds)
  const [unreadOnly, setUnreadOnly] = useState(false)
  const [reply, setReply] = useState('')
  const [compose, setCompose] = useState({ sender: 'support', to: '', subject: '', mode: 'text', message: '' })
  const [sending, setSending] = useState(false)
  const [sendResult, setSendResult] = useState(null)
  const historyRequest = useRef(0)
  const listCache = useRef({ inbox: null, sent: null })

  useEffect(() => {
    if (section === 'compose') return
    const cached = listCache.current[section]
    if (cached) {
      setEmails(cached)
      setListError(false)
      setListLoading(false)
      setVisibleCount(12)
      return
    }
    let active = true
    setListLoading(true)
    setListError(false)
    setVisibleCount(12)
    const load = section === 'sent' ? adminService.getSentEmails : adminService.getSupportEmails
    load().then(result => {
      if (!active) return
      const next = result.emails || []
      listCache.current[section] = next
      setEmails(next)
      if (section === 'inbox') setInboxEmails(next)
    })
      .catch(() => { if (active) setListError(true) })
      .finally(() => { if (active) setListLoading(false) })
    return () => { active = false }
  }, [section, refreshCount])

  useEffect(() => {
    if (!selectedId || section === 'compose') return
    let active = true
    historyRequest.current += 1
    setSelected(null)
    setThread(null)
    setMessageError(false)
    setMessageLoading(true)
    setHistoryLoading(false)
    setHistoryError(false)
    setHistoryLoaded(false)
    setReply('')
    setSendResult(null)
    const direction = section === 'sent' ? 'sent' : 'received'
    const load = direction === 'sent' ? adminService.getSentEmail : adminService.getSupportEmail
    load(selectedId).then(result => {
      if (!active) return
      const email = { ...result.email, direction }
      setThread({ messages: [email], contact: direction === 'sent' ? email.to?.[0] : email.from, partial: false })
      setSelected(email)
      if (section === 'inbox') setReadIds(previous => {
        const next = [...new Set([...previous, email.id])]
        if (next.length === previous.length) return previous
        try { localStorage.setItem(READ_KEY, JSON.stringify(next)) } catch { /* storage unavailable */ }
        return next
      })
    }).catch(() => { if (active) setMessageError(true) })
      .finally(() => { if (active) setMessageLoading(false) })
    return () => { active = false; historyRequest.current += 1 }
  }, [selectedId, section, messageRetry])

  const switchSection = next => { historyRequest.current += 1; setSection(next); setSelectedId(null); setSelected(null); setThread(null); setSendResult(null) }
  const refreshList = () => { listCache.current[section] = null; setRefreshCount(value => value + 1) }
  const date = value => value ? new Date(value).toLocaleString(i18n.language) : ''
  const listDate = value => value ? new Date(value).toLocaleDateString(i18n.language, { day: '2-digit', month: 'short' }) : ''
  const unreadCount = inboxEmails.filter(email => !readIds.includes(email.id)).length
  const visible = section === 'inbox' && unreadOnly ? emails.filter(email => !readIds.includes(email.id)) : emails

  const loadHistory = async () => {
    if (!selected || historyLoading || historyLoaded) return
    const request = historyRequest.current
    setHistoryLoading(true)
    setHistoryError(false)
    try {
      const result = await adminService.getSupportThread(selected.id, section === 'sent' ? 'sent' : 'received')
      if (request !== historyRequest.current) return
      setThread(current => {
        const messages = [...result.messages]
        for (const email of current?.messages || []) {
          if (!messages.some(item => item.id === email.id && item.direction === email.direction)) messages.push(email)
        }
        messages.sort((a, b) => Date.parse(a.created_at) - Date.parse(b.created_at))
        return { ...result, messages }
      })
      setHistoryLoaded(true)
      if (section === 'inbox') setReadIds(previous => {
        const opened = result.messages.filter(email => email.direction === 'received').map(email => email.id)
        const next = [...new Set([...previous, ...opened])]
        if (next.length === previous.length) return previous
        try { localStorage.setItem(READ_KEY, JSON.stringify(next)) } catch { /* storage unavailable */ }
        return next
      })
    } catch { if (request === historyRequest.current) setHistoryError(true) }
    finally { if (request === historyRequest.current) setHistoryLoading(false) }
  }

  const sendReply = async event => {
    event.preventDefault()
    if (!selected || !reply.trim() || sending) return
    setSending(true); setSendResult(null)
    try {
      const target = [...(thread?.messages || [])].reverse().find(email => email.direction === 'received') || selected
      const message = reply.trim()
      const result = await adminService.replyToSupportEmail(target.id, message)
      setThread(current => current && ({ ...current, messages: [...current.messages, {
        id: result.id, direction: 'sent', from: 'Posterfy Support <support@posterfy.pics>',
        to: [current.contact], subject: selected.subject, text: message, html: null,
        created_at: new Date().toISOString()
      }] }))
      listCache.current.sent = null
      setReply(''); setSendResult('success')
    }
    catch { setSendResult('error') }
    finally { setSending(false) }
  }
  const sendNew = async event => {
    event.preventDefault()
    if (sending) return
    setSending(true); setSendResult(null)
    try {
      await adminService.sendSupportEmail(compose)
      listCache.current.sent = null
      setCompose(current => ({ ...current, to: '', subject: '', message: '' }))
      setSendResult('success')
    } catch { setSendResult('error') }
    finally { setSending(false) }
  }

  return <>
    <TabHeader><TabTitle>{t('ADMIN_Support')}</TabTitle></TabHeader>
    <Tabs role="tablist" aria-label={t('ADMIN_Support')}>
      {['inbox', 'compose', 'sent'].map(key => <Tab key={key} type="button" role="tab" aria-selected={section === key} $active={section === key} onClick={() => switchSection(key)}>
        {t(`ADMIN_SupportTab_${key}`)}{key === 'inbox' && unreadCount > 0 ? ` (${unreadCount})` : ''}
      </Tab>)}
    </Tabs>
    {section === 'compose' ? <Pane><Content><Form onSubmit={sendNew} autoComplete="off">
      <FormRow><Field><label htmlFor="support-from">{t('ADMIN_SupportFrom')}</label>
      <select id="support-from" autoComplete="off" value={compose.sender} onChange={event => setCompose({ ...compose, sender: event.target.value })}>
        <option value="support">support@posterfy.pics</option>
        <option value="welcome">welcome@posterfy.pics</option>
        <option value="receipts">receipts@posterfy.pics</option>
      </select></Field><Field><label htmlFor="support-format">{t('ADMIN_SupportFormat')}</label>
      <select id="support-format" autoComplete="off" value={compose.mode} onChange={event => setCompose({ ...compose, mode: event.target.value })}>
        <option value="text">{t('ADMIN_SupportPlainText')}</option><option value="html">HTML</option>
      </select></Field></FormRow>
      <label htmlFor="support-to">{t('ADMIN_SupportTo')}</label>
      <input id="support-to" type="email" autoComplete="off" required maxLength={254} value={compose.to} onChange={event => setCompose({ ...compose, to: event.target.value })} />
      <label htmlFor="support-subject">{t('ADMIN_SupportSubject')}</label>
      <input id="support-subject" autoComplete="off" required maxLength={200} value={compose.subject} onChange={event => setCompose({ ...compose, subject: event.target.value })} />
      <label htmlFor="support-body">{t('ADMIN_SupportMessage')}</label>
      <textarea id="support-body" autoComplete="off" required maxLength={20000} value={compose.message} onChange={event => setCompose({ ...compose, message: event.target.value })} />
      <button type="submit" disabled={sending}>{sending ? t('ADMIN_SupportSending') : t('ADMIN_SupportSendEmail')}</button>
      {sendResult && <Muted role="status">{t(sendResult === 'success' ? 'ADMIN_SupportEmailSent' : 'ADMIN_SupportSendError')}</Muted>}
    </Form></Content></Pane> : <Layout>
      <Pane aria-label={t(section === 'inbox' ? 'ADMIN_SupportInbox' : 'ADMIN_SupportTab_sent')}>
        <Toolbar><ToolbarLabel>{t(section === 'inbox' ? 'ADMIN_SupportTab_inbox' : 'ADMIN_SupportTab_sent')}</ToolbarLabel><ToolbarActions>
          {section === 'inbox' && <Filter type="button" aria-pressed={unreadOnly} $active={unreadOnly} onClick={() => setUnreadOnly(value => !value)}>{t('ADMIN_SupportUnread')} ({unreadCount})</Filter>}
          <QuietButton type="button" disabled={listLoading} onClick={refreshList}>{t('ADMIN_SupportRefresh')}</QuietButton>
        </ToolbarActions></Toolbar>
        {listLoading && <Content><Muted>{t('ADMIN_SupportLoadingList')}</Muted></Content>}
        {listError && <Content><Muted role="alert">{t('ADMIN_SupportListError')}</Muted><ErrorAction><QuietButton type="button" onClick={refreshList}>{t('ADMIN_SupportRefresh')}</QuietButton></ErrorAction></Content>}
        {!listLoading && !listError && visible.length === 0 && <Content><Muted>{t(section === 'inbox' && unreadOnly ? 'ADMIN_SupportNoUnread' : 'ADMIN_SupportEmpty')}</Muted></Content>}
        {!listLoading && !listError && visible.slice(0, visibleCount).map(email => <Item key={email.id} type="button" aria-pressed={selectedId === email.id} $active={selectedId === email.id} onClick={() => setSelectedId(email.id)}>
          <Line><Name>{section === 'inbox' && !readIds.includes(email.id) && <Dot aria-label={t('ADMIN_SupportUnread')} />}{section === 'inbox' ? email.from : email.to?.join(', ')}</Name><span>{listDate(email.created_at)}</span></Line>
          <Subject>{email.subject || t('ADMIN_SupportNoSubject')}</Subject>
        </Item>)}
        {!listLoading && !listError && visible.length > 0 && <ListFooter>
          <span>{t('ADMIN_SupportShowing', { shown: Math.min(visibleCount, visible.length), total: visible.length })}</span>
          {visible.length > visibleCount && <button type="button" onClick={() => setVisibleCount(count => count + 12)}>{t('ADMIN_SupportShowMore')}</button>}
        </ListFooter>}
      </Pane>
      <Pane>
        {!selectedId && <Content><Muted>{t('ADMIN_SupportSelect')}</Muted></Content>}
        {selectedId && messageLoading && <Content><Muted>{t('ADMIN_SupportLoadingMessage')}</Muted></Content>}
        {selectedId && messageError && <Content><Muted role="alert">{t('ADMIN_SupportMessageError')}</Muted><ErrorAction><QuietButton type="button" onClick={() => setMessageRetry(value => value + 1)}>{t('ADMIN_SupportRefresh')}</QuietButton></ErrorAction></Content>}
        {thread && selected && !messageLoading && <Content>
          <ThreadTitle>{selected.subject || t('ADMIN_SupportNoSubject')}</ThreadTitle>
          {historyLoaded && <Muted>{t('ADMIN_SupportThreadCount', { count: thread.messages.length })} · {thread.contact}</Muted>}
          {historyLoaded && thread.partial && <Muted>{t('ADMIN_SupportThreadPartial')}</Muted>}
          {!historyLoaded && <ListFooter>
            <span>{historyError ? t('ADMIN_SupportHistoryError') : t('ADMIN_SupportHistoryHint')}</span>
            <button type="button" disabled={historyLoading} onClick={loadHistory}>{historyLoading ? t('ADMIN_SupportLoadingHistory') : t('ADMIN_SupportViewHistory')}</button>
          </ListFooter>}
          {thread.messages.map(email => <ThreadCard key={`${email.direction}-${email.id}`}>
            <ThreadDirection $sent={email.direction === 'sent'}>{t(email.direction === 'sent' ? 'ADMIN_SupportDirectionSent' : 'ADMIN_SupportDirectionReceived')}</ThreadDirection>
            <ThreadMeta><strong>{email.from}</strong><span>{date(email.created_at)}</span></ThreadMeta>
            <MessageBody email={email} />
          </ThreadCard>)}
          {section === 'inbox' && <Form $reply onSubmit={sendReply}>
            <label htmlFor="support-reply">{t('ADMIN_SupportWriteReply')}</label>
            <textarea id="support-reply" autoComplete="off" maxLength={10000} value={reply} onChange={event => { setReply(event.target.value); setSendResult(null) }} placeholder={t('ADMIN_SupportWriteReply')} />
            <button type="submit" disabled={sending || !reply.trim()}>{sending ? t('ADMIN_SupportSending') : t('ADMIN_SupportSendReply')}</button>
            {sendResult && <Muted role="status">{t(sendResult === 'success' ? 'ADMIN_SupportSent' : 'ADMIN_SupportSendError')}</Muted>}
          </Form>}
        </Content>}
      </Pane>
    </Layout>}
  </>
}
