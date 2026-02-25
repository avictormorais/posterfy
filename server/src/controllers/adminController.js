import User from '../models/user.js'
import Poster from '../models/poster.js'

class AdminController {
  async deletePoster(req, res) {
    try {
      const poster = await Poster.findOneAndUpdate(
        { _id: req.params.id, isDeleted: false },
        { isDeleted: true },
        { new: true }
      )
      if (!poster) return res.status(404).json({ error: 'Poster not found' })
      res.json({ message: 'Poster deleted' })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async banUser(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        { status: 'suspended' },
        { new: true }
      ).select('id name username status')

      if (!user) return res.status(404).json({ error: 'User not found' })
      res.json({ message: 'User suspended', user })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async unbanUser(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        { status: 'active' },
        { new: true }
      ).select('id name username status')

      if (!user) return res.status(404).json({ error: 'User not found' })
      res.json({ message: 'User reactivated', user })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async listUsers(req, res) {
    try {
      const { page = 1, limit = 50, status } = req.query
      const safeLimit = Math.min(parseInt(limit), 100)
      const skip = (parseInt(page) - 1) * safeLimit

      const filter = status ? { status } : {}

      const [users, total] = await Promise.all([
        User.find(filter)
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(safeLimit)
          .select('id name username email avatar status permissions posterCount totalDownloads totalFavorites badge createdAt')
          .lean(),
        User.countDocuments(filter)
      ])

      res.json({ users, total, page: parseInt(page), hasMore: skip + users.length < total })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }
}

export default new AdminController()
