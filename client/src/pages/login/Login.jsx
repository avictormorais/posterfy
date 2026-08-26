import { useEffect, useMemo } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Icon from "../../components/svgs/icon"
import { FaGoogle } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import { useTranslation } from 'react-i18next';
import { useAuth } from "../../contexts/AuthContext";
import {
    clearPendingOAuthFlow,
    getPendingFlowReturnUrl,
    readPendingFlow,
    readPendingOAuthFlow,
    rememberPendingOAuthFlow
} from "../../utils/pendingFlow";

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

const LegalNotice = styled.p`
    max-width: 450px;
    margin: 2px 0 0;
    color: var(--textSecondary);
    font-size: 0.78rem;
    line-height: 1.55;
    text-align: center;

    a {
        color: var(--textColor);
        text-underline-offset: 3px;
    }
`;

const GoogleIcon = styled(FaGoogle)`
    width: 20px;
    height: 20px;
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
    const { user, loading, loginWithGoogle } = useAuth();
    const pendingFlow = useMemo(() => {
        const storedFlow = readPendingFlow();
        const oauthFlow = readPendingOAuthFlow();
        return storedFlow && (
            storedFlow.flowId === searchParams.get('resume') ||
            storedFlow.flowId === oauthFlow?.flowId ||
            Boolean(user) ||
            searchParams.has('error')
        ) ? storedFlow : null;
    }, [searchParams, user]);
    const pendingReturnUrl = getPendingFlowReturnUrl(pendingFlow);

    useEffect(() => {
        if (!loading) {
            if (user) {
                const resumePath = pendingFlow
                    ? `${pendingFlow.returnTo}?resume=${encodeURIComponent(pendingFlow.flowId)}`
                    : `/u/${user.username}`;
                if (pendingFlow) clearPendingOAuthFlow(pendingFlow.flowId);
                navigate(resumePath);
                return;
            }

            const loginSuccess = searchParams.get('login');
            if (loginSuccess === 'success' && user) {
                navigate(`/u/${user.username}`);
            }
        }
    }, [user, loading, navigate, searchParams, pendingFlow]);

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

    const handleGoogleLogin = () => {
        if (pendingFlow) rememberPendingOAuthFlow(pendingFlow.flowId);
        loginWithGoogle(pendingReturnUrl || undefined);
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
                        {searchParams.has('error') && <Paragraph role="alert">{t('LOGIN_OAuthFailed')}</Paragraph>}
                        
                        <ButtonContainer>
                            <LoginButton onClick={handleGoogleLogin}>
                                <GoogleIcon />
                                <ButtonText>{t('LOGIN_GoogleSignIn')}</ButtonText>
                            </LoginButton>
                            <LegalNotice>
                                {t('LOGIN_LegalPrefix')} <Link to="/terms">{t('FooterTerms')}</Link>{' '}
                                {t('LOGIN_LegalAnd')} <Link to="/privacy">{t('FooterPrivacy')}</Link>.
                            </LegalNotice>
                        </ButtonContainer>
                    </Column>
                </Row>
            </Content>
        </Container>
    )
}
