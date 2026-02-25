import express from 'express'
import CommunityController from '../controllers/communityController.js'
import PosterController from '../controllers/posterController.js'
import { authenticateToken } from '../utils/jwt.js'
import { searchLimiter } from '../middlewares/rateLimiter.js'

const router = express.Router()

/**
 * @openapi
 * /api/community:
 *   get:
 *     tags: [Community]
 *     summary: List public posters
 *     parameters:
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [popular, recent, favorites, downloads]
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *       - in: query
 *         name: period
 *         schema:
 *           type: string
 *           enum: [week, month, year]
 *     responses:
 *       200:
 *         description: Paginated list of posters
 */
router.get('/', CommunityController.list)

/**
 * @openapi
 * /api/community/search:
 *   get:
 *     tags: [Community]
 *     summary: Search posters by album or artist name
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         schema:
 *           type: string
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
 *         description: Search results
 */
router.get('/search', searchLimiter, CommunityController.search)

/**
 * @openapi
 * /api/community/trending-albums:
 *   get:
 *     tags: [Community]
 *     summary: Get most created albums in the community
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of trending albums
 */
router.get('/trending-albums', CommunityController.trendingAlbums)

/**
 * @openapi
 * /api/community/top-users:
 *   get:
 *     tags: [Community]
 *     summary: Get top users ranking
 *     parameters:
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [posters, downloads, favorites]
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ranked users list
 */
router.get('/top-users', CommunityController.topUsers)

/**
 * @openapi
 * /api/community/albums/{spotifyAlbumId}:
 *   get:
 *     tags: [Community]
 *     summary: Get all community posters for a specific Spotify album
 *     parameters:
 *       - in: path
 *         name: spotifyAlbumId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Posters for the album
 */
router.get('/albums/:spotifyAlbumId', CommunityController.albumPosters)

/**
 * @openapi
 * /api/community/users/{username}:
 *   get:
 *     tags: [Community]
 *     summary: Get public profile and posters of a user
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Public profile with posters
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.get('/users/:username', CommunityController.getUserPublicProfile)

export default router
