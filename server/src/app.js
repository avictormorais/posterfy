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
  origin: function (origin, callback) {
    if (!origin) return callback(null, true)

    const allowedOrigins = [
      process.env.CLIENT_URL,
      'http://localhost:3000',
      'http://localhost:5173',
      'https://posterfy.space',
      /\.vercel\.app$/.test(origin) ? origin : false
    ].filter(Boolean)

    if (allowedOrigins.includes(origin) || allowedOrigins.some(allowed => allowed instanceof RegExp ? allowed.test(origin) : false)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(passport.initialize())

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
