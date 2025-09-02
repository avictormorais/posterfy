import styled from "styled-components";
import { useState } from "react";
import Icon from "../../components/svgs/icon"
import { FcGoogle } from "react-icons/fc";
import MinimalistNavbar from "./MinimalistNavbar";
import Loading from "../../components/Commom/Loading";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    
    --element-width: 60%;
    
    @media (max-width: 1300px) {
        --element-width: 75%;
    }

    @media (max-width: 1100px) {
        --element-width: 85%;
    }
    
    @media (max-width: 970px) {
        --element-width: 50%;
    }

    @media (max-width: 750px) {
        --element-width: 70%;
    }

    @media (max-width: 500px) {
        --element-width: 100%;
    }

    @media (max-width: 370px) {
        --element-width: 90%;
    }
`;

const HalfScreen = styled.div`
    width: 50%;
    min-height: 100%;
    overflow: hidden;
    justify-content: center;
    display: flex;
    padding-inline: 80px;
    flex-direction: column;
    transition: background-color 0.6s ease-in-out;
    
    @media (max-width: 970px) {
        width: 100%;
        padding-inline: 40px;
    }
`;

const LeftHalfScreen = styled(HalfScreen)`
    @media (max-width: 970px) {
        display: ${props => props.isSignUp ? 'none' : 'flex'};
    }
`;

const RightHalfScreen = styled(HalfScreen)`
    @media (max-width: 970px) {
        display: ${props => props.isSignUp ? 'flex' : 'none'};
    }
`;

const TextWelcome = styled.h1`
    color: var(--textColor);
    font-size: 1.5rem;
    text-align: center;
    width: 100%;
    font-weight: bolder;
    text-align: left;
    margin-top: 40px;
    margin-bottom: 20px;
`;

const Paragraph = styled.p`
    color: var(--textColor);
    font-size: 0.9em;
    text-align: left;
    width: 100%;
    margin-top: 20px;
    font-weight: bolder;
    opacity: 0.7;
`;

const Button = styled.button`
    background-color: var(--textColor);
    color: var(--backgroundColor);
    border: none;
    border-radius: 10px;
    padding: 12px 16px;
    cursor: pointer;
    font-weight: bolder;
    margin-top: 20px;
    width: 200px;
    font-size: 0.9em;

    &:hover {
        color: var(--AccentColor);
    }
`;

const InputLabel = styled.p`
    color: var(--textColor);
    font-size: 0.9em;
    margin-bottom: 8px;
    font-weight: bolder;
    width: var(--element-width);
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: var(--glassBackground);
    width: var(--element-width);
    margin-bottom: 20px;
`;

const InputField = styled.input`
    border: none;
    border-radius: 10px;
    padding: 9px 16px;
    font-size: 0.9em;
    background-color: transparent;
    color: var(--textColor);
    outline: none;

    &::placeholder {
        color: var(--textColor);
        opacity: 0.7;
    }
`;

const ForgotPassword = styled.p`
    color: var(--textColor);
    font-size: 0.8em;
    cursor: pointer;
    margin-top: 0px;
    width: var(--element-width);
    text-align: left;
    font-weight: bolder;
    opacity: 0.7;
    transition: all 0.3s ease;

    &:hover {
        color: var(--AccentColor);
    }
`;

const SignUp = styled.p`
    color: var(--textColor);
    font-size: 0.8em;
    cursor: pointer;
    margin-top: 20px;
    width: var(--element-width);
    text-align: left;
    font-weight: bolder;
    opacity: 0.7;
    transition: all 0.3s ease;
    display: none;

    &:hover {
        color: var(--AccentColor);
    }

    @media (max-width: 970px) {
        display: flex;
    }
`;

const LoginButton = styled(Button)`
    width: var(--element-width);
    margin-top: 30px;
    border-radius: 50px;

    &:hover {
        background-color: var(--AccentColor);
        color: var(--textColor);
    }
`;

const OrContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    width: var(--element-width);
`;

const OrLine = styled.div`
    flex-grow: 1;
    height: 1px;
    width: 100%;
    background-color: var(--textColor);
    opacity: 0.2;
`;

const OrText = styled.p`
    color: var(--textColor);
    font-size: 0.9em;
    font-weight: bolder;
    margin: 0 10px;
`;

const GoogleDiv = styled.div`
    width: calc(var(--element-width) - 10px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    border: 1px solid var(--textColor);
    border-radius: 50px;
    padding: 6px;
    font-size: 0.7em;
    font-weight: bolder;
    cursor: pointer;
    gap: 10px;

    &:hover {
        background-color: var(--textColor);
        color: var(--backgroundColor);
    }
`;

const GoogleIcon = styled(FcGoogle)`
    width: 20px;
    height: 20px;
    margin-right: 8px;
`;

const AnimatedContent = styled.div`
    opacity: ${props => props.show ? 1 : 0};
    transform: translateX(${props => props.show ? '0' : (props.direction === 'left' ? '-20px' : '20px')});
    transition: all 0.5s ease-in-out;
    display: ${props => props.show ? 'flex' : 'none'};
    flex-direction: column;
    width: 100%;
`;

