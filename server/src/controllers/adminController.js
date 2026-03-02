import User from '../models/user.js'
import Poster from '../models/poster.js'
import Favorite from '../models/favorite.js'
import AdminLog from '../models/adminLog.js'
import BadgeService from '../services/badgeService.js'
import { cacheGet, cacheSet } from '../utils/cache.js'
import mongoose from 'mongoose'
import { readFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
let apiVersion = '2.0.0'
try { apiVersion = JSON.parse(readFileSync(join(__dirname, '../../package.json'), 'utf8')).version || apiVersion } catch {}

const OVERVIEW_TTL = 5 * 60 * 1000
const HEALTH_TTL = 60 * 1000

class AdminController {
  async overview(req, res) {
    try {
      const cached = cacheGet('admin:overview')
      if (cached) return res.json(cached)

      const now = new Date()
      const d7 = new Date(now - 7 * 24 * 60 * 60 * 1000)
      const d30 = new Date(now - 30 * 24 * 60 * 60 * 1000)

      const [usersByStatus, admins, usersLast7d, usersLast30d, posterAgg, engAgg, top5Posters, top5Users] = await Promise.all([
        User.aggregate([{ $group: { _id: '$status', count: { $sum: 1 } } }]),
        User.countDocuments({ permissions: 'admin' }),
        User.countDocuments({ createdAt: { $gte: d7 } }),
        User.countDocuments({ createdAt: { $gte: d30 } }),
        Poster.aggregate([
          { $group: {
            _id: { deleted: '$isDeleted', visibility: '$visibility' },
            count: { $sum: 1 },
            last7d: { $sum: { $cond: [{ $gte: ['$createdAt', d7] }, 1, 0] } },
            last30d: { $sum: { $cond: [{ $gte: ['$createdAt', d30] }, 1, 0] } }
          }}
        ]),
        User.aggregate([
          { $match: { status: 'active' } },
          { $group: {
            _id: null,
            totalDownloads: { $sum: '$totalDownloads' },
            totalFavorites: { $sum: '$totalFavorites' },
            totalViews: { $sum: '$totalViews' }
          }}
        ]),
        Poster.find({ isDeleted: false, visibility: 'public' })
          .sort({ popularityScore: -1 })
          .limit(5)
          .select('albumName artistsName popularityScore views downloads favoritesCount')
          .lean(),
        User.find({ status: 'active' })
          .sort({ badgeScore: -1 })
          .limit(5)
          .select('name username avatar badge badgeScore')
          .lean()
      ])

      const statusMap = {}
      usersByStatus.forEach(s => { statusMap[s._id] = s.count })

      let postersTotal = 0, postersPublic = 0, postersPrivate = 0, postersDeleted = 0, postersLast7d = 0, postersLast30d = 0
      posterAgg.forEach(g => {
        postersTotal += g.count
        if (g._id.deleted) { postersDeleted += g.count }
        else if (g._id.visibility === 'public') { postersPublic += g.count }
        else { postersPrivate += g.count }
        postersLast7d += g.last7d
        postersLast30d += g.last30d
      })

      const eng = engAgg[0] || { totalDownloads: 0, totalFavorites: 0, totalViews: 0 }

      const data = {
        users: {
          total: (statusMap.active || 0) + (statusMap.suspended || 0),
          active: statusMap.active || 0,
          suspended: statusMap.suspended || 0,
          admins,
          last7d: usersLast7d,
          last30d: usersLast30d
        },
        posters: {
          total: postersTotal,
          public: postersPublic,
          private: postersPrivate,
          deleted: postersDeleted,
          last7d: postersLast7d,
          last30d: postersLast30d
        },
        engagement: {
          totalFavorites: eng.totalFavorites,
          totalDownloads: eng.totalDownloads,
          totalViews: eng.totalViews
        },
        top5Posters,
        top5Users,
        cachedAt: now.toISOString()
      }

      cacheSet('admin:overview', data, OVERVIEW_TTL)
      res.json(data)
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async getUser(req, res) {
    try {
      const user = await User.findById(req.params.id).lean()
      if (!user) return res.status(404).json({ error: 'User not found' })
      res.json({ user })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async editUser(req, res) {
    try {
      const { name, bio, username, badge } = req.body
      const user = await User.findById(req.params.id)
      if (!user) return res.status(404).json({ error: 'User not found' })

      if (name !== undefined) {
        const trimmed = (name || '').trim()
        if (!trimmed) return res.status(400).json({ error: 'Name cannot be empty' })
        user.name = trimmed
      }

      if (bio !== undefined) {
        user.bio = (bio || '')
          .split('\n').slice(0, 4).filter(l => l.trim() !== '').join('\n')
          .substring(0, 160)
      }

      if (username !== undefined) {
        const trimmed = (username || '').trim().toLowerCase()
        if (!/^[a-z0-9]+$/.test(trimmed)) return res.status(400).json({ error: 'Username can only contain letters and numbers' })
        if (trimmed.length < 3) return res.status(400).json({ error: 'Username must be at least 3 characters' })

        const exists = await User.findOne({ username: trimmed, _id: { $ne: user._id } })
        if (exists) return res.status(409).json({ error: 'Username already taken' })
        user.username = trimmed
      }

      if (badge !== undefined) {
        const VALID_BADGES = ['creator_bronze', 'creator_silver', 'creator_gold', 'creator_diamond']
        if (badge !== '' && !VALID_BADGES.includes(badge)) {
          return res.status(400).json({ error: 'Invalid badge' })
        }
        user.badge = badge || null
      }

      await user.save()
      res.json({ message: 'User updated', user: { id: user._id, name: user.name, username: user.username, bio: user.bio, badge: user.badge } })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async promoteUser(req, res) {
    try {
      const target = await User.findById(req.params.id)
      if (!target) return res.status(404).json({ error: 'User not found' })
      if (target.status === 'suspended') return res.status(400).json({ error: 'Cannot promote a suspended user' })
      if (target.permissions.includes('admin')) return res.status(400).json({ error: 'User is already an admin' })

      target.permissions = [...new Set([...target.permissions, 'admin'])]
      await target.save()
      res.json({ message: 'User promoted to admin', user: { id: target._id, name: target.name, username: target.username, permissions: target.permissions } })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async demoteUser(req, res) {
    try {
      if (req.params.id === req.user.id) return res.status(400).json({ error: 'Cannot remove your own admin permission' })

      const target = await User.findById(req.params.id)
      if (!target) return res.status(404).json({ error: 'User not found' })
      if (!target.permissions.includes('admin')) return res.status(400).json({ error: 'User is not an admin' })

      target.permissions = target.permissions.filter(p => p !== 'admin')
      await target.save()
      res.json({ message: 'Admin permission removed', user: { id: target._id, name: target.name, username: target.username, permissions: target.permissions } })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async forceLogout(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        { $inc: { tokenVersion: 1 } },
        { new: true }
      ).select('id name username tokenVersion')

      if (!user) return res.status(404).json({ error: 'User not found' })
      res.json({ message: 'All sessions revoked', tokenVersion: user.tokenVersion })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async deletePoster(req, res) {
    try {
      const poster = await Poster.findOneAndUpdate(
        { _id: req.params.id, isDeleted: false },
        { isDeleted: true },
        { new: true }
      )
      if (!poster) return res.status(404).json({ error: 'Poster not found' })

      await User.findByIdAndUpdate(poster.authorId, { $inc: { posterCount: -1 } })
      await BadgeService.recalculate(poster.authorId)

      res.json({ message: 'Poster deleted' })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async restorePoster(req, res) {
    try {
      const poster = await Poster.findOneAndUpdate(
        { _id: req.params.id, isDeleted: true },
        { isDeleted: false },
        { new: true }
      )
      if (!poster) return res.status(404).json({ error: 'Poster not found or not deleted' })

      await User.findByIdAndUpdate(poster.authorId, { $inc: { posterCount: 1 } })
      await BadgeService.recalculate(poster.authorId)

      res.json({ message: 'Poster restored' })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async purgePoster(req, res) {
    try {
      const poster = await Poster.findOne({ _id: req.params.id, isDeleted: true })
      if (!poster) return res.status(404).json({ error: 'Poster not found or not soft-deleted' })

      await Promise.all([
        Poster.deleteOne({ _id: poster._id }),
        Favorite.deleteMany({ posterId: poster._id }),
      ])

      res.json({ message: 'Poster permanently deleted' })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async editPoster(req, res) {
    try {
      const { views, downloads, favoritesCount } = req.body
      const poster = await Poster.findById(req.params.id)
      if (!poster) return res.status(404).json({ error: 'Poster not found' })

      if (views !== undefined) poster.views = Math.max(0, parseInt(views) || 0)
      if (downloads !== undefined) poster.downloads = Math.max(0, parseInt(downloads) || 0)
      if (favoritesCount !== undefined) poster.favoritesCount = Math.max(0, parseInt(favoritesCount) || 0)

      await poster.save()
      res.json({ message: 'Poster updated', poster: { _id: poster._id, views: poster.views, downloads: poster.downloads, favoritesCount: poster.favoritesCount } })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async changePosterVisibility(req, res) {
    try {
      const { visibility } = req.body
      if (!['public', 'private'].includes(visibility)) return res.status(400).json({ error: 'Invalid visibility value' })

      const poster = await Poster.findOneAndUpdate(
        { _id: req.params.id, isDeleted: false },
        { visibility },
        { new: true }
      ).select('_id albumName artistsName visibility')

      if (!poster) return res.status(404).json({ error: 'Poster not found' })
      res.json({ message: 'Visibility updated', visibility: poster.visibility })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async listPosters(req, res) {
    try {
      const { page = 1, limit = 30, visibility, isDeleted = 'false', authorId, search, sort = 'recent' } = req.query
      const safeLimit = Math.min(parseInt(limit) || 30, 100)
      const skip = (Math.max(parseInt(page) || 1, 1) - 1) * safeLimit

      const filter = {}
      if (isDeleted === 'true') filter.isDeleted = true
      else if (isDeleted === 'all') { /* no filter */ }
      else filter.isDeleted = false

      if (visibility) filter.visibility = visibility
      if (authorId) filter.authorId = authorId
      if (search && search.trim()) {
        const term = search.trim()
        if (mongoose.Types.ObjectId.isValid(term)) {
          filter._id = term
        } else {
          const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
          filter.$or = [
            { albumName: { $regex: escaped, $options: 'i' } },
            { artistsName: { $regex: escaped, $options: 'i' } }
          ]
        }
      }

      const sortMap = { recent: { createdAt: -1 }, popular: { popularityScore: -1 }, views: { views: -1 }, downloads: { downloads: -1 } }
      const sortQuery = sortMap[sort] || sortMap.recent

      const [posters, total] = await Promise.all([
        Poster.find(filter)
          .sort(sortQuery)
          .skip(skip)
          .limit(safeLimit)
          .populate('authorId', 'name username avatar')
          .select('albumName artistsName visibility isDeleted views downloads favoritesCount popularityScore createdAt authorId')
          .lean(),
        Poster.countDocuments(filter)
      ])

      res.json({ posters, total, page: parseInt(page) || 1, hasMore: skip + posters.length < total })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async getPoster(req, res) {
    try {
      const poster = await Poster.findById(req.params.id)
        .populate('authorId', 'name username avatar badge status')
        .lean()

      if (!poster) return res.status(404).json({ error: 'Poster not found' })
      res.json({ poster })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async bulkUsersAction(req, res) {
    try {
      const { ids, action, badge } = req.body
      if (!Array.isArray(ids) || ids.length === 0) return res.status(400).json({ error: 'No IDs provided' })
      if (ids.length > 100) return res.status(400).json({ error: 'Too many IDs (max 100)' })

      const safeIds = ids.filter(id => String(id) !== String(req.user.id))

      if (action === 'ban') {
        await User.updateMany(
          { _id: { $in: safeIds }, status: { $ne: 'suspended' } },
          { status: 'suspended', $inc: { tokenVersion: 1 } }
        )
      } else if (action === 'unban') {
        await User.updateMany(
          { _id: { $in: safeIds }, status: 'suspended' },
          { status: 'active' }
        )
      } else if (action === 'setBadge') {
        const VALID = ['creator_bronze', 'creator_silver', 'creator_gold', 'creator_diamond', '']
        if (!VALID.includes(badge ?? '')) return res.status(400).json({ error: 'Invalid badge' })
        await User.updateMany(
          { _id: { $in: safeIds } },
          { badge: badge || null }
        )
      } else {
        return res.status(400).json({ error: 'Invalid action' })
      }

      res.json({ message: 'Bulk action completed', affected: safeIds.length })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async banUser(req, res) {
    try {
      if (req.params.id === req.user.id) return res.status(400).json({ error: 'Cannot ban yourself' })

      const user = await User.findByIdAndUpdate(
        req.params.id,
        { status: 'suspended', $inc: { tokenVersion: 1 } },
        { new: true }
      ).select('id name username status tokenVersion')

      if (!user) return res.status(404).json({ error: 'User not found' })
      res.json({ message: 'User suspended', user })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async unbanUser(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        { status: 'active' },
        { new: true }
      ).select('id name username status')

      if (!user) return res.status(404).json({ error: 'User not found' })
      res.json({ message: 'User reactivated', user })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async purgeUser(req, res) {
    try {
      if (req.params.id === req.user.id) return res.status(400).json({ error: 'Cannot purge yourself' })

      const user = await User.findOne({ _id: req.params.id, status: 'suspended' })
      if (!user) return res.status(404).json({ error: 'User not found or not suspended' })

      const posters = await Poster.find({ authorId: user._id }).select('_id').lean()
      const posterIds = posters.map(p => p._id)

      await Promise.all([
        Poster.deleteMany({ authorId: user._id }),
        Favorite.deleteMany({ posterId: { $in: posterIds } }),
        User.deleteOne({ _id: user._id }),
      ])

      res.json({ message: 'User permanently deleted', deletedPosters: posterIds.length })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async listUsers(req, res) {
    try {
      const { page = 1, limit = 50, status, search } = req.query
      const safeLimit = Math.min(parseInt(limit) || 50, 100)
      const skip = (Math.max(parseInt(page) || 1, 1) - 1) * safeLimit

      const filter = {}
      if (status) filter.status = status
      if (search && search.trim()) {
        const term = search.trim()
        if (mongoose.Types.ObjectId.isValid(term)) {
          filter._id = term
        } else {
          const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
          filter.$or = [
            { name: { $regex: escaped, $options: 'i' } },
            { username: { $regex: escaped, $options: 'i' } },
            { email: { $regex: escaped, $options: 'i' } }
          ]
        }
      }

      const [users, total] = await Promise.all([
        User.find(filter)
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(safeLimit)
          .select('name username email avatar bio status permissions posterCount totalDownloads totalFavorites totalViews badge badgeScore createdAt')
          .lean(),
        User.countDocuments(filter)
      ])

      res.json({ users, total, page: parseInt(page) || 1, hasMore: skip + users.length < total })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async listLogs(req, res) {
    try {
      const { page = 1, limit = 50, action, adminId, targetId } = req.query
      const safeLimit = Math.min(parseInt(limit) || 50, 100)
      const skip = (Math.max(parseInt(page) || 1, 1) - 1) * safeLimit

      const filter = {}
      if (action) filter.action = action
      if (adminId) filter.adminId = adminId
      if (targetId) filter.targetId = targetId

      const [logs, total] = await Promise.all([
        AdminLog.find(filter)
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(safeLimit)
          .populate('adminId', 'name username avatar')
          .lean(),
        AdminLog.countDocuments(filter)
      ])

      res.json({ logs, total, page: parseInt(page) || 1, hasMore: skip + logs.length < total })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async health(req, res) {
    try {
      const cached = cacheGet('admin:health')
      if (cached) return res.json(cached)

      const start = Date.now()
      await mongoose.connection.db.admin().ping()
      const pingMs = Date.now() - start

      const [users, posters, favorites, adminLogs] = await Promise.all([
        User.estimatedDocumentCount(),
        Poster.estimatedDocumentCount(),
        Favorite.estimatedDocumentCount(),
        AdminLog.estimatedDocumentCount()
      ])

      const dbStats = await mongoose.connection.db.stats()
      const memUsage = process.memoryUsage()

      const data = {
        status: mongoose.connection.readyState === 1 ? 'healthy' : 'degraded',
        mongo: { connected: mongoose.connection.readyState === 1, pingMs },
        collections: { users, posters, favorites, adminLogs },
        storage: {
          dataSize: dbStats.dataSize || 0,
          storageSize: dbStats.storageSize || 0,
          indexSize: dbStats.indexSize || 0,
          totalSize: (dbStats.dataSize || 0) + (dbStats.indexSize || 0),
        },
        memory: {
          rss: memUsage.rss,
          heapUsed: memUsage.heapUsed,
          heapTotal: memUsage.heapTotal,
        },
        api: { version: apiVersion, uptimeSeconds: Math.floor(process.uptime()), nodeVersion: process.version }
      }

      cacheSet('admin:health', data, HEALTH_TTL)
      res.json(data)
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }
}

export default new AdminController()
