import express from 'express'
import { param, body, query } from 'express-validator'
import AdminController from '../controllers/adminController.js'
import { authenticateToken } from '../utils/jwt.js'
import { requireAdmin } from '../middlewares/auth.js'
import { adminLimiter } from '../middlewares/rateLimiter.js'
import { auditLog } from '../middlewares/auditLog.js'

const router = express.Router()

router.use(authenticateToken, requireAdmin, adminLimiter)

/**
 * @openapi
 * /api/admin/overview:
 *   get:
 *     tags: [Admin]
 *     summary: Dashboard overview with aggregated metrics (cached 5 min)
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Overview data
 */
router.get('/overview', AdminController.overview)

/**
 * @openapi
 * /api/admin/health:
 *   get:
 *     tags: [Admin]
 *     summary: System health check (cached 1 min)
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Health data
 */
router.get('/health', AdminController.health)

/**
 * @openapi
 * /api/admin/logs:
 *   get:
 *     tags: [Admin]
 *     summary: Paginated audit logs
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema: { type: integer }
 *       - in: query
 *         name: limit
 *         schema: { type: integer }
 *       - in: query
 *         name: action
 *         schema: { type: string }
 *       - in: query
 *         name: adminId
 *         schema: { type: string }
 *       - in: query
 *         name: targetId
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Paginated log list
 */
router.get('/logs', AdminController.listLogs)

/**
 * @openapi
 * /api/admin/users:
 *   get:
 *     tags: [Admin]
 *     summary: Search and list all users
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema: { type: integer }
 *       - in: query
 *         name: limit
 *         schema: { type: integer }
 *       - in: query
 *         name: status
 *         schema: { type: string, enum: [active, suspended] }
 *       - in: query
 *         name: search
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Paginated user list
 */
router.get('/users', AdminController.listUsers)

router.put('/users/bulk', auditLog('bulk_user_action', 'user'), AdminController.bulkUsersAction)

/**
 * @openapi
 * /api/admin/users/{id}:
 *   get:
 *     tags: [Admin]
 *     summary: Get full user details
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: User details
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.get('/users/:id', [param('id').isMongoId()], AdminController.getUser)

/**
 * @openapi
 * /api/admin/users/{id}/edit:
 *   put:
 *     tags: [Admin]
 *     summary: Edit user name, bio, or username (moderation)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name: { type: string }
 *               bio: { type: string }
 *               username: { type: string }
 *     responses:
 *       200:
 *         description: User updated
 *       400:
 *         description: Validation error
 *       409:
 *         description: Username taken
 */
router.put('/users/:id/edit', [param('id').isMongoId()], auditLog('edit_user', 'user'), AdminController.editUser)

/**
 * @openapi
 * /api/admin/users/{id}/promote:
 *   put:
 *     tags: [Admin]
 *     summary: Promote user to admin
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: User promoted
 */
router.put('/users/:id/promote', [param('id').isMongoId()], auditLog('promote_admin', 'user'), AdminController.promoteUser)

/**
 * @openapi
 * /api/admin/users/{id}/demote:
 *   put:
 *     tags: [Admin]
 *     summary: Remove admin permission
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Admin removed
 */
router.put('/users/:id/demote', [param('id').isMongoId()], auditLog('demote_admin', 'user'), AdminController.demoteUser)

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
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: User suspended
 */
router.put('/users/:id/ban', [param('id').isMongoId()], auditLog('ban_user', 'user'), AdminController.banUser)

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
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: User reactivated
 */
router.put('/users/:id/unban', [param('id').isMongoId()], auditLog('unban_user', 'user'), AdminController.unbanUser)

/**
 * @openapi
 * /api/admin/users/{id}/force-logout:
 *   post:
 *     tags: [Admin]
 *     summary: Revoke all sessions of a user
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Sessions revoked
 */
router.post('/users/:id/force-logout', [param('id').isMongoId()], auditLog('force_logout', 'user'), AdminController.forceLogout)

/**
 * @openapi
 * /api/admin/posters:
 *   get:
 *     tags: [Admin]
 *     summary: Search and list all posters
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema: { type: integer }
 *       - in: query
 *         name: limit
 *         schema: { type: integer }
 *       - in: query
 *         name: visibility
 *         schema: { type: string, enum: [public, private] }
 *       - in: query
 *         name: isDeleted
 *         schema: { type: string, enum: ['true', 'false', 'all'] }
 *       - in: query
 *         name: authorId
 *         schema: { type: string }
 *       - in: query
 *         name: search
 *         schema: { type: string }
 *       - in: query
 *         name: sort
 *         schema: { type: string, enum: [recent, popular, views, downloads] }
 *     responses:
 *       200:
 *         description: Paginated poster list
 */
router.get('/posters', AdminController.listPosters)

/**
 * @openapi
 * /api/admin/posters/{id}:
 *   get:
 *     tags: [Admin]
 *     summary: Get full poster details (including deleted)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Poster details
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.get('/posters/:id', [param('id').isMongoId()], AdminController.getPoster)

/**
 * @openapi
 * /api/admin/posters/{id}:
 *   delete:
 *     tags: [Admin]
 *     summary: Soft-delete a poster
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Poster deleted
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.delete('/posters/:id', [param('id').isMongoId()], auditLog('delete_poster', 'poster'), AdminController.deletePoster)

/**
 * @openapi
 * /api/admin/posters/{id}/restore:
 *   put:
 *     tags: [Admin]
 *     summary: Restore a soft-deleted poster
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Poster restored
 */
router.put('/posters/:id/restore', [param('id').isMongoId()], auditLog('restore_poster', 'poster'), AdminController.restorePoster)
router.delete('/posters/:id/purge', [param('id').isMongoId()], auditLog('purge_poster', 'poster'), AdminController.purgePoster)

/**
 * @openapi
 * /api/admin/posters/{id}/visibility:
 *   put:
 *     tags: [Admin]
 *     summary: Change poster visibility
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [visibility]
 *             properties:
 *               visibility: { type: string, enum: [public, private] }
 *     responses:
 *       200:
 *         description: Visibility updated
 */
router.put('/posters/:id/visibility', [param('id').isMongoId(), body('visibility').isIn(['public', 'private'])], auditLog('change_visibility', 'poster'), AdminController.changePosterVisibility)

/**
 * @openapi
 * /api/admin/posters/{id}/edit:
 *   put:
 *     tags: [Admin]
 *     summary: Edit poster metrics (views, downloads, favorites)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               views: { type: integer }
 *               downloads: { type: integer }
 *               favoritesCount: { type: integer }
 *     responses:
 *       200:
 *         description: Poster updated
 */
router.put('/posters/:id/edit', [param('id').isMongoId()], auditLog('edit_poster', 'poster'), AdminController.editPoster)

export default router
