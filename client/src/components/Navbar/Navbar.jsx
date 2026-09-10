/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import Icon from "../svgs/icon"
import LanguageSelector from "./Languageselector"
import { RiUser3Fill } from "react-icons/ri";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import { FaCode } from "react-icons/fa6";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: transform 280ms cubic-bezier(.2,.7,.3,1), box-shadow 280ms ease;
  background-color: var(--backgroundColor);
  padding: 14px 0;
  box-shadow: ${({ $scrolled }) => $scrolled ? '0 8px 24px -16px var(--shadowColor)' : 'none'};
  transform: ${({ $visible }) => ($visible ? "translateY(0)" : "translateY(-110%)")};
  &:focus-within { transform: translateY(0); }
  button:focus-visible, a:focus-visible {
    outline: 2px solid var(--AccentColor);
    outline-offset: 4px;
  }
  @media (prefers-reduced-motion: reduce) {
    &, *, *::before, *::after { animation: none !important; transition: none !important; }
  }
`

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10%;
  max-width: 1600px;
  margin-inline: auto;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding-inline: 24px;
  }
  @media (max-width: 400px) { padding-inline: 18px; }
`

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  border-radius: 8px;
  flex-shrink: 0;
  svg { transition: transform 220ms ease; }
  &:hover svg { transform: translateY(-2px) rotate(-4deg); }
`

const BrandName = styled.span`
  font-weight: bolder;
  margin-left: 10px;
  font-size: 1.3em;
  color: var(--AccentColor);
  letter-spacing: -.055em;

  @media (max-width: 400px) {
    display: none;
  }
`

const DomainText = styled.span`
  font-size: .8em;
  color: var(--textSecondary);
  font-weight: 400;
  letter-spacing: -.025em;

  @media (max-width: 465px) {
    display: none;
  }
`

const Divider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--borderColor) 15%, var(--borderColor) 85%, transparent);
  opacity: ${({ $scrolled }) => ($scrolled ? "1" : ".6")};
  transition: opacity 0.3s ease;
`

const IconContainer = styled.div`
  width: 40px;
  height: 44.05px;
`;

const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
  padding-left: 20px;
`;

const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 180ms ease, border-color 180ms ease, background-color 180ms ease;
  border: 1px solid var(--borderColor);
  width: 42px;
  height: 42px;
  overflow: hidden;
  
  animation: ${fadeIn} 0.4s ease-out forwards;
  
  &:hover {
    background-color: var(--glassBackground);
    transform: translateY(-2px);
    border-color: var(--AccentColor);
  }
  
  &:active {
    transform: scale(0.95);
  }
`

const ProfileWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 2.6em;
  height: 2.6em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--glassBackground);
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

const AdminButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 180ms ease, border-color 180ms ease, background-color 180ms ease;
  border: 1px solid var(--borderColor);
  width: 42px;
  height: 42px;

  animation: ${fadeIn} 0.4s ease-out forwards;

  &:hover {
    background-color: var(--glassBackground);
    transform: translateY(-2px);
    border-color: var(--AccentColor);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const AdminWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AdminIcon = styled(FaCode)`
  font-size: 1.4em;
  color: var(--AccentColor);
`;

function Navbar({ hideLogo = false, hideAccount = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const { t } = useTranslation();
  const domain = import.meta.env.VITE_DOMAIN
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let frame = 0;
    const handleScroll = () => {
      frame = 0;
      const currentScrollY = window.scrollY
      if (currentScrollY > 10 && Math.abs(currentScrollY - lastScrollY) < 8) return;
      
      if (currentScrollY <= 10) {
        setVisible(true)
        setScrolled(false)
      } else if (isAdminPage) {
        setVisible(true)
        setScrolled(true)
      } else {
        if (currentScrollY < lastScrollY) {
          setVisible(true)
        } else {
          setVisible(false)
        }
        setScrolled(true)
      }
      
      lastScrollY = currentScrollY;
    }
    const scheduleScroll = () => {
      if (!frame) frame = requestAnimationFrame(handleScroll);
    };
    window.addEventListener("scroll", scheduleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", scheduleScroll);
      cancelAnimationFrame(frame);
    };
  }, [isAdminPage])

  const handleClickAccount = () => {
    if(isAuthenticated && user){
      navigate(`/u/${user.username}`)
    } else{
      navigate('/login')
    }
  }

  return (
    <NavbarContainer $scrolled={scrolled} $visible={visible}>
      <NavbarContent>
        {!hideLogo && (
          <LogoContainer to="/" aria-label="Posterfy">
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
          {user?.permissions?.includes('admin') && !isAdminPage && (
            <AdminButton onClick={() => navigate('/admin')} title="Admin">
              <AdminWrapper>
                <AdminIcon />
              </AdminWrapper>
            </AdminButton>
          )}
          <LanguageSelector />
          {!hideAccount && (
            <ProfileButton onClick={handleClickAccount} key={user?.avatar || 'guest'} aria-label={user?.username || t('Login')} title={user?.username || t('Login')}>
              <ProfileWrapper>
                {user?.avatar ? (
                  <AvatarImage src={user.avatar} alt="" />
                ) : (
                  <UserIcon />
                )}
              </ProfileWrapper>
            </ProfileButton>
          )}
        </SelectorContainer>
      </NavbarContent>
      <Divider $scrolled={scrolled} />
    </NavbarContainer>
  )
}

export default Navbar
