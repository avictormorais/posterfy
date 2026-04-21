import styled, { keyframes } from 'styled-components'
import { useTranslation } from 'react-i18next'
import Hint from './Hint'
import Bronze from '../svgs/Badges/Bronze'
import Silver from '../svgs/Badges/Silver'
import Gold from '../svgs/Badges/Gold'
import Diamond from '../svgs/Badges/Diamond'
import Admin from '../svgs/Badges/Admin'

const TIERS = {
  creator_bronze:  { key: 'bronze',  color: '#cd7f32', Component: Bronze },
  creator_silver:  { key: 'silver',  color: '#868686', Component: Silver },
  creator_gold:    { key: 'gold',    color: '#e7b214', Component: Gold },
  creator_diamond: { key: 'diamond', color: '#29a2da', Component: Diamond },
  admin:           { key: 'admin',   color: 'var(--AccentColor)', Component: Admin },
}

const shine = keyframes`
  0%, 100% { filter: brightness(1); }
  50%      { filter: brightness(1.15) drop-shadow(0 0 2px #5bc4f5aa); }
`

const BadgeWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${p => p.$size}px;
  height: ${p => p.$size}px;
  cursor: pointer;
  flex-shrink: 0;
  animation: ${p => p.$tier === 'diamond' ? shine : 'none'} 2.8s ease-in-out infinite;
`


export default function TierBadge({ badge, badgeProgress, isOwner = false, size = 20 }) {
  const { t } = useTranslation()

  const tier = TIERS[badge]
  if (!tier) return null

  const { key, color, Component } = tier

  let hintText = key === 'admin' ? t('BADGE_Admin') : t(`BADGE_TIER_${key}`)

  if (key !== 'admin' && isOwner && badgeProgress) {
    if (badgeProgress.nextTier) {
      const nextTierLabel = t(`BADGE_TIER_${badgeProgress.nextTier}`)
      hintText += ` — ${t('BADGE_Progress', {
        score: badgeProgress.score,
        next: badgeProgress.nextThreshold,
        tier: nextTierLabel
      })}`
    } else {
      hintText += ` — ${t('BADGE_MaxTier')}`
    }
  }

  return (
    <Hint text={hintText} delay={200}>
      <BadgeWrapper $tier={key} $size={size}>
        <Component width={size} fillColor={color} />
      </BadgeWrapper>
    </Hint>
  )
}