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
  status: { type: String, enum: ['active', 'suspended'], default: 'active' }
})

UserSchema.pre('save', function(next){
  this.updatedAt = new Date()
  next()
})

export default mongoose.model('User', UserSchema)