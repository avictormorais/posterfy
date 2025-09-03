import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import IconQuestion from "../../components/svgs/IconQuestion";
import KanyeImg from '../../assets/kanye.png'
import Runaway from '../../assets/runaway.mp3'
import { useTranslation } from 'react-i18next';

const ErrorPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [clickCount, setClickCount] = useState(0);
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleOnClick = () => {
    setClickCount(clickCount + 1)
    console.log(clickCount)
  }

  const handleKanyeClick = () => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      if (audioRef.current.paused) {
        audioRef.current.play();
        setPlaying(true);
      } else {
        audioRef.current.pause();
        setPlaying(false);
      }
    }
  };

  return (
    <Container playing={playing}>
        <IconQuestion width={'150px'} height={'150px'} fillHeart={playing ? '#edcd6b' : 'var(--textColor)'} fillQuestion={playing ? '#edcd6b' : 'var(--textColor)'} pulse={true} onClick={handleOnClick}/>
        <ContainerSteps>
          <Step playing={playing} active={clickCount >= 1}/>
          <Step playing={playing} active={clickCount >= 2}/>
          <Step playing={playing} active={clickCount >= 3}/>
        </ContainerSteps>
        <ErrorMessage>{t('errorTitle')}</ErrorMessage>
        <ErrorParagraph>{t('errorMessage')}</ErrorParagraph>
        <BackButton playing={playing} onClick={() => navigate("/")}>{t('errorBackToHome')}</BackButton>

        {clickCount >= 3 && (
          <>
            <Kanye src={KanyeImg} alt="Kanye" onClick={handleKanyeClick} />
            <audio ref={audioRef} src={Runaway} />
          </>
        )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${props => props.playing ? '#d12741' : 'var(--backgroundColor)'};
  color: ${props => props.playing ? '#edcd6b' : 'var(--TextColor)'};
`;

const ErrorMessage = styled.h1`
  font-size: 1.5em;
  color: var(--TextColor);
  margin-top: 25px;
`;

const ErrorParagraph = styled.p`
  font-size: 1em;
  color: var(--TextColor);
  margin: 20px 0;
  opacity: 0.7;
`;

const BackButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: ${props => props.playing ? '#d12741' : 'var(--backgroundColor)'};
  background-color: ${props => props.playing ? '#edcd6b' : 'var(--textColor)'};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 300px;
  font-weight: bolder;
  border-radius: 50px;

  &:hover {
    background-color: var(--AccentColor);
  }
`;

const Kanye = styled.img`
  width: 200px;
  height: auto;
  margin-top: 20px;
  position: fixed;
  transform: rotate(-25deg) translate(200%, 200%);
  bottom: -50px;
  right: -50px;
  cursor: pointer;
  animation: slideIn 1s ease-out forwards;

  @keyframes slideIn {
    from {
      transform: rotate(-25deg) translate(200%, 200%);
    }
    to {
      transform: rotate(-25deg) translate(0, 0);
    }
  }
`;

const ContainerSteps = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  margin-top: 25px;
`;

const Step = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${props => props.playing ? '#edcd6b' : props.active ? 'var(--AccentColor)' : 'var(--textColor)'};
  border-radius: 50%;
  margin: 0 5px;
`;

export default ErrorPage;