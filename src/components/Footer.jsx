import styled, { keyframes } from "styled-components"
import { useTranslation } from "react-i18next"
import Icon from "./svgs/icon"
import { FaGithub, FaHeart, FaPalette, FaMoon, FaSun, FaLeaf, FaFire, FaWater, FaGem, FaMountain } from "react-icons/fa"
import { useEffect, useState } from "react"
import { useTheme } from "../contexts/ThemeContext"

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(0deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.4; }
  100% { transform: scale(1); opacity: 0.3; }
`

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`

const Container = styled.div`
  width: 100%;
  background: linear-gradient(180deg, transparent 0%, var(--shadowColor) 100%);
  backdrop-filter: blur(10px);
  border-top: 1px solid var(--borderColor);
  padding: 40px 0;
  margin-top: 100px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 0px;
    background: linear-gradient(190deg, transparent, var(--PosterfyGreen), transparent);
  }
  
  @media (max-width: 768px) {
    padding: 30px 0;
  }
  
  @media (max-width: 480px) {
    padding: 25px 0;
  }
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

const CreditsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${slideIn} 0.5s ease-out;
  
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`

const AnimatedIconWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  
  .icon-main {
    animation: ${float} 3s ease infinite;
  }
  
  .icon-shadow {
    animation: ${pulse} 3s ease infinite;
  }
  
  @media (max-width: 768px) {
    margin: 0 auto 20px;
  }
`

const IconMain = styled.div`
  position: absolute;
  top: 0;
  left: 10;
  transition: all 0.3s ease;
  margin-inline: auto;
`

const IconShadow = styled.div`
  position: absolute;
  bottom: 0px;
  width: 105px;
  height: 20px;
  background: var(--textColor);
  opacity: 0.4;
  filter: blur(15px);
  border-radius: 50%;
  transition: all 0.3s ease;
`

const CreditText = styled.div`
  font-size: 1.1em;
  line-height: 1.6;
  color: var(--textSecondary);
  max-width: 400px;
  position: relative;
  
  .credit-content {
    display: inline-block;
    background: var(--textColor);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: ${shimmer} 6s linear infinite;
    font-weight: 600;
    letter-spacing: 0.02em;
  }
  
  .emoji {
    display: inline-block;
    margin: 0 4px;
    transition: transform 0.3s ease;
  }
  
  &:hover .emoji {
    transform: scale(1.2) rotate(10deg);
  }
  
  a {
    color: var(--PosterfyGreen);
    text-decoration: none;
    font-weight: 700;
    position: relative;
    transition: all 0.3s ease;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--PosterfyGreen);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }
    
    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1em;
  }
`

const CopyrightText = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85em;
  color: var(--textSecondary);
  
  svg {
    color: var(--textSecondary);
  }
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`

const ThemeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  animation: ${slideIn} 0.5s ease-out;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
  margin-top: auto;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`

const ThemeTitle = styled.h3`
  font-size: 1.1em;
  font-weight: 600;
  color: var(--textColor);
  margin-bottom: 5px;
  margin-left: 5px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: var(--PosterfyGreen);
  }
  
  @media (max-width: 480px) {
    font-size: 1em;
  }
`

const ThemeCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  justify-content: right;
  margin-right: auto;

  @media (max-width: 770px) {
    justify-content: center;
    margin-top: 20px;
  }
`

const ThemeCard = styled.button`
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 8px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px var(--shadowColor);
  border-radius: 100%;
  border: ${(props) => (props.active ? "1px solid var(--PosterfyGreen)" : "1px solid var(--borderColor)")};
  
  &:hover {
    box-shadow: 0 6px 12px var(--shadowColor);
    transform: scale(1.02);
  }
  
  svg {
    font-size: 1.5em;
    fill: ${(props) => props.themeId === 'light' ? '#000000' : '#ffffff'} !important;
    opacity: 0.9;
  }
  
  span {
    font-size: 0.7em;
    fill: ${(props) => props.themeId === 'light' ? '#000000' : '#ffffff'} !important;
    opacity: 0.9;
    font-weight: 500;
  }
  
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`

const ThemeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 45px;
`;

const ThemeName = styled.p`
  font-size: 0.8em;
  margin-top: 10px;
  right: 20px;
  font-weight: bolder;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.active ? "0.5" : "0")};;
