import express from 'express'
import UserController from '../controllers/userController.js'
import PosterController from '../controllers/posterController.js'
import { authenticateToken } from '../utils/jwt.js'

const router = express.Router()

router.use(authenticateToken)

/**
 * @openapi
 * /api/user/profile:
 *   get:
 *     tags: [User]
 *     summary: Get authenticated user profile
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile
 */
router.get('/profile', UserController.getProfile)

/**
 * @openapi
 * /api/user/profile:
 *   put:
 *     tags: [User]
 *     summary: Update authenticated user profile
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Profile updated
 */
router.put('/profile', UserController.updateProfile)

/**
 * @openapi
 * /api/user/change-username:
 *   put:
 *     tags: [User]
 *     summary: Change username
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Username changed
 */
router.put('/change-username', UserController.changeUsername)

/**
 * @openapi
 * /api/user/posters:
 *   get:
 *     tags: [User]
 *     summary: Get all posters of the authenticated user
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Paginated poster list
 */
router.get('/posters', PosterController.getUserPosters)

/**
 * @openapi
 * /api/user/favorites:
 *   get:
 *     tags: [User]
 *     summary: Get favorited posters of the authenticated user
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Paginated favorites list
 */
router.get('/favorites', PosterController.getUserFavorites)

export default router