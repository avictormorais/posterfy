import { useState, useEffect } from "react"
import styled from "styled-components"
import { useTheme } from "../../contexts/ThemeContext"
import { FaSun, FaMoon, FaChevronUp } from "react-icons/fa"

const ThemeSelectorContainer = styled.div`
  position: relative;
`

const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 9px;
  min-height: 42px;
  padding: 0 11px 0 8px;
  border-radius: 999px;
  background: var(--glassBackground);
  border: 1px solid var(--borderColor);
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--textColor);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  
  &:hover {
    background-color: var(--backgroundColor);
    border-color: var(--AccentColor);
    color: var(--AccentColor);
  }
  
  &:active {
    transform: scale(0.95);
  }
`

const ThemeWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  background: ${props => props.themeColor};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    font-size: 0.85rem;
    fill: ${props => props.isLight ? '#000000' : '#ffffff'};
  }
`

const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  margin-bottom: 10px;
  min-width: 194px;
  padding: 6px;
  background-color: var(--backgroundColor);
  border-radius: 14px;
  box-shadow: 0 16px 34px var(--shadowColor);
  z-index: 50;
  border: 1px solid var(--borderColor);
  bottom: 52px;
  
  animation: dropdownSlideIn 0.2s ease-out forwards;
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
  
  @keyframes dropdownSlideIn {
    from {
      opacity: 0;
      transform: translateY(-10px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  &.closing {
    animation: dropdownSlideOut 0.15s ease-in forwards;
  }
  
  @keyframes dropdownSlideOut {
    from {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateY(-10px) scale(0.95);
    }
  }
`

const DropdownContent = styled.div`
  display: grid;
  gap: 2px;
`

const ThemeOption = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  padding: 9px 10px;
  background: transparent;
  border: none;
  color: var(--textColor);
  font-size: 14px;
  text-align: left;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: translateX(0);

  &:hover {
    background-color: var(--glassBackground);
    color: var(--AccentColor);
  }

  &:hover .theme-preview {
    transform: scale(1.1);
  }
  
  animation: slideInFromLeft 0.3s ease-out forwards;
  opacity: 0;
  transform: translateX(-20px);
  
  @keyframes slideInFromLeft {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  &:nth-child(1) { animation-delay: 0.05s; }
  &:nth-child(2) { animation-delay: 0.1s; }
  &:nth-child(3) { animation-delay: 0.15s; }
  &:nth-child(4) { animation-delay: 0.2s; }
  &:nth-child(5) { animation-delay: 0.25s; }
  &:nth-child(6) { animation-delay: 0.3s; }
`

const ThemePreview = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  svg {
    font-size: 0.8em;
    fill: ${props => props.isLight ? '#000000' : '#ffffff'};
    transition: all 0.2s ease;
  }
`

const ThemeName = styled.span`
  flex: 1;
  margin-left: 0;
  font-weight: 500;
`

const ThemeLabel = styled.span`
  flex: 1;
`

const ThemeChevron = styled(FaChevronUp)`
  font-size: 0.65rem;
  opacity: 0.65;
`

function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const { theme, setSpecificTheme } = useTheme()

  const themes = [
    { id: "light", name: "Light", color: "#f0efeb", icon: <FaSun />, isLight: true },
    { id: "dark", name: "Dark", color: "#070815", icon: <FaMoon />, isLight: false },
    // { id: "rose", name: "Rose", color: "#232136", icon: <FaFire />, isLight: false },
    // { id: "carmesin", name: "Crimson", color: "#1f0c19", icon: <FaGem />, isLight: false },
    // { id: "brown", name: "Earth", color: "#1e1516", icon: <FaMountain />, isLight: false },
  ]

  const currentTheme = themes.find(t => t.id === theme) || themes[0]

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".theme-selector")) {
        closeDropdown()
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  const closeDropdown = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
    }, 150)
  }

  const toggleDropdown = (e) => {
    e.stopPropagation()
    if (isOpen) {
      closeDropdown()
    } else {
      setIsOpen(true)
    }
  }

  const changeTheme = (themeId) => {
    setSpecificTheme(themeId)
    closeDropdown()
  }

  return (
    <ThemeSelectorContainer className="theme-selector">
      <ThemeButton onClick={toggleDropdown} aria-label="Select theme" aria-expanded={isOpen}>
        <ThemeWrapper themeColor={currentTheme.color} isLight={currentTheme.isLight}>
          {currentTheme.icon}
        </ThemeWrapper>
        <ThemeLabel>{currentTheme.name}</ThemeLabel>
        <ThemeChevron aria-hidden="true" />
      </ThemeButton>

      {isOpen && (
        <DropdownMenu className={isClosing ? 'closing' : ''}>
          <DropdownContent>
            {themes.map((themeOption) => (
              <ThemeOption 
                key={themeOption.id} 
                onClick={() => changeTheme(themeOption.id)}
              >
                <ThemePreview 
                  className="theme-preview"
                  color={themeOption.color} 
                  isLight={themeOption.isLight}
                >
                  {themeOption.icon}
                </ThemePreview>
                <ThemeName>{themeOption.name}</ThemeName>
              </ThemeOption>
            ))}
          </DropdownContent>
        </DropdownMenu>
      )}
    </ThemeSelectorContainer>
  )
}

export default ThemeSelector
