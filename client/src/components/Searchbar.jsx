/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { trackAlbumSearch } from '../services/analytics';

const Container = styled.div`
    width: 100%;
`

const Bar = styled.div`
    background-color: var(--glassBackground);
    width: 80%;
    margin-inline: auto;
    height: 50px;
    margin-block: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 900px) {
        width: 90%;
    }
`

const SearchIcon = styled(FaSearch)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
`
const SendIcon = styled(IoSend)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover, &:focus{
        opacity: 1 !important;
    }
`
const Spanbar = styled.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: var(--textColor);
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
    width: 100%;
`

function Searchbar({ onSearch, value = '' }) {
    const { t } = useTranslation();
    const [searchValue, setSearchValue] = useState(value);

    useEffect(() => {
        setSearchValue(value);
    }, [value]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchValue);
            if (searchValue.trim()) {
                trackAlbumSearch(searchValue.trim());
            }
        }
    };

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSendClick = () => {
        onSearch(searchValue);
        if (searchValue.trim()) {
            trackAlbumSearch(searchValue.trim());
        }
    };

    return (
        <Container>
            <Bar role="search" aria-label="Album search for poster creation">
                <SearchIcon aria-hidden="true" />
                <Spanbar />
                <Input
                    placeholder={t('SearchPlaceholder')}
                    value={searchValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    aria-label="Search for albums to create posters"
                    title="Search any album from Spotify to generate a custom poster"
                    autoComplete="off"
                    type="search"
                />
                <SendIcon 
                    onClick={handleSendClick}
                    aria-label="Search for album"
                    title="Click to search and create album poster"
                    role="button"
                    tabIndex={0}
                />
            </Bar>
        </Container>
    );
}

export default Searchbar;
