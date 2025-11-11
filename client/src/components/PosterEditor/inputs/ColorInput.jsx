/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useRef } from "react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`;

const Title = styled.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`;

const ValueDiv = styled.div`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`;

const ColorPreview = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 10px;
    margin-left: 10px;
`

const Color = styled.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`

function ColorInput({ title, value, onClick }) {
    const valueDivRef = useRef(null);

    return (
        <Container data-color-input>
            <Title>{title}</Title>
            <ValueDiv ref={valueDivRef} onClick={() => {
                const newRect = valueDivRef.current.getBoundingClientRect();
                onClick({ top: newRect.bottom + 1 + window.scrollY, left: newRect.left + window.scrollX });
            }}>
                <ColorPreview style={{backgroundColor: value}}/>
                <Color>
                    {value}
                </Color>
            </ValueDiv>
        </Container>
    );
}

export default ColorInput;