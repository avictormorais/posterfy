import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import adminService from '../../../services/adminService'
import { TabHeader, TabTitle, EmptyState, Table, Th, Td, Tr, TableWrapper } from '../AdminStyles'
import { IoTrophy, IoPeople, IoImage, IoDownload, IoHeart, IoEye } from 'react-icons/io5'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const SubTabsContainer = styled.div`
  display: flex;
  gap: 8px;
  border-bottom: 1px solid var(--borderColor);
  margin-bottom: 20px;

  @media (max-width: 640px) {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`

const SubTab = styled.button`
  padding: 12px 20px;
  border: none;
  background: transparent;
  color: ${({ $active }) => $active ? 'var(--AccentColor)' : 'var(--textSecondary)'};
  font-weight: ${({ $active }) => $active ? '700' : '600'};
  font-size: 0.9em;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  white-space: nowrap;
  transition: all 0.2s ease;

  ${({ $active }) => $active && `
    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--AccentColor);
    }
  `}

  &:hover {
    color: var(--AccentColor);
  }

  svg {
    font-size: 1.1em;
  }
`

const ControlsRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    width: 100%;
  }
`

const LimitSelector = styled.select`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid var(--borderColor);
  background: var(--glassBackground);
  color: var(--textColor);
  font-size: 0.85em;
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: var(--AccentColor);
  }

  @media (max-width: 640px) {
    flex: 1;
    min-width: 100px;
  }
`

const RankingTable = styled(Table)`
  & tbody tr {
    &:hover {
      background: var(--glassBackground);
    }
  }
`

const RankCell = styled(Td)`
  font-weight: 700;
  color: var(--AccentColor);
  min-width: 40px;
  text-align: center;

  &::before {
    content: '#';
    margin-right: 4px;
  }
`

const MedalIcon = styled.span`
  font-size: 1.3em;
  margin-right: 8px;

  ${({ $rank }) => {
    if ($rank === 1) return `color: #FFD700;` // Gold
    if ($rank === 2) return `color: #C0C0C0;` // Silver
    if ($rank === 3) return `color: #CD7F32;` // Bronze
  }}
`

const UserCell = styled(Td)`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--borderColor);
`

const StatBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 6px;
  background: var(--glassBackground);
  font-size: 0.75em;
  font-weight: 600;
  color: var(--textSecondary);

  svg {
    font-size: 0.9em;
  }
`

const ScoreBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`

const ProgressBar = styled.div`
  flex: 1;
  height: 6px;
  background: var(--borderColor);
  border-radius: 3px;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${({ $percentage }) => $percentage}%;
    background: linear-gradient(90deg, var(--AccentColor), #ff6b9d);
    border-radius: 3px;
    transition: width 0.3s ease;
  }
`

const BadgeBadge = styled.span`
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.7em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #000;
  min-width: 50px;
  text-align: center;
`

const EmptyMessage = styled.div`
  padding: 40px 20px;
  text-align: center;
  color: var(--textSecondary);
  font-size: 0.95em;
