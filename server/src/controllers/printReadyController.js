import { validationResult } from 'express-validator'
import PrintReadyService from '../services/printReadyService.js'

const sendError = (res, error) => {
  if (error?.type === 'StripeSignatureVerificationError') {
    return res.status(400).json({ error: 'Invalid Stripe signature' })
  }
  const status = error.status || 500
  if (status >= 500) console.error('Print-Ready error:', error)
  return res.status(status).json({ error: error.message || 'Internal server error', code: error.code })
}

class PrintReadyController {
  async offer(req, res) {
    try {
      const offer = await PrintReadyService.getOffer()
      res.json({
        offer: {
          enabled: offer.enabled,
          unitAmount: offer.unitAmount,
          currency: offer.currency,
          policies: offer.policies
        }
      })
    } catch (error) {
      sendError(res, error)
    }
  }

  async albumStatus(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ error: errors.array()[0].msg })
    try {
      res.json(await PrintReadyService.getAlbumStatus(req.user.id, req.params.albumId))
    } catch (error) {
      sendError(res, error)
    }
  }

  async checkout(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ error: errors.array()[0].msg })
    try {
      const result = await PrintReadyService.createCheckout({
        userId: req.user.id,
        albumId: req.body.albumId,
        posterId: req.body.posterId,
        flowId: req.body.flowId,
        returnPath: req.body.returnPath,
        isAdmin: req.user.permissions?.includes('admin') || false
      })
      res.json(result)
    } catch (error) {
      sendError(res, error)
    }
  }

  async checkoutStatus(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ error: errors.array()[0].msg })
    try {
      res.json(await PrintReadyService.getCheckoutStatus(req.user.id, req.params.sessionId))
    } catch (error) {
      sendError(res, error)
    }
  }

  async webhook(req, res) {
    try {
      const event = PrintReadyService.constructEvent(req.body, req.headers['stripe-signature'])
      await PrintReadyService.processEvent(event)
      res.json({ received: true })
    } catch (error) {
      sendError(res, error)
    }
  }
}

export default new PrintReadyController()
