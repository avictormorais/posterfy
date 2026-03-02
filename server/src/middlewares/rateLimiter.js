import rateLimit from 'express-rate-limit'

const normalizeIp = (req) => {
  const forwarded = req.headers['x-forwarded-for']
  const raw = forwarded ? forwarded.split(',')[0].trim() : (req.ip || '')
  return raw.replace(/^::ffff:/, '')
}

const createLimiter = (windowMs, max, message) =>
  rateLimit({
    windowMs,
    max,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: message },
    keyGenerator: normalizeIp
  })

export const engagementLimiter = createLimiter(
  60 * 60 * 1000,
  30,
  'Too many engagement requests. Try again later.'
)

export const viewLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 1,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Already counted.' },
  keyGenerator: (req) => `${normalizeIp(req)}:${req.params.id}`
})

export const createPosterLimiter = createLimiter(
  60 * 60 * 1000,
  20,
  'Too many posters created. Try again later.'
)

export const searchLimiter = createLimiter(
  60 * 1000,
  60,
  'Too many search requests. Slow down.'
)

export const globalLimiter = createLimiter(
  15 * 60 * 1000,
  300,
  'Too many requests. Try again later.'
)

export const adminLimiter = createLimiter(
  15 * 60 * 1000,
  60,
  'Too many admin requests. Try again later.'
)

export const authLimiter = createLimiter(
  15 * 60 * 1000,
  20,
  'Too many auth attempts. Try again later.'
)
