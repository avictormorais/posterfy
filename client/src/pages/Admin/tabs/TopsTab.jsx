import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import adminService from '../../../services/adminService'
import { TabHeader, TabTitle, EmptyState, Table, Th, Td, Tr, TableWrapper } from '../AdminStyles'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

const ControlsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    align-items: stretch;
  }
`

const SubTabsContainer = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    width: 100%;
  }
`

const SubTab = styled.button`
  padding: 8px 14px;
  border: 1px solid ${({ $active }) => $active ? 'var(--AccentColor)' : 'var(--borderColor)'};
  border-radius: 999px;
  background: ${({ $active }) => $active ? 'var(--AccentColor)' : 'transparent'};
  color: ${({ $active }) => $active ? '#fff' : 'var(--textColor)'};
  font-weight: 600;
  font-size: 0.82em;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    border-color: var(--AccentColor);
  }

  @media (max-width: 640px) {
    flex: 1;
  }
`

const SampleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    width: 100%;
    justify-content: space-between;
  }
`

const SampleLabel = styled.span`
  font-size: 0.76em;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--textSecondary);
`

const SampleButtons = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`

const SampleButton = styled.button`
  min-width: 42px;
  padding: 7px 12px;
  border: 1px solid ${({ $active }) => $active ? 'var(--AccentColor)' : 'var(--borderColor)'};
  border-radius: 999px;
  background: ${({ $active }) => $active ? 'var(--AccentColor)' : 'transparent'};
  color: ${({ $active }) => $active ? '#fff' : 'var(--textColor)'};
  font-size: 0.8em;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    border-color: var(--AccentColor);
  }

  @media (max-width: 640px) {
    flex: 1;
  }
`

const SectionCard = styled.section`
  border: 1px solid var(--borderColor);
  border-radius: 12px;
  background: var(--glassBackground);
  overflow: hidden;
`

const SectionHeader = styled.div`
  padding: 16px 18px 14px;
  border-bottom: 1px solid var(--borderColor);
`

const SectionTitle = styled.h3`
  margin: 0;
  font-size: 0.98em;
  font-weight: 700;
`

const SectionSubtitle = styled.p`
  margin: 4px 0 0;
  font-size: 0.8em;
  color: var(--textSecondary);
`

const RankingTable = styled(Table)`
  font-size: 0.84em;

  & tbody tr:hover {
    background: transparent;
  }
`

const RankCell = styled(Td)`
  width: 56px;
  color: var(--textSecondary);
  font-weight: 700;
  text-align: center;
`

const ItemCell = styled(Td)`
  white-space: normal;
`

const ItemTitle = styled.div`
  font-weight: 600;
  line-height: 1.35;
`

const ItemSubtitle = styled.div`
  margin-top: 2px;
  font-size: 0.8em;
  color: var(--textSecondary);
  line-height: 1.35;
`

const MetricCell = styled(Td)`
  text-align: right;
  font-weight: 700;
  white-space: nowrap;
`

const MetricValue = styled.span`
  display: block;
  font-size: 0.98em;
`

const MetricLabel = styled.span`
  display: block;
  font-size: 0.72em;
  color: var(--textSecondary);
  font-weight: 600;
  margin-top: 2px;
`

const TABS = [
  { id: 'posters', labelKey: 'ADMIN_TopPosters' },
  { id: 'users', labelKey: 'ADMIN_TopUsers' },
  { id: 'artists', labelKey: 'ADMIN_TopArtists' },
  { id: 'albums', labelKey: 'ADMIN_TopAlbums' },
]

const LIMITS = [10, 20, 50, 100]

const getNumber = (value) => Number(value || 0)

