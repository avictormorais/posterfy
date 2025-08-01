/* eslint-disable react/prop-types */
import styled from "styled-components";
import React, { useRef } from "react";
import { FaFont } from "react-icons/fa6";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`;

const Title = styled.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`;

const InputBox = styled.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
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
    outline: none;
    cursor: pointer;
    transition: background-color 0.3s;
    display: none;

    &:checked {
        background-color: var(--AccentColor);
    }
`;

const Text = styled.p`
    font-size: 0.85em;
    font-weight: bold;
    margin-left: 10px;
    margin-block: auto;
    cursor: pointer;
    opacity: ${({ active }) => (active ? 1 : 0.5)};
    transition: opacity 0.3s;
    width: 100%;
    margin-right: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const IconFont = styled(FaFont)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;

function FontInput({ title, text, onChange }) {
    const fileInputRef = useRef();

    const handleToggle = () => {
        fileInputRef.current.click();
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        text = file.name;
        if (file) onChange(file);
    };

    return (
        <Container onClick={handleToggle}>
            <Title>{title}</Title>
            <InputBox>
                <IconFont />
                <Input
                    ref={fileInputRef}
                    type="file"
                    accept=".ttf,.otf"
                    onChange={handleChange}
                />
                <Text active={true}>{text}</Text>
            </InputBox>
        </Container>
    );
}

export default FontInput;