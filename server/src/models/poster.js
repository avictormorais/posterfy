import mongoose from 'mongoose'

const PosterSchema = new mongoose.Schema({
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  visibility: {
    type: String,
    enum: ['public', 'private'],
    default: 'public'
  },
  spotifyAlbumId: {
    type: String,
    required: true,
    index: true
  },
  albumName: {
    type: String,
    required: true
  },
  artistsName: {
    type: String,
    required: true
  },
  releaseDate: {
    type: String,
    default: ''
  },
  posterJson: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  views: {
    type: Number,
    default: 0,
    min: 0
  },
  downloads: {
    type: Number,
    default: 0,
    min: 0
  },
  edits: {
    type: Number,
    default: 0,
    min: 0
  },
  favoritesCount: {
    type: Number,
    default: 0,
    min: 0
  },
  popularityScore: {
    type: Number,
    default: 0,
    index: true
  },
  isDeleted: {
    type: Boolean,
    default: false,
    index: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: true
  }
})

PosterSchema.index({ albumName: 'text', artistsName: 'text' })
PosterSchema.index({ authorId: 1, isDeleted: 1 })
PosterSchema.index({ spotifyAlbumId: 1, isDeleted: 1 })
PosterSchema.index({ popularityScore: -1, isDeleted: 1 })
PosterSchema.index({ createdAt: -1, isDeleted: 1 })

export default mongoose.model('Poster', PosterSchema)
