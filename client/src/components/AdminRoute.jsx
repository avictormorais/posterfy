import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const AdminRoute = ({ children }) => {
  const navigate = useNavigate()
  const { user, isAuthenticated, loading } = useAuth()

  const isAdmin = user?.permissions?.includes('admin')

  useEffect(() => {
    if (!loading && (!isAuthenticated || !isAdmin)) {
      navigate('/')
    }
  }, [isAuthenticated, isAdmin, loading, navigate])

  if (loading) return null

  return isAuthenticated && isAdmin ? children : null
}

export default AdminRoute
