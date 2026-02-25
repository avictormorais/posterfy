import User from '../models/user.js'

const BADGE_THRESHOLDS = {
  creator: [
    { level: 'creator_diamond', value: 50 },
    { level: 'creator_gold', value: 20 },
    { level: 'creator_silver', value: 10 },
    { level: 'creator_bronze', value: 3 }
  ],
  popular: [
    { level: 'popular_diamond', value: 500 },
    { level: 'popular_gold', value: 200 },
    { level: 'popular_silver', value: 50 },
    { level: 'popular_bronze', value: 10 }
  ],
  loved: [
    { level: 'loved_diamond', value: 100 },
    { level: 'loved_gold', value: 50 },
    { level: 'loved_silver', value: 20 },
    { level: 'loved_bronze', value: 5 }
  ]
}

const resolveHighestBadge = (user) => {
  const candidates = []

  for (const { level, value } of BADGE_THRESHOLDS.creator) {
    if (user.posterCount >= value) {
      candidates.push({ level, score: value * 1 })
      break
    }
  }

  for (const { level, value } of BADGE_THRESHOLDS.popular) {
    if (user.totalDownloads >= value) {
      candidates.push({ level, score: value * 2 })
      break
    }
  }

  for (const { level, value } of BADGE_THRESHOLDS.loved) {
    if (user.totalFavorites >= value) {
      candidates.push({ level, score: value * 3 })
      break
    }
  }

  if (candidates.length === 0) return null

  candidates.sort((a, b) => b.score - a.score)
  return candidates[0].level
}

class BadgeService {
  async recalculate(userId) {
    const user = await User.findById(userId)
    if (!user) return

    const badge = resolveHighestBadge(user)
    if (badge !== user.badge) {
      user.badge = badge
      await user.save()
    }
  }
}

export default new BadgeService()
