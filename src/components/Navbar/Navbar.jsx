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
  background-color: ${({ scrolled }) => (scrolled ? "rgba(0, 0, 0, 0.2)" : "transparent")};
  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(10px)" : "none")};
  padding: ${({ scrolled }) => (scrolled ? "12px 0" : "20px 0")};
  box-shadow: ${({ scrolled }) => (scrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none")};
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

const Divider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(0, 255, 0, 0.1);
  opacity: ${({ scrolled }) => (scrolled ? "1" : "0")};
  transition: opacity 0.3s ease;
`

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

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
          <Icon fill={"#01b755"} width={"40px"} height={"44.05px"} />
          <BrandName>Posterfy</BrandName>
        </LogoContainer>
        <LanguageSelector />
      </NavbarContent>
      <Divider scrolled={scrolled} />
    </NavbarContainer>
  )
}

export default Navbar
