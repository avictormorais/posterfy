import PosterService from '../services/posterService.js'
import User from '../models/user.js'
import Poster from '../models/poster.js'

class CommunityController {
  async list(req, res) {
    try {
      const { sort = 'popular', page = 1, limit = 20, period } = req.query
      const result = await PosterService.findPublic({
        sort,
        page: parseInt(page),
        limit: parseInt(limit),
        period: period || null,
        userId: req.user?.id || null
      })
      res.json(result)
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async search(req, res) {
    try {
      const { q, page = 1, limit = 20 } = req.query
      const result = await PosterService.search({ q, page: parseInt(page), limit: parseInt(limit), userId: req.user?.id || null })
      res.json(result)
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async trendingAlbums(req, res) {
    try {
      const { limit = 10 } = req.query
      const albums = await PosterService.trendingAlbums(parseInt(limit))
      res.json({ albums })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async getUserPublicProfile(req, res) {
    try {
      const user = await User.findOne({ username: req.params.username, status: 'active' })
        .select('name username avatar badge posterCount totalDownloads totalFavorites createdAt')
        .lean()

      if (!user) return res.status(404).json({ error: 'User not found' })

      const { page = 1, limit = 20 } = req.query
      const postersResult = await PosterService.findByUser(
        user._id.toString(),
        null,
        parseInt(page),
        parseInt(limit)
      )

      res.json({ user, ...postersResult })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async topUsers(req, res) {
    try {
      const { sort = 'posters', limit = 10 } = req.query
      const safeLimit = Math.min(parseInt(limit), 50)

      const sortMap = {
        posters: { posterCount: -1 },
        downloads: { totalDownloads: -1 },
        favorites: { totalFavorites: -1 }
      }

      const sortQuery = sortMap[sort] || sortMap.posters

      const users = await User.find({ status: 'active' })
        .sort(sortQuery)
        .limit(safeLimit)
        .select('name username avatar badge posterCount totalDownloads totalFavorites')
        .lean()

      res.json({ users })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async albumPosters(req, res) {
    try {
      const { spotifyAlbumId } = req.params
      const { page = 1, limit = 20 } = req.query

      const safeLimit = Math.min(parseInt(limit), 50)
      const skip = (parseInt(page) - 1) * safeLimit

      const filter = { spotifyAlbumId, isDeleted: false, visibility: 'public' }

      const [posters, total] = await Promise.all([
        Poster.find(filter)
          .sort({ popularityScore: -1 })
          .skip(skip)
          .limit(safeLimit)
          .populate('authorId', 'name username avatar badge')
          .lean(),
        Poster.countDocuments(filter)
      ])

      res.json({ posters, total, page: parseInt(page), hasMore: skip + posters.length < total })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }
}

export default new CommunityController()
