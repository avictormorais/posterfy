import styled from "styled-components";
import { useState } from "react";
import MinimalistNavbar from "./MinimalistNavbar";
import Loading from "../../components/Commom/Loading";
import ForgotPasswordSVG from "../../components/svgs/Login/ForgotPasswordSVG";
import SetPasswordSVG from "../../components/svgs/Login/SetPasswordSVG";
import OTPCodeSVG from "../../components/svgs/Login/OTPCodeSVG";
import { FaCheck } from "react-icons/fa";
import Login from "./Login"
import { useTranslation } from 'react-i18next';

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
        display: ${props => props.currentStep === 2 ? 'none' : 'flex'};
    }
`;

const RightHalfScreen = styled(HalfScreen)`
    @media (max-width: 970px) {
        display: ${props => props.currentStep === 2 ? 'flex' : 'none'};
    }
`;

const TextWelcome = styled.h1`
    color: var(--textColor);
    font-size: 1.5rem;
    text-align: center;
    width: 100%;
    font-weight: bolder;
    text-align: center;
    margin-block: 40px;
`;

const Paragraph = styled.p`
    color: var(--textColor);
    font-size: 0.9em;
    text-align: center;
    width: 100%;
    margin-block: 20px;
    font-weight: bolder;
    opacity: 0.7;
`;

const SubParagraph = styled.p`
    color: var(--textColor);
    font-size: 0.8em;
    text-align: center;
    width: 100%;
    font-weight: bolder;
    opacity: 0.5;
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
    border: 2px solid ${props => {
        if (props.isValid === true) return 'var(--AccentColor)';
        if (props.isValid === false) return '#ff6b6b';
        return 'transparent';
    }};
`;

const InputField = styled.input`
    border: none;
    border-radius: 10px;
    padding: 9px 16px;
    font-size: 0.9em;
    background-color: transparent;
    color: var(--textColor);
    outline: none;
    opacity: ${props => props.disabled ? 0.5 : 1};
    cursor: ${props => props.disabled ? 'not-allowed' : 'text'};

    &::placeholder {
        color: var(--textColor);
        opacity: 0.7;
    }

    &:disabled {
        pointer-events: none;
    }
`;

const BackButton = styled.p`
    color: var(--textColor);
    font-size: 0.8em;
    cursor: pointer;
    margin-top: 20px;
    width: var(--element-width);
    text-align: left;
    font-weight: bolder;
    opacity: 0.7;
    transition: all 0.3s ease;

    &:hover {
        color: var(--AccentColor);
    }
`;

const CodeInputContainer = styled.div`
    display: flex;
    gap: 10px;
    width: var(--element-width);
    justify-content: center;
    margin-bottom: 20px;
`;

const CodeInput = styled.input`
    width: 50px;
    height: 50px;
    border: 2px solid var(--textColor);
    border-radius: 10px;
    text-align: center;
    font-size: 1.2em;
    font-weight: bold;
    background-color: transparent;
    color: var(--textColor);
    outline: none;
    opacity: ${props => props.disabled ? 0.5 : 1};
    cursor: ${props => props.disabled ? 'not-allowed' : 'text'};
    transition: all 0.7s ease;
    border-color: ${props => props.filled ? 'var(--AccentColor)' : 'var(--textColor)'};

    &:disabled {
        pointer-events: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &[type=number] {
        -moz-appearance: textfield;
        appearance: textfield;
    }
`;

const LoginButton = styled(Button)`
    width: var(--element-width);
    margin-top: 30px;
    border-radius: 50px;
    transition: all 0.5s;
    opacity: ${props => props.disabled ? 0.5 : 1};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    pointer-events: ${props => props.disabled ? 'none' : 'auto'};

    &:hover {
        background-color: ${props => props.disabled ? 'var(--textColor)' : 'var(--AccentColor)'};
        color: ${props => props.disabled ? 'var(--backgroundColor)' : 'var(--textColor)'};
    }
`;

const StepIndicator = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
    width: var(--element-width);
`;

const Step = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => props.active ? 'var(--AccentColor)' : 'var(--textColor)'};
    opacity: ${props => props.active ? 1 : 0.3};
    transition: all 0.3s ease;
`;

const AnimatedContent = styled.div`
    opacity: ${props => props.show ? 1 : 0};
    transform: translateX(${props => props.show ? '0' : (props.direction === 'left' ? '-20px' : '20px')});
    transition: all 0.5s ease-in-out;
    display: ${props => props.show ? 'flex' : 'none'};
    flex-direction: column;
    width: 100%;
`;

const CentralizedContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const DoneIcon = styled(FaCheck)`
    font-size: 5em;
    fill: var(--AccentColor);
`;

const GoNowButton = styled(Button)`
    margin-top: 30px;
    border-radius: 50px;
    padding-inline: 25px;

    &:hover {
        background-color: var(--AccentColor);
        color: var(--textColor);
    }
`;

const ValidationMessage = styled.p`
    color: ${props => props.isValid ? 'var(--AccentColor)' : '#ff6b6b'};
    font-size: 0.75em;
    margin-top: -15px;
    margin-bottom: 15px;
    font-weight: 500;
    opacity: 0.8;
    width: var(--element-width);
