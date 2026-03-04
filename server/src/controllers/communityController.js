import PosterService from '../services/posterService.js'
import User from '../models/user.js'
import Poster from '../models/poster.js'
import BadgeService from '../services/badgeService.js'

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
        .select('name username avatar badge badgeScore posterCount totalDownloads totalFavorites totalViews createdAt bio spotifyId showSpotifyProfile pinnedPosterId permissions')
        .lean()

      if (!user) return res.status(404).json({ error: 'User not found' })

      const { page = 1, limit = 20 } = req.query
      const postersResult = await PosterService.findByUser(
        user._id.toString(),
        req.user?.id || null,
        parseInt(page),
        parseInt(limit)
      )

      // Include pinned poster data if it exists
      let pinnedPoster = null
      if (user.pinnedPosterId) {
        pinnedPoster = await Poster.findOne({ _id: user.pinnedPosterId, isDeleted: false, visibility: 'public' }).lean()
      }

      // Only expose Spotify if user opted in
      const hasSpotify = user.showSpotifyProfile && !!user.spotifyId
      const publicSpotifyId = hasSpotify ? user.spotifyId : null
      const { spotifyId: _sid, showSpotifyProfile: _ssp, ...publicUser } = user

      const badgeProgress = BadgeService.getBadgeProgress(user)
      const isAdmin = (user.permissions || []).includes('admin')
      res.json({ user: { ...publicUser, hasSpotify, spotifyId: publicSpotifyId, badgeProgress, isAdmin }, pinnedPoster, ...postersResult })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async getUserPublicStats(req, res) {
    try {
      const user = await User.findOne({ username: req.params.username, status: 'active' }).lean()
      if (!user) return res.status(404).json({ error: 'User not found' })

      const posters = await Poster.find({ authorId: user._id, isDeleted: false, visibility: 'public' })
        .select('_id albumName artistsName views downloads favoritesCount posterJson createdAt')
        .lean()

      const totalPosters   = posters.length
      const totalDownloads = posters.reduce((s, p) => s + (p.downloads || 0), 0)
      const totalViews     = posters.reduce((s, p) => s + (p.views || 0), 0)
      const totalFavorites = posters.reduce((s, p) => s + (p.favoritesCount || 0), 0)

      const sortedByFav  = [...posters].sort((a, b) => (b.favoritesCount || 0) - (a.favoritesCount || 0))
      const sortedByDl   = [...posters].sort((a, b) => (b.downloads || 0) - (a.downloads || 0))
      const sortedByView = [...posters].sort((a, b) => (b.views || 0) - (a.views || 0))

      res.json({
        stats: {
          totalPosters,
          totalDownloads,
          totalViews,
          totalFavorites,
          mostFavorited:  sortedByFav[0]  || null,
          mostDownloaded: sortedByDl[0]   || null,
          mostViewed:     sortedByView[0] || null
        }
      })
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

  async searchUsers(req, res) {
    try {
      const { q = '', page = 1, limit = 12 } = req.query
      const safeLimit = Math.min(parseInt(limit), 50)
      const skip = (parseInt(page) - 1) * safeLimit
      const isRanking = !q.trim()

      let filter = { status: 'active' }

      if (!isRanking) {
        const escaped = q.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        filter.$or = [
          { name: { $regex: escaped, $options: 'i' } },
          { username: { $regex: escaped, $options: 'i' } }
        ]
      }

      const sortCriteria = isRanking
        ? { _score: -1 }
        : { posterCount: -1, totalFavorites: -1 }

      const pipeline = [
        { $match: filter },
        {
          $addFields: {
            _score: {
              $add: [
                { $multiply: [{ $ifNull: ['$posterCount', 0] }, 3] },
                { $multiply: [{ $ifNull: ['$totalFavorites', 0] }, 2] },
                { $ifNull: ['$totalDownloads', 0] },
                { $multiply: [{ $ifNull: ['$totalViews', 0] }, 0.1] }
              ]
            }
          }
        },
        { $sort: isRanking ? { _score: -1 } : { posterCount: -1, totalFavorites: -1 } },
        {
          $facet: {
            users: [
              { $skip: skip },
              { $limit: safeLimit },
              { $project: { name: 1, username: 1, avatar: 1, badge: 1, permissions: 1, posterCount: 1, totalDownloads: 1, totalFavorites: 1, _score: 1 } }
            ],
            total: [{ $count: 'count' }]
          }
        }
      ]

      const [result] = await User.aggregate(pipeline)
      const users = result.users || []
      const total = result.total[0]?.count || 0

      if (isRanking) {
        users.forEach((u, i) => { u.rank = skip + i + 1 })
      }

      res.json({ users, total, page: parseInt(page), hasMore: skip + users.length < total, isRanking })
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
