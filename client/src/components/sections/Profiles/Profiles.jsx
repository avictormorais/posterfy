/* eslint-disable react/prop-types */
import { useState, useEffect, useRef, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ColorThief from "colorthief";
import Anchor from "../../Commom/Anchor.jsx";
import TierBadge, { AdminBadge } from "../../Commom/TierBadge.jsx";
import SectionExplanation from "../../SectionExplanation.jsx";
import apiService from "../../../services/apiService.js";
import { trackProfileSearch, trackProfileCardClick } from "../../../services/analytics.js";
import PosterWall from "../../svgs/PosterWall.jsx";

// ─── Keyframes ────────────────────────────────────────────────

const spin = keyframes`
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
`;

const cardFadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px) scale(0.96); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
`;

const shimmer = keyframes`
    from { background-position: 100% 0; }
    to   { background-position: -100% 0; }
`;

// ─── Styled Components ────────────────────────────────────────

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

    @media (max-width: 768px) { width: 90%; padding-inline: 0; }
`;

const SearchBar = styled.div`
    background-color: var(--glassBackground);
    width: 100%;
    height: 50px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 600px) { height: 44px; }
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

    @media (max-width: 600px) { font-size: 1em; margin-left: 10px; }
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
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    margin-top: 36px;
    padding-inline: 10%;

    @media (max-width: 1000px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 600px)  { grid-template-columns: 1fr; padding-inline: 5%; gap: 10px; }
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

const EmptyText = styled.p`
    font-size: 1em;
    opacity: 0.5;
    text-align: center;
    padding: 40px 20px;
`;

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    gap: 16px;
    opacity: 1;
    padding-inline: 20px;
`;

const ErrorText = styled.p`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
    text-align: center;
    max-width: 340px;
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

    &:hover:not(:disabled) { background-color: var(--AccentColor); }
    &:disabled { background-color: #666; cursor: not-allowed; }
`;

// ─── Profile Card ─────────────────────────────────────────────

const ProfileCardWrap = styled.div`
    background: var(--glassBackground);
    border-radius: 14px;
    padding: 12px 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
                box-shadow 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    animation: ${cardFadeIn} 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
    animation-delay: ${({ $i }) => ($i || 0) * 70}ms;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 14px;
        padding: 1.5px;
        background: ${({ $color }) => {
            const c = $color || 'var(--AccentColor)';
            return `linear-gradient(90deg, transparent, ${c} 50%, transparent)`;
        }};
        background-size: 200% 100%;
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.4s ease;
    }

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.07);

        &::before {
            opacity: 1;
            animation: ${shimmer} 0.8s ease-out forwards;
        }
    }
`;

const AvatarRing = styled.div`
    width: 46px;
    height: 46px;
    border-radius: 50%;
    padding: 3px;
    background: ${({ $ringColor }) =>
        $ringColor
            ? $ringColor
            : 'var(--borderColor, rgba(128,128,128,0.2))'
    };
    flex-shrink: 0;
    transition: transform 0.3s ease;

    ${ProfileCardWrap}:hover & {
        transform: scale(1.08);
    }

    @media (max-width: 600px) { width: 40px; height: 40px; }
`;

const AvatarInner = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--backgroundColor);
`;

const AvatarImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const AvatarFallback = styled.span`
    font-size: 1.05em;
    font-weight: 800;
    color: var(--textColor);
    opacity: 0.35;
    user-select: none;
`;

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
    flex: 1;
`;

const CardNameRow = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    min-width: 0;
    flex-wrap: wrap;
`;

const CardName = styled.p`
    font-size: 0.9em;
    font-weight: 700;
    margin: 0;
    color: var(--textColor);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: -0.01em;

    @media (max-width: 600px) { font-size: 0.82em; }
`;

const CardUsername = styled.p`
    font-size: 0.78em;
    font-weight: 600;
    margin: 0;
    opacity: 0.45;
    color: var(--textColor);
    letter-spacing: 0.01em;

    @media (max-width: 600px) { font-size: 0.72em; }
`;

const RANK_COLORS = {
    1: '#ffc107',
    2: '#a8a9ad',
    3: '#cd7f32',
};

const RankNumber = styled.span`
    font-size: 1.1em;
    font-weight: 800;
    color: var(--textColor);
    opacity: ${({ $rank }) => $rank <= 3 ? 0.5 : 0.2};
    flex-shrink: 0;
    min-width: 28px;
    text-align: right;
    letter-spacing: -0.02em;
    user-select: none;

    @media (max-width: 600px) { font-size: 0.95em; min-width: 24px; }
