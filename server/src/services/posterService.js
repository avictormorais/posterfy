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
    'showTracklist', 'showArtistSignature', 'tracklist', 'trackDurations', 'color1', 'color2', 'color3',
    'coverZoom', 'coverHorizontalPosition', 'coverVerticalPosition', 'coverBlur',
    'useUncompressed', 'albumCover', 'userAdjustedTitleSize', 'initialTitleSizeSet',
    'userAdjustedTracksSize', 'initialTracksSizeSet', 'customFont', 'spotifyArtistId',
    'uncompressedAlbumCover', 'albumID',
    'signatureHorizontalPosition', 'signatureVerticalPosition', 'signatureScale'
  ]
  const sanitized = {}
  for (const key of allowed) {
    if (json[key] !== undefined) sanitized[key] = json[key]
  }
  return sanitized
}

class PosterService {
  async create({ authorId, spotifyAlbumId, albumName, artistsName, releaseDate, posterJson, visibility, albumNameOriginal, artistsNameOriginal }) {
    const sanitized = sanitizePosterJson(posterJson)

    const poster = await Poster.create({
      authorId,
      spotifyAlbumId,
      albumName: albumName.trim(),
      albumNameOriginal: albumNameOriginal ? albumNameOriginal.trim() : albumName.trim(),
      artistsName: artistsName.trim(),
      artistsNameOriginal: artistsNameOriginal ? artistsNameOriginal.trim() : artistsName.trim(),
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

  async updatePosterJson(posterId, authorId, posterJson, albumName, artistsName, isAdmin = false) {
    const filter = isAdmin
      ? { _id: posterId, isDeleted: false }
      : { _id: posterId, authorId, isDeleted: false }
    const poster = await Poster.findOne(filter)
    if (!poster) return null

    const sanitized = sanitizePosterJson(posterJson)
    const currentPosterJson = poster.posterJson && typeof poster.posterJson === 'object'
      ? poster.posterJson
      : {}
    poster.posterJson = {
      ...currentPosterJson,
      ...sanitized
    }
    
    // Allow editing of album and artist names (customization) while keeping originals
    if (albumName !== undefined) {
      poster.albumName = albumName.trim()
    }
    if (artistsName !== undefined) {
      poster.artistsName = artistsName.trim()
    }
    
    poster.edits = (poster.edits || 0) + 1

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

  async findById(posterId, requesterId = null, isAdmin = false) {
    const poster = await Poster.findOne({ _id: posterId, isDeleted: false })
      .populate('authorId', 'name username avatar badge')
      .lean()

    if (!poster) return null

    if (poster.visibility === 'private') {
      const isOwner = requesterId && poster.authorId._id.toString() === requesterId
      if (!isAdmin && !isOwner) return null
    }

    let favorited = false
    if (requesterId) {
      const fav = await Favorite.findOne({ userId: requesterId, posterId })
      favorited = !!fav
    }

    return { ...poster, favorited }
  }

  async findByUser(authorId, requesterId = null, page = 1, limit = DEFAULT_LIMIT, isAdmin = false) {
    const safeLimit = Math.min(limit, MAX_LIMIT)
    const skip = (page - 1) * safeLimit

    const isOwner = requesterId === authorId
    const filter = isOwner || isAdmin
      ? { authorId, isDeleted: false }
      : buildPublicFilter({ authorId })

    const [posters, total] = await Promise.all([
      Poster.find(filter).sort({ createdAt: -1 }).skip(skip).limit(safeLimit).lean(),
      Poster.countDocuments(filter)
    ])

    // Mark favorited status for a viewer who is not the author
    if (requesterId && !isOwner) {
      const posterIds = posters.map(p => p._id)
      const favs = await Favorite.find({ userId: requesterId, posterId: { $in: posterIds } }).lean()
      const favSet = new Set(favs.map(f => f.posterId.toString()))
      const postersWithFav = posters.map(p => ({ ...p, favorited: favSet.has(p._id.toString()) }))
      return { posters: postersWithFav, total, page, hasMore: skip + posters.length < total }
    }

    return { posters, total, page, hasMore: skip + posters.length < total }
  }

  async findPublic({ sort = 'popular', page = 1, limit = DEFAULT_LIMIT, period = null, userId = null }) {
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

    if (!userId) return { posters, total, page, hasMore: skip + posters.length < total }

    const posterIds = posters.map(p => p._id)
    const favs = await Favorite.find({ userId, posterId: { $in: posterIds } }).lean()
    const favSet = new Set(favs.map(f => f.posterId.toString()))
    const postersWithFav = posters.map(p => ({ ...p, favorited: favSet.has(p._id.toString()) }))

    return { posters: postersWithFav, total, page, hasMore: skip + posters.length < total }
  }

  async search({ q, page = 1, limit = DEFAULT_LIMIT, userId = null }) {
    if (!q || !q.trim()) return this.findPublic({ sort: 'popular', page, limit, userId })

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

    // Text search filter for album/artist names
    const textFilter   = { $text: { $search: trimmed }, ...buildPublicFilter() }
    
    // Regex filter for name search (searches current and original names)
    const escaped = trimmed.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regexFilter = {
      $or: [
        { albumName: { $regex: escaped, $options: 'i' } },
        { artistsName: { $regex: escaped, $options: 'i' } },
        { albumNameOriginal: { $regex: escaped, $options: 'i' } },
        { artistsNameOriginal: { $regex: escaped, $options: 'i' } }
      ],
      ...buildPublicFilter()
    }
    
    const authorFilter = matchedUserIds.length
      ? { authorId: { $in: matchedUserIds }, ...buildPublicFilter() }
      : null

    // Run all searches in parallel
    const [textPosters, regexPosters, authorPosters, textCount, regexCount, authorCount] = await Promise.all([
      Poster.find(textFilter, { score: { $meta: 'textScore' } })
        .sort({ score: { $meta: 'textScore' }, popularityScore: -1 })
        .limit(safeLimit + skip)
        .populate('authorId', 'name username avatar badge')
        .lean(),
      Poster.find(regexFilter)
        .sort({ popularityScore: -1 })
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
      Poster.countDocuments(regexFilter),
      authorFilter ? Poster.countDocuments(authorFilter) : Promise.resolve(0),
    ])

    // Merge & deduplicate: text results first, then regex, then authors
    const seen = new Set()
    const merged = []
    for (const p of [...textPosters, ...regexPosters, ...authorPosters]) {
      const id = p._id.toString()
      if (!seen.has(id)) { seen.add(id); merged.push(p) }
    }

    const total  = Math.max(textCount, regexCount, authorCount, merged.length)
    const sliced = merged.slice(skip, skip + safeLimit)

    if (!userId) return { posters: sliced, total, page, hasMore: skip + sliced.length < total }

    const posterIds = sliced.map(p => p._id)
    const favs = await Favorite.find({ userId, posterId: { $in: posterIds } }).lean()
    const favSet = new Set(favs.map(f => f.posterId.toString()))
    const postersWithFav = sliced.map(p => ({ ...p, favorited: favSet.has(p._id.toString()) }))

    return { posters: postersWithFav, total, page, hasMore: skip + sliced.length < total }
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
