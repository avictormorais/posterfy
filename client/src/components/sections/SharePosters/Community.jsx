/* eslint-disable react/prop-types */
import { useState, useEffect, useRef, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from 'react-i18next';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import Anchor from "../../Commom/Anchor.jsx";
import SectionExplanation from "../../SectionExplanation.jsx";
import PosterCard from "../../Community/PosterCard.jsx";
import PosterShare from "../../svgs/PosterShare.jsx";
import Empty from "../../svgs/Others/Empty.jsx";
import apiService from "../../../services/apiService.js";
import { useAuth } from "../../../contexts/AuthContext.jsx";
import { trackCommunitySearch, trackCommunityFilterChange } from "../../../services/analytics.js";

const spin = keyframes`
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
`;


const Container = styled.div`
    width: 100%;
    margin-top: 80px;
    padding-bottom: 60px;
`;

const Controls = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 40px;
    width: 80%;
    margin-inline: auto;


    @media (max-width: 768px) { padding-inline: 5%; }
`;

const FilterRow = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    width: 100%;
    justify-content: start;
    align-items: start;
`;

const FilterTab = styled.button`
    padding: 8px 20px;
    border-radius: 30px;
    border: 2px solid ${({ $active }) => ($active ? 'var(--AccentColor)' : 'var(--borderColor)')};
    background: ${({ $active }) => ($active ? 'var(--AccentColor)' : 'transparent')};
    color: ${({ $active }) => ($active ? 'var(--backgroundColor)' : 'var(--textColor)')};
    font-size: 0.9em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        border-color: var(--AccentColor);
        color: ${({ $active }) => ($active ? 'var(--backgroundColor)' : 'var(--AccentColor)')};
    }
`;

const SearchBar = styled.div`
    background-color: var(--glassBackground);
    width: 100%;
    height: 50px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const SearchIconStyled = styled(FaSearch)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    flex-shrink: 0;
`;

const Spanbar = styled.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: var(--textColor);
    flex-shrink: 0;
`;

const SearchInput = styled.input`
    background-color: transparent;
    text-decoration: none;
    border: none;
    margin-left: 15px;
    font-size: 1.2em;
    font-weight: 600;
    outline: none;
    opacity: 0.77;
    width: 100%;
    color: var(--textColor);
    min-width: 0;
`;

const ClearBtn = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: var(--textColor);
    font-size: 1.35em;
    opacity: 0.25;
    display: flex;
    align-items: center;
    padding: 0;
    margin-inline: 15px;
    flex-shrink: 0;
    transition: opacity 0.5s;

    &:hover { opacity: 1; }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 36px;
    padding-inline: 10%;

    @media (max-width: 1300px) { grid-template-columns: repeat(3, 1fr); }
    @media (max-width: 900px)  { grid-template-columns: repeat(2, 1fr); padding-inline: 5%; }
    @media (max-width: 500px)  { grid-template-columns: 1fr; padding-inline: 5%; }
`;

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 0;
`;

const Spinner = styled(AiOutlineLoading3Quarters)`
    font-size: 2em;
    color: var(--AccentColor);
    animation: ${spin} 0.8s linear infinite;
`;

const EmptyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

const EmptyText = styled.p`
    font-size: 1em;
    opacity: 0.5;
    text-align: center;
    margin-top: 20px;
    padding: 10px 20px;
`;

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    gap: 16px;
    opacity: 1;
`;

const ErrorText = styled.p`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
    text-align: center;
    max-width: 340px;
`;

const SearchLabel = styled.p`
    font-size: 0.85em;
    opacity: 0.5;
    text-align: center;
    margin-top: 24px;
`;

const LoadMoreBtn = styled.button`
    display: block;
    width: 81%;
    margin: 20px auto;
    padding: 8px 17px;
    border-radius: 25px;
    border: none;
    background-color: var(--textColor);
    color: var(--backgroundColor);
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    max-width: 380px;

    &:hover:not(:disabled) {
        background-color: var(--AccentColor);
    }

    &:disabled { background-color: #666; cursor: not-allowed; }
`;

const FILTERS = [
    { key: 'popular',     labelKey: 'COMMUNITY_Popular',     sort: 'popular', period: null, requiresAuth: false },
    { key: 'recent',      labelKey: 'COMMUNITY_Recent',      sort: 'recent',  period: null, requiresAuth: false },
    { key: 'week',        labelKey: 'COMMUNITY_ThisWeek',    sort: 'popular', period: 'week', requiresAuth: false },
    { key: 'myfavorites', labelKey: 'COMMUNITY_MyFavorites', sort: null,      period: null, requiresAuth: true  },
];

function Community() {
    const { t } = useTranslation();
    const { isAuthenticated } = useAuth();

    const [filter,       setFilter]       = useState('popular');
    const [searchInput,  setSearchInput]  = useState('');
    const [activeSearch, setActiveSearch] = useState('');
    const [posters,      setPosters]      = useState([]);
    const [page,         setPage]         = useState(1);
    const [hasMore,      setHasMore]      = useState(false);
    const [loading,      setLoading]      = useState(true);
    const [loadingMore,  setLoadingMore]  = useState(false);
    const [fetchError,   setFetchError]   = useState(false);

    const debounceRef = useRef(null);

    const fetchBrowse = useCallback(async (filterKey, pageNum, append) => {
        const cfg = FILTERS.find(f => f.key === filterKey);
        if (pageNum === 1) setLoading(true); else setLoadingMore(true);
        setFetchError(false);
        try {
            let result;
            if (filterKey === 'myfavorites') {
                result = await apiService.getUserFavorites({ page: pageNum, limit: 8 });
            } else {
                result = await apiService.getCommunityPosters({
                    sort:   cfg.sort,
                    page:   pageNum,
                    limit:  8,
                    period: cfg.period,
                });
            }
            setPosters(prev => append ? [...prev, ...result.posters] : result.posters);
            setPage(pageNum);
            setHasMore(result.hasMore);
        } catch (e) {
            console.error('Community fetch error:', e);
            setFetchError(true);
        } finally {
            setLoading(false);
            setLoadingMore(false);
        }
    }, []);

    const fetchSearch = useCallback(async (q, pageNum, append) => {
        if (pageNum === 1) setLoading(true); else setLoadingMore(true);
        setFetchError(false);
        try {
            const result = await apiService.searchCommunity({ q, page: pageNum, limit: 8 });
            setPosters(prev => append ? [...prev, ...result.posters] : result.posters);
            setPage(pageNum);
            setHasMore(result.hasMore);
        } catch (e) {
            console.error('Community search error:', e);
            setFetchError(true);
        } finally {
            setLoading(false);
            setLoadingMore(false);
        }
    }, []);

    // Initial load
    useEffect(() => {
        fetchBrowse('popular', 1, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Reset favorites filter if user logs out
    useEffect(() => {
        if (!isAuthenticated && filter === 'myfavorites') {
            setFilter('popular');
            fetchBrowse('popular', 1, false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

    // Filter change
    const handleFilterChange = (key) => {
        if (key === filter && !activeSearch) return;
        clearTimeout(debounceRef.current);
        setSearchInput('');
        setActiveSearch('');
        setFilter(key);
        fetchBrowse(key, 1, false);
        trackCommunityFilterChange(key);
    };

    // Search (debounced 450 ms)
    const handleSearchChange = (e) => {
        const val = e.target.value;
        setSearchInput(val);
        clearTimeout(debounceRef.current);

        if (!val.trim()) {
            setActiveSearch('');
            fetchBrowse(filter, 1, false);
            return;
        }

        debounceRef.current = setTimeout(() => {
            setActiveSearch(val.trim());
            fetchSearch(val.trim(), 1, false);
            trackCommunitySearch(val.trim());
        }, 450);
    };

    const handleClearSearch = () => {
        clearTimeout(debounceRef.current);
        setSearchInput('');
        setActiveSearch('');
        fetchBrowse(filter, 1, false);
    };

    // Load more
    const handleLoadMore = () => {
        const next = page + 1;
        if (activeSearch) fetchSearch(activeSearch, next, true);
        else              fetchBrowse(filter, next, true);
    };

    return (
        <Container id="share">
            <Anchor text={t('Community')} type={1} />
            <SectionExplanation title={t('CommunityTitle')} />

            <Controls>
                {filter !== 'myfavorites' && (
                    <SearchBar role="search">
                        <SearchIconStyled aria-hidden="true" />
                        <Spanbar />
                        <SearchInput
                            type="text"
                            value={searchInput}
                            onChange={handleSearchChange}
                            placeholder={t('COMMUNITY_SearchPlaceholder')}
                            autoComplete="off"
                        />
                        {searchInput && (
                            <ClearBtn onClick={handleClearSearch} type="button" aria-label="Clear search">
                                <IoCloseOutline />
                            </ClearBtn>
                        )}
                    </SearchBar>
                )}


                <FilterRow>
                    {FILTERS.filter(f => !f.requiresAuth || isAuthenticated).map(f => (
                        <FilterTab
                            key={f.key}
                            $active={filter === f.key && !activeSearch}
                            onClick={() => handleFilterChange(f.key)}
                        >
                            {t(f.labelKey)}
                        </FilterTab>
                    ))}
                </FilterRow>
            </Controls>

            {loading ? (
                <Center><Spinner /></Center>
            ) : fetchError ? (
                <ErrorContainer>
                    <PosterShare width={'30%'} />
                    <ErrorText>{t('COMMUNITY_FetchError')}</ErrorText>
                </ErrorContainer>
            ) : posters.length === 0 ? (
                <EmptyContainer>
                    <Empty width={"25%"}/>
                    <EmptyText>{t('COMMUNITY_NoPosters')}</EmptyText>
                </EmptyContainer>
            ) : (
                <Grid>
                    {posters.map(poster => (
                        <PosterCard key={poster._id} poster={poster} />
                    ))}
                </Grid>
            )}

            {hasMore && !loading && (
                <LoadMoreBtn onClick={handleLoadMore} disabled={loadingMore}>
                    {loadingMore ? t('LoadingMore') : t('COMMUNITY_LoadMore')}
                </LoadMoreBtn>
            )}
        </Container>
    );
}

export default Community;