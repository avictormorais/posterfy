import styled from 'styled-components';
import Icon from './icons/icon';
import Albuns from '../assets/albuns.png';
import { useTranslation } from 'react-i18next';

const HeroDiv = styled.div`
    margin-top: 200px;
    width: 80%;
    display: flex;
    overflow: hidden;
    margin-inline: auto;
`;

const Container = styled.div`
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-left: 30px;

    @media (max-width: 550px) {
        padding-left: 0px;
    }
`;

const ContainerIcon = styled.div`
    max-width: 100%;
    margin-inline: auto;
    margin-right: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: end;
    padding-left: auto;
    animation: heartbeat 1.85s infinite;

    @keyframes heartbeat {
        0%, 50%, 90%, 100% { opacity: 0.1; transform: scale(1); }
        30%, 70% { opacity: 0.25; transform: scale(1.05); }
    }


    @media (max-width: 900px) {
        display: none;
    }
`;

const Title = styled.h1`
    font-size: 3.5em;
    margin-right: auto;
    margin-bottom: 5px;
`;

const Paragraph = styled.p`
    font-size: 1em;
    opacity: 0.5;
    width: 80%;
    font-weight: 500;
    margin-right: auto;
    margin-block: 2px;


    @media (max-width: 900px) {
        width: 90%;
    }
`;

const DivAlbum = styled.div`
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
    margin-inline: auto;
`;

const AlbumExample = styled.img`
    display: flex;
    margin-inline: auto;
    margin-block: 100px;
    width: 100%;
`;

function Hero() {
    const { t } = useTranslation();
    return (
        <>
            <HeroDiv>
                <Container>
                    <Title>Posterfy</Title>
                    <Paragraph>
                        {t('paragraphHero1')}
                    </Paragraph>
                    <Paragraph>
                        {t('paragraphHero2')}
                    </Paragraph>
                </Container>
                <ContainerIcon>
                    <Icon fill={'white'} width={'180px'} height={'198.23px'} />
                </ContainerIcon>
            </HeroDiv>
            <DivAlbum>
                <AlbumExample src={Albuns} />
            </DivAlbum>
        </>
    );
}

export default Hero;
