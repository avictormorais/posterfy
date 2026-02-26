import UserService from '../services/userService.js'
import Poster from '../models/poster.js'

class UserController {
  async getProfile(req, res) {
    try {
      const user = await UserService.findById(req.user.id)
      if (!user) {
        return res.status(404).json({ error: 'User not found' })
      }

      res.json({
        user: {
          id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          avatar: user.avatar,
          bio: user.bio || '',
          pinnedPosterId: user.pinnedPosterId || null,
          createdAt: user.createdAt,
          hasGoogle: !!user.googleId,
          hasSpotify: !!user.spotifyId,
          spotifyId: user.spotifyId || null
        }
      })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async updateProfile(req, res) {
    try {
      const { name, username, bio } = req.body

      const user = await UserService.updateProfile(req.user.id, { name, username, bio })

      req.user = user

      res.json({
        message: 'Profile updated successfully',
        user: {
          id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          avatar: user.avatar,
          bio: user.bio || ''
        }
      })
    } catch (error) {
      console.error('Update profile error:', error)

      if (error.statusCode === 409) {
        return res.status(409).json({ error: error.message })
      }

      if (error.message.includes('required') || error.message.includes('format') || error.message.includes('characters')) {
        return res.status(400).json({ error: error.message })
      }

      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async setPinnedPoster(req, res) {
    try {
      const { posterId } = req.body
      if (!posterId) return res.status(400).json({ error: 'posterId is required' })

      // Verify poster belongs to this user
      const poster = await Poster.findOne({ _id: posterId, authorId: req.user.id, isDeleted: false })
      if (!poster) return res.status(404).json({ error: 'Poster not found' })

      const user = await UserService.setPinnedPoster(req.user.id, posterId)
      res.json({ pinnedPosterId: user.pinnedPosterId })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async removePinnedPoster(req, res) {
    try {
      const user = await UserService.setPinnedPoster(req.user.id, null)
      res.json({ pinnedPosterId: user.pinnedPosterId })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async changeUsername(req, res) {
    try {
      const { username } = req.body

      if (!username || typeof username !== 'string') {
        return res.status(400).json({ error: 'Username is required' })
      }

      const user = await UserService.changeUsername(req.user.id, username)

      res.json({
        message: 'Username changed successfully',
        user: {
          id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          avatar: user.avatar
        }
      })
    } catch (error) {
      console.error('Change username error:', error)

      if (error.statusCode === 409) {
        return res.status(409).json({ error: error.message })
      }

      if (error.message.includes('required') || error.message.includes('format') || error.message.includes('characters')) {
        return res.status(400).json({ error: error.message })
      }

      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async getStats(req, res) {
    try {
      const userId = req.user.id

      const [totals, posters] = await Promise.all([
        UserService.findById(userId),
        Poster.find({ authorId: userId, isDeleted: false })
          .select('_id albumName artistsName views downloads favoritesCount posterJson createdAt')
          .lean()
      ])

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
          mostFavorited: sortedByFav[0]   || null,
          mostDownloaded: sortedByDl[0]   || null,
          mostViewed:    sortedByView[0]  || null,
        }
      })
    } catch (error) {
      console.error('getStats error:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }
}

export default new UserController()