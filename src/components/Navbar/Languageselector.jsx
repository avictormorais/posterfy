import styled from 'styled-components';
import ReactCountryFlag from "react-country-flag";
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const FlagsContainer = styled.div`
    display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    right: calc(10% - 10px);
    gap: 2px;
    top: 10%;
    background-color: #000000c3;
    padding: 10px;
    border-radius: 10px;
    z-index: 1000;
`;

const StyledFlag = styled(ReactCountryFlag)`
    width: 70px;
    height: 70px;

    &:hover {
        transform: scale(1.1);
        transition: transform 0.3s;
    }
`;

const Flag = styled(ReactCountryFlag)`
    position: fixed;
    height: 70px;
    right: 10%;
    border-radius: 5px;
    overflow: hidden;

    &:hover {
        transform: scale(1.1);
        transition: transform 0.3s;
    }
`;

const Triangle = styled.div`
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #000000c3;
    position: fixed;
    right: calc(10%);
    top: 8%;
`;

function LanguageSelector() {
    const [isVisible, setIsVisible] = useState(false);
    const { i18n } = useTranslation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang);
        setIsVisible(false);
    };

    return (
        <>
            <Flag 
                countryCode={i18n.language === 'pt' ? 'BR' : i18n.language === 'en' ? 'US' : i18n.language === 'es' ? 'ES' : 'US'}
                style={{ width: '2em', height: '2em' }} 
                svg 
                onClick={handleClick}
            />
            <FlagsContainer isVisible={isVisible}>
                <Triangle />
                <StyledFlag countryCode="BR" style={{ width: '2em', height: '2em' }} onClick={() => changeLanguage('pt')} svg />
                <StyledFlag countryCode="US" style={{ width: '2em', height: '2em' }} onClick={() => changeLanguage('en')} svg />
                <StyledFlag countryCode="ES" style={{ width: '2em', height: '2em' }} onClick={() => changeLanguage('es')} svg />
            </FlagsContainer>
        </>
    );
}

export default LanguageSelector;
