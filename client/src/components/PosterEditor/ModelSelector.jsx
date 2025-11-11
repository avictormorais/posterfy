import styled, { keyframes } from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import Standart from "../svgs/PostersModels/Standart";
import Basic from "../svgs/PostersModels/Basic";
import FullCover from "../svgs/PostersModels/FullCover";
import Frame from "../svgs/PostersModels/Frame";
import { useTranslation } from "react-i18next";
import { trackEvent } from "../../services/analytics";

const DivBack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: min-content;
  margin-top: 25px;
  cursor: pointer;
  width: 80%;
  margin-inline: auto;
`;

const ArrowBack = styled(IoArrowBack)`
  font-size: 2em;
  margin-right: 5px;
  cursor: pointer;
`;

const TextBack = styled.h3`
  font-size: 1.3em;
  font-weight: bold;
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  animation: ${fadeInUp} 0.7s cubic-bezier(0.23, 1, 0.32, 1);
  margin-top: 40px;

  svg {
    transition: transform 0.2s ease-in-out;
    width: 200px;
    height: auto;
  }

  @media (max-width: 500px) {
    svg {
      width: 120px;
      min-width: 0;
    }
  }

  :hover {
    cursor: pointer;
  }

  :hover > svg {
    transform: scale(1.05);
  }

  @media (max-width: 1100px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px 0;
    justify-items: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 18px;
  }
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: ${fadeInUp} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  animation-delay: ${props => props.delay || 0}s;

  @media (max-width: 600px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 18px;
  }

  @media (max-width: 500px) {
    svg {
      width: 120px;
      margin-inline: auto;
    }
  }
`;

const OptionTitle = styled.h3`
  font-size: 1.3rem;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  opacity: 0;
  animation: ${fadeInUp} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  animation-delay: ${props => (props.delay || 0) + 0.15}s;

  @media (max-width: 600px) {
    margin-top: 0;
    margin-bottom: 0;
    text-align: left;
    font-size: 1.1rem;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const TitleModels = styled.h1`
  width: 80%;
  margin-inline: auto;
  margin-top: 20px;
`;

const ModelsText = styled.p`
    font-size: .9rem;
    margin-top: 10px;
    width: 80%;
    margin-inline: auto;
    font-weight: bolder;
    opacity: 0.75;

    @media (max-width: 350px) {
        display: none;
    }
`;

export default function ModelSelector({ onSelectModel, onBack }) {
    const { t } = useTranslation();

    const BasicParams = {
        marginCover: -500,
        marginBackground: -700,
        showTracklist: false,
        marginTop: 200,
    };
    const FrameParams = {
        marginCover: 160,
        useFade: false,
        marginTop: 20,
    };
    const FullCoverParams = {
        marginCover: -1100,
        marginBackground: -1200,
        useFade: false
    };
    const StandartParams = {
        marginCover: 0,
        marginBackground: 0,
        showTracklist: true,
        useFade: true,
    };

    function handleSelect(model, params) {
        trackEvent('select_model', 'ModelSelector', model);
        if (onSelectModel) onSelectModel(model, params);
    }

    const delays = [0, 0.08, 0.16, 0.24];
    return(
        <>
            <DivBack onClick={onBack}>
                <ArrowBack/>
                <TextBack>{t('GoBack')}</TextBack>
            </DivBack>
            <TitleModels style={{animation: 'fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)', opacity: 1}}>{t('ModelTitle')}</TitleModels>
            <ModelsText style={{animation: 'fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)', opacity: 1}}>{t('ModelText')}</ModelsText>
            <Container>
                <OptionContainer delay={delays[0]} onClick={() => handleSelect('standart', StandartParams)}>
                    <Standart width={200} />
                    <OptionTitle delay={delays[0]}>Standard</OptionTitle>
                </OptionContainer>
                <OptionContainer delay={delays[1]} onClick={() => handleSelect('frame', FrameParams)}>
                    <Frame width={200} />
                    <OptionTitle delay={delays[1]}>Frame</OptionTitle>
                </OptionContainer>
                <OptionContainer delay={delays[2]} onClick={() => handleSelect('basic', BasicParams)}>
                    <Basic width={200} />
                    <OptionTitle delay={delays[2]}>Basic</OptionTitle>
                </OptionContainer>
                <OptionContainer delay={delays[3]} onClick={() => handleSelect('fullcover', FullCoverParams)}>
                    <FullCover width={200} />
                    <OptionTitle delay={delays[3]}>Full Cover</OptionTitle>
                </OptionContainer>
            </Container>
        </>
    )
}