`;


const colorThief = new ColorThief();

function ProfileCard({ user, index, showRank }) {
    const navigate = useNavigate();
    const [dominantColor, setDominantColor] = useState(null);

    useEffect(() => {
        if (!user.avatar) return;
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.referrerPolicy = 'no-referrer';
        img.onload = () => {
            try {
                if (img.naturalWidth > 0) {
                    const [r, g, b] = colorThief.getColor(img, 10);
                    setDominantColor(`rgb(${r},${g},${b})`);
                }
            } catch { /* CORS blocked — keep default */ }
        };
        img.src = user.avatar;
    }, [user.avatar]);

    return (
        <ProfileCardWrap $i={index} $color={dominantColor} onClick={() => { trackProfileCardClick(user.username, user.rank); navigate(`/u/${user.username}`); }}>
            <AvatarRing $ringColor={dominantColor}>
                <AvatarInner>
                    {user.avatar
                        ? <AvatarImg src={user.avatar} alt={user.name} loading="lazy" referrerPolicy="no-referrer" />
                        : <AvatarFallback>{(user.name || '?').charAt(0).toUpperCase()}</AvatarFallback>
                    }
                </AvatarInner>
            </AvatarRing>
            <CardInfo>
                <CardNameRow>
                    <CardName>{user.name}</CardName>
                    {user.badge && (
                        <TierBadge badge={user.badge} size={20} />
                    )}
                    {user.permissions?.includes('admin') && (
                        <AdminBadge size={20} />
                    )}
                </CardNameRow>
                <CardUsername>@{user.username}</CardUsername>
            </CardInfo>
            {showRank && user.rank && (
                <RankNumber $rank={user.rank}>#{user.rank}</RankNumber>
            )}
        </ProfileCardWrap>
    );
}

// ─── Section Component ────────────────────────────────────────

function Profiles() {
    const { t } = useTranslation();

    const [users,        setUsers]        = useState([]);
    const [searchInput,  setSearchInput]  = useState('');
    const [activeSearch, setActiveSearch] = useState('');
    const [page,         setPage]         = useState(1);
    const [hasMore,      setHasMore]      = useState(false);
    const [loading,      setLoading]      = useState(true);
    const [loadingMore,  setLoadingMore]  = useState(false);
    const [isRanking,    setIsRanking]    = useState(true);
    const [fetchError,   setFetchError]   = useState(false);

    const debounceRef = useRef(null);

    const fetchUsers = useCallback(async (query, pageNum, append) => {
        if (pageNum === 1) setLoading(true); else setLoadingMore(true);
        setFetchError(false);
        try {
            const result = await apiService.searchUsers({ q: query, page: pageNum, limit: 8 });
            setUsers(prev => append ? [...prev, ...result.users] : result.users);
            setPage(pageNum);
            setHasMore(result.hasMore);
            setIsRanking(result.isRanking ?? !query);
        } catch (e) {
            console.error('Profiles fetch error:', e);
            if (!append) setUsers([]);
            setFetchError(true);
        } finally {
            setLoading(false);
            setLoadingMore(false);
        }
    }, []);

    useEffect(() => {
        fetchUsers('', 1, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSearchChange = (e) => {
        const val = e.target.value;
        setSearchInput(val);
        clearTimeout(debounceRef.current);

        if (!val.trim()) {
            setActiveSearch('');
            fetchUsers('', 1, false);
            return;
        }

        debounceRef.current = setTimeout(() => {
            setActiveSearch(val.trim());
            trackProfileSearch(val.trim());
            fetchUsers(val.trim(), 1, false);
        }, 400);
    };

    const handleClearSearch = () => {
        clearTimeout(debounceRef.current);
        setSearchInput('');
        setActiveSearch('');
        fetchUsers('', 1, false);
    };

    const handleLoadMore = () => {
        fetchUsers(activeSearch, page + 1, true);
    };

    return (
        <Container>
            <Anchor text={t('PROFILES_Anchor')} type={1} />
            <SectionExplanation title={t('PROFILES_Title')} />

            <Controls>
                <SearchBar role="search">
                    <SearchIconStyled aria-hidden="true" />
                    <Spanbar />
                    <SearchInput
                        type="text"
                        value={searchInput}
                        onChange={handleSearchChange}
                        placeholder={t('PROFILES_SearchPlaceholder')}
                        autoComplete="off"
                    />
                    {searchInput && (
                        <ClearBtn onClick={handleClearSearch} type="button" aria-label="Clear search">
                            <IoCloseOutline />
                        </ClearBtn>
                    )}
                </SearchBar>
            </Controls>

            {loading ? (
                <Center><Spinner /></Center>
            ) : fetchError ? (
                <ErrorContainer>
                    <PosterWall width={'25%'} />
                    <ErrorText>{t('PROFILES_FetchError')}</ErrorText>
                </ErrorContainer>
            ) : users.length === 0 ? (
                <EmptyText>{t('PROFILES_NoResults')}</EmptyText>
            ) : (
                <Grid>
                    {users.map((u, i) => (
                        <ProfileCard key={u._id || u.username} user={u} index={i} showRank={isRanking} />
                    ))}
                </Grid>
            )}

            {hasMore && !loading && (
                <LoadMoreBtn onClick={handleLoadMore} disabled={loadingMore}>
                    {loadingMore ? t('LoadingMore') : t('PROFILES_LoadMore')}
                </LoadMoreBtn>
            )}
        </Container>
    );
}

export default Profiles;
