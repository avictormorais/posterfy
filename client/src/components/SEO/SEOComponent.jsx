/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { routeMetadata } from '../../seo/metadata'

const SeoDataContext = createContext(() => {})

const setMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement(attributes.rel ? 'link' : 'meta')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value))
}

const applyMetadata = (metadata) => {
  document.title = metadata.title
  setMeta('meta[name="description"]', { name: 'description', content: metadata.description })
  setMeta('meta[name="robots"]', { name: 'robots', content: metadata.robots })
  setMeta('link[rel="canonical"]', { rel: 'canonical', href: metadata.canonical })
  setMeta('meta[property="og:title"]', { property: 'og:title', content: metadata.openGraph.title })
  setMeta('meta[property="og:description"]', { property: 'og:description', content: metadata.openGraph.description })
  setMeta('meta[property="og:url"]', { property: 'og:url', content: metadata.openGraph.url })
  setMeta('meta[property="og:image"]', { property: 'og:image', content: metadata.openGraph.image })
  setMeta('meta[property="og:type"]', { property: 'og:type', content: metadata.openGraph.type })
  setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: metadata.twitter.card })
  setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: metadata.twitter.title })
  setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: metadata.twitter.description })
  setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: metadata.twitter.image })

  document.head.querySelectorAll('script[data-posterfy-seo], #dynamic-structured-data').forEach(node => node.remove())
  if (metadata.jsonLd) {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.posterfySeo = 'true'
    script.textContent = JSON.stringify(metadata.jsonLd)
    document.head.appendChild(script)
  }
}

function SEOComponent({ routeData }) {
  const { pathname } = useLocation()
  const metadata = useMemo(() => routeMetadata({ pathname, ...routeData }), [pathname, routeData])
  useEffect(() => applyMetadata(metadata), [metadata])
  return null
}

export function SEOProvider({ children }) {
  const [routeData, setRouteData] = useState({})
  const updateRouteData = useCallback((value) => setRouteData(value || {}), [])
  return (
    <SeoDataContext.Provider value={updateRouteData}>
      <SEOComponent routeData={routeData} />
      {children}
    </SeoDataContext.Provider>
  )
}

export const useRouteSeoData = (data) => {
  const setRouteData = useContext(SeoDataContext)
  useEffect(() => {
    setRouteData(data || {})
    return () => setRouteData({})
  }, [data, setRouteData])
}

export default SEOComponent
