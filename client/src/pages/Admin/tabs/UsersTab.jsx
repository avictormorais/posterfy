import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../../contexts/AuthContext'
import adminService from '../../../services/adminService'
import {
  TabHeader, TabTitle, SearchInput, FilterRow, FilterButton,
  Table, Th, Td, Tr, Badge, ActionButton, ActionsRow,
  LoadMoreButton, EmptyState, TableWrapper,
  ModalOverlay, ModalBox, ModalTitle, ModalInput, ModalTextarea, ModalSelect, ModalActions, ModalButton,
  // BulkBar, BulkCount, BulkSelect  /* bulk actions — disabled temporarily */
} from '../AdminStyles'

const STATUS_FILTERS = ['', 'active', 'suspended']

export default function UsersTab() {
  const { t } = useTranslation()
  const { user: currentUser } = useAuth()
  const [users, setUsers] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [loading, setLoading] = useState(true)
  const [editModal, setEditModal] = useState(null)
  const [editForm, setEditForm] = useState({ name: '', username: '', bio: '', badge: '' })
  const [confirm, setConfirm] = useState(null)
  /* bulk selection — disabled temporarily
  const [selectedIds, setSelectedIds] = useState(new Set())
  const [bulkBadge, setBulkBadge] = useState('')
  */

  const fetchUsers = useCallback(async (p = 1, append = false) => {
    setLoading(true)
    try {
      const params = { page: p, limit: 30 }
      if (search.trim()) params.search = search.trim()
      if (statusFilter) params.status = statusFilter
      const res = await adminService.getUsers(params)
      setUsers(prev => append ? [...prev, ...res.users] : res.users)
      setTotal(res.total)
      setHasMore(res.hasMore)
      setPage(p)
      // if (!append) setSelectedIds(new Set())  /* bulk — disabled */
    } catch {}
    setLoading(false)
  }, [search, statusFilter])

  useEffect(() => { fetchUsers(1) }, [fetchUsers])

  const handleAction = async (action, userId) => {
    try {
      if (action === 'ban') await adminService.banUser(userId)
      else if (action === 'unban') await adminService.unbanUser(userId)
      else if (action === 'promote') await adminService.promoteUser(userId)
      else if (action === 'demote') await adminService.demoteUser(userId)
      else if (action === 'forceLogout') await adminService.forceLogout(userId)
      else if (action === 'purge') await adminService.purgeUser(userId)
      setConfirm(null)
      fetchUsers(1)
    } catch {}
  }

  const openEdit = (u) => {
    setEditForm({ name: u.name || '', username: u.username || '', bio: u.bio || '', badge: u.badge || '' })
    setEditModal(u)
  }

  const saveEdit = async () => {
    if (!editModal) return
    try {
      await adminService.editUser(editModal._id, editForm)
      setEditModal(null)
      fetchUsers(1)
    } catch {}
  }

  /*
   * Bulk selection — disabled temporarily
  const toggleSelect = (id) => {
    setSelectedIds(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const toggleSelectAll = () => {
    if (selectedIds.size === users.length && users.length > 0) {
      setSelectedIds(new Set())
    } else {
      setSelectedIds(new Set(users.map(u => u._id)))
    }
  }

  const handleBulkAction = async (action) => {
    if (selectedIds.size === 0) return
    try {
      await adminService.bulkUsers({ ids: [...selectedIds], action, badge: bulkBadge })
      setSelectedIds(new Set())
      setBulkBadge('')
      fetchUsers(1)
    } catch {}
  }
  */

  const statusLabel = (s) => {
    if (s === 'active') return t('ADMIN_Active')
    if (s === 'suspended') return t('ADMIN_Suspended')
    return s
  }

  return (
    <>
      <TabHeader>
        <TabTitle>{t('ADMIN_Users')} ({total})</TabTitle>
        <SearchInput
          placeholder={t('ADMIN_Search')}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </TabHeader>

      <FilterRow>
        {STATUS_FILTERS.map(f => (
          <FilterButton key={f || 'all'} $active={statusFilter === f} onClick={() => setStatusFilter(f)}>
            {f ? statusLabel(f) : t('ADMIN_All')}
          </FilterButton>
        ))}
      </FilterRow>

      {users.length === 0 && !loading ? (
        <EmptyState>{t('ADMIN_NoResults')}</EmptyState>
      ) : (
        <>
          {/* Bulk action bar — disabled temporarily
          {selectedIds.size > 0 && (
            <BulkBar>
              <BulkCount>{selectedIds.size} {t('ADMIN_Selected')}</BulkCount>
              <ActionButton onClick={() => handleBulkAction('ban')}>{t('ADMIN_Ban')}</ActionButton>
              <ActionButton onClick={() => handleBulkAction('unban')}>{t('ADMIN_Unban')}</ActionButton>
              <BulkSelect value={bulkBadge} onChange={e => setBulkBadge(e.target.value)}>
                <option value=''>— {t('ADMIN_NoBadge')} —</option>
                <option value='creator_bronze'>{t('BADGE_TIER_bronze')}</option>
                <option value='creator_silver'>{t('BADGE_TIER_silver')}</option>
                <option value='creator_gold'>{t('BADGE_TIER_gold')}</option>
                <option value='creator_diamond'>{t('BADGE_TIER_diamond')}</option>
              </BulkSelect>
              <ActionButton onClick={() => handleBulkAction('setBadge')}>{t('ADMIN_SetBadge')}</ActionButton>
              <ActionButton onClick={() => setSelectedIds(new Set())}>{t('ADMIN_ClearSelection')}</ActionButton>
            </BulkBar>
          )}
          */}
          <TableWrapper>
          <Table>
            <thead>
              <Tr>
                {/* Checkbox column — bulk disabled
                <Th style={{ width: 36, textAlign: 'center' }}>
                  <input type="checkbox" ... />
                </Th>
                */}
                <Th>{t('ADMIN_Name')}</Th>
                <Th>{t('ADMIN_Username')}</Th>
                <Th>{t('ADMIN_Email')}</Th>
                <Th>{t('ADMIN_Status')}</Th>
                <Th>{t('ADMIN_Role')}</Th>
                <Th>{t('ADMIN_Badge')}</Th>
                <Th>{t('ADMIN_Actions')}</Th>
              </Tr>
            </thead>
            <tbody>
              {users.map(u => {
                const isAdmin = u.permissions?.includes('admin')
                const isSelf = u._id === currentUser?._id
                return (
                  <Tr key={u._id}>
                    {/* Checkbox cell — bulk disabled
                    <Td style={{ width: 36, textAlign: 'center' }}>
                      <input type="checkbox" ... />
                    </Td>
                    */}
                    <Td>{u.name}</Td>
                    <Td>
                      <span
                        style={{ cursor: 'pointer', fontWeight: 600 }}
                        onClick={() => window.open(`/u/${u.username}`, '_blank')}
                        title={t('ADMIN_ViewProfile')}
                      >
                        {u.username} ↗
                      </span>
                    </Td>
                    <Td>{u.email}</Td>
                    <Td><Badge $variant={u.status}>{statusLabel(u.status)}</Badge></Td>
                    <Td>{isAdmin && <Badge $variant="admin">Admin</Badge>}</Td>
                    <Td>{u.badge || '—'}</Td>
                    <Td>
                      <ActionsRow>
                        <ActionButton onClick={() => openEdit(u)}>{t('ADMIN_Edit')}</ActionButton>
                        {u.status === 'active' && !isSelf && (
                          <ActionButton $danger onClick={() => setConfirm({ action: 'ban', id: u._id, label: t('ADMIN_Ban') })}>
                            {t('ADMIN_Ban')}
                          </ActionButton>
                        )}
                        {u.status === 'suspended' && (
                          <ActionButton onClick={() => setConfirm({ action: 'unban', id: u._id, label: t('ADMIN_Unban') })}>
                            {t('ADMIN_Unban')}
                          </ActionButton>
                        )}
                        {u.status === 'suspended' && (
                          <ActionButton $danger onClick={() => setConfirm({ action: 'purge', id: u._id, label: t('ADMIN_ConfirmPurgeUser') })}>
                            {t('ADMIN_PurgeUser')}
                          </ActionButton>
                        )}
                        {!isAdmin && u.status === 'active' && (
                          <ActionButton onClick={() => setConfirm({ action: 'promote', id: u._id, label: t('ADMIN_Promote') })}>
                            {t('ADMIN_Promote')}
                          </ActionButton>
                        )}
                        {isAdmin && !isSelf && (
                          <ActionButton onClick={() => setConfirm({ action: 'demote', id: u._id, label: t('ADMIN_Demote') })}>
                            {t('ADMIN_Demote')}
                          </ActionButton>
                        )}
                        {!isSelf && (
                          <ActionButton onClick={() => setConfirm({ action: 'forceLogout', id: u._id, label: t('ADMIN_ForceLogout') })}>
                            {t('ADMIN_ForceLogout')}
                          </ActionButton>
                        )}
                      </ActionsRow>
                    </Td>
                  </Tr>
                )
              })}
            </tbody>
          </Table>
        </TableWrapper>
        </>
      )}

      {hasMore && <LoadMoreButton onClick={() => fetchUsers(page + 1, true)}>{t('ADMIN_LoadMore')}</LoadMoreButton>}

      {confirm && (
        <ModalOverlay onClick={() => setConfirm(null)}>
          <ModalBox onClick={e => e.stopPropagation()}>
            <ModalTitle>{t('ADMIN_Confirm')}</ModalTitle>
            <p style={{ marginBottom: 16, fontSize: '0.9em' }}>{confirm.label}</p>
            <ModalActions>
              <ModalButton onClick={() => setConfirm(null)}>{t('ADMIN_No')}</ModalButton>
              <ModalButton $primary onClick={() => handleAction(confirm.action, confirm.id)}>{t('ADMIN_Yes')}</ModalButton>
            </ModalActions>
          </ModalBox>
        </ModalOverlay>
      )}

      {editModal && (
        <ModalOverlay onClick={() => setEditModal(null)}>
          <ModalBox onClick={e => e.stopPropagation()}>
            <ModalTitle>{t('ADMIN_Edit')} — {editModal.username}</ModalTitle>
            <label style={{ fontSize: '0.8em', fontWeight: 600, marginBottom: 4, display: 'block' }}>{t('ADMIN_Name')}</label>
            <ModalInput value={editForm.name} onChange={e => setEditForm(p => ({ ...p, name: e.target.value }))} />
            <label style={{ fontSize: '0.8em', fontWeight: 600, marginBottom: 4, display: 'block' }}>{t('ADMIN_Username')}</label>
            <ModalInput value={editForm.username} onChange={e => setEditForm(p => ({ ...p, username: e.target.value }))} />
            <label style={{ fontSize: '0.8em', fontWeight: 600, marginBottom: 4, display: 'block' }}>{t('ADMIN_Bio')}</label>
            <ModalTextarea value={editForm.bio} onChange={e => setEditForm(p => ({ ...p, bio: e.target.value }))} rows={3} />
            <label style={{ fontSize: '0.8em', fontWeight: 600, marginBottom: 4, display: 'block' }}>{t('ADMIN_Badge')}</label>
            <ModalSelect value={editForm.badge} onChange={e => setEditForm(p => ({ ...p, badge: e.target.value }))}>
              <option value=''>— {t('ADMIN_NoBadge')} —</option>
              <option value='creator_bronze'>{t('BADGE_TIER_bronze')}</option>
              <option value='creator_silver'>{t('BADGE_TIER_silver')}</option>
              <option value='creator_gold'>{t('BADGE_TIER_gold')}</option>
              <option value='creator_diamond'>{t('BADGE_TIER_diamond')}</option>
            </ModalSelect>
            <ModalActions>
              <ModalButton onClick={() => setEditModal(null)}>{t('Cancel')}</ModalButton>
              <ModalButton $primary onClick={saveEdit}>{t('ADMIN_Save')}</ModalButton>
            </ModalActions>
          </ModalBox>
        </ModalOverlay>
      )}
    </>
  )
}
