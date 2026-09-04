import apiService from './apiService'

const admin = {
  buildAdminPath: (path, params = {}) => {
    const qs = new URLSearchParams(params).toString()
    return qs ? `${path}?${qs}` : path
  },

  getOverview: () => apiService.request('/api/admin/overview'),
  getHealth: () => apiService.request('/api/admin/health'),

  getUsers: (params = {}) => {
    return apiService.request(admin.buildAdminPath('/api/admin/users', params))
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
    return apiService.request(admin.buildAdminPath('/api/admin/posters', params))
  },
  getPoster: (id) => apiService.request(`/api/admin/posters/${id}`),
  deletePoster: (id) => apiService.request(`/api/admin/posters/${id}`, { method: 'DELETE' }),
  restorePoster: (id) => apiService.request(`/api/admin/posters/${id}/restore`, { method: 'PUT' }),
  purgePoster:   (id) => apiService.request(`/api/admin/posters/${id}/purge`,   { method: 'DELETE' }),
  changeVisibility: (id, visibility) => apiService.request(`/api/admin/posters/${id}/visibility`, { method: 'PUT', body: JSON.stringify({ visibility }) }),
  editPoster: (id, data) => apiService.request(`/api/admin/posters/${id}/edit`, { method: 'PUT', body: JSON.stringify(data) }),

  getLogs: (params = {}) => {
    return apiService.request(admin.buildAdminPath('/api/admin/logs', params))
  },

  getPayments: (params = {}) => {
    return apiService.request(admin.buildAdminPath('/api/admin/payments', params))
  },
  getPrintUnlocks: (params = {}) => {
    return apiService.request(admin.buildAdminPath('/api/admin/unlocks', params))
  },
  getPrintReadyAccountAccess: (params = {}) => {
    return apiService.request(admin.buildAdminPath('/api/admin/print-ready-account-access', params))
  },
  grantPrintUnlock: (data) => apiService.request('/api/admin/unlocks', {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  revokePrintUnlock: (id, reason) => apiService.request(`/api/admin/unlocks/${id}/revoke`, {
    method: 'PATCH',
    body: JSON.stringify({ reason })
  }),
  grantPrintReadyAccountAccess: (data) => apiService.request('/api/admin/print-ready-account-access', {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  revokePrintReadyAccountAccess: (id, reason) => apiService.request(`/api/admin/print-ready-account-access/${id}/revoke`, {
    method: 'PATCH',
    body: JSON.stringify({ reason })
  }),
  restorePrintReadyAccountAccess: (id, reason) => apiService.request(`/api/admin/print-ready-account-access/${id}/restore`, {
    method: 'PATCH',
    body: JSON.stringify({ reason })
  }),

  getTopPosters: (limit = 50) => apiService.request(`/api/admin/top-posters?limit=${limit}`),
  getTopUsers: (limit = 50) => apiService.request(`/api/admin/top-users?limit=${limit}`),
  getTopArtists: (limit = 50) => apiService.request(`/api/admin/top-artists?limit=${limit}`),
  getTopAlbums: (limit = 50) => apiService.request(`/api/admin/top-albums?limit=${limit}`),
}

export default admin
