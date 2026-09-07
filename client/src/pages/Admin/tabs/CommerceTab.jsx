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

const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 18px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const MetricCard = styled.div`
  border: 1px solid var(--borderColor);
  border-radius: 16px;
  padding: 18px;
  background: var(--glassBackground);
`

const MetricLabel = styled.p`
  margin: 0 0 8px;
  color: var(--textSecondary);
  font-size: 0.78em;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`

const MetricValue = styled.p`
  margin: 0;
  color: var(--textColor);
  font-size: clamp(1.45rem, 3vw, 2.15rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  overflow-wrap: anywhere;
`

const MetricMeta = styled.p`
  margin: 8px 0 0;
  color: var(--textSecondary);
  font-size: 0.82em;
  line-height: 1.35;
`

const CommerceLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(360px, 0.9fr);
  gap: 18px;
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`

const PanelCard = styled.div`
  border: 1px solid var(--borderColor);
  border-radius: 18px;
  padding: 18px;
  background: var(--glassBackground);
  overflow: hidden;
`

const PanelTitle = styled.h3`
  margin: 0;
  color: var(--textColor);
  font-size: 1em;
  font-weight: 850;
`

const PanelSubtitle = styled.p`
  margin: 5px 0 0;
  color: var(--textSecondary);
  font-size: 0.82em;
`

const PanelHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  flex-wrap: wrap;
`

const PeriodRow = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`

const PeriodButton = styled.button`
  border: 1px solid ${({ $active }) => $active ? 'var(--AccentColor)' : 'var(--borderColor)'};
  background: ${({ $active }) => $active ? 'var(--AccentColor)' : 'transparent'};
  color: ${({ $active }) => $active ? '#fff' : 'var(--textColor)'};
  border-radius: 999px;
  padding: 5px 10px;
  font-size: 0.72em;
  font-weight: 750;
  cursor: pointer;

  &:hover {
    border-color: var(--AccentColor);
  }
`

const BarChart = styled.div`
  display: flex;
  align-items: stretch;
  gap: 5px;
  height: 190px;
  margin-top: 18px;
  padding: 12px 0 28px;
  border-bottom: 1px solid var(--borderColor);
`

const BarWrap = styled.div`
  flex: 1;
  min-width: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
`

const Bar = styled.div`
  width: 100%;
  min-height: ${({ $height }) => $height > 0 ? '8px' : '2px'};
  height: ${({ $height }) => `${Math.max(2, $height)}%`};
  flex: 0 0 auto;
  border-radius: 999px 999px 3px 3px;
  background: ${({ $active }) => $active
    ? 'var(--AccentColor)'
    : 'color-mix(in srgb, var(--AccentColor) 28%, var(--borderColor))'};
  opacity: ${({ $height }) => $height > 0 ? 1 : 0.35};
`

const BarLabel = styled.span`
  color: var(--textSecondary);
  font-size: 0.65em;
  transform: rotate(-42deg);
  transform-origin: center;
  white-space: nowrap;
  margin-top: 6px;
`

const InsightRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-top: 18px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const InsightPill = styled.div`
  border: 1px solid var(--borderColor);
  border-radius: 12px;
  padding: 12px;
  background: color-mix(in srgb, var(--backgroundColor) 70%, transparent);
`

const RevenueBreakdown = styled.div`
  display: grid;
  gap: 8px;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid var(--borderColor);
`

const BreakdownRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  color: var(--textSecondary);
  font-size: 0.84em;

  strong {
    color: ${({ $negative }) => $negative ? '#dc3545' : 'var(--textColor)'};
    white-space: nowrap;
  }
`

const MiniGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 18px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const ListStack = styled.div`
  display: grid;
  gap: 0;
  margin-top: 14px;
`

const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--borderColor);
  min-width: 0;

  &:last-child {
    border-bottom: 0;
  }
`

const ItemMain = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  max-width: calc(100% - 108px);
`

const ItemTitle = styled.p`
  margin: 0;
  color: var(--textColor);
  font-size: 0.86em;
  font-weight: 750;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.25;
`

const ItemMeta = styled.p`
  margin: 3px 0 0;
  color: var(--textSecondary);
  font-size: 0.74em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`

