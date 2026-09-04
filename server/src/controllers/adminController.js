import User from '../models/user.js'
import Poster from '../models/poster.js'
import Favorite from '../models/favorite.js'
import AdminLog from '../models/adminLog.js'
import Payment from '../models/payment.js'
import PrintUnlock from '../models/printUnlock.js'
import PrintReadyAccountGrant from '../models/printReadyAccountGrant.js'
import BadgeService from '../services/badgeService.js'
import PrintReadyService from '../services/printReadyService.js'
import { cacheGet, cacheSet } from '../utils/cache.js'
import mongoose from 'mongoose'
import { readFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { validationResult } from 'express-validator'

const __dirname = dirname(fileURLToPath(import.meta.url))
let apiVersion = '2.0.0'
try { apiVersion = JSON.parse(readFileSync(join(__dirname, '../../package.json'), 'utf8')).version || apiVersion } catch {}

const OVERVIEW_TTL = 5 * 60 * 1000
const HEALTH_TTL = 60 * 1000

const escapedRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const commerceUserIds = async (search) => {
  const escaped = escapedRegex(search)
  const users = await User.find({
    $or: [
      { name: { $regex: escaped, $options: 'i' } },
      { username: { $regex: escaped, $options: 'i' } },
      { email: { $regex: escaped, $options: 'i' } }
    ]
  }).select('_id').limit(100).lean()
  return users.map(user => user._id)
}

const findCommerceUser = async (identifier) => {
  const value = String(identifier || '').trim()
  if (!value) return null

  const filter = mongoose.Types.ObjectId.isValid(value)
    ? { _id: value }
    : {
        $or: [
          { email: value.toLowerCase() },
          { username: value.toLowerCase() }
        ]
      }

  return User.findOne({ ...filter, status: 'active' }).select('_id name username email')
}

const recalculateFavoriteMetrics = async (posterIds) => {
  if (!posterIds.length) return

  const posters = await Poster.find({ _id: { $in: posterIds } })
    .select('_id authorId views downloads edits')
    .lean()
  if (!posters.length) return

  const counts = await Favorite.aggregate([
    { $match: { posterId: { $in: posters.map(p => p._id) } } },
    { $group: { _id: '$posterId', count: { $sum: 1 } } }
  ])
  const countByPoster = new Map(counts.map(item => [item._id.toString(), item.count]))

  await Poster.bulkWrite(posters.map(poster => {
    const favoritesCount = countByPoster.get(poster._id.toString()) || 0
    const popularityScore = (
      (poster.views || 0) +
      (poster.edits || 0) * 3 +
      (poster.downloads || 0) * 5 +
      favoritesCount * 10
    )
    return {
      updateOne: {
        filter: { _id: poster._id },
        update: { $set: { favoritesCount, popularityScore } }
      }
    }
  }))

  const authorIds = [...new Map(
    posters.map(poster => [poster.authorId.toString(), poster.authorId])
  ).values()]
  const totals = await Poster.aggregate([
    { $match: { authorId: { $in: authorIds } } },
    { $group: { _id: '$authorId', totalFavorites: { $sum: '$favoritesCount' } } }
  ])
  const totalByAuthor = new Map(totals.map(item => [item._id.toString(), item.totalFavorites]))

  await User.bulkWrite(authorIds.map(authorId => ({
    updateOne: {
      filter: { _id: authorId },
      update: { $set: { totalFavorites: totalByAuthor.get(authorId.toString()) || 0 } }
    }
  })))
  await Promise.all(authorIds.map(authorId => BadgeService.recalculate(authorId)))
}

class AdminController {
  async listPayments(req, res) {
    try {
      const { page = 1, limit = 30, search = '', status = '' } = req.query
      const safeLimit = Math.min(Math.max(parseInt(limit) || 30, 1), 100)
      const safePage = Math.max(parseInt(page) || 1, 1)
      const filter = {}
      if (status) filter.paymentStatus = status

      if (search.trim()) {
        const term = search.trim()
        const userIds = await commerceUserIds(term)
        const escaped = escapedRegex(term)
        filter.$or = [
          { userId: { $in: userIds } },
          { 'album.providerAlbumId': term },
          { 'album.albumName': { $regex: escaped, $options: 'i' } },
          { 'album.artistNames': { $regex: escaped, $options: 'i' } },
          { stripeCheckoutSessionId: term },
          { stripePaymentIntentId: term },
          { stripeChargeId: term }
        ]
        if (mongoose.Types.ObjectId.isValid(term)) filter.$or.push({ _id: term })
      }

      const [payments, total] = await Promise.all([
        Payment.find(filter)
          .sort({ createdAt: -1 })
          .skip((safePage - 1) * safeLimit)
          .limit(safeLimit)
          .populate('userId', 'name username email')
          .lean(),
        Payment.countDocuments(filter)
      ])
      res.json({ payments, total, page: safePage, hasMore: safePage * safeLimit < total })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async listPrintUnlocks(req, res) {
    try {
      const { page = 1, limit = 30, search = '', state = '' } = req.query
      const safeLimit = Math.min(Math.max(parseInt(limit) || 30, 1), 100)
      const safePage = Math.max(parseInt(page) || 1, 1)
      const filter = {}
      if (state === 'active') filter.active = true
      if (state === 'revoked') filter.active = false

      if (search.trim()) {
        const term = search.trim()
        const userIds = await commerceUserIds(term)
        const escaped = escapedRegex(term)
        filter.$or = [
          { userId: { $in: userIds } },
          { 'album.providerAlbumId': term },
          { 'album.albumName': { $regex: escaped, $options: 'i' } },
          { 'album.artistNames': { $regex: escaped, $options: 'i' } }
        ]
        if (mongoose.Types.ObjectId.isValid(term)) filter.$or.push({ _id: term })
      }

      const [unlocks, total] = await Promise.all([
        PrintUnlock.find(filter)
          .sort({ createdAt: -1 })
          .skip((safePage - 1) * safeLimit)
          .limit(safeLimit)
          .populate('userId', 'name username email')
          .populate('grantedBy revokedBy', 'name username')
          .lean(),
        PrintUnlock.countDocuments(filter)
      ])
      res.json({ unlocks, total, page: safePage, hasMore: safePage * safeLimit < total })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async grantPrintUnlock(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ error: errors.array()[0].msg })
    try {
      const { userId, albumId, reason } = req.body
      const targetUser = await User.findOne({ _id: userId, status: 'active' }).select('_id')
      if (!targetUser) return res.status(404).json({ error: 'User not found' })

      const album = await PrintReadyService.resolveAlbum({ albumId, userId: req.user.id, isAdmin: true })
      const unlock = await PrintUnlock.findOneAndUpdate(
        { userId, 'album.provider': 'spotify', 'album.providerAlbumId': albumId },
        {
          $set: {
            album,
            active: true,
            source: 'admin',
            grantedAt: new Date(),
            grantedBy: req.user.id,
            revokedAt: null,
            revokedBy: null,
            revocationReason: ''
          },
          $setOnInsert: { userId }
        },
        { upsert: true, new: true }
      )

      await AdminLog.create({
        adminId: req.user.id,
        action: 'grant_print_unlock',
        targetType: 'print_unlock',
        targetId: unlock._id,
        details: { userId, albumId, reason: reason.trim() },
        ip: req.ip || ''
      })
      res.json({ unlock })
    } catch (error) {
      console.error('Failed to grant Print-Ready unlock:', error)
      res.status(error.status || 500).json({ error: error.message || 'Internal server error', code: error.code })
    }
  }

  async revokePrintUnlock(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ error: errors.array()[0].msg })
    try {
      const unlock = await PrintUnlock.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            active: false,
            revokedAt: new Date(),
            revokedBy: req.user.id,
            revocationReason: req.body.reason.trim()
          }
        },
        { new: true }
      )
      if (!unlock) return res.status(404).json({ error: 'Print-Ready unlock not found' })

      await AdminLog.create({
        adminId: req.user.id,
        action: 'revoke_print_unlock',
        targetType: 'print_unlock',
        targetId: unlock._id,
        details: {
          userId: unlock.userId,
          albumId: unlock.album.providerAlbumId,
          reason: req.body.reason.trim()
        },
        ip: req.ip || ''
      })
      res.json({ unlock })
    } catch (error) {
      console.error('Failed to revoke Print-Ready unlock:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async listPrintReadyAccountGrants(req, res) {
    try {
      const { page = 1, limit = 30, search = '', state = '' } = req.query
      const safeLimit = Math.min(Math.max(parseInt(limit) || 30, 1), 100)
      const safePage = Math.max(parseInt(page) || 1, 1)
      const filter = {}
      if (state === 'active') filter.active = true
      if (state === 'revoked') filter.active = false

      if (search.trim()) {
        const term = search.trim()
        const userIds = await commerceUserIds(term)
        const escaped = escapedRegex(term)
        filter.$or = [
          { userId: { $in: userIds } },
          { grantReason: { $regex: escaped, $options: 'i' } },
          { revocationReason: { $regex: escaped, $options: 'i' } }
        ]
        if (mongoose.Types.ObjectId.isValid(term)) filter.$or.push({ _id: term })
      }

      const [grants, total] = await Promise.all([
        PrintReadyAccountGrant.find(filter)
          .sort({ active: -1, updatedAt: -1 })
          .skip((safePage - 1) * safeLimit)
          .limit(safeLimit)
          .populate('userId', 'name username email')
          .populate('grantedBy revokedBy', 'name username')
          .lean(),
        PrintReadyAccountGrant.countDocuments(filter)
      ])
      res.json({ grants, total, page: safePage, hasMore: safePage * safeLimit < total })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async grantPrintReadyAccountAccess(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ error: errors.array()[0].msg })
    try {
      const reason = req.body.reason.trim()
      const targetUser = await findCommerceUser(req.body.user || req.body.userId)
      if (!targetUser) return res.status(404).json({ error: 'User not found' })

      const grant = await PrintReadyAccountGrant.findOneAndUpdate(
        { userId: targetUser._id },
        {
          $set: {
            scope: 'all_albums',
            active: true,
            grantedAt: new Date(),
            grantedBy: req.user.id,
            grantReason: reason,
            revokedAt: null,
            revokedBy: null,
            revocationReason: ''
          },
          $setOnInsert: {
            userId: targetUser._id,
            useCount: 0
          }
        },
        { upsert: true, new: true }
      ).populate('userId', 'name username email')

      await AdminLog.create({
        adminId: req.user.id,
        action: 'grant_print_ready_account_access',
        targetType: 'print_ready_account_grant',
        targetId: grant._id,
        details: {
          userId: targetUser._id,
          username: targetUser.username,
          email: targetUser.email,
          reason
        },
        ip: req.ip || ''
      })
      res.json({ grant })
    } catch (error) {
      console.error('Failed to grant Print-Ready account access:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async revokePrintReadyAccountAccess(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ error: errors.array()[0].msg })
    try {
      const reason = req.body.reason.trim()
      const grant = await PrintReadyAccountGrant.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            active: false,
            revokedAt: new Date(),
            revokedBy: req.user.id,
            revocationReason: reason
          }
        },
        { new: true }
      ).populate('userId', 'name username email')
      if (!grant) return res.status(404).json({ error: 'Print-Ready account access not found' })

      await AdminLog.create({
        adminId: req.user.id,
        action: 'revoke_print_ready_account_access',
        targetType: 'print_ready_account_grant',
        targetId: grant._id,
        details: {
          userId: grant.userId?._id || grant.userId,
          username: grant.userId?.username,
          email: grant.userId?.email,
          reason
        },
        ip: req.ip || ''
      })
      res.json({ grant })
    } catch (error) {
      console.error('Failed to revoke Print-Ready account access:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async restorePrintReadyAccountAccess(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ error: errors.array()[0].msg })
    try {
      const reason = req.body.reason.trim()
      const grant = await PrintReadyAccountGrant.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            active: true,
            grantedAt: new Date(),
            grantedBy: req.user.id,
            grantReason: reason,
            revokedAt: null,
            revokedBy: null,
            revocationReason: ''
          }
        },
        { new: true }
      ).populate('userId', 'name username email')
      if (!grant) return res.status(404).json({ error: 'Print-Ready account access not found' })

      await AdminLog.create({
        adminId: req.user.id,
        action: 'restore_print_ready_account_access',
        targetType: 'print_ready_account_grant',
        targetId: grant._id,
        details: {
          userId: grant.userId?._id || grant.userId,
          username: grant.userId?.username,
          email: grant.userId?.email,
          reason
        },
        ip: req.ip || ''
      })
      res.json({ grant })
    } catch (error) {
      console.error('Failed to restore Print-Ready account access:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }

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
        User.updateMany({ pinnedPosterId: poster._id }, { $set: { pinnedPosterId: null } }),
      ])

      res.json({ message: 'Poster permanently deleted' })
    } catch (error) {
      console.error(`Failed to purge poster ${req.params.id}:`, error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async editPoster(req, res) {
    try {
      const { views, downloads, favoritesCount, edits } = req.body
      const poster = await Poster.findById(req.params.id)
      if (!poster) return res.status(404).json({ error: 'Poster not found' })

      if (views !== undefined) poster.views = Math.max(0, parseInt(views) || 0)
      if (downloads !== undefined) poster.downloads = Math.max(0, parseInt(downloads) || 0)
      if (favoritesCount !== undefined) poster.favoritesCount = Math.max(0, parseInt(favoritesCount) || 0)
      if (edits !== undefined) poster.edits = Math.max(0, parseInt(edits) || 0)

      const POPULARITY_WEIGHTS = {
        view: 1,
        edit: 3,
        download: 5,
        favorite: 10
      }
      poster.popularityScore = (
        poster.views * POPULARITY_WEIGHTS.view +
        poster.edits * POPULARITY_WEIGHTS.edit +
        poster.downloads * POPULARITY_WEIGHTS.download +
        poster.favoritesCount * POPULARITY_WEIGHTS.favorite
      )

      await poster.save()
      res.json({ message: 'Poster updated', poster: { _id: poster._id, views: poster.views, downloads: poster.downloads, favoritesCount: poster.favoritesCount, edits: poster.edits, popularityScore: poster.popularityScore } })
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
            { artistsName: { $regex: escaped, $options: 'i' } },
            { albumNameOriginal: { $regex: escaped, $options: 'i' } },
            { artistsNameOriginal: { $regex: escaped, $options: 'i' } }
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
          .select('albumName albumNameOriginal artistsName artistsNameOriginal visibility isDeleted views downloads favoritesCount popularityScore createdAt authorId')
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
      const outgoingFavoritePosterIds = await Favorite.distinct('posterId', {
        userId: user._id,
        ...(posterIds.length ? { posterId: { $nin: posterIds } } : {})
      })

      await Favorite.deleteMany({
        $or: [
          { userId: user._id },
          { posterId: { $in: posterIds } }
        ]
      })
      await recalculateFavoriteMetrics(outgoingFavoritePosterIds)

      if (posterIds.length) {
        await User.updateMany(
          { pinnedPosterId: { $in: posterIds } },
          { $set: { pinnedPosterId: null } }
        )
      }

      await Poster.deleteMany({ authorId: user._id })
      await PrintUnlock.deleteMany({ userId: user._id })
      await PrintReadyAccountGrant.deleteMany({ userId: user._id })
      await Payment.updateMany(
        { userId: user._id },
        { $set: { userId: null, checkoutOpen: false, accountDeletedAt: new Date() } }
      )
      await User.deleteOne({ _id: user._id })

      res.json({ message: 'User permanently deleted', deletedPosters: posterIds.length })
    } catch (error) {
      console.error(`Failed to purge user ${req.params.id}:`, error)
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

  async topPosters(req, res) {
    try {
      const { limit = 50 } = req.query
      const safeLimit = Math.min(Math.max(parseInt(limit) || 50, 5), 100)

      const topPosters = await Poster.find({ isDeleted: false, visibility: 'public' })
        .sort({ popularityScore: -1 })
        .limit(safeLimit)
        .populate('authorId', 'name username avatar badge status')
        .select('albumName artistsName popularityScore views downloads favoritesCount edits createdAt authorId')
        .lean()

      res.json({ topPosters, limit: safeLimit })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async topUsers(req, res) {
    try {
      const { limit = 50 } = req.query
      const safeLimit = Math.min(Math.max(parseInt(limit) || 50, 5), 100)

      const topUsers = await User.find({ status: 'active' })
        .sort({ badgeScore: -1 })
        .limit(safeLimit)
        .select('name username avatar badge badgeScore posterCount totalDownloads totalFavorites totalViews bio createdAt')
        .lean()

      res.json({ topUsers, limit: safeLimit })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async topArtists(req, res) {
    try {
      const { limit = 50 } = req.query
      const safeLimit = Math.min(Math.max(parseInt(limit) || 50, 5), 100)

      const topArtists = await Poster.aggregate([
        { $match: { isDeleted: false } },
        {
          $group: {
            _id: { $ifNull: ['$artistsNameOriginal', '$artistsName'] },
            posterCount: { $sum: 1 }
          }
        },
        { $sort: { posterCount: -1, _id: 1 } },
        { $limit: safeLimit },
        {
          $project: {
            _id: 0,
            artistName: '$_id',
            posterCount: 1
          }
        }
      ])

      res.json({ topArtists, limit: safeLimit })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async topAlbums(req, res) {
    try {
      const { limit = 50 } = req.query
      const safeLimit = Math.min(Math.max(parseInt(limit) || 50, 5), 100)

      const topAlbums = await Poster.aggregate([
        { $match: { isDeleted: false } },
        {
          $group: {
            _id: {
              albumName: { $ifNull: ['$albumNameOriginal', '$albumName'] },
              artistsName: { $ifNull: ['$artistsNameOriginal', '$artistsName'] }
            },
            posterCount: { $sum: 1 }
          }
        },
        { $sort: { posterCount: -1, '_id.albumName': 1, '_id.artistsName': 1 } },
        { $limit: safeLimit },
        {
          $project: {
            _id: 0,
            albumName: '$_id.albumName',
            artistsName: '$_id.artistsName',
            posterCount: 1
          }
        }
      ])

      res.json({ topAlbums, limit: safeLimit })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }
}

export default new AdminController()
