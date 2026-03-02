import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { IoBarChart, IoPeople, IoImage, IoDocumentText, IoHeart } from 'react-icons/io5'
import OverviewTab from './tabs/OverviewTab'
import UsersTab from './tabs/UsersTab'
import PostersTab from './tabs/PostersTab'
import LogsTab from './tabs/LogsTab'
import HealthTab from './tabs/HealthTab'

const TABS = ['Overview', 'Users', 'Posters', 'Logs', 'Health']

const TAB_ICONS = {
  Overview: IoBarChart,
  Users: IoPeople,
  Posters: IoImage,
  Logs: IoDocumentText,
  Health: IoHeart,
}

const Container = styled.div`
  display: flex;
  min-height: calc(100dvh - 70px);
  margin-top: 70px;
  background: var(--backgroundColor);
  color: var(--textColor);

  @media (max-width: 640px) {
    flex-direction: column;
    margin-top: 60px;
    min-height: calc(100dvh - 60px);
  }
`

const Sidebar = styled.nav`
  width: 220px;
  padding: 0;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 70px;
  left: 0;
  height: calc(100dvh - 70px);
  z-index: 10;
  background: var(--backgroundColor);
  flex-shrink: 0;

  @media (max-width: 900px) {
    width: 60px;
  }

  @media (max-width: 640px) {
    position: sticky;
    top: 60px;
    width: 100%;
    height: auto;
    flex-direction: row;
    border-right: none;
    border-bottom: 1px solid var(--borderColor);
    overflow-x: auto;
  }
`

const SidebarHeader = styled.div`
  padding: 24px 20px 20px;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 900px) {
    padding: 16px 0 12px;
    justify-content: center;
  }

  @media (max-width: 640px) {
    display: none;
  }
`

const PanelTitle = styled.h2`
  font-size: 0.82em;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--textSecondary);

  @media (max-width: 900px) {
    font-size: 0.6em;
    letter-spacing: 0.5px;
  }
`

const SidebarDivider = styled.div`
  height: 1px;
  background: var(--borderColor);
  margin: 0 16px 8px;

  @media (max-width: 900px) {
    margin: 0 8px 6px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`

const TabList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 10px;
  flex: 1;

  @media (max-width: 900px) {
    padding: 0 6px;
    gap: 2px;
  }

  @media (max-width: 640px) {
    flex-direction: row;
    padding: 0;
    gap: 0;
    width: 100%;
  }
`

const TabButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 14px;
  border: none;
  border-radius: 10px;
  background: ${({ $active }) => $active ? 'var(--glassBackground)' : 'transparent'};
  color: ${({ $active }) => $active ? 'var(--AccentColor)' : 'var(--textColor)'};
  font-weight: ${({ $active }) => $active ? '700' : '500'};
  font-size: 0.88em;
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  transition: all 0.15s ease;
  position: relative;

  ${({ $active }) => $active && `
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
      height: 60%;
      border-radius: 0 3px 3px 0;
      background: var(--AccentColor);
    }
  `}

  &:hover {
    background: var(--glassBackground);
  }

  @media (max-width: 900px) {
    justify-content: center;
    padding: 12px 8px;
    border-radius: 8px;

    &::before {
      display: none;
    }

    ${({ $active }) => $active && `
      border-bottom: 2px solid var(--AccentColor);
      border-radius: 8px 8px 0 0;
    `}
  }

  @media (max-width: 640px) {
    flex: 1;
    justify-content: center;
    padding: 14px 8px;
    border-radius: 0;
    font-size: 0.8em;
    gap: 6px;

    &::before {
      display: none;
    }

    ${({ $active }) => $active && `
      border-bottom: 2px solid var(--AccentColor);
    `}
  }
`

const TabLabel = styled.span`
  @media (max-width: 900px) {
    display: none;
  }
`

const TabIconWrapper = styled.span`
  font-size: 1.15em;
  display: flex;
  align-items: center;
  opacity: ${({ $active }) => $active ? 1 : 0.6};
  transition: opacity 0.15s ease;
`

const SidebarFooter = styled.div`
  padding: 16px 20px;
  border-top: 1px solid var(--borderColor);
  font-size: 0.68em;
  color: var(--textSecondary);
  text-align: center;
  letter-spacing: 0.5px;

  @media (max-width: 900px) {
    padding: 12px 4px;
    font-size: 0.58em;
  }

  @media (max-width: 640px) {
    display: none;
  }
`

const Main = styled.main`
  flex: 1;
  margin-left: 220px;
  padding: 28px 36px;
  min-height: calc(100dvh - 70px);

  @media (max-width: 900px) {
    margin-left: 60px;
    padding: 20px 16px;
  }

  @media (max-width: 640px) {
    margin-left: 0;
    padding: 16px 12px;
    min-height: auto;
  }
`

export default function Admin() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('Overview')

  useEffect(() => {
    if (user && !user.permissions?.includes('admin')) {
      navigate('/')
    }
  }, [user, navigate])

  return (
    <Container>
      <Sidebar>
        <SidebarHeader>
          <PanelTitle>{t('ADMIN_Panel')}</PanelTitle>
        </SidebarHeader>
        <SidebarDivider />
        <TabList>
          {TABS.map(tab => {
            const Icon = TAB_ICONS[tab]
            const isActive = activeTab === tab
            return (
              <TabButton key={tab} $active={isActive} onClick={() => setActiveTab(tab)}>
                <TabIconWrapper $active={isActive}><Icon /></TabIconWrapper>
                <TabLabel>{t(`ADMIN_${tab}`)}</TabLabel>
              </TabButton>
            )
          })}
        </TabList>
        <SidebarFooter>Posterfy Admin</SidebarFooter>
      </Sidebar>
      <Main>
        {activeTab === 'Overview' && <OverviewTab />}
        {activeTab === 'Users' && <UsersTab />}
        {activeTab === 'Posters' && <PostersTab />}
        {activeTab === 'Logs' && <LogsTab />}
        {activeTab === 'Health' && <HealthTab />}
      </Main>
    </Container>
  )
}
