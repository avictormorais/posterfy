import styled from 'styled-components';
import Icon from './icons/icon';
import Albuns from '../assets/albuns.png';
import { useTranslation } from 'react-i18next';

const HeroDiv = styled.div`
    margin-top: 200px;
    width: 100%;
    display: flex;
    overflow: hidden;
`;

const Container = styled.div`
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const ContainerIcon = styled.div`
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: end;
    padding-left: auto;

    @media (max-width: 900px) {
        display: none;
    }
`;

const Title = styled.h1`
    font-size: 3.5em;
    margin-right: auto;
    margin-bottom: 5px;
    margin-left: 180px;


    @media (max-width: 900px) {
        margin-left: 40px;;
    }
`;

const Paragraph = styled.p`
    font-size: 1em;
    opacity: 0.5;
    width: 80%;
    font-weight: 500;
    margin-right: auto;
    margin-block: 2px;
    margin-left: 180px;


    @media (max-width: 900px) {
        margin-left: 40px;;
    }
    @media (max-width: 900px) {
        width: 90%;
    }
`;

const DivAlbum = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const AlbumExample = styled.img`
    display: flex;
    margin-inline: auto;
    margin-block: 100px;
    width: 80%;
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
                <ContainerIcon style={{ opacity: 0.1, paddingRight: '180px' }}>
                    <Icon color={'white'} width={'180px'} />
                </ContainerIcon>
            </HeroDiv>
            <DivAlbum>
                <AlbumExample src={Albuns} />
            </DivAlbum>
        </>
    );
}

export default Hero;
