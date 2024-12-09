import styled from 'styled-components';
import Icon from '../icons/icon';
import Languageselector from '../Navbar/Languageselector';

const Container = styled.div`
    background-color: var(--backgroundColor);
    display: flex;
    width: 100%;
    flex-direction: row;
    padding-inline: 10%;
    align-items: center;
    padding-block: 15px;
    position: fixed;
    z-index: 10;
    top: 0;

    @media (max-width: 768px) {
        padding-inline: 40px;
    }
`

const Posterfyh1 = styled.h1`
    font-weight: bolder;
    margin-left: 20px;
    font-size: 1.3em;
    color: var(--PosterfyGreen);
    margin-right: auto;
`

const Hr = styled.hr`
    position: fixed;
    top: 69px;
    background-color: white;
    opacity: 0.1;
    height: 1px;
    width: 100%;
`

function Navbar(){
    return(
        <>
            <Container>
                <Icon fill={'#01b755'} width={'40px'} height={'44.05px'}/>
                <Posterfyh1>Posterfy</Posterfyh1>
                <Languageselector/>
            </Container>
            <Hr/>
        </>
    )
};

export default Navbar;