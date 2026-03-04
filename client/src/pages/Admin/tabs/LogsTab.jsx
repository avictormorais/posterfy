import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import adminService from '../../../services/adminService'
import {
  TabHeader, TabTitle, FilterRow, FilterButton, SearchInput,
  Table, Th, Td, Tr, Badge,
  LoadMoreButton, EmptyState, TableWrapper
} from '../AdminStyles'

const ACTION_TYPES = [
  '', 'ban_user', 'unban_user', 'delete_poster', 'restore_poster',
  'change_visibility', 'edit_poster', 'promote_admin', 'demote_admin', 'force_logout', 'edit_user'
]

export default function LogsTab() {
  const { t } = useTranslation()
  const [logs, setLogs] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)
  const [actionFilter, setActionFilter] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchLogs = useCallback(async (p = 1, append = false) => {
    setLoading(true)
    try {
      const params = { page: p, limit: 30 }
      if (actionFilter) params.action = actionFilter
      const res = await adminService.getLogs(params)
      setLogs(prev => append ? [...prev, ...res.logs] : res.logs)
      setTotal(res.total)
      setHasMore(res.hasMore)
      setPage(p)
    } catch {}
    setLoading(false)
  }, [actionFilter])

  useEffect(() => { fetchLogs(1) }, [fetchLogs])

  const fmtDate = (d) => d ? new Date(d).toLocaleString() : '—'

  return (
    <>
      <TabHeader>
        <TabTitle>{t('ADMIN_Logs')} ({total})</TabTitle>
      </TabHeader>

      <FilterRow>
        {ACTION_TYPES.map(a => (
          <FilterButton key={a || 'all'} $active={actionFilter === a} onClick={() => setActionFilter(a)}>
            {a || t('ADMIN_All')}
          </FilterButton>
        ))}
      </FilterRow>

      {logs.length === 0 && !loading ? (
        <EmptyState>{t('ADMIN_NoResults')}</EmptyState>
      ) : (
        <TableWrapper>
          <Table>
            <thead>
              <Tr>
                <Th>{t('ADMIN_Date')}</Th>
                <Th>{t('ADMIN_Action')}</Th>
                <Th>{t('ADMIN_Admin')}</Th>
                <Th>{t('ADMIN_Target')}</Th>
                <Th>IP</Th>
              </Tr>
            </thead>
            <tbody>
              {logs.map(l => (
                <Tr key={l._id}>
                  <Td>{fmtDate(l.createdAt)}</Td>
                  <Td><Badge>{l.action}</Badge></Td>
                  <Td>{l.adminId?.username || l.adminId?._id || '—'}</Td>
                  <Td style={{ fontSize: '0.8em', opacity: 0.7 }}>{l.targetId}</Td>
                  <Td style={{ fontSize: '0.8em', opacity: 0.7 }}>{l.ip || '—'}</Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      )}

      {hasMore && <LoadMoreButton onClick={() => fetchLogs(page + 1, true)}>{t('ADMIN_LoadMore')}</LoadMoreButton>}
    </>
  )
}
