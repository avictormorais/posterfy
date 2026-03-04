import mongoose from 'mongoose'

const FavoriteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  posterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Poster',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

FavoriteSchema.index({ userId: 1, posterId: 1 }, { unique: true })
FavoriteSchema.index({ posterId: 1 })
FavoriteSchema.index({ userId: 1, createdAt: -1 })

export default mongoose.model('Favorite', FavoriteSchema)
