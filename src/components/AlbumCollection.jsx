import { useState, useEffect } from "react"
import styled from "styled-components"
import { albumData } from "./AlbumData"

const AlbumsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  perspective: 1000px;
  padding: 80px 0;
  overflow: hidden;

  @media (max-width: 800px) {
    display: none;
  }
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
  transition: ${(props) => {
    if (props.isHovered) {
      return `transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s, 
              box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s,
              z-index 0s 0.3s`;
    } else {
      
      return `transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
              box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              z-index 0s`;
    }
  }};
  z-index: ${(props) => {
    if (props.isHovered) return 15;
    if (props.index === 2) return 10;
    if (props.index === 3) return 9;
    if (props.index === 1) return 8;
    if (props.index === 4) return 7;
    if (props.index === 0) return 6;
    return 5;
  }};  transform: ${(props) => {
    const { isHovered, index, hoveredIndex, isMobile } = props;
    
    if (isMobile) return "scale(1)";
    
    let baseTransform = "scale(0.95)";
    
    if (isHovered) {
      baseTransform = "scale(1.08) translateY(-8px)";
    } else if (hoveredIndex !== null) {
      let translateX = 0;
      
      switch (hoveredIndex) {
        case 0:
          if (index > 0) translateX = 70;
          break;
          
        case 1:
          if (index >= 2) translateX = 70;
          break;
          
        case 2:
          translateX = 0;
          break;
          
        case 3:
          if (index <= 2) translateX = -70;
          break;
          
        case 4:
          if (index < 4) translateX = -70;
          break;
      }
      
      if (translateX !== 0) {
        baseTransform = `scale(0.95) translateX(${translateX}px)`;
      }
    }
    
    return baseTransform;
  }};
  box-shadow: ${(props) =>
    props.isHovered
      ? "0 25px 50px rgba(0,0,0,0.5), 0 8px 16px rgba(0,0,0,0.3)"
      : "0 8px 16px rgba(0,0,0,0.15)"};
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
    transition: ${(props) => {
      if (props.isHovered) {
        return "filter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s";
      } else {
        return "filter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      }
    }};
    filter: ${(props) =>
      props.isHovered
        ? "brightness(1.15) contrast(1.1) saturate(1.1)"
        : props.otherIsHovered && !props.isHovered
        ? "brightness(0.7) contrast(0.9) saturate(0.8)"
        : "brightness(1) contrast(1) saturate(1)"};
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4));
    opacity: ${(props) => (props.otherIsHovered && !props.isHovered ? 1 : 0)};
    transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), backdrop-filter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    pointer-events: none;
    backdrop-filter: ${(props) =>
      props.otherIsHovered && !props.isHovered ? "blur(1px)" : "blur(0px)"};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(255,255,255,0.1) 0%,
      rgba(255,255,255,0.05) 50%,
      rgba(0,0,0,0.05) 100%
    );
    opacity: ${(props) => (props.isHovered ? 1 : 0)};
    transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${(props) => 
      props.isHovered ? "0.3s" : "0s"};
    pointer-events: none;
    z-index: 1;
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
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(12px);
  animation: fadeIn 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @keyframes fadeIn {
    from {
      opacity: 0;
      backdrop-filter: blur(0px);
    }
    to {
      opacity: 1;
      backdrop-filter: blur(12px);
    }
  }
`

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: scaleIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @keyframes scaleIn {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  img {
    max-width: 70%;
    max-height: 70%;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.6);
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: 50px;
  background: var(--glassBackground);
  border: 2px solid var(--borderColor);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: var(--textColor);
  font-size: 1.5em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(8px);

  &:hover {
    background: var(--borderColor);
    border-color: var(--textSecondary);
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }

  &:active {
    transform: scale(0.95);
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
            hoveredIndex={hoveredIndex}
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