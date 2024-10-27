import styled from 'styled-components';
import Icon from './icons/icon';

const Container = styled.div`
    background-color: var(--backgroundColor);
    display: flex;
    width: 100%;
    flex-direction: row;
    padding-inline: 180px;
    align-items: center;
    padding-block: 10px;
    position: fixed;
    padding-top: 20px;
    z-index: 10;

    @media (max-width: 768px) {
        padding-inline: 40px;
    }
`

const Posterfyh1 = styled.h1`
    font-weight: bolder;
    margin-left: 20px;
    font-size: 1.3em;
    color: var(--PosterfyGreen);
`

function Navbar(){
    return(
        <>
        <Container>
            <Icon color={'#01b755'} width={'40px'}/>
            <Posterfyh1>Posterfy</Posterfyh1>
        </Container>
        </>
    )
};

export default Navbar;