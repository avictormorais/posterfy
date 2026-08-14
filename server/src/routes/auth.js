import express from 'express'
import passport from 'passport'
import AuthController from '../controllers/authController.js'
import { authenticateToken } from '../utils/jwt.js'
import { getOAuthFallbackUrl, getSafeOAuthRedirect } from '../utils/oauthRedirect.js'

const router = express.Router()

const rememberOAuthRedirect = (provider) => (req, res, next) => {
  const fallback = getOAuthFallbackUrl()
  const redirect = getSafeOAuthRedirect(req.query.redirect, fallback)
  req.session.oauthRedirects = req.session.oauthRedirects || {}
  req.session.oauthRedirects[provider] = redirect
  next()
}

router.get('/google', rememberOAuthRedirect('google'), (req, res, next) => {
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })(req, res, next)
})

router.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: getOAuthFallbackUrl('/login?error=google_failed')
  }),
  AuthController.googleCallback
)

router.get('/spotify', rememberOAuthRedirect('spotify'), (req, res, next) => {
  passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private']
  })(req, res, next)
})

router.get('/spotify/callback',
  passport.authenticate('spotify', {
    failureRedirect: getOAuthFallbackUrl('/login?error=spotify_failed')
  }),
  AuthController.spotifyCallback
)

router.post('/logout', AuthController.logout)
router.get('/user', authenticateToken, AuthController.getUser)

export default router
