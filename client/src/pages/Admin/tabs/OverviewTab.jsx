import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import adminService from '../../../services/adminService'
import { TabHeader, TabTitle, EmptyState, Table, Th, Td, Tr, TableWrapper } from '../AdminStyles'
import { IoPeople, IoImage, IoTrendingUp, IoEye, IoDownload, IoHeart } from 'react-icons/io5'

const Section = styled.section`
  margin-bottom: 28px;
`

const SectionLabel = styled.h3`
  font-size: 0.75em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: var(--textSecondary);
  margin: 0 0 12px;
  display: flex;
  align-items: center;
  gap: 6px;

  svg { font-size: 1.2em; }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols || 4}, 1fr);
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
`

const StatCard = styled.div`
  border: 1px solid var(--borderColor);
  border-radius: 12px;
  padding: 18px 20px;
  background: var(--glassBackground);
  display: flex;
  flex-direction: column;
  gap: 2px;
  position: relative;
  overflow: hidden;

  ${({ $accent }) => $accent && `
    border-left: 3px solid var(--AccentColor);
  `}
`

const StatLabel = styled.span`
  font-size: 0.75em;
  color: var(--textSecondary);
  font-weight: 600;
`

const StatValue = styled.span`
  font-size: 1.7em;
  font-weight: 800;
  line-height: 1.2;
`

const HighlightRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-bottom: 28px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`

const HighlightCard = styled.div`
  border-radius: 14px;
  padding: 22px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  background: ${({ $bg }) => $bg || 'var(--glassBackground)'};
  border: 1px solid var(--borderColor);
`

const HighlightIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--AccentColor);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    font-size: 1.3em;
    color: #fff;
    fill: var(--backgroundColor);
  }
`

const HighlightInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const HighlightValue = styled.span`
  font-size: 1.5em;
  font-weight: 800;
  line-height: 1.2;
`

const HighlightLabel = styled.span`
  font-size: 0.78em;
  color: var(--textSecondary);
  font-weight: 600;
`

