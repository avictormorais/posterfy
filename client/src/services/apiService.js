import { API_CONFIG } from '../config/api.js'

const API_BASE_URL = API_CONFIG.BASE_URL

class ApiService {
  constructor(baseURL = API_BASE_URL) {
    this.baseURL = baseURL
    this.authToken = null
  }

  setAuthToken(token) {
    this.authToken = token
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    const config = {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    }

    if (this.authToken) {
      config.headers.Authorization = `Bearer ${this.authToken}`
    }

    const response = await fetch(url, config)

    if (!response.ok) {
      const body = await response.json().catch(() => ({}))
      const err = new Error(body.error || `HTTP error ${response.status}`)
      err.status = response.status
      err.code = body.code || null
      throw err
    }

    return response.json()
  }

  async getCurrentUser() {
    return this.request('/auth/user')
  }

  async logout() {
    return this.request('/auth/logout', { method: 'POST' })
  }

  async getUserProfile() {
    return this.request('/api/user/profile')
  }

  async updateUserProfile(data) {
    return this.request('/api/user/profile', {
      method: 'PUT',
      body: JSON.stringify(data)
    })
  }

  getGoogleAuthUrl() {
    const redirect = encodeURIComponent(`${window.location.origin}/dashboard`)
    return `${this.baseURL}/auth/google?redirect=${redirect}`
  }

  getSpotifyAuthUrl() {
    const redirect = encodeURIComponent(`${window.location.origin}/dashboard`)
    return `${this.baseURL}/auth/spotify?redirect=${redirect}`
  }

  async publishPoster({ spotifyAlbumId, albumName, artistsName, releaseDate, posterJson, visibility = 'public' }) {
    return this.request('/api/posters', {
      method: 'POST',
      body: JSON.stringify({ spotifyAlbumId, albumName, artistsName, releaseDate, posterJson, visibility })
    })
  }

  async getPoster(id) {
    return this.request(`/api/posters/${id}`)
  }

  async updatePosterVisibility(id, visibility) {
    return this.request(`/api/posters/${id}/visibility`, {
      method: 'PUT',
      body: JSON.stringify({ visibility })
    })
  }

  async deletePoster(id) {
    return this.request(`/api/posters/${id}`, { method: 'DELETE' })
  }

  async registerView(id) {
    return this.request(`/api/posters/${id}/view`, { method: 'POST' })
  }

  async registerDownload(id) {
    return this.request(`/api/posters/${id}/download`, { method: 'POST' })
  }

  async registerEdit(id) {
    return this.request(`/api/posters/${id}/edit`, { method: 'POST' })
  }

  async toggleFavorite(id) {
    return this.request(`/api/posters/${id}/favorite`, { method: 'POST' })
  }

  async getUserPosters({ page = 1, limit = 20 } = {}) {
    return this.request(`/api/user/posters?page=${page}&limit=${limit}`)
  }

  async getUserFavorites({ page = 1, limit = 20 } = {}) {
    return this.request(`/api/user/favorites?page=${page}&limit=${limit}`)
  }

  async getCommunityPosters({ sort = 'popular', page = 1, limit = 20, period } = {}) {
    const params = new URLSearchParams({ sort, page, limit })
    if (period) params.set('period', period)
    return this.request(`/api/community?${params}`)
  }

  async searchCommunity({ q, page = 1, limit = 20 } = {}) {
    const params = new URLSearchParams({ q, page, limit })
    return this.request(`/api/community/search?${params}`)
  }

  async getTrendingAlbums(limit = 10) {
    return this.request(`/api/community/trending-albums?limit=${limit}`)
  }

  async getTopUsers({ sort = 'posters', limit = 10 } = {}) {
    return this.request(`/api/community/top-users?sort=${sort}&limit=${limit}`)
  }

  async getAlbumPosters(spotifyAlbumId, { page = 1, limit = 20 } = {}) {
    return this.request(`/api/community/albums/${spotifyAlbumId}?page=${page}&limit=${limit}`)
  }

  async getUserPublicProfile(username, { page = 1, limit = 20 } = {}) {
    return this.request(`/api/community/users/${username}?page=${page}&limit=${limit}`)
  }
}

export default new ApiService()