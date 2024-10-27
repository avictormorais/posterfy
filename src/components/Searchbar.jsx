import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Container = styled.div`
    width: 100%;
`

const Bar = styled.div`
    background-color: rgba(255, 255, 255, 0.05);
    width: 80%;
    margin-inline: 180px;
    height: 50px;
    margin-block: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 900px) {
        width: 90%;
        margin-inline: 40px;
    }
`

const SearchIcon = styled(FaSearch)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
`

const Spanbar = styled.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: white;
`

const Input = styled.input`
    background-color: transparent;
    text-decoration: none;
    border: none;
    margin-left: 15px;
    font-size: 1.2em;
    font-weight: 600;
    outline: none;
    opacity: 0.77;
`

function Searchbar(){
    const { t } = useTranslation();

    return(
        <Container>
            <Bar>
                <SearchIcon/>
                <Spanbar/>
                <Input placeholder={t('SearchPlaceholder')}/>
            </Bar>
        </Container>
    )
}

export default Searchbar;