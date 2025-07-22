import { useState, useEffect } from "react"
import styled from "styled-components"
import ReactCountryFlag from "react-country-flag"
import { useTranslation } from "react-i18next"
import { trackLanguageChange } from "../../services/analytics"

const LanguageSelectorContainer = styled.div`
  position: relative;
`

const FlagButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid var(--borderColor);
  
  &:hover {
    background-color: var(--glassBackground);
    transform: scale(1.05);
    border-color: var(--textColor);
  }
  
  &:active {
    transform: scale(0.95);
  }
`

const FlagWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  
  & * {
    border-radius: 50% !important;
    width: 2.6em !important;
    height: 2.6em !important;
    object-fit: cover !important;
    display: block !important;
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

const LanguageOption = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 10px;
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

  &:hover svg {
    transform: scale(1.2);
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
`

const LanguageName = styled.span`
  margin-left: 8px;
`

const FlagIcon = styled(ReactCountryFlag)`
  margin-right: 8px;
  transform: scale(1.2);
  border-radius: 100%;
`

function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const { i18n } = useTranslation()

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage)
    }

    const handleClickOutside = (e) => {
      if (!e.target.closest(".language-selector")) {
        closeDropdown()
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [i18n])

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

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem("language", lang)
    closeDropdown()
    trackLanguageChange(lang)
  }

  const getCurrentFlag = () => {
    switch (i18n.language) {
      case "pt":
        return "BR"
      case "es":
        return "ES"
      case "zh":
        return "CN"
      default:
        return "US"
    }
  }

  return (
    <LanguageSelectorContainer className="language-selector">
      <FlagButton onClick={toggleDropdown} aria-label="Select language">
        <FlagWrapper>
          <ReactCountryFlag 
            countryCode={getCurrentFlag()} 
            svg 
            style={{
              width: '2.8em',
              height: '2.8em',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
        </FlagWrapper>
      </FlagButton>

      {isOpen && (
        <DropdownMenu className={isClosing ? 'closing' : ''}>
          <Triangle />
          <DropdownContent>
            <LanguageOption onClick={() => changeLanguage("pt")}>
              <FlagIcon countryCode="BR" svg 
                style={{
                  width: '1.5em',
                  height: '1.5em',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }} />
                <LanguageName>Português</LanguageName>
            </LanguageOption>
            <LanguageOption onClick={() => changeLanguage("en")}>
              <FlagIcon countryCode="US" svg
                style={{
                  width: '1.5em',
                  height: '1.5em',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }} />
              <LanguageName>English</LanguageName>
            </LanguageOption>
            <LanguageOption onClick={() => changeLanguage("es")}>
              <FlagIcon countryCode="ES" svg
                style={{
                  width: '1.5em',
                  height: '1.5em',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }} />
              <LanguageName>Español</LanguageName>
            </LanguageOption>
            <LanguageOption onClick={() => changeLanguage("zh")}>
              <FlagIcon countryCode="CN" svg
                style={{
                  width: '1.5em',
                  height: '1.5em',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginRight: '8px'
                }} />
                <LanguageName>中文</LanguageName>
            </LanguageOption>
          </DropdownContent>
        </DropdownMenu>
      )}
    </LanguageSelectorContainer>
  )
}

export default LanguageSelector
