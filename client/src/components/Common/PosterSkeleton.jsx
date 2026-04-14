import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`

const SkeletonOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(100, 100, 100, 0.3) 0%,
    rgba(150, 150, 150, 0.5) 50%,
    rgba(100, 100, 100, 0.3) 100%
  );
  background-size: 1000px 100%;
  animation: ${shimmer} 2s infinite;
  z-index: 10;
`

const PosterSkeleton = ({ isLoading = true, children }) => {
  if (!isLoading) {
    return children
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {children}
      <SkeletonOverlay />
    </div>
  )
}

export default PosterSkeleton
