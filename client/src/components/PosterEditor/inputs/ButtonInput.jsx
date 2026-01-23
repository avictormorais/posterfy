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
    align-items: center;
    cursor: pointer;
    transition: opacity 0.3s;
    
    &:hover {
        opacity: 0.8;
    }
`;

const IconWrapper = styled.div`
    width: 16px;
    height: 16px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Text = styled.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`

function ButtonInput({ title, text, onClick, icon: Icon }) {
    const valueDivRef = useRef(null);

    return (
        <Container>
            <Title>{title}</Title>
            <ValueDiv ref={valueDivRef} onClick={() => {
                const newRect = valueDivRef.current.getBoundingClientRect();
                onClick({ top: newRect.bottom + 1 + window.scrollY, left: newRect.left + window.scrollX });
            }}>
                {Icon && (
                    <IconWrapper>
                        <Icon />
                    </IconWrapper>
                )}
                <Text>
                    {text}
                </Text>
            </ValueDiv>
        </Container>
    );
}

export default ButtonInput;
