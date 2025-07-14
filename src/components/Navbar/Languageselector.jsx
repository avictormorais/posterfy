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
  transition: background-color 0.2s;
  border: 1px solid rgba(255, 255, 255, .8);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
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
    width: 2.5em !important;
    height: 2.5em !important;
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
  border: 1px solid rgba(255, 255, 255, 0.05);
  top: 60px;
`

const Triangle = styled.div`
  position: absolute;
  top: -15px;
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
  color: white;
  font-size: 14px;
  text-align: left;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.025);
  }

  &:hover svg {
    transform: scale(1.2);
  }
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
  const { i18n } = useTranslation()

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage)
    }

    const handleClickOutside = (e) => {
      if (!e.target.closest(".language-selector")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [i18n])

  const toggleDropdown = (e) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem("language", lang)
    setIsOpen(false)
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
              width: '2.5em',
              height: '2.5em',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
        </FlagWrapper>
      </FlagButton>

      {isOpen && (
        <DropdownMenu>
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
