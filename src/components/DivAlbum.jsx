import styled from "styled-components"
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
  return (
    <AlbumContainer>
      <AlbumCollection onRecreate={onRecreate} />
    </AlbumContainer>
  )
}

export default DivAlbum
