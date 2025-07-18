import { useState, useEffect } from "react"
import styled from "styled-components"
import Icon from "../icons/icon"
import LanguageSelector from "./Languageselector"

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease;
  background-color: ${({ scrolled }) => (scrolled ? "rgba(0, 0, 0, 0.15)" : "transparent")};
  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(5px)" : "none")};
  padding: ${({ scrolled }) => (scrolled ? "10px 0" : "20px 0")};
  box-shadow: ${({ scrolled }) => (scrolled ? "0 4px 30px var(--shadowColor)" : "none")};
`

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10%;
  
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
  color: var(--PosterfyGreen);
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

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const domain = import.meta.env.VITE_DOMAIN

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  return (
    <NavbarContainer scrolled={scrolled}>
      <NavbarContent>
        <LogoContainer>
          <IconContainer>
            <Icon fill={"#01b755"} width={"40px"} height={"44.05px"} />
          </IconContainer>
          <BrandName>
            Posterfy
            {domain && <DomainText>{domain}</DomainText>}
          </BrandName>
        </LogoContainer>
        <LanguageSelector />
      </NavbarContent>
      <Divider scrolled={scrolled} />
    </NavbarContainer>
  )
}

export default Navbar
