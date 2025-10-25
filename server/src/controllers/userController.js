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
      const { name, username } = req.body

      const user = await UserService.updateProfile(req.user._id, { name, username })

      req.user = user

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
      console.error('Update profile error:', error)

      if (error.statusCode === 409) {
        return res.status(409).json({ error: error.message })
      }

      if (error.message.includes('required') || error.message.includes('format') || error.message.includes('characters')) {
        return res.status(400).json({ error: error.message })
      }

      res.status(500).json({ error: 'Internal server error' })
    }
  }
}

export default new UserController()