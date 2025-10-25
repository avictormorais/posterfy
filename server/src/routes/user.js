import express from 'express'
import UserController from '../controllers/userController.js'
import { requireAuth } from '../middlewares/auth.js'

const router = express.Router()

router.use(requireAuth)

router.get('/profile', UserController.getProfile)
router.put('/profile', UserController.updateProfile)

export default router