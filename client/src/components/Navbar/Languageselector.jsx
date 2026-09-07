import { useState, useEffect } from "react"
import styled from "styled-components"
import ReactCountryFlag from "react-country-flag"
import { useTranslation } from "react-i18next"
import { trackLanguageChange } from "../../services/analytics"

const LanguageSelectorContainer = styled.div`
  position: relative;
  width: 70px;
`

const FlagButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  box-sizing: border-box;
  padding: 0 10px 0 6px;
  border-radius: 999px;
  background: var(--glassBackground);
  border: 2px solid var(--borderColor);
  color: var(--textColor);
  cursor: pointer;
  transition: all 0.3s ease;
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

const FlagWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 30px;
  height: 30px;
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
  margin-top: 10px;
  min-width: 194px;
  padding: 6px;
  background-color: var(--backgroundColor);
  border-radius: 14px;
  box-shadow: 0 16px 34px var(--shadowColor);
  z-index: 50;
  border: 1px solid var(--borderColor);
  top: 52px;
  
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

const LanguageOption = styled.button`
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
  border-radius: 9px;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: translateX(0);

  &:hover {
    background-color: var(--glassBackground);
    color: var(--AccentColor);
  }

  &:hover svg {
    transform: scale(1.08);
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
  flex: 1;
  margin-left: 0;
  font-weight: 700;
`

const FlagIcon = styled(ReactCountryFlag)`
  flex: 0 0 auto;
  transform: scale(1.05);
  border-radius: 100%;
`

const LanguageCode = styled.span`
  color: var(--textSecondary);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.05em;
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

  const getCurrentLanguageCode = () => (i18n.language || 'en').slice(0, 2).toUpperCase()

  return (
    <LanguageSelectorContainer className="language-selector">
      <FlagButton onClick={toggleDropdown} aria-label="Select language" aria-expanded={isOpen}>
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
        <LanguageCode>{getCurrentLanguageCode()}</LanguageCode>
      </FlagButton>

      {isOpen && (
        <DropdownMenu className={isClosing ? 'closing' : ''}>
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
                <LanguageCode>PT</LanguageCode>
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
              <LanguageCode>EN</LanguageCode>
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
              <LanguageCode>ES</LanguageCode>
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
                <LanguageCode>ZH</LanguageCode>
            </LanguageOption>
          </DropdownContent>
        </DropdownMenu>
      )}
    </LanguageSelectorContainer>
  )
}

export default LanguageSelector
