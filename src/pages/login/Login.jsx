import styled from "styled-components";
import Icon from "../../components/svgs/icon"
import { FaGoogle } from "react-icons/fa";
import { SiSpotify } from "react-icons/si";
import Navbar from "../../components/Navbar/Navbar";
import { useTranslation } from 'react-i18next';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    flex-direction: column;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

const TextWelcome = styled.h1`
    color: var(--textColor);
    font-size: 2rem;
    text-align: center;
    font-weight: bolder;
`;

const Paragraph = styled.p`
    color: var(--textColor);
    font-size: 1em;
    text-align: center;
    opacity: 0.7;
    max-width: 500px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`;

const LoginButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: transparent;
    color: var(--textColor);
    border: 1px solid var(--textColor);
    border-radius: 10px;
    padding: 8px 20px;
    cursor: pointer;
    font-weight: bolder;
    font-size: 0.95em;
    transition: all 0.3s ease;
    min-width: 450px;
    margin-bottom: 0;

    &:hover {
        background-color: var(--AccentColor);
        border-color: var(--AccentColor);
    }

    @media (max-width: 500px) {
        min-width: 0px;
        width: 90%;
    }
`;

const ButtonText = styled.p`
    font-size: 1em;
    font-weight: bolder;
    min-width: 200px;
`;

const GoogleIcon = styled(FaGoogle)`
    width: 20px;
    height: 20px;
`;

const SpotifyIcon = styled(SiSpotify)`
    width: 20px;
    height: 20px;
`;

const OrContainer = styled.div`
    display: flex;
    gap: 15px;
    width: 100%;
    margin-block: 2px;
    justify-content: center;
    align-items: center;
    min-width: 450px;
    max-width: 450px;

    @media (max-width: 500px) {
        min-width: 0px;
        width: 90%;
    }
`;

const Line = styled.div`
    height: 1px;
    background-color: var(--textColor);
    opacity: 0.25;
    flex-grow: 1;
`;

const OrText = styled.p`
    color: var(--textColor);
`;

export default function Login(){
    const { t } = useTranslation();

    return(
        <Container>
            <Navbar iconColor="var(--AccentColor)" />
            <Content>
                <Icon fill={'var(--textColor)'} width={"100px"} />
                <TextWelcome>{t('LOGIN_Welcome')}</TextWelcome>
                <Paragraph>{t('LOGIN_JoinCommunity')}</Paragraph>
                
                <ButtonContainer>
                    <LoginButton>
                        <GoogleIcon />
                        <ButtonText>{t('LOGIN_GoogleSignIn')}</ButtonText>
                    </LoginButton>

                    <OrContainer>
                        <Line />
                        <OrText>{t('LOGIN_Or')}</OrText>
                        <Line />
                    </OrContainer>

                    <LoginButton>
                        <SpotifyIcon />
                        <ButtonText>{t('LOGIN_SpotifySignIn')}</ButtonText>
                    </LoginButton>
                </ButtonContainer>
            </Content>
        </Container>
    )
}