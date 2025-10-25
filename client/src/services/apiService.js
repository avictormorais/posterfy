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

    try {
      const response = await fetch(url, config)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
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
    return `${this.baseURL}/auth/google`
  }

  getSpotifyAuthUrl() {
    return `${this.baseURL}/auth/spotify`
  }
}

export default new ApiService()