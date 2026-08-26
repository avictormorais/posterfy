import mongoose from 'mongoose'
import { albumMetadataFields } from '../utils/albumMetadata.js'

const PrintUnlockSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  album: {
    type: new mongoose.Schema(albumMetadataFields, { _id: false }),
    required: true
  },
  active: { type: Boolean, default: true, index: true },
  source: { type: String, enum: ['payment', 'admin'], required: true },
  paymentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment', default: null },
  grantedAt: { type: Date, default: Date.now },
  grantedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  revokedAt: { type: Date, default: null },
  revokedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  revocationReason: { type: String, default: '' }
}, { timestamps: true })

PrintUnlockSchema.index(
  { userId: 1, 'album.provider': 1, 'album.providerAlbumId': 1 },
  { unique: true }
)
PrintUnlockSchema.index({ userId: 1, active: 1, createdAt: -1 })
PrintUnlockSchema.index({ 'album.providerAlbumId': 1, active: 1 })

export default mongoose.model('PrintUnlock', PrintUnlockSchema)
