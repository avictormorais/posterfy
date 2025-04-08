import styled, { keyframes } from "styled-components"
import { useTranslation } from "react-i18next"
import Icon from "./icons/icon"
import { FaGithub, FaHeart, FaPalette, FaMoon, FaSun, FaLeaf, FaFire, FaWater } from "react-icons/fa"
import { useEffect, useState } from "react"

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
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
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
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--PosterfyGreen), transparent);
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
  bottom: 5px;
  width: 80px;
  height: 20px;
  background: var(--PosterfyGreen);
  filter: blur(15px);
  opacity: 0.3;
  border-radius: 50%;
  transition: all 0.3s ease;
`

const CreditText = styled.div`
  font-size: 1.1em;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  max-width: 400px;
  position: relative;
  
  .credit-content {
    display: inline-block;
    background: linear-gradient(90deg, #ffffff, var(--PosterfyGreen), #ffffff);
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
    
    &:hover {
      color: white;
      text-shadow: 0 0 8px var(--PosterfyGreen);
    }
    
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
  color: rgba(255, 255, 255, 0.6);
  
  svg {
    color: rgba(255, 255, 255, 0.6);
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
  
  @media (max-width: 768px) {
    align-items: center;
  }
`

const ThemeTitle = styled.h3`
  font-size: 1.1em;
  font-weight: 600;
  color: white;
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
  max-width: 400px;
  justify-content: center;
`

const ThemeCard = styled.button`
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 8px;
  width: 70px;
  height: 70px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: ${(props) => (props.active ? "2px solid var(--PosterfyGreen)" : "1px solid rgba(255, 255, 255, 0.1)")};
    border-radius: 8px;
    box-shadow: ${(props) => (props.active ? "0 0 10px var(--PosterfyGreen)" : "none")};
    transition: all 0.3s ease;
  }
  
  svg {
    font-size: 1.3em;
    color: white;
    margin-bottom: 4px;
    opacity: 0.9;
  }
  
  span {
    font-size: 0.7em;
    color: white;
    opacity: 0.9;
    font-weight: 500;
  }
  
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`

const SocialSection = styled.div`
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
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
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  
  svg {
    font-size: 1.3em;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    
    svg {
      transform: rotate(360deg);
    }
  }
  
  @media (max-width: 480px) {
    font-size: 0.9em;
    padding: 6px 12px;
  }
`

function Footer() {
  const { t } = useTranslation()
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "theme-dark")

  useEffect(() => {
    document.body.className = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
  }

  const themes = [
    { id: "theme-dark", name: "Dark", color: "#070815", icon: <FaMoon /> },
    { id: "theme-fy", name: "Midnight", color: "#151515", icon: <FaSun /> },
    { id: "theme-rose", name: "Rose", color: "#232136", icon: <FaLeaf /> },
    { id: "theme-carmesin", name: "Crimson", color: "#1f0c19", icon: <FaFire /> },
    { id: "theme-brown", name: "Earth", color: "#1e1516", icon: <FaWater /> },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <Container>
      <FooterContent>
        <CreditsSection>
          <AnimatedIconWrapper>
            <IconShadow className="icon-shadow" />
            <IconMain className="icon-main">
              <Icon fill={"white"} width={"100px"} height={"88.1px"} />
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
          <ThemeTitle>
            <FaPalette /> {t("Theme")}
          </ThemeTitle>

          <ThemeCards>
            {themes.map((themeOption) => (
              <ThemeCard
                key={themeOption.id}
                color={themeOption.color}
                active={theme === themeOption.id}
                onClick={() => handleThemeChange(themeOption.id)}
                aria-label={`${t("SwitchTo", "Switch to")} ${themeOption.name} ${t("Theme").toLowerCase()}`}
              >
                {themeOption.icon}
                <span>{t(`ThemeName_${themeOption.id.replace("theme-", "")}`, themeOption.name)}</span>
              </ThemeCard>
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

