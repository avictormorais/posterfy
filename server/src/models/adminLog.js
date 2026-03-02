import mongoose from 'mongoose'

const AdminLogSchema = new mongoose.Schema({
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  action: {
    type: String,
    required: true,
    enum: [
      'ban_user', 'unban_user',
      'delete_poster', 'restore_poster', 'change_visibility', 'edit_poster',
      'promote_admin', 'demote_admin', 'force_logout',
      'edit_user'
    ],
    index: true
  },
  targetType: {
    type: String,
    required: true,
    enum: ['user', 'poster']
  },
  targetId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true
  },
  details: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  ip: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

AdminLogSchema.index({ createdAt: 1 }, { expireAfterSeconds: 90 * 24 * 60 * 60 })
AdminLogSchema.index({ createdAt: -1 })

export default mongoose.model('AdminLog', AdminLogSchema)
