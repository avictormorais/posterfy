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
    color: var(--textColor);
`;

const InputBox = styled.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`;

const Input = styled.input`
    appearance: none;
    width: 16px;
    height: 16px;
    margin-left: 10px;
    border-radius: 4px;
    background-color: var(--glassBackground);
    border: 2px solid var(--borderColor);
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;

    &:checked {
        background-color: var(--PosterfyGreen);
        border-color: var(--PosterfyGreen);
    }

    &:checked::after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 10px;
        font-weight: bold;
    }

    &:hover {
        border-color: var(--PosterfyGreen);
        opacity: 0.8;
    }
`;

const Text = styled.p`
    font-size: 0.85em;
    font-weight: bold;
    margin-left: 10px;
    margin-block: auto;
    cursor: pointer;
    color: var(--textColor);
    opacity: ${({ active }) => (active ? 1 : 0.7)};
    transition: opacity 0.3s;
`;

function CheckInput({ title, text, value, onChange }) {
    const handleToggle = () => onChange(!value);

    return (
        <Container>
            <Title>{title}</Title>
            <InputBox onClick={handleToggle}>
                <Input 
                    checked={value}
                    readOnly
                    type="checkbox"
                />
                <Text active={value}>{text}</Text>
            </InputBox>
        </Container>
    );
}

export default CheckInput;