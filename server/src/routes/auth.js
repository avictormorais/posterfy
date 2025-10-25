import express from 'express'
import passport from 'passport'
import AuthController from '../controllers/authController.js'
import { authenticateToken } from '../utils/jwt.js'

const router = express.Router()

router.get('/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)

router.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: `${process.env.CLIENT_URL}/login?error=google_failed`
  }),
  AuthController.googleCallback
)

router.get('/spotify',
  passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private']
  })
)

router.get('/spotify/callback',
  passport.authenticate('spotify', {
    failureRedirect: `${process.env.CLIENT_URL}/login?error=spotify_failed`
  }),
  AuthController.spotifyCallback
)

router.post('/logout', AuthController.logout)
router.get('/user', authenticateToken, AuthController.getUser)

export default router