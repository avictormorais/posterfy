import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { IoClose } from "react-icons/io5";
import Icon from "../components/svgs/icon";
import { useAuth } from "../contexts/AuthContext";
import apiService from "../services/apiService";
import { useTranslation } from 'react-i18next';

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`;

const blurFadeIn = keyframes`
    from {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
    to {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
`;

const blurFadeOut = keyframes`
    from {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
    to {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    z-index: 1000;
    animation: ${props => props.isClosing ? blurFadeOut : blurFadeIn} 0.3s ease-in-out forwards;
`;

const Container = styled.div`
    background-color: var(--backgroundColor);
    width: 35%;
    min-width: 300px;
    border-radius: 15px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: ${props => props.isClosing ? fadeOut : fadeIn} 0.3s ease-in-out forwards;

    @media (max-width: 800px) {
        width: 80%;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    padding-inline: 10px;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    width: 96%;
`;

const Title = styled.h2`
    font-size: 1.25em;
    margin-left: 10px;
    font-weight: bolder;
    margin-right: auto;
`;

const CloseIcon = styled(IoClose)`
    font-size: 1.25em;
    color: var(--textColor);
    cursor: pointer;
    margin: auto;
`;

const Button = styled.div`
    background-color: var(--glassBackground);
    width: 30px;
    height: 30px;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;

    &:hover {
        background-color: var(--AccentColor);
    }
`;

const IconDiv = styled.div`
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`;

const Divisor = styled.div`
    height: 1px;
    background-color: var(--textColor);
    width: 96%;
    margin-block: 15px;
    opacity: 0.1;
`;

const Form = styled.form`
    width: 96%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const Label = styled.label`
    font-size: 0.9em;
    font-weight: bolder;
    color: var(--textColor);
    opacity: 0.8;
`;

const Input = styled.input`
    padding: 12px 15px;
    border: 2px solid var(--textColor);
    border-radius: 8px;
    background-color: var(--backgroundColor);
    color: var(--textColor);
    font-size: 1em;
    transition: border-color 0.3s ease;

    &:focus {
        outline: none;
        border-color: var(--AccentColor);
    }

    &::placeholder {
        color: var(--textColor);
        opacity: 0.5;
    }
`;

const ErrorMessage = styled.span`
    color: #ff6b6b;
    font-size: 0.8em;
    font-weight: bolder;
`;

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 98%;
    margin-top: 20px;
    gap: 10px;
`;

const OutlinedButton = styled.button`
    background: transparent;
    border: 2px solid var(--textColor);
    color: var(--textColor);
    padding: 10px 15px;
    border-radius: 50px;
    cursor: pointer;
    font-weight: bolder;
    font-size: 0.9em;
    transition: all 0.3s ease;

    &:hover {
        background: var(--textColor);
        color: var(--backgroundColor);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const FilledButton = styled.button`
    background: var(--textColor);
    border: none;
    color: var(--backgroundColor);
    border: 2px solid var(--textColor);
    padding: 10px 15px;
    border-radius: 50px;
    cursor: pointer;
    font-weight: bolder;
    font-size: 0.9em;
    transition: all 0.3s ease;

    &:hover {
        background-color: var(--AccentColor);
        border: 2px solid var(--AccentColor);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const SuccessMessage = styled.div`
    color: #51cf66;
    font-size: 0.9em;
    font-weight: bolder;
    text-align: center;
    margin-top: 10px;
`;

export default function EditProfileModal({ isOpen, onClose, onProfileUpdate }) {
    const { user, updateUser } = useAuth();
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        username: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || '',
                username: user.username || ''
            });
        }
    }, [user]);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = t('NameIsRequired');
        }

        if (!formData.username.trim()) {
            newErrors.username = t('UsernameIsRequired');
        } else if (formData.username.length < 3) {
            newErrors.username = t('UsernameMinLength');
        } else if (!/^[a-zA-Z0-9]+$/.test(formData.username)) {
            newErrors.username = t('UsernameFormat');
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }

        if (successMessage) {
            setSuccessMessage('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        setSuccessMessage('');

        try {
            // Update profile (name and username in a single request)
            await apiService.updateUserProfile({
                name: formData.name.trim(),
                username: formData.username.trim()
            });

            // Update local user state
            updateUser({
                ...user,
                name: formData.name.trim(),
                username: formData.username.trim()
            });

            setSuccessMessage(t('ProfileUpdatedSuccessfully'));

            // Call parent callback
            if (onProfileUpdate) {
                onProfileUpdate();
            }

            setTimeout(() => {
                handleClose();
            }, 1500);

        } catch (error) {
            console.error('Profile update failed:', error);

            if (error.message?.includes('409') || error.message?.includes('taken')) {
                setErrors({ username: t('UsernameTaken') });
            } else if (error.message?.includes('400') || error.message?.includes('invalid')) {
                setErrors({ username: t('InvalidUsernameFormat') });
            } else {
                setErrors({ general: t('FailedToUpdateProfile') });
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
            setErrors({});
            setSuccessMessage('');
        }, 300);
    };

    if (!isOpen) return null;

    document.body.style.overflow = 'hidden';

    return (
        <Background isClosing={isClosing}>
            <Container isClosing={isClosing}>
                <TitleContainer>
                    <IconDiv>
                        <Icon width={25} height={25} fill={"var(--textColor)"}/>
                    </IconDiv>
                    <Title>{t('EditProfile')}</Title>
                    <Button onClick={handleClose}>
                        <CloseIcon />
                    </Button>
                </TitleContainer>
                <Divisor />

                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="name">{t('Name')}</Label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder={t('EnterYourName')}
                            disabled={isLoading}
                        />
                        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="username">{t('Username')}</Label>
                        <Input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            placeholder={t('EnterYourUsername')}
                            disabled={isLoading}
                        />
                        {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
                    </FormGroup>

                    {errors.general && <ErrorMessage>{errors.general}</ErrorMessage>}

                    {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}

                    <ButtonsContainer>
                        <OutlinedButton
                            type="button"
                            onClick={handleClose}
                            disabled={isLoading}
                        >
                            {t('Cancel')}
                        </OutlinedButton>
                        <FilledButton
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? t('Saving') : t('SaveChanges')}
                        </FilledButton>
                    </ButtonsContainer>
                </Form>
            </Container>
        </Background>
    );
}