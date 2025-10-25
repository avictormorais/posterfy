/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
    opacity: ${props => props.visible ? 1 : 0};
    transform: translateY(${props => props.visible ? '0' : '20px'});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${props => props.animationDelay || 0}ms;
`;

function AnimatedInput({ children, animationDelay = 0, ...props }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, animationDelay);

        return () => clearTimeout(timer);
    }, [animationDelay]);

    return (
        <Container visible={visible} animationDelay={animationDelay} {...props}>
            {children}
        </Container>
    );
}

export default AnimatedInput;
