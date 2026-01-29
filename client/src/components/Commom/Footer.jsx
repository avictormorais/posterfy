import styled, { keyframes } from "styled-components"
import { useTranslation } from "react-i18next"
import Icon from "../svgs/icon"
import { FaGithub, FaHeart, FaMoon, FaSun, FaLeaf, FaFire, FaGem, FaMountain, FaDiscord } from "react-icons/fa"
import { useTheme } from "../../contexts/ThemeContext"

const fadeInUp = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`

const heartbeat = keyframes`
  0%, 100% { transform: scale(1); }
  10% { transform: scale(1.2); }
  20% { transform: scale(1); }
  30% { transform: scale(1.2); }
  40% { transform: scale(1); }
`

const Container = styled.footer`
  width: 100%;
  position: relative;
  margin-top: 120px;
  background: var(--backgroundColor);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--borderColor);
  }
  
  @media (max-width: 768px) {
    margin-top: 80px;
  }
`

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px 40px;
  
  @media (max-width: 968px) {
    padding: 60px 30px 30px;
  }
  
  @media (max-width: 640px) {
    padding: 50px 20px 25px;
  }
`

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
  animation: ${fadeInUp} 0.8s ease-out;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  svg {
    filter: drop-shadow(0 4px 12px var(--shadowColor));
  }
`

const IconRotate = styled.div`
  animation: spin 10s linear infinite;
  width: 48px;
  height: 42.2px;
  margin-right: 5px;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const BrandName = styled.h2`
  font-size: 2em;
  font-weight: 700;
  color: var(--textColor);
  letter-spacing: -0.02em;
  
  @media (max-width: 640px) {
    font-size: 1.75em;
  }
`

const BrandDescription = styled.p`
  font-size: 0.95em;
  line-height: 1.7;
  color: var(--textSecondary);
  max-width: 400px;
  font-weight: 400;
  
  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
  }
`

const SocialSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`

const GithubLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--textColor);
  font-weight: 500;
  padding: 12px 20px;
  border-radius: 8px;
  background: transparent;
  border: 1px solid var(--borderColor);
  transition: all 0.2s ease;
  font-size: 0.9em;
  letter-spacing: 0.01em;
  
  svg {
    font-size: 1.1em;
    transition: transform 0.2s ease;
  }
  
  &:hover {
    border-color: var(--textColor);
    transform: scale(1.05);
    
    svg {
      transform: scale(1.05);
    }
  }
`

const DiscordLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--textColor);
  font-weight: 500;
  padding: 12px 20px;
  border-radius: 8px;
  background: transparent;
  border: 1px solid var(--borderColor);
  transition: all 0.2s ease;
  font-size: 0.9em;
  letter-spacing: 0.01em;
  
  svg {
    font-size: 1.1em;
    transition: transform 0.2s ease;
  }
  
  &:hover {
    border-color: var(--textColor);
    transform: scale(1.05);
    
    svg {
      transform: scale(1.05);
    }
  }
`





const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  border-top: 1px solid var(--borderColor);
  animation: ${fadeInUp} 0.8s ease-out 0.2s backwards;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding-top: 30px;
  }
`

const CopyrightSection = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    order: 1;
  }
`

const AllRightsSection = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    order: 2;
  }
`

const CopyrightText = styled.p`
  font-size: 0.9em;
  color: var(--textSecondary);
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: var(--AccentColor);
    animation: ${heartbeat} 1.5s ease-in-out infinite;
  }
  
  a {
    color: var(--AccentColor);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--AccentColor), var(--AccentColor));
      transition: width 0.3s ease;
    }
    
    &:hover {
      opacity: 0.8;
      
      &::after {
        width: 100%;
      }
    }
  }
`

const LegalLinks = styled.div`
  display: flex;
  gap: 24px;
  font-size: 0.85em;
  
  a {
    color: var(--textSecondary);
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    padding: 4px 0;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--AccentColor);
      transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    &:hover {
      color: var(--AccentColor);
      
      &::after {
        width: 100%;
      }
    }
  }
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }
`

const ThemeSelector = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-end;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`

const ThemeSelectorTitle = styled.h3`
  font-size: 0.9em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--textColor);
  opacity: 0.95;
`

const ThemeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  background: var(--glassBackground);
  padding: 12px;
  border-radius: 16px;
  border: 1px solid var(--borderColor);
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ThemeButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 2px solid ${props => props.active ? 'var(--AccentColor)' : 'transparent'};
  background: ${props => props.color};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  svg {
    font-size: 1.2em;
    color: ${props => props.themeId === 'light' ? '#000000' : '#ffffff'};
    opacity: 0.9;
    transition: all 0.3s ease;
  }
  
  &::after {
    content: '${props => props.themeName}';
    position: absolute;
    bottom: -28px;
    left: 50%;
    transform: translateX(-50%) scale(0.8);
    font-size: 0.75em;
    color: var(--textSecondary);
    opacity: 0;
    transition: all 0.3s ease;
    white-space: nowrap;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px var(--shadowColor);
    
    &::after {
      opacity: 1;
      transform: translateX(-50%) scale(1);
    }
    
    svg {
      transform: scale(1.1);
    }
  }
  
  &:active {
    transform: translateY(-2px);
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
      {/* SEO Hidden Content */}
      <div style={{ 
        position: 'absolute', 
        left: '-10000px', 
        top: 'auto', 
        width: '1px', 
        height: '1px', 
        overflow: 'hidden' 
      }}>
        <div>
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
        </div>
      </div>
      
      <FooterContent>
        <FooterGrid>
          {/* Brand Section - Left Block */}
          <BrandSection>
            <LogoWrapper>
              <IconRotate>
                <Icon 
                  fill={theme === 'light' ? "#2c2929" : "white"} 
                  width={"48px"} 
                  height={"42.2px"} 
                />
              </IconRotate>
              <BrandName>Posterfy</BrandName>
            </LogoWrapper>
            <BrandDescription>
              {t("FooterDescription", "Create stunning album posters from your favorite music. Free, fast, and beautiful.")}
            </BrandDescription>
          </BrandSection>

          {/* Social Section - Right Block */}
          <SocialSection>
            <GithubLink 
              href="https://github.com/avictormorais/posterfy" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub /> {t("ViewGitHub", "View on GitHub")}
            </GithubLink>
          </SocialSection>
        </FooterGrid>

        {/* Footer Bottom */}
        <FooterBottom>
          <CopyrightSection>
            <CopyrightText>
              <FaHeart />
              {t("MadeBy", "Made with love by")}{" "}
              <a href="https://github.com/avictormorais" target="_blank" rel="noopener noreferrer">
                Victor Morais
              </a>
            </CopyrightText>
          </CopyrightSection>
          
          <AllRightsSection>
            <CopyrightText>
              © {currentYear} Posterfy. {t("AllRights", "All rights reserved.")}
            </CopyrightText>
          </AllRightsSection>
        </FooterBottom>
      </FooterContent>
    </Container>
  )
}

export default Footer

