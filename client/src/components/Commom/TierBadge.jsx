import styled, { keyframes } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { IoBrush, IoColorPalette, IoDiamond } from 'react-icons/io5'
import { IoMdColorFilter } from 'react-icons/io'
import Hint from './Hint'
import PosterfyIcon from '../svgs/icon'

// ─── Tier config ──────────────────────────────────────────────

const TIERS = {
  creator_bronze:  { key: 'bronze',  color: '#cd7f32', Icon: IoBrush },
  creator_silver:  { key: 'silver',  color: '#868686', Icon: IoColorPalette },
  creator_gold:    { key: 'gold',    color: '#ffc107', Icon: IoMdColorFilter },
  creator_diamond: { key: 'diamond', color: '#5bc4f5', Icon: IoDiamond },
}

// ─── Subtle pulse for diamond ─────────────────────────────────

const shine = keyframes`
  0%, 100% { filter: brightness(1); }
  50%      { filter: brightness(1.3); }
`

// ─── Styled ───────────────────────────────────────────────────

const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${p => p.$size || 20}px;
  height: ${p => p.$size || 20}px;
  border-radius: 50%;
  background: ${p => p.$color};
  cursor: pointer;
  flex-shrink: 0;
  animation: ${p => p.$tier === 'diamond' ? shine : 'none'} 3s ease-in-out infinite;

  svg {
    width: ${p => Math.round((p.$size || 20) * 0.65)}px !important;
    height: ${p => Math.round((p.$size || 20) * 0.65)}px !important;
    fill: #fff;
    margin-left: -2px;
    margin-top: -1px;
  }
`

// ─── Tier Badge ───────────────────────────────────────────────

export default function TierBadge({ badge, badgeProgress, isOwner = false, size = 20 }) {
  const { t } = useTranslation()

  const tier = TIERS[badge]
  if (!tier) return null

  const { key, color, Icon } = tier

  let hintText = t(`BADGE_TIER_${key}`)

  if (isOwner && badgeProgress) {
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
      <Badge $color={color} $tier={key} $size={size}>
        <Icon />
      </Badge>
    </Hint>
  )
}

// ─── Admin Badge ──────────────────────────────────────────────

const AdminBadgeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
`

export function AdminBadge({ size = 20 }) {
  const { t } = useTranslation()

  return (
    <Hint text={t('BADGE_Admin')} delay={200}>
        <AdminBadgeWrap $size={size}>
          <PosterfyIcon width={size+'px'} height={size+'px'} fill="var(--AccentColor)" />
        </AdminBadgeWrap>
    </Hint>
  )
}
