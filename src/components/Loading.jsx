import styled, { keyframes } from 'styled-components';
import Icon from './icons/icon';

const pulse = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
`;

const Container = styled.div`
    background-color: var(--backgroundColor);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PulsingWrapper = styled.div`
    animation: ${pulse} 1.2s infinite;
`;

function Loading() {
    return (
        <Container>
            <PulsingWrapper>
                <Icon fill="white" width="180px" height={'198.23px'} />
            </PulsingWrapper>
        </Container>
    );
}

export default Loading;