const ItemValue = styled.div`
  flex: 0 0 96px;
  max-width: 96px;
  text-align: right;
  font-size: 0.82em;
  font-weight: 800;
  color: var(--textColor);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const PAYMENT_STATES = ['', 'unpaid', 'paid', 'partially_refunded', 'refunded', 'failed']
const UNLOCK_STATES = ['', 'active', 'revoked']
const ACCOUNT_ACCESS_STATES = ['', 'active', 'revoked']
const COMMERCE_PERIODS = ['7', '30', '90', 'all']

export default function CommerceTab() {
  const { t } = useTranslation()
  const [view, setView] = useState('overview')
  const [period, setPeriod] = useState('30')
  const [overview, setOverview] = useState(null)
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

  const fetchOverview = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const result = await adminService.getCommerceOverview({ period })
      setOverview(result)
      setTotal(result.totals?.sales || 0)
    } catch (requestError) {
      setError(requestError.message || t('ADMIN_CommerceLoadFailed'))
    } finally {
      setLoading(false)
    }
  }, [period, t])

  const fetchItems = useCallback(async (nextPage = 1, append = false) => {
    if (view === 'overview') return
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
    const timer = setTimeout(() => {
      if (view === 'overview') fetchOverview()
      else fetchItems(1)
    }, 250)
    return () => clearTimeout(timer)
  }, [fetchItems, fetchOverview, view])

  const changeView = (nextView) => {
    setView(nextView)
    setState('')
    setItems([])
    setTotal(0)
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
  const dailySales = overview?.dailySales || []
  const maxDailySales = Math.max(1, ...dailySales.map(day => day.sales || 0))
  const bestDay = dailySales.reduce((best, day) => (
    !best || (day.sales || 0) > (best.sales || 0) ? day : best
  ), null)
  const currency = overview?.currency || 'usd'
  const recentPayments = overview?.recentPayments || []
  const topAlbums = overview?.topAlbums || []
  const topCustomers = overview?.topCustomers || []
  const selectedPeriod = overview?.period || period
  const selectedTotals = overview?.periods?.selected || {}
  const periodLabel = selectedPeriod === 'all' ? t('ADMIN_AllTime') : t('ADMIN_PeriodDays', { days: selectedPeriod })
  const updatedAt = overview?.cachedAt ? new Date(overview.cachedAt).toLocaleTimeString() : null

  return (
    <>
      <TabHeader>
        <TabTitle>{t('ADMIN_Commerce')}{view !== 'overview' ? ` (${total})` : ''}</TabTitle>
        {view !== 'overview' && (
          <SearchInput
            value={search}
            onChange={event => setSearch(event.target.value)}
            placeholder={t('ADMIN_CommerceSearch')}
          />
        )}
      </TabHeader>

      <FilterRow>
        <FilterButton $active={view === 'overview'} onClick={() => changeView('overview')}>
          {t('ADMIN_CommerceHome')}
        </FilterButton>
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

      {view !== 'overview' && (
        <FilterRow>
          {filters.map(filter => (
            <FilterButton key={filter || 'all'} $active={state === filter} onClick={() => setState(filter)}>
              {filter || t('ADMIN_All')}
            </FilterButton>
          ))}
        </FilterRow>
      )}

      {error && <Message $error role="alert">{error}</Message>}
      {view === 'overview' ? (
        !overview && !loading ? (
          <EmptyState>{t('ADMIN_NoResults')}</EmptyState>
        ) : overview ? (
          <>
            <OverviewGrid>
              <MetricCard>
                <MetricLabel>{t('ADMIN_NetRevenue')}</MetricLabel>
                <MetricValue>{formatAmount(overview.totals?.netRevenue, currency)}</MetricValue>
                <MetricMeta>{t('ADMIN_GrossRevenue')}: {formatAmount(overview.totals?.grossRevenue, currency)}</MetricMeta>
              </MetricCard>
              <MetricCard>
                <MetricLabel>{t('ADMIN_TotalSales')}</MetricLabel>
                <MetricValue>{overview.totals?.sales || 0}</MetricValue>
                <MetricMeta>{t('ADMIN_AverageOrder')}: {formatAmount(overview.totals?.averageOrderValue, currency)}</MetricMeta>
              </MetricCard>
              <MetricCard>
                <MetricLabel>{t('ADMIN_UniqueCustomers')}</MetricLabel>
                <MetricValue>{overview.totals?.uniqueCustomers || 0}</MetricValue>
                <MetricMeta>{t('ADMIN_RevenuePerCustomer')}: {formatAmount(overview.totals?.revenuePerCustomer, currency)}</MetricMeta>
              </MetricCard>
              <MetricCard>
                <MetricLabel>{t('ADMIN_PrintReadyAccess')}</MetricLabel>
                <MetricValue>{overview.entitlements?.activeUnlocks || 0}</MetricValue>
                <MetricMeta>{t('ADMIN_AccountAccess')}: {overview.entitlements?.activeAccountGrants || 0}</MetricMeta>
              </MetricCard>
            </OverviewGrid>

            <CommerceLayout>
              <PanelCard>
                <PanelHeader>
                  <div>
                    <PanelTitle>{t('ADMIN_SalesByDay')}</PanelTitle>
                    <PanelSubtitle>
                      {periodLabel}{updatedAt ? ` • ${t('ADMIN_UpdatedAt', { time: updatedAt })}` : ''}
                    </PanelSubtitle>
                  </div>
                  <PeriodRow aria-label={t('ADMIN_SelectPeriod')}>
                    {COMMERCE_PERIODS.map(option => (
                      <PeriodButton
                        key={option}
                        $active={period === option}
                        onClick={() => setPeriod(option)}
                      >
                        {option === 'all' ? t('ADMIN_All') : `${option}d`}
                      </PeriodButton>
                    ))}
                  </PeriodRow>
                </PanelHeader>
                <BarChart aria-label={t('ADMIN_SalesByDay')}>
                  {dailySales.map((day, index) => {
                    const height = Math.round(((day.sales || 0) / maxDailySales) * 100)
                    const labelDate = new Date(`${day.day}T00:00:00`)
                    const labelEvery = dailySales.length > 60 ? 15 : dailySales.length > 30 ? 10 : 5
                    const showLabel = index % labelEvery === 0 || index === dailySales.length - 1
                    return (
                      <BarWrap key={day.day}>
                        <Bar
                          $height={height}
                          $active={(day.sales || 0) > 0}
                          title={`${labelDate.toLocaleDateString()}: ${formatAmount(day.netRevenue, currency)} • ${day.sales} ${t('ADMIN_SalesLower')}`}
                        />
                        <BarLabel>{showLabel ? labelDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) : ''}</BarLabel>
                      </BarWrap>
                    )
                  })}
                </BarChart>
                <InsightRow>
                  <InsightPill>
                    <MetricLabel>{t('ADMIN_Today')}</MetricLabel>
                    <ItemTitle>{formatAmount(overview.periods?.today?.netRevenue, currency)}</ItemTitle>
                    <ItemMeta>{overview.periods?.today?.sales || 0} {t('ADMIN_SalesLower')}</ItemMeta>
                  </InsightPill>
                  <InsightPill>
                    <MetricLabel>{t('ADMIN_SelectedPeriod')}</MetricLabel>
                    <ItemTitle>{formatAmount(selectedTotals.netRevenue, currency)}</ItemTitle>
                    <ItemMeta>{selectedTotals.sales || 0} {t('ADMIN_SalesLower')}</ItemMeta>
                  </InsightPill>
                  <InsightPill>
                    <MetricLabel>{t('ADMIN_BestDay')}</MetricLabel>
                    <ItemTitle>{bestDay?.day ? new Date(`${bestDay.day}T00:00:00`).toLocaleDateString() : '—'}</ItemTitle>
                    <ItemMeta>{formatAmount(bestDay?.netRevenue, currency)}</ItemMeta>
                  </InsightPill>
                </InsightRow>
                <RevenueBreakdown>
                  <BreakdownRow>
                    <span>{t('ADMIN_GrossRevenue')}</span>
                    <strong>{formatAmount(overview.totals?.grossRevenue, currency)}</strong>
                  </BreakdownRow>
                  <BreakdownRow $negative>
                    <span>{t('ADMIN_Refunded')}</span>
                    <strong>-{formatAmount(overview.totals?.refundedAmount, currency)}</strong>
                  </BreakdownRow>
                  <BreakdownRow>
                    <span>{t('ADMIN_NetRevenue')}</span>
                    <strong>{formatAmount(overview.totals?.netRevenue, currency)}</strong>
                  </BreakdownRow>
                </RevenueBreakdown>
              </PanelCard>

              <div>
                <MiniGrid>
                  <InsightPill>
                    <MetricLabel>{t('ADMIN_RefundRate')}</MetricLabel>
                    <ItemTitle>{overview.totals?.refundRate || 0}%</ItemTitle>
                    <ItemMeta>{formatAmount(overview.totals?.refundedAmount, currency)}</ItemMeta>
                  </InsightPill>
                  <InsightPill>
                    <MetricLabel>{t('ADMIN_OpenFailedCheckouts')}</MetricLabel>
                    <ItemTitle>{overview.checkouts?.open || 0} / {overview.checkouts?.failed || 0}</ItemTitle>
                    <ItemMeta>{t('ADMIN_OpenFailed')}</ItemMeta>
                  </InsightPill>
                </MiniGrid>

                <PanelCard>
                  <PanelTitle>{t('ADMIN_TopAlbums')}</PanelTitle>
                  <PanelSubtitle>{t('ADMIN_ByRevenue')}</PanelSubtitle>
                  <ListStack>
                    {topAlbums.length ? topAlbums.map(album => (
                      <ListItem key={`${album.providerAlbumId}-${album.currency}`}>
                        <ItemMain>
                          <ItemTitle>{album.albumName || '—'}</ItemTitle>
                          <ItemMeta>{album.artistNames?.join(', ') || album.providerAlbumId}</ItemMeta>
                        </ItemMain>
                        <ItemValue>
                          {formatAmount(album.netRevenue, album.currency || currency)}
                          <ItemMeta>{album.sales} {t('ADMIN_SalesLower')}</ItemMeta>
                        </ItemValue>
                      </ListItem>
                    )) : <EmptyState>{t('ADMIN_NoResults')}</EmptyState>}
                  </ListStack>
                </PanelCard>

                <PanelCard style={{ marginTop: 18 }}>
                  <PanelTitle>{t('ADMIN_TopCustomers')}</PanelTitle>
                  <PanelSubtitle>{t('ADMIN_ByRevenue')}</PanelSubtitle>
                  <ListStack>
                    {topCustomers.length ? topCustomers.map(customer => (
                      <ListItem key={`${customer.userId}-${customer.currency}`}>
                        <ItemMain>
                          <ItemTitle>{customer.username || customer.email || t('ADMIN_DeletedUser')}</ItemTitle>
                          <ItemMeta>{customer.email || customer.userId}</ItemMeta>
                        </ItemMain>
                        <ItemValue>
                          {formatAmount(customer.netRevenue, customer.currency || currency)}
                          <ItemMeta>{customer.sales} {t('ADMIN_SalesLower')}</ItemMeta>
                        </ItemValue>
                      </ListItem>
                    )) : <EmptyState>{t('ADMIN_NoResults')}</EmptyState>}
                  </ListStack>
                </PanelCard>

                <PanelCard style={{ marginTop: 18 }}>
                  <PanelTitle>{t('ADMIN_RecentSales')}</PanelTitle>
                  <PanelSubtitle>{t('ADMIN_ConfirmedPaymentsOnly')}</PanelSubtitle>
                  <ListStack>
                    {recentPayments.length ? recentPayments.map(payment => (
                      <ListItem key={payment._id}>
                        <ItemMain>
                          <ItemTitle>{payment.userId?.username || payment.userId?.email || t('ADMIN_DeletedUser')}</ItemTitle>
                          <ItemMeta>{payment.album?.albumName || '—'} • {formatDate(payment.fulfilledAt || payment.createdAt)}</ItemMeta>
                        </ItemMain>
                        <ItemValue>
                          {formatAmount(Math.max(0, (payment.amountTotal || 0) - (payment.amountRefunded || 0)), payment.currency || currency)}
                          <ItemMeta>{payment.paymentStatus}</ItemMeta>
                        </ItemValue>
                      </ListItem>
                    )) : <EmptyState>{t('ADMIN_NoResults')}</EmptyState>}
                  </ListStack>
                </PanelCard>
              </div>
            </CommerceLayout>
          </>
        ) : null
      ) : !loading && !items.length ? (
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
