import { useRef, useEffect, useMemo, useCallback } from 'react'
import CanvasPoster from '../PosterEditor/CanvasPoster'

const PosterThumbnail = ({ poster, onImageReady }) => {
  const hasCalledRef = useRef(false)
  const onImageReadyRef = useRef(onImageReady)

  useEffect(() => {
    onImageReadyRef.current = onImageReady
  }, [onImageReady])

  const posterData = useMemo(() => {
    const json = poster?.posterJson || {}

    return {
      ...json,
      albumID: json.albumID || poster?.spotifyAlbumId || '',
      albumName: json.albumName || poster?.albumName || '',
      artistsName: json.artistsName || poster?.artistsName || '',
      tracklist: typeof json.tracklist === 'string' ? json.tracklist : '',
      useUncompressed: Boolean(json.useUncompressed),
      showTracklist: Boolean(json.showTracklist),
      showArtistSignature: Boolean(json.showArtistSignature)
    }
  }, [poster])

  useEffect(() => {
    hasCalledRef.current = false
  }, [posterData])

  const handleImageReady = useCallback((imageData) => {
    if (!imageData || hasCalledRef.current) return

    if (onImageReadyRef.current) {
      hasCalledRef.current = true
      onImageReadyRef.current(imageData)
    }
  }, [])

  return (
    <div style={{ display: 'none' }}>
      <CanvasPoster
        posterData={posterData}
        generatePoster={true}
        isThumbnail={true}
        scale={0.3}
        onImageReady={handleImageReady}
      />
    </div>
  )
}

export default PosterThumbnail

