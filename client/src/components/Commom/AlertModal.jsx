import styled, { keyframes } from "styled-components";
import { IoClose } from "react-icons/io5";
import Icon from "../svgs/icon";

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
    width: 30%;
    min-width: 250px;
    border-radius: 15px;
    padding: 20px;
    padding-inline: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: ${props => props.isClosing ? fadeOut : fadeIn} 0.3s ease-in-out forwards;

    @media (max-width: 1400px) {
        width: 40%;
    }

    @media (max-width: 1050px) {
        width: 50%;
    }

    @media (max-width: 800px) {
        width: 70%;
    }

    @media (max-width: 450px) {
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

const Paragraph = styled.p`
    font-size: 0.85em;
    margin-bottom: 20px;
    margin-inline: 10px;
    font-weight: bolder;
    opacity: 0.7;
    text-align: justify;
`;

const Image = styled.img`
    width: 96%;
    margin-inline: auto;
    height: auto;
    border-radius: 10px;
    border: 2px solid var(--textColor);
`;

const OutlinedButton = styled.button`
    background: transparent;
    border: 2px solid var(--textColor);
    color: var(--textColor);
    padding: 10px 15px;
    border-radius: 50px;
    cursor: pointer;
    font-weight: bolder;
    padding-inline: 15px;
    font-size: 0.9em;

    &:hover {
        background: var(--textColor);
        color: var(--backgroundColor);
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
    padding-inline: 15px;
    font-size: 0.9em;

    &:hover {
        background-color: var(--AccentColor);
        border: 2px solid var(--AccentColor);
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 98%;
    margin-top: 20px;
    gap: 10px;
`;

const PostImageText = styled(Paragraph)`
    opacity: 0.5;
    font-size: 0.8em;
    margin-top: 8px;
    width: 93%;
    text-align: justify;
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

export default function AlertModal({ title, paragraph, imageURL, postImageText, canClose, confirmText, onConfirm, cancelText, onCancel, isClosing}){

    document.body.style.overflow = 'hidden';

    return(
        <Background 
            isClosing={isClosing}
        >
            <Container isClosing={isClosing}>
                <TitleContainer>
                    <IconDiv>
                        <Icon width={25} height={25} fill={"var(--textColor)"}/>
                    </IconDiv>
                    {title && (
                        <Title>{title}</Title>
                    )}
                    {canClose && (
                        <Button onClick={onCancel}>
                            <CloseIcon />
                        </Button>
                    )}
                </TitleContainer>
                <Divisor />
                {paragraph && (
                    <Paragraph>
                        {paragraph}
                    </Paragraph>
                )}
                {imageURL && (
                    <Image src={imageURL} />
                )}
                {postImageText && (
                    <PostImageText>
                        {postImageText}
                    </PostImageText>
                )}

                {cancelText && confirmText ? (
                    <ButtonsContainer>
                        <OutlinedButton onClick={onCancel}>{cancelText}</OutlinedButton>
                        <FilledButton onClick={onConfirm}>{confirmText}</FilledButton>
                    </ButtonsContainer>
                ) : (
                    <ButtonsContainer style={{ justifyContent: "center" }}>
                        {cancelText ? (
                            <FilledButton onClick={onCancel}>{cancelText}</FilledButton>
                        ) : (
                            <FilledButton onClick={onConfirm}>{confirmText}</FilledButton>
                        )}
                    </ButtonsContainer>
                )}
            </Container>
        </Background>
    )
}