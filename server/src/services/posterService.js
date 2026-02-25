import Poster from '../models/poster.js'
import Favorite from '../models/favorite.js'
import User from '../models/user.js'
import BadgeService from './badgeService.js'

const DEFAULT_LIMIT = 20
const MAX_LIMIT = 50

const buildPublicFilter = (extra = {}) => ({
  isDeleted: false,
  visibility: 'public',
  ...extra
})

const sanitizePosterJson = (json) => {
  const allowed = [
    'albumName', 'artistsName', 'titleSize', 'artistsSize', 'tracksSize',
    'marginTop', 'marginSide', 'marginCover', 'marginBackground',
    'titleRelease', 'releaseDate', 'titleRuntime', 'runtime',
    'backgroundColor', 'textColor', 'useWatermark', 'useFade',
    'showTracklist', 'tracklist', 'color1', 'color2', 'color3',
    'coverZoom', 'coverHorizontalPosition', 'coverVerticalPosition', 'coverBlur',
    'useUncompressed', 'albumCover', 'userAdjustedTitleSize', 'initialTitleSizeSet',
    'userAdjustedTracksSize', 'initialTracksSizeSet', 'customFont'
  ]
  const sanitized = {}
  for (const key of allowed) {
    if (json[key] !== undefined) sanitized[key] = json[key]
  }
  return sanitized
}

class PosterService {
  async create({ authorId, spotifyAlbumId, albumName, artistsName, releaseDate, posterJson, visibility }) {
    const sanitized = sanitizePosterJson(posterJson)

    const poster = await Poster.create({
      authorId,
      spotifyAlbumId,
      albumName: albumName.trim(),
      artistsName: artistsName.trim(),
      releaseDate: releaseDate || '',
      posterJson: sanitized,
      visibility: visibility || 'public'
    })

    await User.findByIdAndUpdate(authorId, { $inc: { posterCount: 1 } })
    await BadgeService.recalculate(authorId)

    return poster
  }

  async updateVisibility(posterId, authorId, visibility) {
    const poster = await Poster.findOne({ _id: posterId, authorId, isDeleted: false })
    if (!poster) return null
    poster.visibility = visibility
    await poster.save()
    return poster
  }

  async softDelete(posterId, requesterId, isAdmin) {
    const filter = isAdmin
      ? { _id: posterId, isDeleted: false }
      : { _id: posterId, authorId: requesterId, isDeleted: false }

    const poster = await Poster.findOneAndUpdate(filter, { isDeleted: true }, { new: true })
    if (!poster) return null

    await User.findByIdAndUpdate(poster.authorId, { $inc: { posterCount: -1 } })
    await BadgeService.recalculate(poster.authorId)

    return poster
  }

  async findById(posterId, requesterId = null) {
    const poster = await Poster.findOne({ _id: posterId, isDeleted: false })
      .populate('authorId', 'name username avatar badge')
      .lean()

    if (!poster) return null

    if (poster.visibility === 'private') {
      if (!requesterId || poster.authorId._id.toString() !== requesterId) return null
    }

    let favorited = false
    if (requesterId) {
      const fav = await Favorite.findOne({ userId: requesterId, posterId })
      favorited = !!fav
    }

    return { ...poster, favorited }
  }

  async findByUser(authorId, requesterId = null, page = 1, limit = DEFAULT_LIMIT) {
    const safeLimit = Math.min(limit, MAX_LIMIT)
    const skip = (page - 1) * safeLimit

    const filter = requesterId === authorId
      ? { authorId, isDeleted: false }
      : buildPublicFilter({ authorId })

    const [posters, total] = await Promise.all([
      Poster.find(filter).sort({ createdAt: -1 }).skip(skip).limit(safeLimit).lean(),
      Poster.countDocuments(filter)
    ])

    return { posters, total, page, hasMore: skip + posters.length < total }
  }