`;

export default function PasswordRecovery(){
    const { t } = useTranslation();
    const [currentStep, setCurrentStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [code, setCode] = useState(['', '', '', '']);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [countdown, setCountdown] = useState(5);

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isCodeComplete = () => {
        return code.every(digit => digit !== '');
    };

    const isPasswordValid = () => {
        return newPassword.length >= 6;
    };

    const doPasswordsMatch = () => {
        return newPassword === confirmPassword && newPassword.length > 0;
    };

    const isEmailValid = isValidEmail(email);
    const isCodeValid = isCodeComplete();
    const arePasswordsValid = isPasswordValid() && doPasswordsMatch();

    const handleEmailSubmit = () => {
        setIsLoading(true);
        setShowLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setCurrentStep(2);
            setTimeout(() => {
                setShowLoading(false);
            }, 1300);
        }, 2000);
    };

    const handleCodeSubmit = () => {
        setIsLoading(true);
        setShowLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setCurrentStep(3);
            setTimeout(() => {
                setShowLoading(false);
            }, 1300);
        }, 2000);
    };

    const handlePasswordSubmit = () => {
        setIsLoading(true);
        setShowLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setCurrentStep(4);
            setTimeout(() => {
                setShowLoading(false);
            }, 1300);
            setCountdown(5);

            const countdownInterval = setInterval(() => {
                setCountdown(prev => {
                    if (prev === 1) {
                        clearInterval(countdownInterval);
                        setTimeout(() => {
                            setIsLoading(true);
                            setShowLoading(true);
                            setTimeout(() => {
                                setIsLoading(false);
                                setCurrentStep(5);
                                setTimeout(() => {
                                    setShowLoading(false);
                                }, 1300);
                            }, 1000);
                        }, 500);
                    }
                    return prev - 1;
                });
            }, 1000);
        }, 2000);
    };

    const handleCodeChange = (index, value) => {
        if (value.length > 1) return;
        if (value && !/^\d$/.test(value)) return;
        
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
        
        if (value && index < 3) {
            const nextInput = document.getElementById(`code-${index + 1}`);
            if (nextInput) nextInput.focus();
        }
    };

    const handleCodePaste = (e) => {
        e.preventDefault();
        const pastedText = e.clipboardData.getData('text');
        
        const digits = pastedText.replace(/\D/g, '').slice(0, 4);
        
        if (digits.length > 0) {
            const newCode = ['', '', '', ''];
            for (let i = 0; i < digits.length && i < 4; i++) {
                newCode[i] = digits[i];
            }
            setCode(newCode);
            
            const nextIndex = Math.min(digits.length, 3);
            const nextInput = document.getElementById(`code-${nextIndex}`);
            if (nextInput) nextInput.focus();
        }
    };

    const handleBackToLogin = () => {
        setIsLoading(true);
        setShowLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setCurrentStep(5);
            setTimeout(() => {
                setShowLoading(false);
            }, 1300);
        }, 1000);
    };

    const handleGoToRecovery = () => {
        setCode(['', '', '', '']);
        setEmail('');
        setNewPassword('');
        setConfirmPassword('');
        setIsLoading(true);
        setShowLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setCurrentStep(1);
            setTimeout(() => {
                setShowLoading(false);
            }, 1300);
        }, 1000);
    };

    return(
        <>
            {showLoading && <Loading isVisible={isLoading} initialFade={true} />}
            {currentStep === 5 ? (
                <Login onClickRecovery={handleGoToRecovery} />
            ): (
                <Container>
                    <MinimalistNavbar iconColor={currentStep === 2 ? "var(--textColor)" : "var(--AccentColor)"} />

                    {currentStep === 4 ? (
                        <CentralizedContent>
                            <DoneIcon/>
                            <TextWelcome>{t('RECOVERY_Success')}</TextWelcome>
                            <Paragraph>{t('RECOVERY_PasswordChanged')}</Paragraph>
                            <SubParagraph>{t('RECOVERY_Redirecting', { countdown })}</SubParagraph>
                            <GoNowButton onClick={handleBackToLogin}>{t('RECOVERY_BackToLogin')}</GoNowButton>
                        </CentralizedContent>
                    ) : (
                        <>
                            <LeftHalfScreen 
                                currentStep={currentStep}
                                style={{ 
                                    backgroundColor: currentStep === 2 ? 'var(--AccentColor)' : 'transparent' 
                                }}
                            >
                                <AnimatedContent style={{ alignItems: 'center' }} show={currentStep === 1} direction="left">
                                    <StepIndicator>
                                        <Step active={currentStep >= 1} />
                                        <Step active={currentStep >= 2} />
                                        <Step active={currentStep >= 3} />
                                    </StepIndicator>
                                    <TextWelcome>{t('RECOVERY_AccessRecovery')}</TextWelcome>
                                    <InputLabel htmlFor="email">{t('RECOVERY_EnterEmail')}</InputLabel>
                                    <InputContainer>
                                        <InputField 
                                            type="email" 
                                            id="email" 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder={t('RECOVERY_EnterEmail')}
                                            autoComplete="off"
                                            autoCorrect="off"
                                            autoCapitalize="off"
                                            spellCheck="false"
                                        />
                                    </InputContainer>
                                    <LoginButton 
                                        disabled={!isEmailValid} 
                                        onClick={isEmailValid ? handleEmailSubmit : undefined}
                                    >
                                        {t('RECOVERY_SendCode')}
                                    </LoginButton>
                                    <BackButton onClick={handleBackToLogin}>{t('RECOVERY_BackToLogin')}</BackButton>
                                </AnimatedContent>

                                <AnimatedContent style={{ alignItems: 'center' }} show={currentStep === 3} direction="left">
                                    <StepIndicator>
                                        <Step active={currentStep >= 1} />
                                        <Step active={currentStep >= 2} />
                                        <Step active={currentStep >= 3} />
                                    </StepIndicator>
                                    <TextWelcome>{t('RECOVERY_NewPassword')}</TextWelcome>
                                    <InputLabel htmlFor="newPassword">{t('RECOVERY_EnterNewPassword')}</InputLabel>
                                    <InputContainer>
                                        <InputField 
                                            type="password" 
                                            id="newPassword" 
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            placeholder={t('RECOVERY_EnterNewPassword')}
                                            autoComplete="new-password"
                                            autoCorrect="off"
                                            autoCapitalize="off"
                                            spellCheck="false"
                                        />
                                    </InputContainer>
                                    <InputLabel htmlFor="confirmNewPassword">{t('RECOVERY_RepeatNewPassword')}</InputLabel>
                                    <InputContainer>
                                        <InputField 
                                            type="password" 
                                            id="confirmNewPassword" 
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder={t('RECOVERY_RepeatNewPassword')}
                                            autoComplete="new-password"
                                            autoCorrect="off"
                                            autoCapitalize="off"
                                            spellCheck="false"
                                            disabled={!isPasswordValid()}
                                        />
                                    </InputContainer>
                                    <LoginButton 
                                        disabled={!arePasswordsValid} 
                                        onClick={arePasswordsValid ? handlePasswordSubmit : undefined}
                                    >
                                        {t('RECOVERY_ChangePassword')}
                                    </LoginButton>
                                </AnimatedContent>

                                <AnimatedContent style={{ alignItems: 'center' }} show={currentStep === 2} direction="left">
                                    <OTPCodeSVG width={"70%"} />
                                    <Paragraph style={{ width: '70%', textAlign: 'center' }}>
                                        {t('RECOVERY_VerifyEmail')}
                                    </Paragraph>
                                </AnimatedContent>
                            </LeftHalfScreen>

                            <RightHalfScreen 
                                currentStep={currentStep}
                                style={{ 
                                    backgroundColor: currentStep === 2 ? 'transparent' : 'var(--AccentColor)',
                                }}
                            >
                                <AnimatedContent style={{ alignItems: 'center' }} show={currentStep === 2} direction="right">
                                    <StepIndicator>
                                        <Step active={currentStep >= 1} />
                                        <Step active={currentStep >= 2} />
                                        <Step active={currentStep >= 3} />
                                    </StepIndicator>
                                    <TextWelcome>{t('RECOVERY_EnterCode')}</TextWelcome>
                                    <Paragraph>{t('RECOVERY_EnterCodeDescription')}</Paragraph>
                                    <CodeInputContainer>
                                        {code.map((digit, index) => (
                                            <CodeInput
                                                key={index}
                                                id={`code-${index}`}
                                                type="number"
                                                pattern="[0-9]"
                                                inputMode="numeric"
                                                maxLength="1"
                                                value={digit}
                                                onChange={(e) => handleCodeChange(index, e.target.value)}
                                                onPaste={handleCodePaste}
                                                autoComplete="off"
                                                autoCorrect="off"
                                                autoCapitalize="off"
                                                spellCheck="false"
                                                filled={digit !== ''}
                                            />
                                        ))}
                                    </CodeInputContainer>
                                    <LoginButton 
                                        disabled={!isCodeValid} 
                                        onClick={isCodeValid ? handleCodeSubmit : undefined}
                                    >
                                        {t('RECOVERY_Complete')}
                                    </LoginButton>
                                </AnimatedContent>
                                
                                <AnimatedContent style={{ alignItems: 'flex-start' }} show={currentStep !== 2} direction="right">
                                    <CentralizedContent>
                                        {currentStep === 1 && <ForgotPasswordSVG width={'70%'} style={{ marginInline: 'auto' }} />}
                                        {currentStep === 3 && <SetPasswordSVG width={'70%'} style={{ marginInline: 'auto' }} />}
                                    </CentralizedContent>
                                    <Paragraph>
                                        {currentStep === 1 && t('RECOVERY_Steps')}
                                        {currentStep === 3 && t('RECOVERY_AlmostThere')}
                                    </Paragraph>
                                </AnimatedContent>
                            </RightHalfScreen>
                        </>
                    )}
                </Container>
            )}
        </>
    )
}