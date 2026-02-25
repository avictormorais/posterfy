import express from 'express'
import { param } from 'express-validator'
import AdminController from '../controllers/adminController.js'
import { authenticateToken } from '../utils/jwt.js'
import { requireAdmin } from '../middlewares/auth.js'

const router = express.Router()

router.use(authenticateToken, requireAdmin)

/**
 * @openapi
 * /api/admin/posters/{id}:
 *   delete:
 *     tags: [Admin]
 *     summary: Admin force-delete a poster
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
 *       403:
 *         $ref: '#/components/responses/Forbidden'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.delete('/posters/:id', [param('id').isMongoId()], AdminController.deletePoster)

/**
 * @openapi
 * /api/admin/users/{id}/ban:
 *   put:
 *     tags: [Admin]
 *     summary: Suspend a user account
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
 *         description: User suspended
 *       403:
 *         $ref: '#/components/responses/Forbidden'
 */
router.put('/users/:id/ban', [param('id').isMongoId()], AdminController.banUser)

/**
 * @openapi
 * /api/admin/users/{id}/unban:
 *   put:
 *     tags: [Admin]
 *     summary: Reactivate a suspended user
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
 *         description: User reactivated
 */
router.put('/users/:id/unban', [param('id').isMongoId()], AdminController.unbanUser)

/**
 * @openapi
 * /api/admin/users:
 *   get:
 *     tags: [Admin]
 *     summary: List all users
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
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [active, suspended]
 *     responses:
 *       200:
 *         description: Paginated user list
 */
router.get('/users', AdminController.listUsers)

export default router
