import { useRef } from 'react'
import CanvasPoster from '../PosterEditor/CanvasPoster'

const PosterThumbnail = ({ posterJson, onImageReady }) => {
  const hasCalledRef = useRef(false)

  const handleImageReady = (imageData) => {
    if (!hasCalledRef.current && onImageReady) {
      hasCalledRef.current = true
      onImageReady(imageData)
    }
  }

  return (
    <div style={{ display: 'none' }}>
      <CanvasPoster
        posterData={posterJson}
        generatePoster={true}
        isThumbnail={true}
        scale={0.3}
        onImageReady={handleImageReady}
      />
    </div>
  )
}

export default PosterThumbnail

