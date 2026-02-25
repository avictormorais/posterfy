import Poster from '../models/poster.js'
import User from '../models/user.js'
import Favorite from '../models/favorite.js'
import BadgeService from './badgeService.js'

const POPULARITY_WEIGHTS = {
  view: 1,
  edit: 3,
  download: 5,
  favorite: 10
}

const recalculateScore = (poster) => {
  return (
    poster.views * POPULARITY_WEIGHTS.view +
    poster.edits * POPULARITY_WEIGHTS.edit +
    poster.downloads * POPULARITY_WEIGHTS.download +
    poster.favoritesCount * POPULARITY_WEIGHTS.favorite
  )
}

class EngagementService {
  async registerView(posterId) {
    const poster = await Poster.findOneAndUpdate(
      { _id: posterId, isDeleted: false, visibility: 'public' },
      { $inc: { views: 1 } },
      { new: true }
    )
    if (!poster) return null

    poster.popularityScore = recalculateScore(poster)
    await poster.save()
    return poster
  }

  async registerDownload(posterId) {
    const poster = await Poster.findOneAndUpdate(
      { _id: posterId, isDeleted: false, visibility: 'public' },
      { $inc: { downloads: 1 } },
      { new: true }
    )
    if (!poster) return null

    poster.popularityScore = recalculateScore(poster)
    await poster.save()

    await User.findByIdAndUpdate(poster.authorId, { $inc: { totalDownloads: 1 } })
    await BadgeService.recalculate(poster.authorId)
    return poster
  }

  async registerEdit(posterId) {
    const poster = await Poster.findOneAndUpdate(
      { _id: posterId, isDeleted: false, visibility: 'public' },
      { $inc: { edits: 1 } },
      { new: true }
    )
    if (!poster) return null

    poster.popularityScore = recalculateScore(poster)
    await poster.save()
    return poster
  }

  async toggleFavorite(userId, posterId) {
    const existing = await Favorite.findOne({ userId, posterId })

    if (existing) {
      await existing.deleteOne()

      const poster = await Poster.findOneAndUpdate(
        { _id: posterId, isDeleted: false },
        { $inc: { favoritesCount: -1 } },
        { new: true }
      )
      if (poster) {
        poster.popularityScore = recalculateScore(poster)
        await poster.save()
        await User.findByIdAndUpdate(poster.authorId, { $inc: { totalFavorites: -1 } })
        await BadgeService.recalculate(poster.authorId)
      }

      return { favorited: false }
    }

    await Favorite.create({ userId, posterId })

    const poster = await Poster.findOneAndUpdate(
      { _id: posterId, isDeleted: false },
      { $inc: { favoritesCount: 1 } },
      { new: true }
    )
    if (poster) {
      poster.popularityScore = recalculateScore(poster)
      await poster.save()
      await User.findByIdAndUpdate(poster.authorId, { $inc: { totalFavorites: 1 } })
      await BadgeService.recalculate(poster.authorId)
    }

    return { favorited: true }
  }

  async isFavorited(userId, posterId) {
    const fav = await Favorite.findOne({ userId, posterId })
    return !!fav
  }
}

export default new EngagementService()