`;

const SocialSection = styled.div`
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-top: 15px;
  border-top: 1px solid var(--borderColor);
  animation: ${slideIn} 0.5s ease-out;
  animation-delay: 0.4s;
  opacity: 0;
  animation-fill-mode: forwards;
  
  @media (max-width: 768px) {
    grid-column: span 1;
  }
`

const GithubLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--textSecondary);
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 20px;
  background: var(--glassBackground);
  transition: all 0.3s ease;
  margin-top: 25px;
  
  svg {
    font-size: 1.3em;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: var(--glassBackground);
    opacity: 0.8;
    box-shadow: 0 6px 12px var(--shadowColor);
    transform: scale(1.05);
  }
  
  @media (max-width: 480px) {
    font-size: 0.9em;
    padding: 6px 12px;
  }
`

function Footer() {
  const { t } = useTranslation()
  const { theme, setSpecificTheme } = useTheme()

  const handleThemeChange = (newTheme) => {
    setSpecificTheme(newTheme)
  }

  const themes = [
    { id: "light", name: "Light", color: "#f0efeb", icon: <FaSun />, isLight: true },
    { id: "dark", name: "Dark", color: "#070815", icon: <FaMoon />, isLight: false },
    { id: "fy", name: "Midnight", color: "#151515", icon: <FaLeaf />, isLight: false },
    { id: "rose", name: "Rose", color: "#232136", icon: <FaFire />, isLight: false },
    { id: "carmesin", name: "Crimson", color: "#1f0c19", icon: <FaGem />, isLight: false },
    { id: "brown", name: "Earth", color: "#1e1516", icon: <FaMountain />, isLight: false },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <Container>
      <div style={{ 
        position: 'absolute', 
        left: '-10000px', 
        top: 'auto', 
        width: '1px', 
        height: '1px', 
        overflow: 'hidden' 
      }}>
        <footer>
          <h4>Album Poster Generator Links</h4>
          <nav>
            <a href="https://posterfy.space">Free Album Poster Maker</a>
            <a href="https://posterfy.space#poster-generator">Create Music Posters</a>
            <a href="https://posterfy.space#faq">Album Poster FAQ</a>
          </nav>
          <p>
            Posterfy is the best free album poster generator online. Create custom music posters 
            from Spotify albums instantly. No signup required for our album poster maker.
          </p>
          <address>
            Contact: Posterfy Album Poster Generator
            Website: https://posterfy.space
            Keywords: album poster generator, music poster maker, spotify poster, free poster creator
          </address>
        </footer>
      </div>
      
      <FooterContent>
        <CreditsSection>
          <AnimatedIconWrapper>
            <IconShadow className="icon-shadow" />
            <IconMain className="icon-main">
              <Icon fill={theme === 'light' ? "#2c2929" : "white"} width={"100px"} height={"88.1px"} />
            </IconMain>
          </AnimatedIconWrapper>

          <CreditText>
            <div className="credit-content">
              {t("MadeBy")}{" "}
              <a href="https://github.com/avictormorais" target="blank">
                Victor
              </a>
            </div>
          </CreditText>

          <CopyrightText>
            <FaHeart /> © {currentYear} Posterfy. {t("AllRights", "All rights reserved.")}
          </CopyrightText>
        </CreditsSection>

        <ThemeSection>
          <ThemeCards>
            {themes.map((themeOption) => (
              <ThemeDiv key={themeOption.id}>
                <ThemeCard
                  key={themeOption.id}
                  color={themeOption.color}
                  active={theme === themeOption.id}
                  themeId={themeOption.id}
                  onClick={() => handleThemeChange(themeOption.id)}
                  aria-label={`${t("SwitchTo", "Switch to")} ${themeOption.name} ${t("Theme").toLowerCase()}`}
                >
                  {themeOption.icon}
                </ThemeCard>
                <ThemeName active={theme === themeOption.id} >{themeOption.name}</ThemeName>
              </ThemeDiv>
            ))}
          </ThemeCards>
        </ThemeSection>

        <SocialSection>
          <GithubLink href="https://github.com/avictormorais/posterfy" target="blank">
            <FaGithub /> {t("ViewGitHub", "GitHub")}
          </GithubLink>
        </SocialSection>
      </FooterContent>
    </Container>
  )
}

export default Footer

