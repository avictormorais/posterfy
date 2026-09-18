/* eslint-disable react/prop-types */
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const QuestionDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    opacity: 0.5;
    margin-top: 15px;

    @media (max-width: 768px) {
        min-height: 48px;
    }
`

const Arrow = styled(IoIosArrowForward)`
    font-size: 2em;
    transition: transform 0.3s ease;
    transform: ${({ showA }) => (showA ? 'rotate(90deg)' : 'rotate(0deg)')};

    @media (max-width: 768px) {
        flex-shrink: 0;
    }
`

const Q = styled.h2`
    font-size: 1.1em;
    font-weight: 600;
    margin-left: 10px;
`

const Hr = styled.hr`
    opacity: 0.15;
    margin: 5px;
`

const AnswerDiv = styled.div`
    max-height: ${({ showA }) => (showA ? '400px' : '0')};
    overflow: hidden;
    transition: max-height 1s ease;

    @media (max-width: 768px) {
        max-height: ${({ showA }) => showA ? 'none' : '0'};
    }
`

const A = styled.p`
    font-size: 1em;
    font-weight: 400;
    opacity: 0.5;
    margin-block: 10px;
    margin-inline: 10px;

    @media (max-width: 768px) {
        line-height: 1.6;
    }
`

function Question({ q, a }){
    const [showA, setShowA] = useState(false);

    function handleShowA(){
        setShowA(!showA)
    }

    return(
        <>
            <QuestionDiv onClick={handleShowA}>
                <Arrow showA={showA} />
                <Q>
                    {q}
                </Q>
            </QuestionDiv>
            <Hr/>
            <AnswerDiv showA={showA}>
                <A showA={showA}>
                    {a}
                </A>
            </AnswerDiv>
        </>
    )
}

export default Question;