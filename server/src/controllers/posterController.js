import { validationResult } from 'express-validator'
import PosterService from '../services/posterService.js'
import EngagementService from '../services/engagementService.js'

class PosterController {
  async create(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg })
    }

    try {
      const { spotifyAlbumId, albumName, artistsName, releaseDate, posterJson, visibility } = req.body
      const poster = await PosterService.create({
        authorId: req.user.id,
        spotifyAlbumId,
        albumName,
        artistsName,
        releaseDate,
        posterJson,
        visibility
      })

      res.status(201).json({ poster })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async getById(req, res) {
    try {
      const poster = await PosterService.findById(req.params.id, req.user?.id || null)
      if (!poster) return res.status(404).json({ error: 'Poster not found' })
      res.json({ poster })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async updateVisibility(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg })
    }

    try {
      const poster = await PosterService.updateVisibility(req.params.id, req.user.id, req.body.visibility)
      if (!poster) return res.status(404).json({ error: 'Poster not found' })
      res.json({ poster })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async deletePoster(req, res) {
    try {
      const isAdmin = req.user.permissions?.includes('admin')
      const poster = await PosterService.softDelete(req.params.id, req.user.id, isAdmin)
      if (!poster) return res.status(404).json({ error: 'Poster not found' })
      res.json({ message: 'Poster deleted' })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async getUserPosters(req, res) {
    try {
      const { page = 1, limit = 20 } = req.query
      const result = await PosterService.findByUser(
        req.user.id,
        req.user.id,
        parseInt(page),
        parseInt(limit)
      )
      res.json(result)
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async getUserFavorites(req, res) {
    try {
      const { page = 1, limit = 20 } = req.query
      const result = await PosterService.getUserFavorites(req.user.id, parseInt(page), parseInt(limit))
      res.json(result)
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async registerView(req, res) {
    try {
      await EngagementService.registerView(req.params.id)
      res.json({ ok: true })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async registerDownload(req, res) {
    try {
      await EngagementService.registerDownload(req.params.id)
      res.json({ ok: true })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async registerEdit(req, res) {
    try {
      await EngagementService.registerEdit(req.params.id)
      res.json({ ok: true })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  async toggleFavorite(req, res) {
    try {
      const result = await EngagementService.toggleFavorite(req.user.id, req.params.id)
      res.json(result)
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }
}

export default new PosterController()
