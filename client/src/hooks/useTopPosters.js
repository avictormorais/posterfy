import { useState, useEffect } from 'react'
import apiService from '../services/apiService'

export const useTopPosters = () => {
  const [posters, setPosters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTopPosters = async () => {
      try {
        setLoading(true)
        const response = await apiService.getTopPosters(5)
        
        // API já retorna ordenado por popularityScore, apenas pegamos os 5 primeiros
        setPosters(Array.isArray(response.posters) ? response.posters.slice(0, 5) : [])
        setError(null)
      } catch (err) {
        console.error('Error fetching top posters:', err)
        setError(err.message)
        setPosters([])
      } finally {
        setLoading(false)
      }
    }

    fetchTopPosters()
  }, [])

  return { posters, loading, error }
}
