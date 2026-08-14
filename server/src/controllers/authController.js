import { generateToken } from '../utils/jwt.js'
import UserService from '../services/userService.js'
import BadgeService from '../services/badgeService.js'
import { addOAuthResult, getOAuthFallbackUrl, getSafeOAuthRedirect } from '../utils/oauthRedirect.js'

const consumeOAuthRedirect = (req, provider) => {
  const fallback = getOAuthFallbackUrl()
  const redirect = req.session?.oauthRedirects?.[provider]
  if (req.session?.oauthRedirects) {
    delete req.session.oauthRedirects[provider]
  }
  return getSafeOAuthRedirect(redirect, fallback)
}

class AuthController {
  googleCallback(req, res) {
    const token = generateToken(req.user)
    const destination = consumeOAuthRedirect(req, 'google')
    res.redirect(addOAuthResult(destination, token))
  }

  spotifyCallback(req, res) {
    const token = generateToken(req.user)
    const destination = consumeOAuthRedirect(req, 'spotify')
    res.redirect(addOAuthResult(destination, token))
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

      const badgeProgress = BadgeService.getBadgeProgress(user)

      res.json({
        user: {
          id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          avatar: user.avatar,
          hasGoogle: !!user.googleId,
          hasSpotify: !!user.spotifyId,
          showSpotifyProfile: user.showSpotifyProfile || false,
          permissions: user.permissions,
          status: user.status,
          badge: user.badge,
          badgeScore: user.badgeScore || 0,
          badgeProgress
        }
      })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }
}

export default new AuthController()
