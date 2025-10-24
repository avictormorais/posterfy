import UserService from '../services/userService.js'

class UserController {
  async getProfile(req, res) {
    try {
      const user = await UserService.findById(req.user._id)
      if (!user) {
        return res.status(404).json({ error: 'User not found' })
      }

      res.json({
        user: {
          id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          avatar: user.avatar,
          createdAt: user.createdAt,
          hasGoogle: !!user.googleId,
          hasSpotify: !!user.spotifyId
        }
      })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async updateProfile(req, res) {
    try {
      const { name, avatar } = req.body
      const user = await UserService.findById(req.user._id)
      
      if (!user) {
        return res.status(404).json({ error: 'User not found' })
      }

      if (name && name.trim()) {
        user.name = name.trim()
      }
      
      if (avatar && avatar.trim()) {
        user.avatar = avatar.trim()
      }

      await user.save()

      res.json({
        message: 'Profile updated successfully',
        user: {
          id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          avatar: user.avatar
        }
      })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }
}

export default new UserController()