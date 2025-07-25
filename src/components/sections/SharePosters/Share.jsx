import styled from "styled-components";
import Anchor from "../../Anchor";
import { useTranslation } from 'react-i18next';
import SectionExplanation from "../../SectionExplanation";
import PosterWall from '../../svgs/PosterWall.jsx';

const Container = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`;

const DivSVG = styled.div`
    margin-inline: auto;
    width: min-content;
    margin-top: 50px;
    width: 40%;

    @media (max-width: 1200px) {
        width: 55%;
    }

    @media (max-width: 768px) {
        width: 80%;
    }
`;

const PosterText = styled.p`
    font-size: 1.2rem;
    width: 30%;
    margin-inline: auto;
    text-align: center;
    font-weight: bolder;
    opacity: 0.7;
    margin-block: 40px;

    @media (max-width: 1350px) {
        width: 40%;
    }

    @media (max-width: 1050px) {
        width: 50%;
    }

    @media (max-width: 768px) {
        width: 80%;
    }
`;

const Button = styled.button`
    background-color: var(--PosterfyGreen);
    color: var(--PosterfyWhite);
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1rem;
    width: 200px;
    margin-inline: auto;
    display: block;
    padding-block: 10px;
    font-weight: bolder;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.025);
    }
`;

function Share() {
    const { t } = useTranslation();

    return (
        <Container id="share">
            <Anchor text={t('Share')} type={1} />
            <SectionExplanation title={t('ShareTitle')} />
            <DivSVG>
                <PosterWall width={'100%'} />
            </DivSVG>
            <PosterText>{t('ShareDescription')}</PosterText>
            <Button>{t('ComingSoon')}</Button>
        </Container>
    );
}

export default Share;