export default function Login({ }){
    const { t } = useTranslation();
    const [isSignUp, setIsSignUp] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const navigate = useNavigate();

    const toggleMode = () => {
        setIsSignUp(!isSignUp);
    };

    const handleLogin = () => {
        setIsLoading(true);
        setShowLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
                setShowLoading(false);
            }, 1300);
        }, 6000);
    };

    const handleSignUp = () => {
        setIsLoading(true);
        setShowLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
                setShowLoading(false);
            }, 1300);
        }, 6000);
    };

    return(
        <Container>
            {showLoading && <Loading isVisible={isLoading} initialFade={true} />}
            <MinimalistNavbar iconColor={isSignUp ? "var(--textColor)" : "var(--AccentColor)"} />
            <LeftHalfScreen 
                isSignUp={isSignUp}
                style={{ 
                    backgroundColor: isSignUp ? 'var(--AccentColor)' : 'transparent' 
                }}
            >
                <AnimatedContent style={{ alignItems: 'center' }} show={!isSignUp} direction="left">
                    <InputLabel htmlFor="email">{t('LOGIN_Email')}</InputLabel>
                    <InputContainer>
                        <InputField type="email" id="email" />
                    </InputContainer>
                    <InputLabel htmlFor="password">{t('LOGIN_Password')}</InputLabel>
                    <InputContainer>
                        <InputField type="password" id="password" />
                    </InputContainer>
                    <ForgotPassword onClick={() => navigate('/recovery')}>{t('LOGIN_ForgotPassword')}</ForgotPassword>
                    <LoginButton onClick={handleLogin}>{t('LOGIN_Enter')}</LoginButton>
                    <SignUp onClick={toggleMode}>{t('LOGIN_SignUp')}</SignUp>
                    <OrContainer>
                        <OrLine />
                        <OrText>{t('LOGIN_Or')}</OrText>
                        <OrLine />
                    </OrContainer>
                    <GoogleDiv onClick={handleLogin}>
                        <GoogleIcon />
                        {t('LOGIN_GoogleSignIn')}
                        <GoogleIcon style={{ opacity: '0' }} />
                    </GoogleDiv>
                </AnimatedContent>

                <AnimatedContent style={{ alignItems: 'center'}} show={isSignUp} direction="left">
                    <Icon fill={'var(--backgroundColor)'} width={"100px"} />
                    <TextWelcome style={{ textAlign: 'center' }}>{t('LOGIN_Welcome')}</TextWelcome>
                    <Paragraph style={{ width: '70%', textAlign: 'center' }}>{t('LOGIN_JoinCommunity')}</Paragraph>
                    <Paragraph style={{ width: '70%', textAlign: 'center' }}>{t('LOGIN_AlreadyHaveAccount')}</Paragraph>
                    <Button onClick={toggleMode}>{t('LOGIN_Enter')}</Button>
                </AnimatedContent>
            </LeftHalfScreen>
            <RightHalfScreen 
                isSignUp={isSignUp}
                style={{ 
                    backgroundColor: !isSignUp ? 'var(--AccentColor)' : 'transparent',
                }}
            >
                <AnimatedContent style={{ alignItems: 'center' }} show={isSignUp} direction="right">
                    <InputLabel htmlFor="signupName">{t('LOGIN_Email')}</InputLabel>
                    <InputContainer>
                        <InputField type="text" id="signupName" placeholder={t('LOGIN_Email')} />
                    </InputContainer>
                    <InputLabel htmlFor="signupEmail">{t('LOGIN_Email')}</InputLabel>
                    <InputContainer>
                        <InputField type="email" id="signupEmail" placeholder={t('LOGIN_Email')} />
                    </InputContainer>
                    <InputLabel htmlFor="signupPassword">{t('LOGIN_Password')}</InputLabel>
                    <InputContainer>
                        <InputField type="password" id="signupPassword" placeholder={t('LOGIN_Password')} />
                    </InputContainer>
                    <InputLabel htmlFor="confirmPassword">{t('LOGIN_Password')}</InputLabel>
                    <InputContainer>
                        <InputField type="password" id="confirmPassword" placeholder={t('LOGIN_Password')} />
                    </InputContainer>
                    <LoginButton onClick={handleSignUp}>{t('LOGIN_CreateAccount')}</LoginButton>
                    <SignUp onClick={toggleMode}>{t('LOGIN_AlreadyHaveAccount')}</SignUp>
                    <OrContainer>
                        <OrLine />
                        <OrText>{t('LOGIN_Or')}</OrText>
                        <OrLine />
                    </OrContainer>
                    <GoogleDiv onClick={handleSignUp}>
                        <GoogleIcon />
                        {t('LOGIN_GoogleSignIn')}
                        <GoogleIcon style={{ opacity: '0' }} />
                    </GoogleDiv>
                </AnimatedContent>
                
                <AnimatedContent style={{ alignItems: 'flex-start' }} show={!isSignUp} direction="right">
                    <Icon fill={'var(--backgroundColor)'} width={"100px"} />
                    <TextWelcome>{t('LOGIN_Welcome')}</TextWelcome>
                    <Paragraph>{t('LOGIN_EnterCredentials')}</Paragraph>
                    <Paragraph>{t('LOGIN_NewHere')}</Paragraph>
                    <Button style={{ marginRight: 'auto' }} onClick={toggleMode}>{t('LOGIN_CreateAccount')}</Button>
                </AnimatedContent>
            </RightHalfScreen>
        </Container>
    )
}