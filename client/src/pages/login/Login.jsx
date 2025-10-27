import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Icon from "../../components/svgs/icon"
import { FaGoogle } from "react-icons/fa";
import { SiSpotify } from "react-icons/si";
import Navbar from "../../components/Navbar/Navbar";
import { useTranslation } from 'react-i18next';
import { useAuth } from "../../contexts/AuthContext";

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
    padding-top: 20px;
`;

const TextWelcome = styled.h1`
    color: var(--textColor);
    font-size: 2rem;
    text-align: center;
    font-weight: bolder;
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    max-width: 450px;
`;

const Paragraph = styled.p`
    color: var(--textColor);
    font-size: 1em;
    text-align: center;
    opacity: 0.7;
    max-width: 450px;
    width: 100%;
    text-align: left;
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

const NoPersonalDataText = styled.p`
    color: var(--textColor);
    font-size: 0.9em;
    text-align: center;
    opacity: 0.7;
    max-width: 500px;
    font-weight: bolder;
    font-style: italic;
    opacity: 0.35;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const IconContainer = styled.div`
    display: flex;
    margin-right: 200px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.025);
    }

    @media (max-width: 1125px) {
        margin-right: 150px;
    }

    @media (max-width: 900px) {
        margin-right: 70px;
    }

    @media (max-width: 750px) {
        display: none;
    }
`;

const MobileIconContainer = styled.div`
    display: none;
    width: 100%;
    max-width: 450px;
    margin-bottom: 30px;

    @media (max-width: 750px) {
        display: flex;
    }
`;

export default function Login(){
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { user, loading, loginWithGoogle, loginWithSpotify } = useAuth();

    useEffect(() => {
        if (!loading) {
            if (user) {
                navigate('/dashboard');
                return;
            }

            const loginSuccess = searchParams.get('login');
            if (loginSuccess === 'success') {
                navigate('/dashboard');
            }
        }
    }, [user, loading, navigate, searchParams]);

    if (loading) {
        return (
            <Container>
                <Navbar iconColor="var(--AccentColor)" />
                <Content>
                    <Icon fill={'var(--textColor)'} width={"100px"} />
                    <TextWelcome>{t('Loading')}</TextWelcome>
                </Content>
            </Container>
        );
    }

    const handleGoHome = () => {
        navigate('/');
    }

    return(
        <Container>
            <Navbar hideAccount hideLogo iconColor="var(--AccentColor)" />
            <Content>
                <Row>
                    <IconContainer onClick={handleGoHome}>
                        <Icon fill={'var(--textColor)'} width={"25vw"} />
                    </IconContainer>
                    <Column>
                        <MobileIconContainer>
                            <Icon fill={'var(--textColor)'} width={"90px"} />
                        </MobileIconContainer>
                        <TextWelcome>{t('LOGIN_Welcome')}</TextWelcome>
                        <Paragraph>{t('LOGIN_JoinCommunity')}</Paragraph>
                        
                        <ButtonContainer>
                            <LoginButton onClick={loginWithGoogle}>
                                <GoogleIcon />
                                <ButtonText>{t('LOGIN_GoogleSignIn')}</ButtonText>
                            </LoginButton>

                            <OrContainer>
                                <Line />
                                <OrText>{t('LOGIN_Or')}</OrText>
                                <Line />
                            </OrContainer>

                            <LoginButton onClick={loginWithSpotify}>
                                <SpotifyIcon />
                                <ButtonText>{t('LOGIN_SpotifySignIn')}</ButtonText>
                            </LoginButton>
                        </ButtonContainer>
                    </Column>
                </Row>
            </Content>
        </Container>
    )
}