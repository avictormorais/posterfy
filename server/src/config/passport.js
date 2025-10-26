import dotenv from 'dotenv'
dotenv.config()

import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { Strategy as SpotifyStrategy } from 'passport-spotify'
import UserService from '../services/userService.js'

const SERVER_URL = process.env.SERVER_URL || 'http://localhost:5000'

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserService.findById(id)
    done(null, user)
  } catch (error) {
    done(error, null)
  }
})

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: `${SERVER_URL}/auth/google/callback`
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const user = await UserService.handleGoogleLogin(profile)
    return done(null, user)
  } catch (error) {
    return done(error, null)
  }
}))

passport.use(new SpotifyStrategy({
  clientID: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  callbackURL: `${SERVER_URL}/auth/spotify/callback`
}, async (accessToken, refreshToken, expires_in, profile, done) => {
  try {
    const user = await UserService.handleSpotifyLogin(profile)
    return done(null, user)
  } catch (error) {
    return done(error, null)
  }
}))

export default passport