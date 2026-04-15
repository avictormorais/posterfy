"use client"

import styled from "styled-components"
import Icon from "./svgs/icon"
import { useTranslation } from "react-i18next"
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md"
import { FiArrowRight } from "react-icons/fi"
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
    padding: 100px 20px 60px;
    box-sizing: border-box;
    background-color: var(--backgroundColor);
`

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 1400px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 100px;
    z-index: 1;
    padding: 0 40px;
    box-sizing: border-box;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
        gap: 60px;
        padding: 0 30px;
    }

    @media (max-width: 768px) {
        gap: 40px;
        padding: 0 20px;
    }
`

const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;

    @media (max-width: 1100px) {
        align-items: center;
        text-align: center;
    }
`

const TitleBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    opacity: ${props => props.visible ? 1 : 0};
    transform: translateY(${props => props.visible ? '0' : '40px'});
    transition: opacity 0.8s ease, transform 0.8s ease;
    transition-delay: 100ms;
`

const Title = styled.h1`
    font-size: 4.5em;
    font-weight: 900;
    line-height: 1.2;
    margin: 0;
    color: var(--textColor);
    letter-spacing: -0.5px;
    word-spacing: 0.1em;

    @media (max-width: 1200px) {
        font-size: 4em;
    }

    @media (max-width: 768px) {
        font-size: 2.8em;
    }

    @media (max-width: 480px) {
        font-size: 2.2em;
    }
`

const Description = styled.p`
    font-size: 1.15em;
    line-height: 1.8;
    color: var(--textColor);
    opacity: 0.75;
    max-width: 500px;
    margin: 0;
    font-weight: 400;
    letter-spacing: 0.3px;
`

const CTAWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    opacity: ${props => props.visible ? 1 : 0};
    transform: translateY(${props => props.visible ? '0' : '40px'});
    transition: opacity 0.8s ease, transform 0.8s ease;
    transition-delay: 400ms;
    align-items: flex-start;

    @media (max-width: 1100px) {
        align-items: center;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`

const PrimaryButton = styled.button`
    padding: 12px 32px;
    font-size: 1em;
    font-weight: 600;
    letter-spacing: 0.3px;
    border: none;
    border-radius: 50px;
    background-color: var(--AccentColor);
    color: var(--textColor);
    cursor: pointer;
    transition: all 0.4s ease;
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 4px 12px rgba(223, 109, 64, 0.2);

    svg {
        transition: all 0.4s ease;
        stroke: var(--textColor);
        fill: var(--textColor);
    }

    &:hover {
        transform: translateY(-2px);
        background-color: var(--textColor);
        color: var(--AccentColor);
        box-shadow: 0 8px 24px rgba(223, 109, 64, 0.3);

        svg {
            stroke: var(--AccentColor);
            fill: var(--AccentColor);
            transform: translateX(4px);
        }
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 768px) {
        padding: 11px 28px;
        font-size: 0.95em;
    }

    @media (max-width: 480px) {
        padding: 11px 28px;
        font-size: 0.95em;
    }
`

const ButtonIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1em;
`

const RightSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    opacity: ${props => props.visible ? 1 : 0};
    transform: scale(${props => props.visible ? 1 : 0.92});
    transition: opacity 0.8s ease, transform 0.8s ease;
    transition-delay: 500ms;

    @media (max-width: 1100px) {
        order: -1;
    }
`

const IconContainer = styled.div`
    position: relative;
    width: 380px;
    height: 420px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: gentleFloat 4s ease-in-out infinite;

    @keyframes gentleFloat {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
    }

    @media (max-width: 1200px) {
        width: 320px;
        height: 360px;
    }

    @media (max-width: 900px) {
        width: 280px;
        height: 320px;
    }

    @media (max-width: 600px) {
        width: 220px;
        height: 250px;
    }
`

const ScrollIndicator = styled(MdOutlineKeyboardDoubleArrowDown)`
    font-size: 2.5em;
    color: var(--textColor);
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    opacity: ${props => props.visible ? 0.35 : 0};
    transition: opacity 1s ease;
    transition-delay: 1000ms;
    animation: bounce 2.5s ease-in-out infinite;
    cursor: pointer;

    @keyframes bounce {
        0%, 100% { transform: translateX(-50%) translateY(0); }
        50% { transform: translateX(-50%) translateY(-12px); }
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

  const handleStartCreating = () => {
    const divAlbum = document.querySelector('[data-section="album-search"]')
    if (divAlbum) {
      divAlbum.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <HeroSection>
        <ContentWrapper>
          <LeftSection>
            <TitleBlock visible={elementsVisible}>
              <Title>
                {t("heroTitle") || "Your vision,\nour design"}
              </Title>
              <Description>
                {t("heroDescription")}
              </Description>
            </TitleBlock>

            <CTAWrapper visible={elementsVisible}>
              <PrimaryButton onClick={handleStartCreating}>
                {t("startCreating") || "Start Creating"}
                <ButtonIcon>
                  <FiArrowRight />
                </ButtonIcon>
              </PrimaryButton>
            </CTAWrapper>

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
          </LeftSection>

          <RightSection visible={elementsVisible}>
            <IconContainer>
              <Icon fill={theme === 'light' ? "#2c2929" : "white"} width={"100%"} height={"100%"} />
            </IconContainer>
          </RightSection>
        </ContentWrapper>

        <ScrollIndicator visible={elementsVisible} onClick={handleScroll} />
      </HeroSection>
      <div data-section="album-search">
        <DivAlbum onRecreate={onRecreate} />
      </div>
    </>
  )
}

export default Hero
