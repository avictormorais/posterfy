import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String },
  googleId: { type: String, unique: true, sparse: true },
  spotifyId: { type: String, unique: true, sparse: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  permissions: { type: [String], enum: ['user', 'admin'], default: ['user'] },
  status: { type: String, enum: ['active', 'suspended'], default: 'active' },
  posterCount: { type: Number, default: 0, min: 0 },
  totalDownloads: { type: Number, default: 0, min: 0 },
  totalFavorites: { type: Number, default: 0, min: 0 },
  bio: { type: String, default: '', maxlength: 160 },
  pinnedPosterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Poster', default: null },
  badge: {
    type: String,
    enum: [
      null,
      'creator_bronze', 'creator_silver', 'creator_gold', 'creator_diamond',
      'popular_bronze', 'popular_silver', 'popular_gold', 'popular_diamond',
      'loved_bronze', 'loved_silver', 'loved_gold', 'loved_diamond'
    ],
    default: null
  }
})

UserSchema.pre('save', function(next){
  this.updatedAt = new Date()
  next()
})

export default mongoose.model('User', UserSchema)