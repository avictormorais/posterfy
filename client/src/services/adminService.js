import apiService from './apiService'

const admin = {
  getOverview: () => apiService.request('/api/admin/overview'),
  getHealth: () => apiService.request('/api/admin/health'),

  getUsers: (params = {}) => {
    const qs = new URLSearchParams(params).toString()
    return apiService.request(`/api/admin/users?${qs}`)
  },
  getUser: (id) => apiService.request(`/api/admin/users/${id}`),
  editUser: (id, data) => apiService.request(`/api/admin/users/${id}/edit`, { method: 'PUT', body: JSON.stringify(data) }),
  banUser: (id) => apiService.request(`/api/admin/users/${id}/ban`, { method: 'PUT' }),
  unbanUser: (id) => apiService.request(`/api/admin/users/${id}/unban`, { method: 'PUT' }),
  promoteUser: (id) => apiService.request(`/api/admin/users/${id}/promote`, { method: 'PUT' }),
  demoteUser: (id) => apiService.request(`/api/admin/users/${id}/demote`, { method: 'PUT' }),
  forceLogout: (id) => apiService.request(`/api/admin/users/${id}/force-logout`, { method: 'POST' }),

  bulkUsers: (data) => apiService.request('/api/admin/users/bulk', { method: 'PUT', body: JSON.stringify(data) }),

  getPosters: (params = {}) => {
    const qs = new URLSearchParams(params).toString()
    return apiService.request(`/api/admin/posters?${qs}`)
  },
  getPoster: (id) => apiService.request(`/api/admin/posters/${id}`),
  deletePoster: (id) => apiService.request(`/api/admin/posters/${id}`, { method: 'DELETE' }),
  restorePoster: (id) => apiService.request(`/api/admin/posters/${id}/restore`, { method: 'PUT' }),
  purgePoster:   (id) => apiService.request(`/api/admin/posters/${id}/purge`,   { method: 'DELETE' }),
  changeVisibility: (id, visibility) => apiService.request(`/api/admin/posters/${id}/visibility`, { method: 'PUT', body: JSON.stringify({ visibility }) }),
  editPoster: (id, data) => apiService.request(`/api/admin/posters/${id}/edit`, { method: 'PUT', body: JSON.stringify(data) }),

  getLogs: (params = {}) => {
    const qs = new URLSearchParams(params).toString()
    return apiService.request(`/api/admin/logs?${qs}`)
  },
}

export default admin
