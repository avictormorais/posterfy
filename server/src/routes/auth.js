import express from 'express'
import passport from 'passport'
import AuthController from '../controllers/authController.js'
import { authenticateToken } from '../utils/jwt.js'

const router = express.Router()

const encodeState = (redirect) =>
  Buffer.from(JSON.stringify({ redirect })).toString('base64url')

router.get('/google', (req, res, next) => {
  const redirect = req.query.redirect || `${process.env.CLIENT_URL}/login`
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    state: encodeState(redirect)
  })(req, res, next)
})

router.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: `${process.env.CLIENT_URL}/login?error=google_failed`
  }),
  AuthController.googleCallback
)

router.get('/spotify', (req, res, next) => {
  const redirect = req.query.redirect || `${process.env.CLIENT_URL}/login`
  passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private'],
    state: encodeState(redirect)
  })(req, res, next)
})

router.get('/spotify/callback',
  passport.authenticate('spotify', {
    failureRedirect: `${process.env.CLIENT_URL}/login?error=spotify_failed`
  }),
  AuthController.spotifyCallback
)

router.post('/logout', AuthController.logout)
router.get('/user', authenticateToken, AuthController.getUser)

export default router