import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import session from 'express-session'
import swaggerUi from 'swagger-ui-express'
import basicAuth from 'express-basic-auth'

import './config/passport.js'
import passport from './config/passport.js'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/user.js'
import posterRoutes from './routes/poster.js'
import communityRoutes from './routes/community.js'
import adminRoutes from './routes/admin.js'
import { swaggerSpec } from './config/swagger.js'
import { globalLimiter, authLimiter } from './middlewares/rateLimiter.js'

const app = express()

mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected'))

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true)

    const allowedOrigins = [
      process.env.CLIENT_URL,
      'http://localhost:3000',
      'http://localhost:5173',
      'https://posterfy.space',
      'https://api.posterfy.space',
      'http://api.posterfy.space',
    ].filter(Boolean)

    if (allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json({ limit: '2mb' }))
app.use(express.urlencoded({ extended: true }))

if (!process.env.SESSION_SECRET) {
  throw new Error('SESSION_SECRET environment variable is not set. Refusing to start.')
}

app.use(session({
  secret: process.env.SESSION_SECRET,
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

app.use(globalLimiter)

const SWAGGER_USER = process.env.SWAGGER_USER
const SWAGGER_PASSWORD = process.env.SWAGGER_PASSWORD

if (!SWAGGER_USER || !SWAGGER_PASSWORD) {
  console.warn('[WARN] SWAGGER_USER or SWAGGER_PASSWORD not set — /docs will be inaccessible')
}

app.use(
  '/docs',
  basicAuth({
    users: { [SWAGGER_USER || '']: SWAGGER_PASSWORD || '' },
    challenge: true,
    realm: 'Posterfy API Docs'
  }),
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    customSiteTitle: 'Posterfy API',
    swaggerOptions: { persistAuthorization: true }
  })
)

app.use('/auth', authLimiter, authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/posters', posterRoutes)
app.use('/api/community', communityRoutes)
app.use('/api/admin', adminRoutes)

app.get('/', (req, res) => {
  res.json({
    message: 'Posterfy API running',
    docs: '/docs',
    version: '2.0.0'
  })
})

app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Internal server error' })
})

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`API docs: http://localhost:${PORT}/docs`)
})
