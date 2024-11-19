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

const Input = styled.input`
    font-size: .85em;
    background-color: rgba(255, 255, 255, 0.05);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;

function NormalInput({ title, value, onChange }) {
    return (
        <Container>
            <Title>{title}</Title>
            <Input 
                placeholder={title} 
                value={value}
                onChange={onChange} 
            />
        </Container>
    );
}

export default NormalInput;