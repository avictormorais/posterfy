/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Title = styled.h3`
    color: white;
    font-size: 3em;
    font-weight: bolder;
    white-space: pre-line;
    margin-left: 180px;


    @media (max-width: 900px) {
        margin-left: 40px;;
    }
`

const Paragraph = styled.p`
    color: white;
    font-size: 1.2em;
    font-weight: 600;
    opacity: .5;
    white-space: pre-line;
    padding-left: auto;
    width: 50%;
    height: min-content;
    padding-top: auto;
    padding-right: 100px;
    margin-top: auto;
    margin-left: auto;
    margin-bottom: 20px;
    padding-right: 120px;

    @media (max-width: 1000px) {
        display: none;
    }
`

const TextBox = styled.div`
    display: flex;    
`

function SectionExplanation({ title, paragraph}){
    return(
        <Container>
            <TextBox>
                <Title>{title}</Title>
            </TextBox>
            <TextBox>
                <Paragraph>{paragraph}</Paragraph>
            </TextBox>
        </Container>
    )
}

export default SectionExplanation;