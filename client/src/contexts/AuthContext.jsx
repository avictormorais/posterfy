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
      const currentUrl = new URL(window.location.href)
      const fragmentParams = new URLSearchParams(currentUrl.hash.slice(1))
      const fragmentToken = fragmentParams.get('token')
      const token = fragmentToken || currentUrl.searchParams.get('token')

      if (token) {
        localStorage.setItem('authToken', token)
        apiService.setAuthToken(token)
        currentUrl.searchParams.delete('token')
        currentUrl.searchParams.delete('login')
        if (fragmentToken) {
          fragmentParams.delete('token')
          fragmentParams.delete('login')
          currentUrl.hash = fragmentParams.toString()
        }
        window.history.replaceState(
          window.history.state,
          document.title,
          `${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`
        )
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

    apiService.setAuthToken(token)

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

  const loginWithGoogle = (redirectUrl) => {
    window.location.href = apiService.getGoogleAuthUrl(redirectUrl)
  }

  const loginWithSpotify = (redirectUrl) => {
    window.location.href = apiService.getSpotifyAuthUrl(redirectUrl)
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