`

export default function TopsTab() {
  const { t } = useTranslation()
  const [activeSubTab, setActiveSubTab] = useState('posters')
  const [limit, setLimit] = useState(50)
  const [topPosters, setTopPosters] = useState(null)
  const [topUsers, setTopUsers] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const promises = []

    if (activeSubTab === 'posters' || activeSubTab === 'both') {
      promises.push(
        adminService.getTopPosters(limit)
          .then(data => setTopPosters(data.topPosters))
          .catch(() => setTopPosters([]))
      )
    }

    if (activeSubTab === 'users' || activeSubTab === 'both') {
      promises.push(
        adminService.getTopUsers(limit)
          .then(data => setTopUsers(data.topUsers))
          .catch(() => setTopUsers([]))
      )
    }

    Promise.all(promises).finally(() => setLoading(false))
  }, [activeSubTab, limit])

  const getMedalEmoji = (rank) => {
    if (rank === 1) return <MedalIcon $rank={1}>🥇</MedalIcon>
    if (rank === 2) return <MedalIcon $rank={2}>🥈</MedalIcon>
    if (rank === 3) return <MedalIcon $rank={3}>🥉</MedalIcon>
    return null
  }

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
    return num.toLocaleString()
  }

  const getMaxScore = (data, type) => {
    if (!data || data.length === 0) return 1
    if (type === 'posters') return data[0].popularityScore || 1
    if (type === 'users') return data[0].badgeScore || 1
    return 1
  }

  return (
    <Container>
      <TabHeader>
        <TabTitle>{t('ADMIN_Tops')}</TabTitle>
      </TabHeader>

      <SubTabsContainer>
        <SubTab $active={activeSubTab === 'posters'} onClick={() => setActiveSubTab('posters')}>
          <IoImage /> {t('ADMIN_TopPosters')}
        </SubTab>
        <SubTab $active={activeSubTab === 'users'} onClick={() => setActiveSubTab('users')}>
          <IoPeople /> {t('ADMIN_TopUsers')}
        </SubTab>
      </SubTabsContainer>

      <ControlsRow>
        <label htmlFor="limit-selector" style={{ fontSize: '0.85em', fontWeight: '600' }}>
          {t('ADMIN_Top')}:
        </label>
        <LimitSelector
          id="limit-selector"
          value={limit}
          onChange={(e) => setLimit(parseInt(e.target.value))}
        >
          <option value={10}>Top 10</option>
          <option value={20}>Top 20</option>
          <option value={50}>Top 50</option>
          <option value={100}>Top 100</option>
        </LimitSelector>
      </ControlsRow>

      {loading ? (
        <EmptyState>{t('Loading')}</EmptyState>
      ) : (
        <>
          {/* Top Posters */}
          {activeSubTab === 'posters' && (
            <>
              {topPosters && topPosters.length > 0 ? (
                <TableWrapper>
                  <RankingTable>
                    <thead>
                      <Tr>
                        <Th style={{ width: '50px' }}>{t('ADMIN_Rank')}</Th>
                        <Th>{t('ADMIN_Album')}</Th>
                        <Th>{t('ADMIN_Artist')}</Th>
                        <Th style={{ textAlign: 'center' }}>{t('ADMIN_Score')}</Th>
                        <Th style={{ textAlign: 'center' }}>{t('ADMIN_Views')}</Th>
                        <Th style={{ textAlign: 'center' }}>{t('ADMIN_Downloads')}</Th>
                        <Th style={{ textAlign: 'center' }}>{t('ADMIN_Favorites')}</Th>
                        <Th style={{ textAlign: 'center' }}>{t('ADMIN_Edits')}</Th>
                      </Tr>
                    </thead>
                    <tbody>
                      {topPosters.map((poster, idx) => {
                        const rank = idx + 1
                        const scorePercentage = (poster.popularityScore / getMaxScore(topPosters, 'posters')) * 100
                        return (
                          <Tr key={poster._id}>
                            <RankCell>
                              {getMedalEmoji(rank)}
                              {rank}
                            </RankCell>
                            <Td>{poster.albumName}</Td>
                            <Td>{poster.artistsName}</Td>
                            <Td style={{ textAlign: 'center' }}>
                              <ScoreBar>
                                <ProgressBar $percentage={scorePercentage} />
                                <span style={{ fontWeight: '700', minWidth: '60px' }}>
                                  {formatNumber(poster.popularityScore)}
                                </span>
                              </ScoreBar>
                            </Td>
                            <Td style={{ textAlign: 'center' }}>
                              <StatBadge>
                                <IoEye /> {formatNumber(poster.views)}
                              </StatBadge>
                            </Td>
                            <Td style={{ textAlign: 'center' }}>
                              <StatBadge>
                                <IoDownload /> {formatNumber(poster.downloads)}
                              </StatBadge>
                            </Td>
                            <Td style={{ textAlign: 'center' }}>
                              <StatBadge>
                                <IoHeart /> {formatNumber(poster.favoritesCount)}
                              </StatBadge>
                            </Td>
                            <Td style={{ textAlign: 'center' }}>{poster.edits}</Td>
                          </Tr>
                        )
                      })}
                    </tbody>
                  </RankingTable>
                </TableWrapper>
              ) : (
                <EmptyMessage>{t('ADMIN_NoResults')}</EmptyMessage>
              )}
            </>
          )}

          {/* Top Users */}
          {activeSubTab === 'users' && (
            <>
              {topUsers && topUsers.length > 0 ? (
                <TableWrapper>
                  <RankingTable>
                    <thead>
                      <Tr>
                        <Th style={{ width: '50px' }}>{t('ADMIN_Rank')}</Th>
                        <Th>{t('ADMIN_User')}</Th>
                        <Th style={{ textAlign: 'center' }}>{t('ADMIN_Score')}</Th>
                        <Th style={{ textAlign: 'center' }}>{t('ADMIN_Badge')}</Th>
                        <Th style={{ textAlign: 'center' }}>{t('ADMIN_Posters')}</Th>
                        <Th style={{ textAlign: 'center' }}>{t('ADMIN_Downloads')}</Th>
                        <Th style={{ textAlign: 'center' }}>{t('ADMIN_Favorites')}</Th>
                        <Th style={{ textAlign: 'center' }}>{t('ADMIN_Views')}</Th>
                      </Tr>
                    </thead>
                    <tbody>
                      {topUsers.map((user, idx) => {
                        const rank = idx + 1
                        const scorePercentage = (user.badgeScore / getMaxScore(topUsers, 'users')) * 100
                        return (
                          <Tr key={user._id}>
                            <RankCell>
                              {getMedalEmoji(rank)}
                              {rank}
                            </RankCell>
                            <UserCell>
                              {user.avatar && <Avatar src={user.avatar} alt={user.name} />}
                              <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ fontWeight: '600' }}>{user.name}</span>
                                <span style={{ fontSize: '0.8em', color: 'var(--textSecondary)' }}>
                                  @{user.username}
                                </span>
                              </div>
                            </UserCell>
                            <Td style={{ textAlign: 'center' }}>
                              <ScoreBar>
                                <ProgressBar $percentage={scorePercentage} />
                                <span style={{ fontWeight: '700', minWidth: '60px' }}>
                                  {formatNumber(user.badgeScore)}
                                </span>
                              </ScoreBar>
                            </Td>
                            <Td style={{ textAlign: 'center' }}>
                              {user.badge ? (
                                <BadgeBadge>{user.badge.replace('creator_', '')}</BadgeBadge>
                              ) : (
                                '—'
                              )}
                            </Td>
                            <Td style={{ textAlign: 'center' }}>
                              <StatBadge>{user.posterCount}</StatBadge>
                            </Td>
                            <Td style={{ textAlign: 'center' }}>
                              <StatBadge>
                                <IoDownload /> {formatNumber(user.totalDownloads)}
                              </StatBadge>
                            </Td>
                            <Td style={{ textAlign: 'center' }}>
                              <StatBadge>
                                <IoHeart /> {formatNumber(user.totalFavorites)}
                              </StatBadge>
                            </Td>
                            <Td style={{ textAlign: 'center' }}>
                              <StatBadge>
                                <IoEye /> {formatNumber(user.totalViews)}
                              </StatBadge>
                            </Td>
                          </Tr>
                        )
                      })}
                    </tbody>
                  </RankingTable>
                </TableWrapper>
              ) : (
                <EmptyMessage>{t('ADMIN_NoResults')}</EmptyMessage>
              )}
            </>
          )}
        </>
      )}
    </Container>
  )
}
