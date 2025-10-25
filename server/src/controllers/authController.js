import { generateToken } from '../utils/jwt.js'
import UserService from '../services/userService.js'

class AuthController {
  googleCallback(req, res) {
    const token = generateToken(req.user)
    res.redirect(`${process.env.CLIENT_URL}/dashboard?token=${token}&login=success`)
  }

  spotifyCallback(req, res) {
    const token = generateToken(req.user)
    res.redirect(`${process.env.CLIENT_URL}/dashboard?token=${token}&login=success`)
  }

  async logout(req, res) {
    res.json({ message: 'Logout successful' })
  }

  async getUser(req, res) {
    try {
      const user = await UserService.findById(req.user.id)
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
          hasGoogle: !!user.googleId,
          hasSpotify: !!user.spotifyId,
          permissions: user.permissions,
          status: user.status
        }
      })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }
}

export default new AuthController()