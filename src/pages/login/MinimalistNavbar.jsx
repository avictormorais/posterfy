import { useState, useEffect } from "react"
import styled from "styled-components"
import Icon from "../../components/svgs/icon"
import LanguageSelector from "../../components/Navbar/Languageselector"
import ThemeSelector from "../../components/Navbar/ThemeSelector"
import { useNavigate } from "react-router-dom"

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease;
  background-color: ${({ scrolled }) => (scrolled ? "rgba(0, 0, 0, 0.15)" : "transparent")};
  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(20px)" : "none")};
  padding: ${({ scrolled }) => (scrolled ? "10px 0" : "20px 0")};
  box-shadow: ${({ scrolled }) => (scrolled ? "0 4px 30px var(--shadowColor)" : "none")};
  transform: ${({ visible }) => (visible ? "translateY(0)" : "translateY(-100%)")};
`

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 13%;
  
  @media (max-width: 768px) {
    padding-inline: 40px;
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const BrandName = styled.h1`
  font-weight: bolder;
  margin-left: 20px;
  font-size: 1.3em;
  color: var(--AccentColor);

  @media (max-width: 400px) {
    display: none;
  }
`

const DomainText = styled.span`
  font-weight: normal;
  font-size: 0.65em;
  opacity: 0.4;
  font-weight: 600;
`

const Divider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(1, 183, 85, 0.05);
  opacity: ${({ scrolled }) => (scrolled ? "1" : "0")};
  transition: opacity 0.3s ease;
`

const IconContainer = styled.div`
  animation: spin 10s linear infinite;
  width: 40px;
  height: 44.05px;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

function MinimalistNavbar({ iconColor }) {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const domain = import.meta.env.VITE_DOMAIN
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isScrolled = currentScrollY > 10
      
      if (currentScrollY <= 10) {
        setVisible(true)
        setScrolled(false)
      } else {
        if (currentScrollY < lastScrollY) {
          setVisible(true)
        } else {
          setVisible(false)
        }
        setScrolled(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <NavbarContainer scrolled={scrolled} visible={visible}>
      <NavbarContent>
        <LogoContainer onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <Icon fill={iconColor ? iconColor : "var(--AccentColor)"} width={"40px"} height={"44.05px"} />
        </LogoContainer>
        <SelectorContainer>
          <LanguageSelector />
        </SelectorContainer>
      </NavbarContent>
      <Divider scrolled={scrolled} />
    </NavbarContainer>
  )
}

export default MinimalistNavbar
