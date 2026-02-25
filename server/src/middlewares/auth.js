import UserService from '../services/userService.js'
import { verifyToken } from '../utils/jwt.js'

export const requireAuth = (req, res, next) => {
  if (req.user) {
    next()
  } else {
    res.status(401).json({
      error: 'Access denied. Please login first.',
      code: 'UNAUTHORIZED'
    })
  }
}

export const requireAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Access denied.', code: 'UNAUTHORIZED' })
  }
  if (!req.user.permissions?.includes('admin')) {
    return res.status(403).json({ error: 'Insufficient permissions.', code: 'FORBIDDEN' })
  }
  next()
}

export const optionalAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) return next()

  const decoded = verifyToken(token)
  if (!decoded) return next()

  try {
    const user = await UserService.findById(decoded.id)
    if (user && user.status === 'active') {
      req.user = {
        id: user._id.toString(),
        username: user.username,
        email: user.email,
        permissions: user.permissions,
        status: user.status
      }
    }
  } catch {}

  next()
}