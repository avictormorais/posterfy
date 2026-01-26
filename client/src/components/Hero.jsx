"use client"

import styled from "styled-components"
import Icon from "./svgs/icon"
import { useTranslation } from "react-i18next"
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md"
import DivAlbum from "./DivAlbum"
import { useState, useEffect } from "react"
import { useTheme } from "../contexts/ThemeContext"

const HeroSection = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 20px;
    box-sizing: border-box;
`

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
    z-index: 1;
    padding: 0 20px;
    box-sizing: border-box;

    @media (max-width: 900px) {
        flex-direction: column;
        text-align: center;
        justify-content: center;
        padding-top: 80px;
        gap: 40px;
    }
`

const TextContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    @media (max-width: 900px) {
        align-items: center;
    }
`

const Title = styled.h1`
    font-size: 5.5em;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 24px;
    opacity: ${props => props.visible ? 1 : 0};
    transform: translateY(${props => props.visible ? '0' : '20px'});
    transition: opacity 0.8s ease, transform 0.8s ease;
    transition-delay: 200ms;
    color: var(--textColor);
    letter-spacing: -2px;

    @media (max-width: 1200px) {
        font-size: 4.5em;
    }

    @media (max-width: 600px) {
        font-size: 3.5em;
    }
`

const Paragraph = styled.p`
    font-size: 1.25em;
    line-height: 1.6;
    opacity: ${props => props.visible ? 0.7 : 0};
    max-width: 550px;
    margin-bottom: 12px;
    transform: translateY(${props => props.visible ? '0' : '20px'});
    transition: opacity 0.8s ease, transform 0.8s ease;
    transition-delay: ${props => props.delay || 400}ms;
    color: var(--textColor);
    font-weight: 500;
`

const VisualContent = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    opacity: ${props => props.visible ? 1 : 0};
    transform: translateX(${props => props.visible ? '0' : '50px'});
    transition: opacity 1s ease, transform 1s ease;
    transition-delay: 600ms;

    @media (max-width: 900px) {
        transform: translateY(${props => props.visible ? '0' : '50px'});
        width: 100%;
    }
`

const IconWrapper = styled.div`
    position: relative;
    z-index: 2;
    width: 320px;
    height: 352px;

    @media (max-width: 1200px) {
        width: 280px;
        height: 308px;
    }

    @media (max-width: 900px) {
        width: 240px;
        height: 264px;
    }

    @media (max-width: 600px) {
        width: 180px;
        height: 198px;
    }

    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0px); }
    }

    /* Glow effect */
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 120%;
        height: 120%;
        background: var(--textColor);
        opacity: 0.08;
        filter: blur(80px);
        border-radius: 50%;
        z-index: -1;
    }
`

const ScrollIndicator = styled(MdOutlineKeyboardDoubleArrowDown)`
    font-size: 2.5em;
    color: var(--textColor);
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    opacity: ${props => props.visible ? 0.4 : 0};
    transition: opacity 1s ease;
    transition-delay: 1200ms;
    animation: bounce 2s infinite;
    cursor: pointer;

    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
        40% { transform: translateX(-50%) translateY(-10px); }
        60% { transform: translateX(-50%) translateY(-5px); }
    }
`

function Hero({ showAnimation = false, onRecreate }) {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const [elementsVisible, setElementsVisible] = useState(false)

  useEffect(() => {
    if (showAnimation) {
      const timer = setTimeout(() => {
        setElementsVisible(true)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [showAnimation])

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <>
      <HeroSection>
        <ContentWrapper>
          <TextContent>
            <Title visible={elementsVisible}>
              Posterfy
            </Title>
            <Paragraph visible={elementsVisible} delay={400}>
              {t("heroDescription")}
            </Paragraph>
            
            {/* Hidden SEO Content */}
            <div style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
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
          </TextContent>

          <VisualContent visible={elementsVisible}>
            <IconWrapper>
               <Icon fill={theme === 'light' ? "#2c2929" : "white"} width={"100%"} height={"100%"} />
            </IconWrapper>
          </VisualContent>
        </ContentWrapper>

        <ScrollIndicator visible={elementsVisible} onClick={handleScroll} />
      </HeroSection>
      <DivAlbum onRecreate={onRecreate} />
    </>
  )
}

export default Hero
