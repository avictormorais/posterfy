import jwt from 'jsonwebtoken'
import User from '../models/user.js'

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is not set. Refusing to start.')
}

const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '30d'

export const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      username: user.username,
      email: user.email
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  )
}

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    return null
  }
}

export const optionalAuthenticateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) return next()

  const decoded = verifyToken(token)
  if (!decoded) return next()

  try {
    const user = await User.findById(decoded.id).select('_id username email permissions status').lean()
    if (user && user.status === 'active') {
      req.user = {
        id: user._id.toString(),
        username: user.username,
        email: user.email,
        permissions: user.permissions,
        status: user.status
      }
    }
  } catch (_) {
    // silent — optional auth never blocks the request
  }
  next()
}

export const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'Access token required' })
  }

  const decoded = verifyToken(token)
  if (!decoded) {
    return res.status(403).json({ error: 'Invalid or expired token' })
  }

  try {
    const user = await User.findById(decoded.id).select('_id username email permissions status').lean()
    if (!user) return res.status(403).json({ error: 'User not found' })
    if (user.status === 'suspended') return res.status(403).json({ error: 'Account suspended', code: 'SUSPENDED' })

    req.user = {
      id: user._id.toString(),
      username: user.username,
      email: user.email,
      permissions: user.permissions,
      status: user.status
    }
    next()
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}