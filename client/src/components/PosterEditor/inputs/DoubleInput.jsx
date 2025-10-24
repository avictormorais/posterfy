/* eslint-disable react/prop-types */
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
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
`

const Input = styled.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
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