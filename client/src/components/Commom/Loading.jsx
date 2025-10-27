import styled, { keyframes } from 'styled-components';
import Icon from '../svgs/icon';
import { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const pulse = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
`;

const expandAndFade = keyframes`
    0% { 
        transform: scale(1); 
        opacity: 1; 
    }
    100% { 
        transform: scale(2); 
        opacity: 0; 
    }
`;

const fadeIn = keyframes`
    0% { 
        opacity: 0; 
    }
    100% { 
        opacity: 1; 
    }
`;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--backgroundColor);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    opacity: ${props => props.fadeOutContainer ? 0 : 1};
    pointer-events: ${props => props.isVisible ? 'auto' : 'none'};
    transition: opacity 0.5s ease-out;
    animation: ${props => props.initialFade ? fadeIn : 'none'} 0.5s ease-in;
`;

const IconContainer = styled.div`
    animation: ${props => {
        if (props.isExiting) {
            return expandAndFade;
        }
        return pulse;
    }} ${props => props.isExiting ? '0.8s' : '0s'} ${props => props.isExiting ? 'ease-out forwards' : 'infinite'};
`;

function Loading({ isVisible, initialFade = false }) {
    const { theme } = useTheme();
    const [isExiting, setIsExiting] = useState(false);
    const [fadeOutContainer, setFadeOutContainer] = useState(false);

    useEffect(() => {
        if (!isVisible && !isExiting) {
            setIsExiting(true);
        
            setTimeout(() => {
                setFadeOutContainer(true);
            }, 800);
        }
    }, [isVisible, isExiting]);

    return (
        <Container isVisible={isVisible} fadeOutContainer={fadeOutContainer} initialFade={initialFade}>
            <IconContainer isExiting={isExiting}>
                <Icon fill={'var(--textColor)'} width="100px" height={'118.23px'} />
            </IconContainer>
        </Container>
    );
}

export default Loading;