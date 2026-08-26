import express from 'express'
import PrintReadyController from '../controllers/printReadyController.js'

const router = express.Router()

router.post('/', express.raw({ type: 'application/json' }), PrintReadyController.webhook)

export default router
