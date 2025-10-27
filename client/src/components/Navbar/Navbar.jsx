import { useState, useEffect } from "react"
import styled from "styled-components"
import Icon from "../svgs/icon"
import LanguageSelector from "./Languageselector"
import ThemeSelector from "./ThemeSelector"
import { RiUser3Fill } from "react-icons/ri";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom"

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease;
  background-color: var(--backgroundColor);
  padding: ${({ scrolled }) => (scrolled ? "10px 0" : "20px 0")};
  box-shadow: ${({ scrolled }) => (scrolled ? "0 2px 15px var(--shadowColor)" : "none")};
  transform: ${({ visible }) => (visible ? "translateY(0)" : "translateY(-100%)")};
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
  cursor: pointer;
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
  margin-left: auto;
`;

const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid var(--borderColor);
  overflow: hidden;
  
  &:hover {
    background-color: var(--glassBackground);
    transform: scale(1.05);
    border-color: var(--textColor);
  }
  
  &:active {
    transform: scale(0.95);
  }
`

const ProfileWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.themeColor};
`

const UserIcon = styled(RiUser3Fill)`
  font-size: 1.5em;
  color: var(--textColor);
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function Navbar({ hideLogo = false, hideAccount = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [soon, setSoon] = useState(false)
  const domain = import.meta.env.VITE_DOMAIN
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

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

  const handleClickAccount = () => {
    if(isAuthenticated){
      navigate('/dashboard')
    } else{
      navigate('/login')
    }
  }

  return (
    <NavbarContainer scrolled={scrolled} visible={visible}>
      <NavbarContent>
        {!hideLogo && (
          <LogoContainer onClick={() => navigate('/')}>
            <IconContainer>
              <Icon fill={"var(--AccentColor)"} width={"40px"} height={"44.05px"} />
            </IconContainer>
            <BrandName>
              Posterfy
              {domain && <DomainText>{domain}</DomainText>}
            </BrandName>
          </LogoContainer>
        )}
        <SelectorContainer>
          <LanguageSelector />
          <ThemeSelector />
          {!hideAccount && (
            <ProfileButton onClick={handleClickAccount}>
              <ProfileWrapper>
                {user?.avatar ? (
                  <AvatarImage src={user.avatar} />
                ) : (
                  <UserIcon />
                )}
              </ProfileWrapper>
            </ProfileButton>
          )}
        </SelectorContainer>
      </NavbarContent>
      <Divider scrolled={scrolled} />
    </NavbarContainer>
  )
}

export default Navbar
