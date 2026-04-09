import styled from "styled-components"
import PosterGallery from "./PosterGallery/PosterGallery"
import { useTopPosters } from "../hooks/useTopPosters"
import AlbumCollection from "./AlbumCollection"

const AlbumContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  overflow: hidden;
  padding: 20px 0;
  
  @media (max-width: 768px) {
    padding: 10px 0;
  }
`

const DivAlbum = ({ onRecreate }) => {
  const { posters, loading } = useTopPosters()

  // Mostra galeria real quando temos pelo menos 3 posters válidos
  const showRealGallery = posters && posters.length >= 3

  return (
    <AlbumContainer>
      {showRealGallery ? (
        <PosterGallery posters={posters} onPosterClick={null} />
      ) : (
        <AlbumCollection onRecreate={onRecreate} />
      )}
    </AlbumContainer>
  )
}

export default DivAlbum
