import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import adminService from '../../../services/adminService'
import {
  TabHeader, TabTitle, SearchInput, FilterRow, FilterButton,
  Table, Th, Td, Tr, Badge, ActionButton, ActionsRow,
  LoadMoreButton, EmptyState, TableWrapper,
  ModalOverlay, ModalBox, ModalTitle, ModalActions, ModalButton, ModalInput
} from '../AdminStyles'
import styled from 'styled-components'

const ModalLabel = styled.label`
  font-size: 0.8em;
  font-weight: 600;
  color: var(--textSecondary);
  margin-bottom: 2px;
  display: block;
`

const ClickableCell = styled.span`
  cursor: pointer;
  font-weight: 600;
  &:hover { text-decoration: underline; opacity: 0.8; }
`

const PosterPreviewLayout = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
  align-items: flex-start;
`

const PosterCanvasWrap = styled.div`
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  background: var(--borderColor);
  width: 124px;
  height: 175px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    width: 124px;
    height: 175px;
    object-fit: cover;
    border-radius: 8px;
  }
`

const PosterPlaceholder = styled.div`
  width: 124px;
  height: 175px;
  border-radius: 8px;
  background: var(--borderColor);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  opacity: 0.3;
`

const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 6px 12px;
  font-size: 0.82em;
  flex: 1;
  align-content: start;
`

const MetaLabel = styled.span`
  color: var(--textSecondary);
  font-weight: 700;
  white-space: nowrap;
`

const MetaValue = styled.span`
  color: var(--textColor);
  word-break: break-word;
`

const VIS_FILTERS = ['', 'public', 'private']
const DEL_FILTERS = ['false', 'true', 'all']
const SORT_OPTIONS = ['recent', 'popular', 'views', 'downloads']

