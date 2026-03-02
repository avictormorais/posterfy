import AdminLog from '../models/adminLog.js'

const normalizeIp = (req) => {
  const forwarded = req.headers['x-forwarded-for']
  const raw = forwarded ? forwarded.split(',')[0].trim() : (req.ip || '')
  return raw.replace(/^::ffff:/, '')
}

export const auditLog = (action, targetType) => (req, res, next) => {
  const originalJson = res.json.bind(res)

  res.json = (data) => {
    if (res.statusCode < 400) {
      AdminLog.create({
        adminId: req.user.id,
        action,
        targetType,
        targetId: req.params.id,
        details: {
          body: req.body || {},
          result: data?.message || null
        },
        ip: normalizeIp(req)
      }).catch(() => {})
    }
    return originalJson(data)
  }

  next()
}
