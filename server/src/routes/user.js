import express from 'express'
import UserController from '../controllers/userController.js'
import { authenticateToken } from '../utils/jwt.js'

const router = express.Router()

router.use(authenticateToken)

router.get('/profile', UserController.getProfile)
router.put('/profile', UserController.updateProfile)
router.put('/change-username', UserController.changeUsername)

export default router