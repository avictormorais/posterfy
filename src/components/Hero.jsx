"use client"

import styled from "styled-components"
import Icon from "./icons/icon"
import { useTranslation } from "react-i18next"
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md"
import DivAlbum from "./DivAlbum"
import { useState, useEffect } from "react"

const HeroDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    margin-inline: auto;
    position: relative;
    text-align: center;
    height: 100vh;
    align-items: center;
`

const Container = styled.div`
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px;
    margin-block: auto;

    @media (max-width: 550px) {
        padding: 0;
    }
`

const Title = styled.h1`
    font-size: 6.5em;
    margin-bottom: 20px;
    margin-top: 20px;
    opacity: ${props => props.visible ? 1 : 0};
    transform: translateY(${props => props.visible ? '0' : '20px'});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${props => props.animationDelay || 0}ms;

    @media (max-width: 900px) {
        font-size: 4.5em;
    }

    @media (max-width: 600px) {
        font-size: 4em;
    }
`

const Paragraph = styled.p`
    font-size: 1em;
    opacity: ${props => props.visible ? 0.5 : 0};
    width: 80%;
    font-weight: 500;
    margin: 2px 0;
    transform: translateY(${props => props.visible ? '0' : '20px'});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${props => props.animationDelay || 0}ms;

    @media (max-width: 900px) {
        width: 90%;
    }
`

const ContainerIcon = styled.div`
    max-width: 100%;
    margin: 50px 0;
    display: flex;
    justify-content: center;
    animation: ${props => props.visible ? 'heartbeat 2s infinite' : 'none'};
    margin-top: 100px;
    opacity: ${props => props.visible ? 1 : 0};
    transform: translateY(${props => props.visible ? '0' : '50px'});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${props => props.animationDelay || 0}ms;

    &:before {
        content: '';
        position: absolute;
        width: 280px;
        height: 280px;
        border-radius: 50%;
        background: white;
        filter: blur(20px);
        z-index: -10;
        margin-top: -50px;
        opacity: 0.05;
    }

    @keyframes heartbeat {
        0%, 50%, 90%, 100% { opacity: 0.1; transform: scale(1); }
        30%, 70% { opacity: 0.25; transform: scale(1.05); }
    }
`

const HeroIcon = styled(MdOutlineKeyboardDoubleArrowDown)`
    font-size: 2em;
    color: white;
    margin: 10px;
    opacity: ${props => props.visible ? 0.2 : 0};
    position: absolute;
    bottom: 7%;
    transform: translateY(${props => props.visible ? '0' : '20px'});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${props => props.animationDelay || 0}ms;
`

function Hero({ showAnimation = false }) {
  const { t } = useTranslation()
  const [elementsVisible, setElementsVisible] = useState(false)

  useEffect(() => {
    if (showAnimation) {
      const timer = setTimeout(() => {
        setElementsVisible(true)
      }, 50)

      return () => clearTimeout(timer)
    }
  }, [showAnimation])

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: "smooth",
    })
  }

  return (
    <>
      <HeroDiv>
        <Container>
          <Title visible={elementsVisible} animationDelay={200}>
            Posterfy
          </Title>
          <Paragraph visible={elementsVisible} animationDelay={400}>
            {t("paragraphHero1")}
          </Paragraph>
          <Paragraph visible={elementsVisible} animationDelay={600}>
            {t("paragraphHero2")}
          </Paragraph>

          <div style={{ 
            position: 'absolute', 
            left: '-10000px', 
            top: 'auto', 
            width: '1px', 
            height: '1px', 
            overflow: 'hidden' 
          }}>
            <h2>Free Album Poster Generator</h2>
            <p>Create custom music posters from your favorite Spotify albums. Design professional album artwork posters with our easy-to-use online tool. No signup required - start creating your album poster now!</p>
            <h3>Features:</h3>
            <ul>
              <li>Free album poster maker</li>
              <li>Spotify integration</li>
              <li>Custom poster design</li>
              <li>High-quality downloads</li>
              <li>Multiple format options</li>
              <li>Professional templates</li>
            </ul>
          </div>

          <ContainerIcon visible={elementsVisible} animationDelay={800}>
            <Icon fill={"white"} width={"180px"} height={"198.23px"} />
          </ContainerIcon>

          <HeroIcon visible={elementsVisible} animationDelay={1000} onClick={handleScroll} />
        </Container>
      </HeroDiv>
      <DivAlbum />
    </>
  )
}

export default Hero