export default function OverviewTab() {
  const { t } = useTranslation()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    adminService.getOverview()
      .then(setData)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <EmptyState>{t('Loading')}</EmptyState>
  if (!data) return <EmptyState>{t('ADMIN_NoResults')}</EmptyState>

  return (
    <>
      <TabHeader>
        <TabTitle>{t('ADMIN_Overview')}</TabTitle>
      </TabHeader>

      <HighlightRow>
        <HighlightCard>
          <HighlightIcon><IoEye /></HighlightIcon>
          <HighlightInfo>
            <HighlightValue>{data.engagement.totalViews.toLocaleString()}</HighlightValue>
            <HighlightLabel>{t('ADMIN_Views')}</HighlightLabel>
          </HighlightInfo>
        </HighlightCard>
        <HighlightCard>
          <HighlightIcon><IoDownload /></HighlightIcon>
          <HighlightInfo>
            <HighlightValue>{data.engagement.totalDownloads.toLocaleString()}</HighlightValue>
            <HighlightLabel>{t('ADMIN_Downloads')}</HighlightLabel>
          </HighlightInfo>
        </HighlightCard>
        <HighlightCard>
          <HighlightIcon><IoHeart /></HighlightIcon>
          <HighlightInfo>
            <HighlightValue>{data.engagement.totalFavorites.toLocaleString()}</HighlightValue>
            <HighlightLabel>{t('ADMIN_Favorites')}</HighlightLabel>
          </HighlightInfo>
        </HighlightCard>
      </HighlightRow>

      <Section>
        <SectionLabel><IoPeople /> {t('ADMIN_Users')}</SectionLabel>
        <Grid $cols={4}>
          <StatCard>
            <StatLabel>{t('ADMIN_TotalUsers')}</StatLabel>
            <StatValue>{data.users.total}</StatValue>
          </StatCard>
          <StatCard>
            <StatLabel>{t('ADMIN_ActiveUsers')}</StatLabel>
            <StatValue>{data.users.active}</StatValue>
          </StatCard>
          <StatCard>
            <StatLabel>{t('ADMIN_SuspendedUsers')}</StatLabel>
            <StatValue>{data.users.suspended}</StatValue>
          </StatCard>
          <StatCard>
            <StatLabel>{t('ADMIN_Admins')}</StatLabel>
            <StatValue>{data.users.admins}</StatValue>
          </StatCard>
        </Grid>
      </Section>

      <Section>
        <SectionLabel><IoImage /> {t('ADMIN_Posters')}</SectionLabel>
        <Grid $cols={4}>
          <StatCard>
            <StatLabel>{t('ADMIN_TotalPosters')}</StatLabel>
            <StatValue>{data.posters.total}</StatValue>
          </StatCard>
          <StatCard>
            <StatLabel>{t('ADMIN_PublicPosters')}</StatLabel>
            <StatValue>{data.posters.public}</StatValue>
          </StatCard>
          <StatCard>
            <StatLabel>{t('ADMIN_PrivatePosters')}</StatLabel>
            <StatValue>{data.posters.private}</StatValue>
          </StatCard>
          <StatCard>
            <StatLabel>{t('ADMIN_DeletedPosters')}</StatLabel>
            <StatValue>{data.posters.deleted}</StatValue>
          </StatCard>
        </Grid>
      </Section>

      <Section>
        <SectionLabel><IoTrendingUp /> {t('ADMIN_Last30d')}</SectionLabel>
        <Grid $cols={4}>
          <StatCard>
            <StatLabel>{t('ADMIN_Last7d')} — {t('ADMIN_Users')}</StatLabel>
            <StatValue>{data.users.last7d}</StatValue>
          </StatCard>
          <StatCard>
            <StatLabel>{t('ADMIN_Last30d')} — {t('ADMIN_Users')}</StatLabel>
            <StatValue>{data.users.last30d}</StatValue>
          </StatCard>
          <StatCard>
            <StatLabel>{t('ADMIN_Last7d')} — {t('ADMIN_Posters')}</StatLabel>
            <StatValue>{data.posters.last7d}</StatValue>
          </StatCard>
          <StatCard>
            <StatLabel>{t('ADMIN_Last30d')} — {t('ADMIN_Posters')}</StatLabel>
            <StatValue>{data.posters.last30d}</StatValue>
          </StatCard>
        </Grid>
      </Section>

      {data.top5Posters?.length > 0 && (
        <>
          <TabTitle style={{ fontSize: '1.1em', marginBottom: 12, marginTop: 8 }}>{t('ADMIN_TopPosters')}</TabTitle>
          <TableWrapper>
            <Table>
              <thead>
                <Tr>
                  <Th>{t('ADMIN_Album')}</Th>
                  <Th>{t('ADMIN_Artist')}</Th>
                  <Th>{t('ADMIN_Score')}</Th>
                  <Th>{t('ADMIN_Views')}</Th>
                  <Th>{t('ADMIN_Downloads')}</Th>
                </Tr>
              </thead>
              <tbody>
                {data.top5Posters.map(p => (
                  <Tr key={p._id}>
                    <Td>{p.albumName}</Td>
                    <Td>{p.artistsName}</Td>
                    <Td>{p.popularityScore}</Td>
                    <Td>{p.views}</Td>
                    <Td>{p.downloads}</Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
        </>
      )}

      {data.top5Users?.length > 0 && (
        <>
          <TabTitle style={{ fontSize: '1.1em', marginBottom: 12, marginTop: 24 }}>{t('ADMIN_TopUsers')}</TabTitle>
          <TableWrapper>
            <Table>
              <thead>
                <Tr>
                  <Th>{t('ADMIN_Name')}</Th>
                  <Th>{t('ADMIN_Username')}</Th>
                  <Th>{t('ADMIN_Badge')}</Th>
                  <Th>{t('ADMIN_Score')}</Th>
                </Tr>
              </thead>
              <tbody>
                {data.top5Users.map(u => (
                  <Tr key={u._id}>
                    <Td>{u.name}</Td>
                    <Td>{u.username}</Td>
                    <Td>{u.badge || '—'}</Td>
                    <Td>{u.badgeScore}</Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
        </>
      )}
    </>
  )
}
