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