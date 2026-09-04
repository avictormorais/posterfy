import mongoose from 'mongoose'

const PrintReadyAccountGrantSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
    index: true
  },
  scope: {
    type: String,
    enum: ['all_albums'],
    default: 'all_albums',
    required: true
  },
  active: { type: Boolean, default: true, index: true },
  grantedAt: { type: Date, default: Date.now },
  grantedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  grantReason: { type: String, required: true, trim: true, maxlength: 500 },
  revokedAt: { type: Date, default: null },
  revokedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  revocationReason: { type: String, default: '', trim: true, maxlength: 500 },
  lastUsedAt: { type: Date, default: null },
  useCount: { type: Number, default: 0, min: 0 }
}, { timestamps: true })

PrintReadyAccountGrantSchema.index({ active: 1, createdAt: -1 })
PrintReadyAccountGrantSchema.index({ grantedBy: 1, createdAt: -1 })

export default mongoose.model('PrintReadyAccountGrant', PrintReadyAccountGrantSchema)
