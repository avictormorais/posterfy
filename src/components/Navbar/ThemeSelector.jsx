import { useState, useEffect } from "react"
import styled from "styled-components"
import { useTheme } from "../../contexts/ThemeContext"
import { FaSun, FaMoon, FaLeaf, FaFire, FaWater, FaPalette, FaGem, FaMountain } from "react-icons/fa"

const ThemeSelectorContainer = styled.div`
  position: relative;
`

const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid var(--borderColor);
  
  &:hover {
    background-color: var(--glassBackground);
    transform: scale(1.05);
    border-color: var(--textColor);
  }
  
  &:active {
    transform: scale(0.95);
  }
`

const ThemeWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.themeColor};
  
  svg {
    font-size: 1.2em;
    fill: ${props => props.isLight ? '#000000' : '#ffffff'};
  }
`

const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  margin-top: 8px;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(220, 220, 220, 0.05);
  z-index: 50;
  border: 1px solid var(--borderColor);
  top: 60px;
  min-width: 180px;
  
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

const Triangle = styled.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`

const DropdownContent = styled.div`
  padding: 8px 4px;
  padding-inline: 10px;
`

const ThemeOption = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 6px 5px;
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
    transform: translateX(4px);
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
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin-right: 12px;
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
  margin-left: 4px;
  font-weight: 500;
`

function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const { theme, setSpecificTheme } = useTheme()

  const themes = [
    { id: "light", name: "Light", color: "#f0efeb", icon: <FaSun />, isLight: true },
    { id: "dark", name: "Dark", color: "#070815", icon: <FaMoon />, isLight: false },
    { id: "rose", name: "Rose", color: "#232136", icon: <FaFire />, isLight: false },
    { id: "carmesin", name: "Crimson", color: "#1f0c19", icon: <FaGem />, isLight: false },
    { id: "brown", name: "Earth", color: "#1e1516", icon: <FaMountain />, isLight: false },
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
      <ThemeButton onClick={toggleDropdown} aria-label="Select theme">
        <ThemeWrapper themeColor={currentTheme.color} isLight={currentTheme.isLight}>
          {currentTheme.icon}
        </ThemeWrapper>
      </ThemeButton>

      {isOpen && (
        <DropdownMenu className={isClosing ? 'closing' : ''}>
          <Triangle />
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
