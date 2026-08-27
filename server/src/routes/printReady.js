import express from 'express'
import { body, param } from 'express-validator'
import PrintReadyController from '../controllers/printReadyController.js'
import { authenticateToken, optionalAuthenticateToken } from '../utils/jwt.js'
import { checkoutLimiter } from '../middlewares/rateLimiter.js'

const router = express.Router()
const albumIdRule = param('albumId').matches(/^[A-Za-z0-9]{22}$/).withMessage('Invalid album ID')

router.get('/offer', PrintReadyController.offer)
router.post('/export-access', optionalAuthenticateToken, [
  body('albumId').matches(/^[A-Za-z0-9]{22}$/).withMessage('Invalid album ID'),
  body('format').isIn(['jpg', 'png', 'pdf']).withMessage('Invalid export format'),
  body('scale').custom((value) => [0.6, 1, 1.5].includes(Number(value))).withMessage('Invalid export scale')
], PrintReadyController.exportAccess)
router.get('/albums/:albumId', authenticateToken, [albumIdRule], PrintReadyController.albumStatus)
router.post('/checkout', authenticateToken, checkoutLimiter, [
  body('albumId').matches(/^[A-Za-z0-9]{22}$/).withMessage('Invalid album ID'),
  body('posterId').optional({ nullable: true }).isMongoId().withMessage('Invalid poster ID'),
  body('flowId').isString().matches(/^[A-Za-z0-9-]{8,100}$/).withMessage('Invalid flow ID'),
  body('returnPath').isString().isLength({ max: 100 }).withMessage('Invalid return path')
], PrintReadyController.checkout)
router.get('/checkouts/:sessionId', authenticateToken, [
  param('sessionId').isString().matches(/^cs_(test_|live_)?[A-Za-z0-9_]+$/).withMessage('Invalid Checkout Session')
], PrintReadyController.checkoutStatus)

export default router
