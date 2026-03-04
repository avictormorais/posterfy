import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import adminService from '../../../services/adminService'
import { TabHeader, TabTitle, Badge, EmptyState } from '../AdminStyles'
import { IoServer, IoHardwareChip, IoFolder, IoLayers } from 'react-icons/io5'

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
`

const StatLabel = styled.span`
  font-size: 0.75em;
  color: var(--textSecondary);
  font-weight: 600;
`

const StatValue = styled.span`
  font-size: 1.5em;
  font-weight: 800;
  line-height: 1.2;
`

const BarContainer = styled.div`
  margin-top: 8px;
`

const BarTrack = styled.div`
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: var(--borderColor);
  overflow: hidden;
`

const BarFill = styled.div`
  height: 100%;
  border-radius: 3px;
  background: var(--AccentColor);
  width: ${({ $pct }) => Math.min($pct, 100)}%;
  transition: width 0.4s ease;
`

const BarLabel = styled.span`
  font-size: 0.68em;
  color: var(--textSecondary);
  margin-top: 4px;
  display: block;
`

const ATLAS_FREE_LIMIT = 512 * 1024 * 1024 // 512 MB

export default function HealthTab() {
  const { t } = useTranslation()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    adminService.getHealth()
      .then(setData)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <EmptyState>{t('Loading')}</EmptyState>
  if (!data) return <EmptyState>{t('ADMIN_NoResults')}</EmptyState>

  const fmtUptime = (s) => {
    const d = Math.floor(s / 86400)
    const h = Math.floor((s % 86400) / 3600)
    const m = Math.floor((s % 3600) / 60)
    if (d > 0) return `${d}d ${h}h ${m}m`
    return `${h}h ${m}m`
  }

  const fmtBytes = (bytes) => {
    if (bytes === 0 || bytes == null) return '0 B'
    const units = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(1024))
    return `${(bytes / Math.pow(1024, i)).toFixed(i > 1 ? 2 : 0)} ${units[i]}`
  }

  const storagePct = data.storage ? (data.storage.totalSize / ATLAS_FREE_LIMIT) * 100 : 0
  const heapPct = data.memory ? (data.memory.heapUsed / data.memory.heapTotal) * 100 : 0

  return (
    <>
      <TabHeader>
        <TabTitle>{t('ADMIN_Health')}</TabTitle>
        <Badge $variant={data.status === 'healthy' ? 'active' : 'suspended'}>
          {data.status === 'healthy' ? t('ADMIN_Healthy') : t('ADMIN_Degraded')}
        </Badge>
      </TabHeader>

      <Section>
        <SectionLabel><IoServer /> {t('ADMIN_ServerInfo')}</SectionLabel>
        <Grid $cols={4}>
          <StatCard>
            <StatLabel>{t('ADMIN_Uptime')}</StatLabel>
            <StatValue style={{ fontSize: '1.2em' }}>{fmtUptime(data.api.uptimeSeconds)}</StatValue>
          </StatCard>
          <StatCard>
            <StatLabel>{t('ADMIN_Version')}</StatLabel>
            <StatValue style={{ fontSize: '1.2em' }}>v{data.api.version}</StatValue>
          </StatCard>
          <StatCard>
            <StatLabel>{t('ADMIN_NodeVersion')}</StatLabel>
            <StatValue style={{ fontSize: '1.2em' }}>{data.api.nodeVersion || '—'}</StatValue>
          </StatCard>
          <StatCard>
            <StatLabel>{t('ADMIN_Ping')}</StatLabel>
            <StatValue>{data.mongo.pingMs}ms</StatValue>
          </StatCard>
        </Grid>
      </Section>

      <Section>
        <SectionLabel><IoFolder /> {t('ADMIN_Database')}</SectionLabel>
        <Grid $cols={4}>
          <StatCard>
            <StatLabel>{t('ADMIN_MongoStatus')}</StatLabel>
            <StatValue style={{ fontSize: '1.2em' }}>{data.mongo.connected ? '✓ Online' : '✗ Offline'}</StatValue>
          </StatCard>
          {Object.entries(data.collections).map(([name, count]) => (
            <StatCard key={name}>
              <StatLabel>{name}</StatLabel>
              <StatValue>{count.toLocaleString()}</StatValue>
            </StatCard>
          ))}
        </Grid>
      </Section>

      {data.storage && (
        <Section>
          <SectionLabel><IoLayers /> {t('ADMIN_Storage')}</SectionLabel>
          <Grid $cols={3}>
            <StatCard>
              <StatLabel>{t('ADMIN_DataSize')}</StatLabel>
              <StatValue style={{ fontSize: '1.2em' }}>{fmtBytes(data.storage.dataSize)}</StatValue>
            </StatCard>
            <StatCard>
              <StatLabel>{t('ADMIN_IndexSize')}</StatLabel>
              <StatValue style={{ fontSize: '1.2em' }}>{fmtBytes(data.storage.indexSize)}</StatValue>
            </StatCard>
            <StatCard>
              <StatLabel>{t('ADMIN_TotalSize')}</StatLabel>
              <StatValue style={{ fontSize: '1.2em' }}>{fmtBytes(data.storage.totalSize)}</StatValue>
              <BarContainer>
                <BarTrack>
                  <BarFill $pct={storagePct} />
                </BarTrack>
                <BarLabel>{storagePct.toFixed(1)}% de 512 MB</BarLabel>
              </BarContainer>
            </StatCard>
          </Grid>
        </Section>
      )}

      {data.memory && (
        <Section>
          <SectionLabel><IoHardwareChip /> {t('ADMIN_Memory')}</SectionLabel>
          <Grid $cols={3}>
            <StatCard>
              <StatLabel>{t('ADMIN_RSS')}</StatLabel>
              <StatValue style={{ fontSize: '1.2em' }}>{fmtBytes(data.memory.rss)}</StatValue>
            </StatCard>
            <StatCard>
              <StatLabel>{t('ADMIN_HeapUsed')}</StatLabel>
              <StatValue style={{ fontSize: '1.2em' }}>{fmtBytes(data.memory.heapUsed)}</StatValue>
              <BarContainer>
                <BarTrack>
                  <BarFill $pct={heapPct} />
                </BarTrack>
                <BarLabel>{heapPct.toFixed(1)}% do heap</BarLabel>
              </BarContainer>
            </StatCard>
            <StatCard>
              <StatLabel>Heap Total</StatLabel>
              <StatValue style={{ fontSize: '1.2em' }}>{fmtBytes(data.memory.heapTotal)}</StatValue>
            </StatCard>
          </Grid>
        </Section>
      )}
    </>
  )
}
