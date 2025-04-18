import { useState, useEffect } from "react"
import styled from "styled-components"
import { albumData } from "./albumData"

const AlbumsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  perspective: 1000px;
  padding: 20px 0;
  overflow: hidden;
`

const AlbumPoster = styled.div`
  position: relative;
  width: ${(props) =>
    props.index === 2
      ? "329px"
      : props.index === 1 || props.index === 3
      ? "288px"
      : "249px"};
  height: ${(props) =>
    props.index === 2
      ? "465px"
      : props.index === 1 || props.index === 3
      ? "405px"
      : "345px"};
  margin: 0 -30px;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: ${(props) => {
    if (props.isHovered) return 11;
    if (props.index === 2) return 10;
    if (props.index === 3) return 9;
    if (props.index === 4) return 8;
    return 5;
  }};
  transform: ${(props) =>
    props.isHovered
      ? "scale(1.1)"
      : props.isMobile
      ? "scale(1)"
      : `scale(0.95)`};
  box-shadow: ${(props) =>
    props.isHovered
      ? "0 15px 30px rgba(0,0,0,0.4)"
      : "0 5px 10px rgba(0,0,0,0.2)"};
  display: ${(props) => {
    if (props.isMobile && props.index !== 2) return "none";
    if (props.isTablet && (props.index < 1 || props.index > 3)) return "none";
    return "block";
  }};

  &:hover {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: ${(props) =>
      props.isHovered
        ? "brightness(1.1) contrast(1.05)"
        : "brightness(1) contrast(1)"};
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: ${(props) => (props.otherIsHovered && !props.isHovered ? 1 : 0)};
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    margin: 0 -20px;
  }

  @media (max-width: 480px) {
    width: ${(props) =>
      props.index === 2
        ? "260px"
        : props.index === 1 || props.index === 3
        ? "220px"
        : "180px"};
    height: ${(props) =>
      props.index === 2
        ? "390px"
        : props.index === 1 || props.index === 3
        ? "330px"
        : "270px"};
    margin: 0;
  }
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
`

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 70%;
    max-height: 70%;
    object-fit: contain;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 2em;
  cursor: pointer;

  &:hover {
    color: #ccc;
  }
`

const AlbumCollection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [modalImage, setModalImage] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 770)
      setIsTablet(window.innerWidth > 480 && window.innerWidth <= 1200)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const openModal = (image) => {
    setModalImage(image)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setModalImage(null)
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <AlbumsContainer>
        {albumData.map((album, index) => (
          <AlbumPoster
            key={album.id}
            index={index}
            isHovered={hoveredIndex === index}
            otherIsHovered={hoveredIndex !== null}
            isMobile={isMobile}
            isTablet={isTablet}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => openModal(album.coverImage || "/placeholder.svg")}
          >
            <img src={album.coverImage || "/placeholder.svg"} alt={`${album.artist} - ${album.title}`} />
          </AlbumPoster>
        ))}
      </AlbumsContainer>

      {modalImage && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <img src={modalImage} alt="Album cover" />
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default AlbumCollection