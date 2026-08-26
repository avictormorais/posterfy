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
  purgeUser:   (id) => apiService.request(`/api/admin/users/${id}/purge`,        { method: 'DELETE' }),

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

  getPayments: (params = {}) => {
    const qs = new URLSearchParams(params).toString()
    return apiService.request(`/api/admin/payments?${qs}`)
  },
  getPrintUnlocks: (params = {}) => {
    const qs = new URLSearchParams(params).toString()
    return apiService.request(`/api/admin/unlocks?${qs}`)
  },
  grantPrintUnlock: (data) => apiService.request('/api/admin/unlocks', {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  revokePrintUnlock: (id, reason) => apiService.request(`/api/admin/unlocks/${id}/revoke`, {
    method: 'PATCH',
    body: JSON.stringify({ reason })
  }),

  getTopPosters: (limit = 50) => apiService.request(`/api/admin/top-posters?limit=${limit}`),
  getTopUsers: (limit = 50) => apiService.request(`/api/admin/top-users?limit=${limit}`),
  getTopArtists: (limit = 50) => apiService.request(`/api/admin/top-artists?limit=${limit}`),
  getTopAlbums: (limit = 50) => apiService.request(`/api/admin/top-albums?limit=${limit}`),
}

export default admin