  async findPublic({ sort = 'popular', page = 1, limit = DEFAULT_LIMIT, period = null }) {
    const safeLimit = Math.min(limit, MAX_LIMIT)
    const skip = (page - 1) * safeLimit

    const filter = buildPublicFilter()

    if (period) {
      const now = new Date()
      const periods = { week: 7, month: 30, year: 365 }
      const days = periods[period]
      if (days) {
        filter.createdAt = { $gte: new Date(now - days * 24 * 60 * 60 * 1000) }
      }
    }

    const sortMap = {
      popular: { popularityScore: -1 },
      recent: { createdAt: -1 },
      favorites: { favoritesCount: -1 },
      downloads: { downloads: -1 }
    }

    const sortQuery = sortMap[sort] || sortMap.popular

    const [posters, total] = await Promise.all([
      Poster.find(filter)
        .sort(sortQuery)
        .skip(skip)
        .limit(safeLimit)
        .populate('authorId', 'name username avatar badge')
        .lean(),
      Poster.countDocuments(filter)
    ])

    return { posters, total, page, hasMore: skip + posters.length < total }
  }

  async search({ q, page = 1, limit = DEFAULT_LIMIT }) {
    if (!q || !q.trim()) return this.findPublic({ sort: 'popular', page, limit })

    const safeLimit = Math.min(limit, MAX_LIMIT)
    const skip = (page - 1) * safeLimit
    const trimmed = q.trim()

    // Find users whose username matches the query (case-insensitive)
    const User = (await import('../models/user.js')).default
    const matchedUsers = await User.find(
      { username: { $regex: trimmed, $options: 'i' } },
      { _id: 1 }
    ).lean()
    const matchedUserIds = matchedUsers.map(u => u._id)

    // Run text search (album/artist) and username-based search in parallel
    const textFilter   = { $text: { $search: trimmed }, ...buildPublicFilter() }
    const authorFilter = matchedUserIds.length
      ? { authorId: { $in: matchedUserIds }, ...buildPublicFilter() }
      : null

    const [textPosters, authorPosters, textCount, authorCount] = await Promise.all([
      Poster.find(textFilter, { score: { $meta: 'textScore' } })
        .sort({ score: { $meta: 'textScore' }, popularityScore: -1 })
        .limit(safeLimit + skip)
        .populate('authorId', 'name username avatar badge')
        .lean(),
      authorFilter
        ? Poster.find(authorFilter)
            .sort({ popularityScore: -1 })
            .limit(safeLimit + skip)
            .populate('authorId', 'name username avatar badge')
            .lean()
        : Promise.resolve([]),
      Poster.countDocuments(textFilter),
      authorFilter ? Poster.countDocuments(authorFilter) : Promise.resolve(0),
    ])

    // Merge & deduplicate by _id, text results first
    const seen = new Set()
    const merged = []
    for (const p of [...textPosters, ...authorPosters]) {
      const id = p._id.toString()
      if (!seen.has(id)) { seen.add(id); merged.push(p) }
    }

    const total   = Math.max(textCount, authorCount, merged.length)
    const posters = merged.slice(skip, skip + safeLimit)

    return { posters, total, page, hasMore: skip + posters.length < total }
  }

  async trendingAlbums(limit = 10) {
    const safeLimit = Math.min(limit, 50)
    return Poster.aggregate([
      { $match: buildPublicFilter() },
      { $group: {
        _id: '$spotifyAlbumId',
        albumName: { $first: '$albumName' },
        artistsName: { $first: '$artistsName' },
        count: { $sum: 1 },
        totalPopularity: { $sum: '$popularityScore' }
      }},
      { $sort: { count: -1, totalPopularity: -1 } },
      { $limit: safeLimit }
    ])
  }

  async getUserFavorites(userId, page = 1, limit = DEFAULT_LIMIT) {
    const safeLimit = Math.min(limit, MAX_LIMIT)
    const skip = (page - 1) * safeLimit

    const [favorites, total] = await Promise.all([
      Favorite.find({ userId })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(safeLimit)
        .populate({
          path: 'posterId',
          match: { isDeleted: false },
          populate: { path: 'authorId', select: 'name username avatar badge' }
        })
        .lean(),
      Favorite.countDocuments({ userId })
    ])

    const posters = favorites
      .filter(f => f.posterId)
      .map(f => ({ ...f.posterId, favorited: true }))

    return { posters, total, page, hasMore: skip + posters.length < total }
  }
}

export default new PosterService()