export default function PostersTab() {
  const { t } = useTranslation()
  const [posters, setPosters] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)
  const [search, setSearch] = useState('')
  const [visibility, setVisibility] = useState('')
  const [isDeleted, setIsDeleted] = useState('false')
  const [sort, setSort] = useState('recent')
  const [loading, setLoading] = useState(true)
  const [confirm, setConfirm] = useState(null)
  const [editModal, setEditModal] = useState(null)
  const [previewModal, setPreviewModal] = useState(null)
  const [previewData, setPreviewData] = useState(null)

  const fetchPosters = useCallback(async (p = 1, append = false) => {
    setLoading(true)
    try {
      const params = { page: p, limit: 30, isDeleted, sort }
      if (search.trim()) params.search = search.trim()
      if (visibility) params.visibility = visibility
      const res = await adminService.getPosters(params)
      setPosters(prev => append ? [...prev, ...res.posters] : res.posters)
      setTotal(res.total)
      setHasMore(res.hasMore)
      setPage(p)
    } catch {}
    setLoading(false)
  }, [search, visibility, isDeleted, sort])

  useEffect(() => { fetchPosters(1) }, [fetchPosters])

  const handleAction = async (action, id) => {
    try {
      if (action === 'delete') await adminService.deletePoster(id)
      else if (action === 'restore') await adminService.restorePoster(id)
      else if (action === 'purge') await adminService.purgePoster(id)
      else if (action === 'makePublic') await adminService.changeVisibility(id, 'public')
      else if (action === 'makePrivate') await adminService.changeVisibility(id, 'private')
      setConfirm(null)
      fetchPosters(1)
    } catch {}
  }

  const openEditModal = (poster) => {
    setEditModal({
      id: poster._id,
      views: poster.views ?? 0,
      downloads: poster.downloads ?? 0,
      favoritesCount: poster.favoritesCount ?? 0,
    })
  }

  const handleSaveMetrics = async () => {
    if (!editModal) return
    try {
      await adminService.editPoster(editModal.id, {
        views: Number(editModal.views),
        downloads: Number(editModal.downloads),
        favoritesCount: Number(editModal.favoritesCount),
      })
      setEditModal(null)
      fetchPosters(1)
    } catch {}
  }

  const openPreview = async (p) => {
    setPreviewModal(p)
    setPreviewData(null)
    try {
      const res = await adminService.getPoster(p._id)
      setPreviewData(res.poster)
    } catch {}
  }

  const closePreview = () => {
    setPreviewModal(null)
    setPreviewData(null)
  }

  const visLabel = (v) => {
    if (v === 'public') return t('ADMIN_Public')
    if (v === 'private') return t('ADMIN_Private')
    return v
  }

  const delLabel = (d) => {
    if (d === 'false') return t('ADMIN_Active')
    if (d === 'true') return t('ADMIN_Deleted')
    return t('ADMIN_All')
  }

  const fmtDate = (d) => d ? new Date(d).toLocaleDateString() : '—'

  return (
    <>
      <TabHeader>
        <TabTitle>{t('ADMIN_Posters')} ({total})</TabTitle>
        <SearchInput
          placeholder={t('ADMIN_Search')}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </TabHeader>

      <FilterRow>
        {DEL_FILTERS.map(f => (
          <FilterButton key={f} $active={isDeleted === f} onClick={() => setIsDeleted(f)}>
            {delLabel(f)}
          </FilterButton>
        ))}
        <span style={{ width: 1, background: 'var(--borderColor)', margin: '0 4px' }} />
        {VIS_FILTERS.map(f => (
          <FilterButton key={f || 'allvis'} $active={visibility === f} onClick={() => setVisibility(f)}>
            {f ? visLabel(f) : t('ADMIN_All')}
          </FilterButton>
        ))}
        <span style={{ width: 1, background: 'var(--borderColor)', margin: '0 4px' }} />
        {SORT_OPTIONS.map(s => (
          <FilterButton key={s} $active={sort === s} onClick={() => setSort(s)}>
            {s === 'recent' ? t('ADMIN_Date') : s === 'popular' ? t('ADMIN_Score') : s === 'views' ? t('ADMIN_Views') : t('ADMIN_Downloads')}
          </FilterButton>
        ))}
      </FilterRow>

      {posters.length === 0 && !loading ? (
        <EmptyState>{t('ADMIN_NoResults')}</EmptyState>
      ) : (
        <TableWrapper>
          <Table>
            <thead>
              <Tr>
                <Th>{t('ADMIN_Album')}</Th>
                <Th>{t('ADMIN_Artist')}</Th>
                <Th>{t('ADMIN_Author')}</Th>
                <Th>{t('ADMIN_Visibility')}</Th>
                <Th>{t('ADMIN_Views')}</Th>
                <Th>{t('ADMIN_Downloads')}</Th>
                <Th>{t('ADMIN_Favorites')}</Th>
                <Th>{t('ADMIN_Created')}</Th>
                <Th>{t('ADMIN_Actions')}</Th>
              </Tr>
            </thead>
            <tbody>
              {posters.map(p => (
                <Tr key={p._id}>
                  <Td><ClickableCell onClick={() => openPreview(p)}>{p.albumName}</ClickableCell></Td>
                  <Td>{p.artistsName}</Td>
                  <Td>{p.authorId?.username || '—'}</Td>
                  <Td>
                    {p.isDeleted
                      ? <Badge $variant="deleted">{t('ADMIN_Deleted')}</Badge>
                      : <Badge $variant={p.visibility}>{visLabel(p.visibility)}</Badge>
                    }
                  </Td>
                  <Td>{p.views}</Td>
                  <Td>{p.downloads}</Td>
                  <Td>{p.favoritesCount}</Td>
                  <Td>{fmtDate(p.createdAt)}</Td>
                  <Td>
                    <ActionsRow>
                      {!p.isDeleted && (
                        <>
                          <ActionButton onClick={() => openEditModal(p)}>
                            {t('ADMIN_EditMetrics')}
                          </ActionButton>
                          <ActionButton $danger onClick={() => setConfirm({ action: 'delete', id: p._id, label: t('ADMIN_Delete') })}>
                            {t('ADMIN_Delete')}
                          </ActionButton>
                          {p.visibility === 'public'
                            ? <ActionButton onClick={() => handleAction('makePrivate', p._id)}>{t('ADMIN_MakePrivate')}</ActionButton>
                            : <ActionButton onClick={() => handleAction('makePublic', p._id)}>{t('ADMIN_MakePublic')}</ActionButton>
                          }
                        </>
                      )}
                      {p.isDeleted && (
                        <>
                          <ActionButton onClick={() => setConfirm({ action: 'restore', id: p._id, label: t('ADMIN_Restore') })}>
                            {t('ADMIN_Restore')}
                          </ActionButton>
                          <ActionButton $danger onClick={() => setConfirm({ action: 'purge', id: p._id, label: t('ADMIN_PurgeConfirm') })}>
                            {t('ADMIN_Purge')}
                          </ActionButton>
                        </>
                      )}
                    </ActionsRow>
                  </Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      )}

      {hasMore && <LoadMoreButton onClick={() => fetchPosters(page + 1, true)}>{t('ADMIN_LoadMore')}</LoadMoreButton>}

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
            <ModalTitle>{t('ADMIN_EditMetrics')}</ModalTitle>
            <ModalLabel>{t('ADMIN_Views')}</ModalLabel>
            <ModalInput
              type="number"
              min="0"
              value={editModal.views}
              onChange={e => setEditModal(m => ({ ...m, views: e.target.value }))}
            />
            <ModalLabel>{t('ADMIN_Downloads')}</ModalLabel>
            <ModalInput
              type="number"
              min="0"
              value={editModal.downloads}
              onChange={e => setEditModal(m => ({ ...m, downloads: e.target.value }))}
            />
            <ModalLabel>{t('ADMIN_Favorites')}</ModalLabel>
            <ModalInput
              type="number"
              min="0"
              value={editModal.favoritesCount}
              onChange={e => setEditModal(m => ({ ...m, favoritesCount: e.target.value }))}
            />
            <ModalActions>
              <ModalButton onClick={() => setEditModal(null)}>{t('ADMIN_Cancel')}</ModalButton>
              <ModalButton $primary onClick={handleSaveMetrics}>{t('ADMIN_Save')}</ModalButton>
            </ModalActions>
          </ModalBox>
        </ModalOverlay>
      )}

      {previewModal && (
        <ModalOverlay onClick={closePreview}>
          <ModalBox onClick={e => e.stopPropagation()} style={{ maxWidth: 560 }}>
            <ModalTitle style={{ marginBottom: 14 }}>
              {previewModal.albumName}
              <span style={{ fontWeight: 400, fontSize: '0.8em', marginLeft: 8, opacity: 0.6 }}>
                {previewModal.artistsName}
              </span>
            </ModalTitle>
            <PosterPreviewLayout>
              <PosterCanvasWrap>
                {(previewData?.posterJson?.albumCover)
                  ? <img src={previewData.posterJson.albumCover} alt={previewModal.albumName} />
                  : <PosterPlaceholder>🎵</PosterPlaceholder>
                }
              </PosterCanvasWrap>
              <MetaGrid>
                <MetaLabel>{t('ADMIN_Author')}</MetaLabel>
                <MetaValue>{previewModal.authorId?.username || '—'}</MetaValue>

                <MetaLabel>{t('ADMIN_Status')}</MetaLabel>
                <MetaValue>
                  {previewModal.isDeleted
                    ? <Badge $variant="deleted">{t('ADMIN_Deleted')}</Badge>
                    : <Badge $variant={previewModal.visibility}>{visLabel(previewModal.visibility)}</Badge>
                  }
                </MetaValue>

                <MetaLabel>{t('ADMIN_Views')}</MetaLabel>
                <MetaValue>{previewModal.views.toLocaleString()}</MetaValue>

                <MetaLabel>{t('ADMIN_Downloads')}</MetaLabel>
                <MetaValue>{previewModal.downloads.toLocaleString()}</MetaValue>

                <MetaLabel>{t('ADMIN_Favorites')}</MetaLabel>
                <MetaValue>{previewModal.favoritesCount.toLocaleString()}</MetaValue>

                <MetaLabel>{t('ADMIN_Created')}</MetaLabel>
                <MetaValue>{fmtDate(previewModal.createdAt)}</MetaValue>

                <MetaLabel>ID</MetaLabel>
                <MetaValue style={{ fontSize: '0.85em', opacity: 0.6, fontFamily: 'monospace' }}>
                  {previewModal._id}
                </MetaValue>
              </MetaGrid>
            </PosterPreviewLayout>
            <ModalActions>
              <ModalButton onClick={() => window.open(`/p/${previewModal._id}`, '_blank')}>
                {t('ADMIN_OpenPoster')} ↗
              </ModalButton>
              <ModalButton $primary onClick={closePreview}>{t('ADMIN_Close')}</ModalButton>
            </ModalActions>
          </ModalBox>
        </ModalOverlay>
      )}
    </>
  )
}
