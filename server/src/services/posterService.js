import Poster from '../models/poster.js'
import Favorite from '../models/favorite.js'
import User from '../models/user.js'
import mongoose from 'mongoose'
import BadgeService from './badgeService.js'
import { escapeSearchRegex, getUniquePosterPage, hasTextSearchTerm } from '../utils/communityPagination.js'
import { normalizeAlbumMetadata } from '../utils/albumMetadata.js'

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
    'titleRelease', 'rawReleaseDate', 'releaseDate', 'titleRuntime', 'runtime',
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
  async create({ authorId, spotifyAlbumId, albumName, artistsName, releaseDate, posterJson, visibility, albumNameOriginal, artistsNameOriginal, albumMetadata }) {
    const sanitized = sanitizePosterJson(posterJson)
    const metadata = normalizeAlbumMetadata(albumMetadata, {
      providerAlbumId: spotifyAlbumId,
      albumName: albumNameOriginal || albumName,
      artistNames: [artistsNameOriginal || artistsName],
      releaseDate
    })

    const poster = await Poster.create({
      authorId,
      spotifyAlbumId,
      albumProvider: 'spotify',
      providerAlbumId: spotifyAlbumId,
      albumName: albumName.trim(),
      albumNameOriginal: albumNameOriginal ? albumNameOriginal.trim() : albumName.trim(),
      artistsName: artistsName.trim(),
      artistsNameOriginal: artistsNameOriginal ? artistsNameOriginal.trim() : artistsName.trim(),
      releaseDate: releaseDate || '',
      artistNames: metadata.artistNames,
      trackCount: metadata.trackCount,
      externalIds: metadata.externalIds,
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
      Poster.find(filter).sort({ createdAt: -1, _id: -1 }).skip(skip).limit(safeLimit).lean(),
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
      popular: { popularityScore: -1, _id: -1 },
      recent: { createdAt: -1, _id: -1 },
      favorites: { favoritesCount: -1, _id: -1 },
      downloads: { downloads: -1, _id: -1 }
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
    const trimmed = q.trim()
    const escaped = escapeSearchRegex(trimmed)

    // Find users whose username matches the query (case-insensitive)
    const User = (await import('../models/user.js')).default
    const matchedUsers = await User.find(
      { username: { $regex: escaped, $options: 'i' } },
      { _id: 1 }
    ).lean()
    const matchedUserIds = matchedUsers.map(u => u._id)

    // Text search filter for album/artist names
    const textFilter = hasTextSearchTerm(trimmed)
      ? { $text: { $search: trimmed }, ...buildPublicFilter() }
      : null
    
    // Regex filter for name search (searches current and original names)
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

    // Fetch all matching IDs so total and pagination describe the exact union.
    const [textPosters, regexPosters, authorPosters] = await Promise.all([
      textFilter
        ? Poster.find(textFilter, { _id: 1, score: { $meta: 'textScore' } })
            .sort({ score: { $meta: 'textScore' }, popularityScore: -1, _id: -1 })
            .lean()
        : Promise.resolve([]),
      Poster.find(regexFilter)
        .sort({ popularityScore: -1, _id: -1 })
        .select('_id')
        .lean(),
      authorFilter
        ? Poster.find(authorFilter)
            .sort({ popularityScore: -1, _id: -1 })
            .select('_id')
            .lean()
        : Promise.resolve([])
    ])

    const { ids, total, hasMore } = getUniquePosterPage(
      [textPosters, regexPosters, authorPosters],
      page,
      safeLimit
    )
    const pagePosters = ids.length
      ? await Poster.find({ _id: { $in: ids } })
          .populate('authorId', 'name username avatar badge')
          .lean()
      : []
    const postersById = new Map(pagePosters.map(p => [p._id.toString(), p]))
    const sliced = ids.map(id => postersById.get(id.toString())).filter(Boolean)

    if (!userId) return { posters: sliced, total, page, hasMore }

    const posterIds = sliced.map(p => p._id)
    const favs = await Favorite.find({ userId, posterId: { $in: posterIds } }).lean()
    const favSet = new Set(favs.map(f => f.posterId.toString()))
    const postersWithFav = sliced.map(p => ({ ...p, favorited: favSet.has(p._id.toString()) }))

    return { posters: postersWithFav, total, page, hasMore }
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

    const [result = { favorites: [], total: [] }] = await Favorite.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId) } },
      { $sort: { createdAt: -1, _id: -1 } },
      {
        $lookup: {
          from: Poster.collection.name,
          localField: 'posterId',
          foreignField: '_id',
          as: 'poster'
        }
      },
      { $unwind: '$poster' },
      {
        $match: {
          'poster.isDeleted': false,
          $or: [
            { 'poster.visibility': 'public' },
            { 'poster.authorId': new mongoose.Types.ObjectId(userId) }
          ]
        }
      },
      {
        $facet: {
          favorites: [
            { $skip: skip },
            { $limit: safeLimit },
            { $replaceRoot: { newRoot: '$poster' } }
          ],
          total: [{ $count: 'count' }]
        }
      }
    ])

    const populatedPosters = await Poster.populate(result.favorites, {
      path: 'authorId',
      select: 'name username avatar badge'
    })
    const posters = populatedPosters.map(poster => ({ ...poster, favorited: true }))
    const total = result.total[0]?.count || 0

    return { posters, total, page, hasMore: skip + posters.length < total }
  }
}

export default new PosterService()
