/* eslint-disable react/prop-types */
import styled from "styled-components";

const Container = styled.div`
    width: min-content;
    padding: 10px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    min-width: 150px;

    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0);
        transition: background-color 0.3s;
    }

    :hover::before {
        background-color: rgba(255, 255, 255, 0.05);
    }
`

const Cover = styled.img`
    width: 150px;
    height: auto;
    border-radius: 10px;
`

const Title = styled.h3`
    font-weight: 600;
    color: white;
    font-size: 0.8em;
    margin-top: 10px;
    padding-right: 20px;
`

const Artist = styled.p`
    font-weight: 500;
    color: white;
    font-size: 0.75em;
    margin-top: 5px;
    opacity: 0.5;
`

function Album({ title, artist, cover, id, onClick }) {
    return (
        <Container onClick={() => onClick(id)}>
            <Cover src={cover} />
            <Title>{title}</Title>
            <Artist>{artist}</Artist>
        </Container>
    );
}

export default Album;