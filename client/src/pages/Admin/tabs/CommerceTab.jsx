import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import adminService from '../../../services/adminService'
import {
  ActionButton, Badge, EmptyState, FilterButton, FilterRow, LoadMoreButton,
  ModalActions, ModalBox, ModalButton, ModalInput, ModalOverlay, ModalTextarea,
  SearchInput, TabHeader, Table, TableWrapper, TabTitle, Td, Th, Tr
} from '../AdminStyles'

const Message = styled.p`
  margin: 10px 0;
  color: ${({ $error }) => $error ? '#dc3545' : 'var(--textSecondary)'};
`

const IdText = styled.span`
  display: block;
  max-width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.76em;
  color: var(--textSecondary);
`

const PAYMENT_STATES = ['', 'unpaid', 'paid', 'partially_refunded', 'refunded', 'failed']
const UNLOCK_STATES = ['', 'active', 'revoked']
const ACCOUNT_ACCESS_STATES = ['', 'active', 'revoked']

export default function CommerceTab() {
  const { t } = useTranslation()
  const [view, setView] = useState('payments')
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)
  const [search, setSearch] = useState('')
  const [state, setState] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [grantOpen, setGrantOpen] = useState(false)
  const [grant, setGrant] = useState({ userId: '', albumId: '', reason: '' })
  const [revoke, setRevoke] = useState(null)
  const [accountAccessOpen, setAccountAccessOpen] = useState(false)
  const [accountAccess, setAccountAccess] = useState({ user: '', reason: '' })
  const [accountAccessAction, setAccountAccessAction] = useState(null)
  const [reason, setReason] = useState('')

  const fetchItems = useCallback(async (nextPage = 1, append = false) => {
    setLoading(true)
    setError('')
    try {
      const params = { page: nextPage, limit: 30 }
      if (search.trim()) params.search = search.trim()
      if (state) params[view === 'payments' ? 'status' : 'state'] = state
      const result = view === 'payments'
        ? await adminService.getPayments(params)
        : view === 'accountAccess'
          ? await adminService.getPrintReadyAccountAccess(params)
          : await adminService.getPrintUnlocks(params)
      const nextItems = view === 'payments'
        ? result.payments
        : view === 'accountAccess'
          ? result.grants
          : result.unlocks
      setItems(current => append ? [...current, ...nextItems] : nextItems)
      setTotal(result.total)
      setHasMore(result.hasMore)
      setPage(nextPage)
    } catch (requestError) {
      setError(requestError.message || t('ADMIN_CommerceLoadFailed'))
    } finally {
      setLoading(false)
    }
  }, [search, state, t, view])

  useEffect(() => {
    const timer = setTimeout(() => fetchItems(1), 250)
    return () => clearTimeout(timer)
  }, [fetchItems])

  const changeView = (nextView) => {
    setView(nextView)
    setState('')
    setItems([])
  }

  const submitGrant = async () => {
    setLoading(true)
    setError('')
    try {
      await adminService.grantPrintUnlock(grant)
      setGrantOpen(false)
      setGrant({ userId: '', albumId: '', reason: '' })
      if (view === 'unlocks') {
        await fetchItems(1)
      } else {
        setView('unlocks')
        setState('')
      }
    } catch (requestError) {
      setError(requestError.message || t('ADMIN_GrantFailed'))
    } finally {
      setLoading(false)
    }
  }

  const submitAccountAccessGrant = async () => {
    setLoading(true)
    setError('')
    try {
      await adminService.grantPrintReadyAccountAccess(accountAccess)
      setAccountAccessOpen(false)
      setAccountAccess({ user: '', reason: '' })
      if (view === 'accountAccess') {
        await fetchItems(1)
      } else {
        setView('accountAccess')
        setState('')
      }
    } catch (requestError) {
      setError(requestError.message || t('ADMIN_AccountAccessGrantFailed'))
    } finally {
      setLoading(false)
    }
  }

  const submitRevoke = async () => {
    if (!revoke) return
    setLoading(true)
    setError('')
    try {
      await adminService.revokePrintUnlock(revoke._id, reason)
      setRevoke(null)
      setReason('')
      await fetchItems(1)
    } catch (requestError) {
      setError(requestError.message || t('ADMIN_RevokeFailed'))
    } finally {
      setLoading(false)
    }
  }

  const submitAccountAccessAction = async () => {
    if (!accountAccessAction) return
    setLoading(true)
    setError('')
    try {
      if (accountAccessAction.type === 'restore') {
        await adminService.restorePrintReadyAccountAccess(accountAccessAction.grant._id, reason)
      } else {
        await adminService.revokePrintReadyAccountAccess(accountAccessAction.grant._id, reason)
      }
      setAccountAccessAction(null)
      setReason('')
      await fetchItems(1)
    } catch (requestError) {
      setError(requestError.message || (
        accountAccessAction.type === 'restore'
          ? t('ADMIN_AccountAccessRestoreFailed')
          : t('ADMIN_AccountAccessRevokeFailed')
      ))
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (value) => value ? new Date(value).toLocaleString() : '—'
  const formatAmount = (amount, currency = 'usd') => new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currency.toUpperCase()
  }).format((amount || 0) / 100)

  const filters = view === 'payments'
    ? PAYMENT_STATES
    : view === 'accountAccess'
      ? ACCOUNT_ACCESS_STATES
      : UNLOCK_STATES

  return (
    <>
      <TabHeader>
        <TabTitle>{t('ADMIN_Commerce')} ({total})</TabTitle>
        <SearchInput
          value={search}
          onChange={event => setSearch(event.target.value)}
          placeholder={t('ADMIN_CommerceSearch')}
        />
      </TabHeader>

      <FilterRow>
        <FilterButton $active={view === 'payments'} onClick={() => changeView('payments')}>
          {t('ADMIN_Payments')}
        </FilterButton>
        <FilterButton $active={view === 'unlocks'} onClick={() => changeView('unlocks')}>
          {t('ADMIN_Unlocks')}
        </FilterButton>
        <FilterButton $active={view === 'accountAccess'} onClick={() => changeView('accountAccess')}>
          {t('ADMIN_AccountAccess')}
        </FilterButton>
        {view === 'unlocks' && (
          <ActionButton onClick={() => setGrantOpen(true)}>{t('ADMIN_GrantUnlock')}</ActionButton>
        )}
        {view === 'accountAccess' && (
          <ActionButton onClick={() => setAccountAccessOpen(true)}>{t('ADMIN_GrantAccountAccess')}</ActionButton>
        )}
      </FilterRow>

      <FilterRow>
        {filters.map(filter => (
          <FilterButton key={filter || 'all'} $active={state === filter} onClick={() => setState(filter)}>
            {filter || t('ADMIN_All')}
          </FilterButton>
        ))}
      </FilterRow>

      {error && <Message $error role="alert">{error}</Message>}
      {!loading && !items.length ? (
        <EmptyState>{t('ADMIN_NoResults')}</EmptyState>
      ) : (
        <TableWrapper>
          {view === 'payments' ? (
            <Table>
              <thead><Tr>
                <Th>{t('ADMIN_User')}</Th><Th>{t('ADMIN_Album')}</Th><Th>{t('ADMIN_Amount')}</Th>
                <Th>{t('ADMIN_Status')}</Th><Th>{t('ADMIN_Date')}</Th><Th>Stripe</Th>
              </Tr></thead>
              <tbody>{items.map(payment => (
                <Tr key={payment._id}>
                  <Td>{payment.userId?.username || t('ADMIN_DeletedUser')}<IdText>{payment.userId?._id || '—'}</IdText></Td>
                  <Td>{payment.album?.albumName || '—'}<IdText>{payment.album?.artistNames?.join(', ')}</IdText><IdText>{payment.album?.providerAlbumId}</IdText></Td>
                  <Td>{formatAmount(payment.amountTotal, payment.currency)}</Td>
                  <Td><Badge $variant={payment.paymentStatus === 'paid' ? 'active' : undefined}>{payment.paymentStatus}</Badge></Td>
                  <Td>{formatDate(payment.createdAt)}</Td>
                  <Td>
                    <IdText title={payment.stripeCheckoutSessionId}>{payment.stripeCheckoutSessionId || '—'}</IdText>
                    <IdText title={payment.stripePaymentIntentId}>{payment.stripePaymentIntentId || '—'}</IdText>
                    <IdText title={payment.stripeChargeId}>{payment.stripeChargeId || '—'}</IdText>
                  </Td>
                </Tr>
              ))}</tbody>
            </Table>
          ) : view === 'accountAccess' ? (
            <Table>
              <thead><Tr>
                <Th>{t('ADMIN_User')}</Th><Th>{t('ADMIN_Status')}</Th><Th>{t('ADMIN_GrantedBy')}</Th>
                <Th>{t('ADMIN_Date')}</Th><Th>{t('ADMIN_LastUsed')}</Th><Th>{t('ADMIN_Actions')}</Th>
              </Tr></thead>
              <tbody>{items.map(grant => (
                <Tr key={grant._id}>
                  <Td>
                    {grant.userId?.username || '—'}
                    <IdText>{grant.userId?.email}</IdText>
                    <IdText>{grant.userId?._id}</IdText>
                  </Td>
                  <Td><Badge $variant={grant.active ? 'active' : 'suspended'}>{grant.active ? t('ADMIN_Active') : t('ADMIN_Revoked')}</Badge></Td>
                  <Td>{grant.grantedBy?.username || '—'}<IdText>{grant.grantReason}</IdText></Td>
                  <Td>{formatDate(grant.grantedAt)}</Td>
                  <Td>{formatDate(grant.lastUsedAt)}<IdText>{t('ADMIN_UseCount')}: {grant.useCount || 0}</IdText></Td>
                  <Td>
                    {grant.active ? (
                      <ActionButton $danger onClick={() => setAccountAccessAction({ type: 'revoke', grant })}>
                        {t('ADMIN_Revoke')}
                      </ActionButton>
                    ) : (
                      <ActionButton onClick={() => setAccountAccessAction({ type: 'restore', grant })}>
                        {t('ADMIN_Restore')}
                      </ActionButton>
                    )}
                  </Td>
                </Tr>
              ))}</tbody>
            </Table>
          ) : (
            <Table>
              <thead><Tr>
                <Th>{t('ADMIN_User')}</Th><Th>{t('ADMIN_Album')}</Th><Th>{t('ADMIN_Status')}</Th>
                <Th>{t('ADMIN_Source')}</Th><Th>{t('ADMIN_Date')}</Th><Th>{t('ADMIN_Actions')}</Th>
              </Tr></thead>
              <tbody>{items.map(unlock => (
                <Tr key={unlock._id}>
                  <Td>{unlock.userId?.username || '—'}<IdText>{unlock.userId?._id}</IdText></Td>
                  <Td>{unlock.album?.albumName || '—'}<IdText>{unlock.album?.artistNames?.join(', ')}</IdText><IdText>{unlock.album?.providerAlbumId}</IdText></Td>
                  <Td><Badge $variant={unlock.active ? 'active' : 'suspended'}>{unlock.active ? t('ADMIN_Active') : t('ADMIN_Revoked')}</Badge></Td>
                  <Td>{unlock.source}</Td>
                  <Td>{formatDate(unlock.grantedAt)}</Td>
                  <Td>{unlock.active && <ActionButton $danger onClick={() => setRevoke(unlock)}>{t('ADMIN_Revoke')}</ActionButton>}</Td>
                </Tr>
              ))}</tbody>
            </Table>
          )}
        </TableWrapper>
      )}

      {hasMore && <LoadMoreButton disabled={loading} onClick={() => fetchItems(page + 1, true)}>{t('ADMIN_LoadMore')}</LoadMoreButton>}

      {grantOpen && (
        <ModalOverlay onMouseDown={event => event.target === event.currentTarget && setGrantOpen(false)}>
          <ModalBox role="dialog" aria-modal="true" aria-labelledby="grant-unlock-title">
            <h3 id="grant-unlock-title">{t('ADMIN_GrantUnlock')}</h3>
            <ModalInput placeholder={t('ADMIN_UserId')} value={grant.userId} onChange={event => setGrant({ ...grant, userId: event.target.value })} />
            <ModalInput placeholder={t('ADMIN_AlbumId')} value={grant.albumId} onChange={event => setGrant({ ...grant, albumId: event.target.value })} />
            <ModalTextarea placeholder={t('ADMIN_Reason')} value={grant.reason} onChange={event => setGrant({ ...grant, reason: event.target.value })} />
            <ModalActions>
              <ModalButton onClick={() => setGrantOpen(false)}>{t('Cancel')}</ModalButton>
              <ModalButton $primary disabled={loading} onClick={submitGrant}>{t('ADMIN_Grant')}</ModalButton>
            </ModalActions>
          </ModalBox>
        </ModalOverlay>
      )}

      {accountAccessOpen && (
        <ModalOverlay onMouseDown={event => event.target === event.currentTarget && setAccountAccessOpen(false)}>
          <ModalBox role="dialog" aria-modal="true" aria-labelledby="grant-account-access-title">
            <h3 id="grant-account-access-title">{t('ADMIN_GrantAccountAccess')}</h3>
            <p>{t('ADMIN_AccountAccessHelp')}</p>
            <ModalInput
              placeholder={t('ADMIN_UserLookup')}
              value={accountAccess.user}
              onChange={event => setAccountAccess({ ...accountAccess, user: event.target.value })}
            />
            <ModalTextarea
              placeholder={t('ADMIN_Reason')}
              value={accountAccess.reason}
              onChange={event => setAccountAccess({ ...accountAccess, reason: event.target.value })}
            />
            <ModalActions>
              <ModalButton onClick={() => setAccountAccessOpen(false)}>{t('Cancel')}</ModalButton>
              <ModalButton $primary disabled={loading} onClick={submitAccountAccessGrant}>{t('ADMIN_Grant')}</ModalButton>
            </ModalActions>
          </ModalBox>
        </ModalOverlay>
      )}

      {revoke && (
        <ModalOverlay onMouseDown={event => event.target === event.currentTarget && setRevoke(null)}>
          <ModalBox role="dialog" aria-modal="true" aria-labelledby="revoke-unlock-title">
            <h3 id="revoke-unlock-title">{t('ADMIN_RevokeUnlock')}</h3>
            <p>{revoke.album?.albumName}</p>
            <ModalTextarea placeholder={t('ADMIN_Reason')} value={reason} onChange={event => setReason(event.target.value)} />
            <ModalActions>
              <ModalButton onClick={() => setRevoke(null)}>{t('Cancel')}</ModalButton>
              <ModalButton $primary disabled={loading} onClick={submitRevoke}>{t('ADMIN_Revoke')}</ModalButton>
            </ModalActions>
          </ModalBox>
        </ModalOverlay>
      )}

      {accountAccessAction && (
        <ModalOverlay onMouseDown={event => event.target === event.currentTarget && setAccountAccessAction(null)}>
          <ModalBox role="dialog" aria-modal="true" aria-labelledby="account-access-action-title">
            <h3 id="account-access-action-title">
              {accountAccessAction.type === 'restore' ? t('ADMIN_RestoreAccountAccess') : t('ADMIN_RevokeAccountAccess')}
            </h3>
            <p>{accountAccessAction.grant.userId?.email || accountAccessAction.grant.userId?.username}</p>
            <ModalTextarea placeholder={t('ADMIN_Reason')} value={reason} onChange={event => setReason(event.target.value)} />
            <ModalActions>
              <ModalButton onClick={() => setAccountAccessAction(null)}>{t('Cancel')}</ModalButton>
              <ModalButton $primary disabled={loading} onClick={submitAccountAccessAction}>
                {accountAccessAction.type === 'restore' ? t('ADMIN_Restore') : t('ADMIN_Revoke')}
              </ModalButton>
            </ModalActions>
          </ModalBox>
        </ModalOverlay>
      )}
    </>
  )
}
