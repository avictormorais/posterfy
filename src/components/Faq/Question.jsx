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
`

const ArrowL = styled(IoIosArrowForward)`
    font-size: 2em;
`

const ArrowD = styled(IoIosArrowDown)`
    font-size: 2em;
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

const A = styled.p`
    font-size: 1em;
    font-weight: 400;
    opacity: 0.5;
    margin-block: 10px;
    margin-inline: 10px;
`

function Question({ q, a }){
    const [showA, setShowA] = useState(false);

    function handleShowA(){
        setShowA(!showA)
    }

    return(
        <>
            <QuestionDiv onClick={handleShowA}>
                {showA ? (
                    <ArrowD/>
                ) : (
                    <ArrowL/>
                )}
                <Q>
                    {q}
                </Q>
            </QuestionDiv>
            <Hr/>
            {showA && (
            <A>
                {a}
            </A>
            )}
        </>
    )
}

export default Question;