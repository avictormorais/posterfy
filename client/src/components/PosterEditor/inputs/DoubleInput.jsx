/* eslint-disable react/prop-types */
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;

    @media (max-width: 900px) {
        min-width: 0;
        margin: 8px 0;
    }
`

const InputTitle = styled.input`
    font-size: 1em;
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    opacity: 0.5;

    @media (max-width: 768px) {
        min-width: 0;
        min-height: 44px;
        font-size: 16px;
    }
`

const Input = styled.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;

    @media (max-width: 768px) {
        min-width: 0;
        max-width: 100%;
        box-sizing: border-box;
        min-height: 44px;
        padding: 10px;
        font-size: 16px;
    }
`

function DoubleInput({ title, value, onChangeTitle, onChangeDate }){
    return(
        <Container>
            <InputTitle 
                placeholder={title}
                value={title} 
                onChange={onChangeTitle}
            />
            <Input 
                placeholder={title}
                value={value} 
                onChange={onChangeDate}
            />
        </Container>
    )
}

export default DoubleInput;