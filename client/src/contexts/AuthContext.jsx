import { createContext, useContext, useState, useEffect } from 'react'
import apiService from '../services/apiService'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const initAuth = async () => {
      const urlParams = new URLSearchParams(window.location.search)
      const token = urlParams.get('token')

      if (token) {
        localStorage.setItem('authToken', token)
        apiService.setAuthToken(token)
        window.history.replaceState({}, document.title, window.location.pathname)
      }

      await checkAuthStatus()
    }

    initAuth()
  }, [])

  const checkAuthStatus = async () => {
    const token = localStorage.getItem('authToken')

    if (!token) {
      setUser(null)
      setIsAuthenticated(false)
      setLoading(false)
      return
    }

    try {
      const data = await apiService.getCurrentUser()
      setUser(data.user)
      setIsAuthenticated(true)
      setLoading(false)
    } catch (error) {
      localStorage.removeItem('authToken')
      apiService.setAuthToken(null)
      setUser(null)
      setIsAuthenticated(false)
      setLoading(false)
    }
  }

  const loginWithGoogle = () => {
    window.location.href = apiService.getGoogleAuthUrl()
  }

  const loginWithSpotify = () => {
    window.location.href = apiService.getSpotifyAuthUrl()
  }

  const logout = async () => {
    try {
      await apiService.logout()
      localStorage.removeItem('authToken')
      apiService.setAuthToken(null)
      setUser(null)
      setIsAuthenticated(false)
    } catch (error) {
      console.error('Logout failed:', error)
      localStorage.removeItem('authToken')
      apiService.setAuthToken(null)
      setUser(null)
      setIsAuthenticated(false)
    }
  }

  const updateUser = (userData) => {
    setUser(userData)
  }

  const value = {
    user,
    loading,
    isAuthenticated,
    loginWithGoogle,
    loginWithSpotify,
    logout,
    checkAuthStatus,
    updateUser
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}