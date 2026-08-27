/* eslint-disable react-refresh/only-export-components, react/prop-types */
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import apiService from '../services/apiService'

const PrintReadyContext = createContext(null)

const initialAvailability = {
  enabled: true,
  offer: null,
  status: 'loading',
  error: null
}

const normalizeOffer = (offer) => {
  if (!offer || typeof offer.enabled !== 'boolean') {
    throw new Error('Invalid Print-Ready availability response')
  }
  return offer
}

export const usePrintReady = () => {
  const context = useContext(PrintReadyContext)
  if (!context) throw new Error('usePrintReady must be used within a PrintReadyProvider')
  return context
}

export const PrintReadyProvider = ({ children }) => {
  const [availability, setAvailability] = useState(initialAvailability)
  const mountedRef = useRef(true)
  const requestVersionRef = useRef(0)

  const syncOffer = useCallback((offer) => {
    const normalizedOffer = normalizeOffer(offer)
    requestVersionRef.current += 1
    if (mountedRef.current) {
      setAvailability({
        enabled: normalizedOffer.enabled,
        offer: normalizedOffer,
        status: 'ready',
        error: null
      })
    }
    return normalizedOffer
  }, [])

  const refresh = useCallback(async () => {
    const requestVersion = requestVersionRef.current + 1
    requestVersionRef.current = requestVersion
    try {
      const result = await apiService.getPrintReadyOffer()
      const normalizedOffer = normalizeOffer(result.offer)
      if (mountedRef.current && requestVersionRef.current === requestVersion) {
        setAvailability({
          enabled: normalizedOffer.enabled,
          offer: normalizedOffer,
          status: 'ready',
          error: null
        })
      }
      return normalizedOffer
    } catch (error) {
      if (mountedRef.current && requestVersionRef.current === requestVersion) {
        setAvailability((current) => ({
          ...current,
          enabled: true,
          status: 'error',
          error
        }))
      }
      throw error
    }
  }, [])

  useEffect(() => {
    mountedRef.current = true
    refresh().catch(() => {
      // Fail closed: an unavailable status endpoint must never unlock paid exports.
    })
    return () => { mountedRef.current = false }
  }, [refresh])

  const value = useMemo(() => ({
    ...availability,
    refresh,
    syncOffer
  }), [availability, refresh, syncOffer])

  return (
    <PrintReadyContext.Provider value={value}>
      {children}
    </PrintReadyContext.Provider>
  )
}
