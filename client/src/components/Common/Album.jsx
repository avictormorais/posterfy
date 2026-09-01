/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Container = styled.div`
    width: min-content;
    padding: 0px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    min-width: 230px;
    max-width: 220px;
    opacity: ${props => props.$visible ? 1 : 0};
    transform: translateY(${props => props.$visible ? '0' : '20px'});
    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: opacity, transform;
    background-color: var(--albumColor);
    border: 1px solid var(--borderColor);

    &:hover{
        transform: translateY(0) scale(1.03);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 10px;
        background-color: transparent;
        transition: all 0.3s;
        z-index: 1;
        border: 1px solid transparent;
    }

    :hover::before {
        border: 2px solid var(--PosterShare-light);
    }

    @media (max-width: 650px) {
        width: 93%;
        min-width: unset;
        max-width: unset;
        display: flex;
        flex-direction: row;
    }

    @media (max-width: 600px) {
        width: 96%;
        min-width: unset;
    }

    @media (max-width: 480px) {
        width: 94%;
    }

`

const Cover = styled.img`
    width: 100%;
    min-height: 230px;
    height: auto;
    border-radius: 10px 10px 0 0;
    z-index: 10;
    opacity: ${props => props.$loaded ? 1 : 0};
    transition: opacity 0.3s ease;

    @media (max-width: 650px) {
        width: 100px;
        height: 100px;
        min-height: unset;
    }
`

const Title = styled.h3`
    font-weight: 600;
    color: var(--textColor);
    font-size: 0.85em;
    margin-top: 10px;
    padding-right: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 90%;
    max-width: 180px;
    white-space: nowrap;
    margin-left: 8px;
    z-index: 10;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    @media (max-width: 650px) {
        max-width: unset;
        font-size: 0.9em;
    }
`

const Artist = styled.p`
    font-weight: bold;
    color: var(--textColor);
    font-size: 0.7em;
    margin-top: 5px;
    opacity: 0.35;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 90%;
    max-width: 180px;
    white-space: nowrap;
    margin-left: 8px;
    z-index: 10;

    @media (max-width: 650px) {
        max-width: unset;
        font-size: 0.9em;
    }
`

const AlbumInfos = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 10;

    @media (max-width: 650px) {
        width: 100%;
        height: 100px;
        min-height: unset;
        margin-left: 10px;
        justify-content: center;
    }
`;

const HorizontalDiv = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-block: 5px;
    margin-left: 8px;
    margin-bottom: 8px;
`;

const SubText = styled.p`
    font-weight: bold;
    color: var(--textColor);
    font-size: 0.65em;
    margin-top: 5px;
    opacity: 0.5;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 180px;
    white-space: nowrap;
    z-index: 10;

    @media (max-width: 650px) {
        max-width: unset;
        font-size: 0.9em;
    }
`;

const Dot = styled.p`
    display: flex;
    width: 5px;
    text-align: center;
    margin-inline: 8px;
    margin-block: auto;
    font-size: 0.3em;
    margin-top: 8px;
    opacity: 0.5;
`;

function Album({ title, artist, cover, tracksNum, year, id, onClick, animationDelay = 0 }) {
    const {t} = useTranslation();

    const [visible, setVisible] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (!hasAnimated) {
            const timer = setTimeout(() => {
                setVisible(true);
                setHasAnimated(true);
            }, animationDelay);

            return () => clearTimeout(timer);
        } else {
            setVisible(true);
        }
    }, [animationDelay, hasAnimated]);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <Container onClick={() => onClick(id)} $visible={visible}>
            <Cover 
                src={cover} 
                $loaded={imageLoaded}
                onLoad={handleImageLoad}
                loading="lazy"
            />
            <AlbumInfos>
                <Title>{title}</Title>
                <Artist>{artist}</Artist>
            </AlbumInfos>
            <HorizontalDiv>
                <SubText>{year}</SubText>
                <Dot>𒊹</Dot>
                <SubText>{tracksNum} {t('Tracks')}</SubText>
            </HorizontalDiv>
        </Container>
    );
}

export default Album;