export default function TopsTab() {
  const { t } = useTranslation()
  const [activeSubTab, setActiveSubTab] = useState('posters')
  const [limit, setLimit] = useState(50)
  const [topPosters, setTopPosters] = useState([])
  const [topUsers, setTopUsers] = useState([])
  const [topArtists, setTopArtists] = useState([])
  const [topAlbums, setTopAlbums] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setLoading(true)

    const loaders = {
      posters: () => adminService.getTopPosters(limit).then(data => setTopPosters(data.topPosters || [])).catch(() => setTopPosters([])),
      users: () => adminService.getTopUsers(limit).then(data => setTopUsers(data.topUsers || [])).catch(() => setTopUsers([])),
      artists: () => adminService.getTopArtists(limit).then(data => setTopArtists(data.topArtists || [])).catch(() => setTopArtists([])),
      albums: () => adminService.getTopAlbums(limit).then(data => setTopAlbums(data.topAlbums || [])).catch(() => setTopAlbums([])),
    }

    Promise.resolve(loaders[activeSubTab]?.())
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [activeSubTab, limit])

  const formatNumber = (value) => getNumber(value).toLocaleString()

  const renderRanking = () => {
    if (loading) return <EmptyState>{t('Loading')}</EmptyState>

    if (activeSubTab === 'posters') {
      if (!topPosters.length) return <EmptyState>{t('ADMIN_NoResults')}</EmptyState>

      return (
        <SectionCard>
          <SectionHeader>
            <SectionTitle>{t('ADMIN_TopPosters')}</SectionTitle>
            <SectionSubtitle>{t('ADMIN_TopSamplingHint')}</SectionSubtitle>
          </SectionHeader>
          <TableWrapper>
            <RankingTable>
              <thead>
                <Tr>
                  <Th style={{ width: '56px' }}>{t('ADMIN_Rank')}</Th>
                  <Th>{t('ADMIN_Album')}</Th>
                  <Th>{t('ADMIN_Artist')}</Th>
                  <Th style={{ textAlign: 'right' }}>{t('ADMIN_Score')}</Th>
                </Tr>
              </thead>
              <tbody>
                {topPosters.map((poster, index) => (
                  <Tr key={poster._id}>
                    <RankCell>{index + 1}</RankCell>
                    <ItemCell>
                      <ItemTitle>{poster.albumName}</ItemTitle>
                    </ItemCell>
                    <ItemCell>
                      <ItemTitle>{poster.artistsName}</ItemTitle>
                    </ItemCell>
                    <MetricCell>
                      <MetricValue>{formatNumber(poster.popularityScore)}</MetricValue>
                      <MetricLabel>{t('ADMIN_Score')}</MetricLabel>
                    </MetricCell>
                  </Tr>
                ))}
              </tbody>
            </RankingTable>
          </TableWrapper>
        </SectionCard>
      )
    }

    if (activeSubTab === 'users') {
      if (!topUsers.length) return <EmptyState>{t('ADMIN_NoResults')}</EmptyState>

      return (
        <SectionCard>
          <SectionHeader>
            <SectionTitle>{t('ADMIN_TopUsers')}</SectionTitle>
            <SectionSubtitle>{t('ADMIN_TopSamplingHint')}</SectionSubtitle>
          </SectionHeader>
          <TableWrapper>
            <RankingTable>
              <thead>
                <Tr>
                  <Th style={{ width: '56px' }}>{t('ADMIN_Rank')}</Th>
                  <Th>{t('ADMIN_User')}</Th>
                  <Th style={{ textAlign: 'right' }}>{t('ADMIN_Score')}</Th>
                  <Th style={{ textAlign: 'right' }}>{t('ADMIN_Posters')}</Th>
                </Tr>
              </thead>
              <tbody>
                {topUsers.map((user, index) => (
                  <Tr key={user._id}>
                    <RankCell>{index + 1}</RankCell>
                    <ItemCell>
                      <ItemTitle>{user.name}</ItemTitle>
                      <ItemSubtitle>@{user.username}</ItemSubtitle>
                    </ItemCell>
                    <MetricCell>
                      <MetricValue>{formatNumber(user.badgeScore)}</MetricValue>
                      <MetricLabel>{t('ADMIN_Score')}</MetricLabel>
                    </MetricCell>
                    <MetricCell>
                      <MetricValue>{formatNumber(user.posterCount)}</MetricValue>
                      <MetricLabel>{t('ADMIN_Posters')}</MetricLabel>
                    </MetricCell>
                  </Tr>
                ))}
              </tbody>
            </RankingTable>
          </TableWrapper>
        </SectionCard>
      )
    }

    if (activeSubTab === 'artists') {
      if (!topArtists.length) return <EmptyState>{t('ADMIN_NoResults')}</EmptyState>

      return (
        <SectionCard>
          <SectionHeader>
            <SectionTitle>{t('ADMIN_TopArtists')}</SectionTitle>
            <SectionSubtitle>{t('ADMIN_TopArtistsHint')}</SectionSubtitle>
          </SectionHeader>
          <TableWrapper>
            <RankingTable>
              <thead>
                <Tr>
                  <Th style={{ width: '56px' }}>{t('ADMIN_Rank')}</Th>
                  <Th>{t('ADMIN_Artist')}</Th>
                  <Th style={{ textAlign: 'right' }}>{t('ADMIN_Posters')}</Th>
                </Tr>
              </thead>
              <tbody>
                {topArtists.map((artist, index) => (
                  <Tr key={artist.artistName}>
                    <RankCell>{index + 1}</RankCell>
                    <ItemCell>
                      <ItemTitle>{artist.artistName}</ItemTitle>
                    </ItemCell>
                    <MetricCell>
                      <MetricValue>{formatNumber(artist.posterCount)}</MetricValue>
                      <MetricLabel>{t('ADMIN_Posters')}</MetricLabel>
                    </MetricCell>
                  </Tr>
                ))}
              </tbody>
            </RankingTable>
          </TableWrapper>
        </SectionCard>
      )
    }

    if (!topAlbums.length) return <EmptyState>{t('ADMIN_NoResults')}</EmptyState>

    return (
      <SectionCard>
        <SectionHeader>
          <SectionTitle>{t('ADMIN_TopAlbums')}</SectionTitle>
          <SectionSubtitle>{t('ADMIN_TopAlbumsHint')}</SectionSubtitle>
        </SectionHeader>
        <TableWrapper>
          <RankingTable>
            <thead>
              <Tr>
                <Th style={{ width: '56px' }}>{t('ADMIN_Rank')}</Th>
                <Th>{t('ADMIN_Album')}</Th>
                <Th>{t('ADMIN_Artist')}</Th>
                <Th style={{ textAlign: 'right' }}>{t('ADMIN_Posters')}</Th>
              </Tr>
            </thead>
            <tbody>
              {topAlbums.map((album, index) => (
                <Tr key={`${album.albumName}-${album.artistsName}`}>
                  <RankCell>{index + 1}</RankCell>
                  <ItemCell>
                    <ItemTitle>{album.albumName}</ItemTitle>
                  </ItemCell>
                  <ItemCell>
                    <ItemTitle>{album.artistsName}</ItemTitle>
                  </ItemCell>
                  <MetricCell>
                    <MetricValue>{formatNumber(album.posterCount)}</MetricValue>
                    <MetricLabel>{t('ADMIN_Posters')}</MetricLabel>
                  </MetricCell>
                </Tr>
              ))}
            </tbody>
          </RankingTable>
        </TableWrapper>
      </SectionCard>
    )
  }

  return (
    <Container>
      <TabHeader>
        <TabTitle>{t('ADMIN_Tops')}</TabTitle>
      </TabHeader>

      <ControlsRow>
        <SubTabsContainer>
          {TABS.map((tab) => (
            <SubTab
              key={tab.id}
              type="button"
              $active={activeSubTab === tab.id}
              onClick={() => setActiveSubTab(tab.id)}
            >
              {t(tab.labelKey)}
            </SubTab>
          ))}
        </SubTabsContainer>

        <SampleGroup>
          <SampleLabel>{t('ADMIN_Sample')}</SampleLabel>
          <SampleButtons>
            {LIMITS.map((value) => (
              <SampleButton
                key={value}
                type="button"
                $active={limit === value}
                onClick={() => setLimit(value)}
              >
                {value}
              </SampleButton>
            ))}
          </SampleButtons>
        </SampleGroup>
      </ControlsRow>

      {renderRanking()}
    </Container>
  )
}
