import User from '../models/user.js'

const TIER_THRESHOLDS = [
  { tier: 'diamond', min: 500 },
  { tier: 'gold',    min: 200 },
  { tier: 'silver',  min: 50 },
  { tier: 'bronze',  min: 10 },
]

function computeScore(user) {
  return (
    (user.posterCount || 0) * 3 +
    (user.totalFavorites || 0) * 2 +
    (user.totalDownloads || 0) * 1 +
    Math.floor((user.totalViews || 0) * 0.1)
  )
}

function resolveTier(score) {
  for (const t of TIER_THRESHOLDS) {
    if (score >= t.min) return t.tier
  }
  return null
}

function getNextTierInfo(score) {
  const sorted = [...TIER_THRESHOLDS].sort((a, b) => a.min - b.min)
  for (const t of sorted) {
    if (score < t.min) {
      return { nextTier: t.tier, nextThreshold: t.min }
    }
  }
  return { nextTier: null, nextThreshold: null }
}

class BadgeService {
  computeScore = computeScore
  resolveTier = resolveTier
  getNextTierInfo = getNextTierInfo

  getBadgeProgress(user) {
    const score = computeScore(user)
    const tier = resolveTier(score)
    const { nextTier, nextThreshold } = getNextTierInfo(score)

    const currentThreshold = tier
      ? TIER_THRESHOLDS.find(t => t.tier === tier)?.min || 0
      : 0

    const progress = nextThreshold
      ? Math.min(((score - currentThreshold) / (nextThreshold - currentThreshold)) * 100, 100)
      : 100

    return { score, tier, nextTier, nextThreshold, currentThreshold, progress: Math.round(progress) }
  }

  async recalculate(userId) {
    const user = await User.findById(userId)
    if (!user) return

    const score = computeScore(user)
    const tier = resolveTier(score)
    const badge = tier ? `creator_${tier}` : null

    if (badge !== user.badge || score !== user.badgeScore) {
      user.badge = badge
      user.badgeScore = score
      await user.save()
    }
  }
}

export default new BadgeService()
