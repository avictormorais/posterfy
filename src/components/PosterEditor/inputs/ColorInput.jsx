/* eslint-disable react/prop-types */
import styled from "styled-components";

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
    background-color: rgba(255, 255, 255, 0.05);
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
    return (
        <Container>
            <Title>{title}</Title>
            <ValueDiv onClick={onClick}>
                <ColorPreview style={{backgroundColor: value}}/>
                <Color>
                    {value}
                </Color>
            </ValueDiv>
        </Container>
    );
}

export default ColorInput;