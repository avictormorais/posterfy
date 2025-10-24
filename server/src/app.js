import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import session from 'express-session'

import './config/passport.js'
import passport from './config/passport.js'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/user.js'

const app = express()

mongoose.connect(process.env.MONGO_URI).then(()=>console.log('MongoDB connected'))

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({
  secret: process.env.SESSION_SECRET || 'default-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  }
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', authRoutes)
app.use('/api/user', userRoutes)

app.get('/', (req, res) => {
  res.json({ 
    message: 'Posterfy API running',
    user: req.user ? {
      id: req.user._id,
      username: req.user.username,
      name: req.user.name
    } : null
  })
})

app.use((err, req, res, next) => {
  res.status(500).json({
    error: 'Internal server error'
  })
})

app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found'
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
