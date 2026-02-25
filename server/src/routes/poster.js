import express from 'express'
import { body, param } from 'express-validator'
import PosterController from '../controllers/posterController.js'
import { authenticateToken } from '../utils/jwt.js'
import { optionalAuth } from '../middlewares/auth.js'
import { engagementLimiter, viewLimiter, createPosterLimiter } from '../middlewares/rateLimiter.js'

const router = express.Router()

const posterIdParam = param('id').isMongoId().withMessage('Invalid poster ID')

const createPosterRules = [
  body('spotifyAlbumId').isString().trim().notEmpty().withMessage('spotifyAlbumId is required'),
  body('albumName').isString().trim().notEmpty().withMessage('albumName is required').isLength({ max: 200 }),
  body('artistsName').isString().trim().notEmpty().withMessage('artistsName is required').isLength({ max: 200 }),
  body('releaseDate').optional().isString().isLength({ max: 50 }),
  body('posterJson').isObject().withMessage('posterJson must be an object'),
  body('visibility').optional().isIn(['public', 'private']).withMessage('Invalid visibility value')
]

const updateVisibilityRules = [
  posterIdParam,
  body('visibility').isIn(['public', 'private']).withMessage('Invalid visibility value')
]

/**
 * @openapi
 * /api/posters:
 *   post:
 *     tags: [Posters]
 *     summary: Publish a new poster
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePosterInput'
 *     responses:
 *       201:
 *         description: Poster created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PosterResponse'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 */
router.post('/', authenticateToken, createPosterLimiter, createPosterRules, PosterController.create)

/**
 * @openapi
 * /api/posters/{id}:
 *   get:
 *     tags: [Posters]
 *     summary: Get a poster by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Poster found
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.get('/:id', optionalAuth, [posterIdParam], PosterController.getById)

/**
 * @openapi
 * /api/posters/{id}/visibility:
 *   put:
 *     tags: [Posters]
 *     summary: Update poster visibility
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               visibility:
 *                 type: string
 *                 enum: [public, private]
 *     responses:
 *       200:
 *         description: Visibility updated
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.put('/:id/visibility', authenticateToken, updateVisibilityRules, PosterController.updateVisibility)

/**
 * @openapi
 * /api/posters/{id}:
 *   delete:
 *     tags: [Posters]
 *     summary: Delete a poster (owner or admin)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Poster deleted
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.delete('/:id', authenticateToken, [posterIdParam], PosterController.deletePoster)

/**
 * @openapi
 * /api/posters/{id}/view:
 *   post:
 *     tags: [Engagement]
 *     summary: Register a poster view (rate-limited 1/IP/h per poster)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: View registered
 */
router.post('/:id/view', viewLimiter, [posterIdParam], PosterController.registerView)

/**
 * @openapi
 * /api/posters/{id}/download:
 *   post:
 *     tags: [Engagement]
 *     summary: Register a poster download
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Download registered
 */
router.post('/:id/download', engagementLimiter, [posterIdParam], PosterController.registerDownload)

/**
 * @openapi
 * /api/posters/{id}/edit:
 *   post:
 *     tags: [Engagement]
 *     summary: Register a poster remix/edit open
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Edit registered
 */
router.post('/:id/edit', engagementLimiter, [posterIdParam], PosterController.registerEdit)

/**
 * @openapi
 * /api/posters/{id}/favorite:
 *   post:
 *     tags: [Engagement]
 *     summary: Toggle favorite on a poster
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Favorite toggled
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 favorited:
 *                   type: boolean
 */
router.post('/:id/favorite', authenticateToken, [posterIdParam], PosterController.toggleFavorite)

export default router
