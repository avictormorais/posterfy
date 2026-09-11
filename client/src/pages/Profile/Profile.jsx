/* eslint-disable react/prop-types */
import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import apiService from "../../services/apiService";
import { FiPlus, FiEdit2, FiShare2, FiMoreHorizontal, FiSearch } from "react-icons/fi";
import { SITE_URL } from "../../seo/metadata";
import { SiSpotify } from "react-icons/si";
import { useTranslation } from 'react-i18next';
import { useRouteTransition } from '../../contexts/RouteTransitionContext';
import PosterWall from "../../components/svgs/PosterWall.jsx";
import EditProfileModal from "../../components/EditProfileModal";
import TierBadge from "../../components/Common/TierBadge.jsx";
import AlertModal from "../../components/Common/AlertModal.jsx";
import { IoEye, IoHeart, IoCloudDownload } from "react-icons/io5";
import { MdBarChart } from "react-icons/md";
import PosterCard from "../../components/Community/PosterCard";
import {
    trackProfileView,
    trackProfileEdit,
    trackProfilePosterPin,
    trackProfilePosterDelete,
    trackProfilePosterVisibility
} from "../../services/analytics";
import Empty from "../../components/svgs/Others/Empty";
import { useRouteSeoData } from "../../components/SEO/SEOComponent";

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
    width: min(1240px, calc(100% - 80px));
    margin: 0 auto;
    padding: 104px 0 56px;
    min-height: 85dvh;
    box-sizing: border-box;
    button:focus-visible, a:focus-visible, summary:focus-visible {
        outline: 2px solid var(--AccentColor);
        outline-offset: 4px;
    }
    @media (max-width: 700px) {
        width: calc(100% - 40px);
        padding-top: 96px;
    }
    @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
            animation: none !important;
            transition: none !important;
        }
    }
`;

const ProfileSection = styled.div`
    padding-bottom:20px;
    @media(max-width:700px){
    padding-bottom:16px;}
`;

const ProfileTop = styled.div`
    display:flex;
    align-items:center;
    gap:22px;
    @media(max-width:700px){gap:16px;}
`;

const Avatar = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;

    @media (max-width: 600px) { width: 72px; height: 72px; }
`;

const AvatarPlaceholder = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: var(--textColor);
    color: var(--backgroundColor);
    font-size: 2em;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    @media (max-width: 600px) { width: 72px; height: 72px; font-size: 1.6em; }
`;

const UserInfo = styled.div`
    min-width:0;
    flex:1;
`;

const UserName = styled.h1`
    margin:0;
    font-size:clamp(26px,3vw,36px);
    line-height:1.12;
    letter-spacing:-.055em;
    font-weight:700;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    gap:10px;
    overflow-wrap:anywhere;
`;

const Username = styled.p`
    color: var(--textColor);
    font-size: 0.95em;
    font-weight: 600;
    opacity: 0.6;
    margin: 4px 0 0;
`;

const BioText = styled.p`
    font-size:15px;
    color:var(--textSecondary);
    line-height:1.8;
    max-width:520px;
    margin:14px 0 0;
    white-space:pre-wrap;
    overflow-wrap:anywhere;
    font-weight:400;
`;

const ProfileLinks = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 12px;

`;

const SpotifyLinkBtn = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 20px;
    background: #1DB954;
    color: #fff;
    font-size: 0.78em;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.2s;
    flex-shrink: 0;

    &:hover {
        background: #17a34a;
        transform: translateY(-1px);
    }
`;

const SpotifyIconWhite = styled(SiSpotify)`
    width:14px;
    height:14px;
    fill:#fff; 
`;

const ActionBtns = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    gap:10px;
    margin-top:16px;
`;

const Btn = styled.button`
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:8px;
    min-height:42px;
    padding:10px 18px;
    border-radius:24px;
    border:1px solid var(--borderColor);
    cursor:pointer;
    font-weight:700;
    font-size:12px;
    background:${({ $variant }) => $variant === 'outline' ? 'transparent' : 'var(--AccentColor)'};
    color:${({ $variant }) => $variant === 'outline' ? 'var(--textColor)' : 'var(--backgroundColor)'};
    transition:border-color 180ms,transform 180ms;
    &:hover{border-color:var(--AccentColor);
    transform:translateY(-1px);}
    svg, svg * { color: inherit; stroke: currentColor; }
`;

const TabRow = styled.div`
    display:flex;
    gap:24px;
    width:100%;
    border-bottom:1px solid var(--borderColor);
    overflow-x:auto;
    @media(max-width:700px){gap:12px;}
`;

const Tab = styled.button`
    padding:12px 0;
    background:transparent;
    border:0;
    border-bottom:2px solid ${({ $active }) => $active ? 'var(--AccentColor)' : 'transparent'};
    color:${({ $active }) => $active ? 'var(--textColor)' : 'var(--textSecondary)'};
    font-size:14px;
    font-weight:700;
    cursor:pointer;
    white-space:nowrap;
    display:flex;
    gap:8px;
    align-items:center;
    &:hover{color:var(--AccentColor);}span{font-size:11px;
    font-weight:400;
    color:var(--textSecondary);}
`;

const TabContent = styled.div`
    width:100%;
    margin-top:18px;
    animation:${fadeIn} 180ms ease;
`;

const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 12px;

    @media (max-width: 1000px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 360px)  { grid-template-columns: 1fr; }
`;

const StatCard = styled.div`
    background: var(--glassBackground);
    border: 1px solid var(--borderColor);
    border-radius: 12px;
    padding: 16px 18px;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    gap: 10px;
    @media (max-width: 500px) { padding: 14px; gap: 8px; }
`;

const StatIconWrapper = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: color-mix(in srgb, var(--AccentColor) 8%, transparent);
    color: var(--AccentColor);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    svg { width: 16px; height: 16px; color: inherit; }
    svg * { color: inherit; }
`;

const StatValue = styled.p`
    grid-column: 1 / -1;
    font-size: 30px;
    line-height: 1.15;
    letter-spacing: -.04em;
    font-variant-numeric: tabular-nums;
    font-weight: 700;
    margin: 0;
    color: var(--textColor);
`;

const StatLabel = styled.p`
    font-size: 12px;
    line-height: 1.5;
    margin: 0;
    color: var(--textSecondary);
    font-weight: 500;
`;

const TopSection = styled.div`
    margin-top: 12px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;

    @media (max-width: 900px) { grid-template-columns: 1fr; }
`;

const SectionTitle = styled.h2`
    font-size: 13px;
    font-weight: 600;
    margin: 24px 0 0;
    color: var(--textColor);
`;

const TopCard = styled(Link)`
    text-decoration: none;
    color: inherit;
    background: transparent;
    border: 1px solid var(--borderColor);
    border-radius: 12px;
    padding: 14px;
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 0;
    gap: 14px;
    cursor: pointer;
    transition: border-color 180ms ease, background-color 180ms ease;

    &:hover { border-color: var(--AccentColor); background: var(--glassBackground); }
`;

const TopCardCover = styled.div`
    width: 72px;
    height: 72px;
    border-radius: 6px;
    overflow: hidden;
    flex-shrink: 0;
    background: color-mix(in srgb, var(--AccentColor) 20%, transparent);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const TopCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    flex: 1;
`;

const TopCardLabel = styled.p`
    font-size: 10px;
    line-height: 1.4;
    font-weight: 500;
    margin: 0 0 4px;
    color: var(--textSecondary);
`;

const TopCardAlbum = styled.p`
    font-size: 14px;
    font-weight: 700;
    margin: 0;
    color: var(--textColor);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const TopCardArtist = styled.p`
    font-size: 0.82em;
    margin: 0;
    opacity: 0.55;
    color: var(--textColor);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const TopCardStat = styled.p`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    font-weight: 700;
    margin: 5px 0 0;
    color: var(--AccentColor);
    svg, svg * { color: inherit; }
`;

const PosterGrid = styled.div`
    display:grid;
    grid-template-columns:repeat(4,minmax(0,1fr));
    gap:28px 22px;
    @media(max-width:1050px){grid-template-columns:repeat(3,minmax(0,1fr));}@media(max-width:700px){grid-template-columns:repeat(2,minmax(0,1fr));
    gap:20px 12px;}@media(max-width:380px){grid-template-columns:1fr;}
`;

const ToolRow = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 18px;
    flex-wrap: wrap;
`;

const FilterBtnGroup = styled.div`
    display: flex;
    gap: 6px;
`;

const FilterBtn = styled.button`
    padding: 6px 14px;
    border-radius: 20px;
    border: 1.5px solid ${({ $active }) => $active ? 'var(--AccentColor)' : 'rgba(128,128,128,0.25)'};
    background: ${({ $active }) => $active ? 'var(--AccentColor)' : 'transparent'};
    color: ${({ $active }) => $active ? 'var(--backgroundColor)' : 'var(--textColor)'};
    font-size: 0.82em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.18s;

    &:hover {
        border-color: var(--AccentColor);
        color: ${({ $active }) => $active ? 'var(--backgroundColor)' : 'var(--AccentColor)'};
    }
`;

const SearchInput = styled.input`
    width:100%;
    min-width:0;
    border:0;
    background:transparent;
    color:var(--textColor);
    font-size:13px;
    font-weight:400;
    padding:12px 0;
    outline:none;
    &::placeholder{color:var(--textSecondary);}
`;

const EmptyState = styled.div`
    padding:24px;
    text-align:center;
    display:grid;
    justify-items:center;
    gap:18px;
`;

const EmptyContainer = styled.div`
    padding:40px 16px;
    border:1px dashed var(--borderColor);
    border-radius:16px;
    display:grid;
    justify-items:center;
    margin:16px 0;
    >svg{width:96px;
    max-height:110px;}
`;

const EmptyText = styled.p`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
    margin: 0;
`;

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60dvh;
    gap: 20px;
    opacity: 0.45;
    padding: 40px 20px;
    text-align: center;
`;

const ErrorText = styled.p`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
    max-width: 340px;
    margin: 0;
`;

const PartialBanner = styled.div`
    width:100%;
    box-sizing:border-box;
    padding:16px;
    border:1px solid var(--borderColor);
    border-radius:12px;
    font-size:13px;
    margin-bottom:24px;
`;

const LoadMoreBtn = styled.button`
    display: block;
    width: 81%;
    margin: 30px auto 0;
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

const Summary = styled.div`
    display: flex; flex-wrap: wrap; gap: 18px; margin-top: 14px;
    &:empty { display: none; }
    span { font-size: 12px; color: var(--textSecondary); }
    strong { font-size: 18px; color: var(--textColor); margin-right: 6px; }
`;
const SearchBox = styled.label`
    display: flex; align-items: center; gap: 10px; padding: 0 16px;
    min-width: 180px; flex: 1; max-width: 380px;
    margin-left: ${({ $alignLeft }) => $alignLeft ? '0' : 'auto'};
    border: 1px solid var(--borderColor); border-radius: 24px;
    &:focus-within { border-color: var(--AccentColor); }
    @media (max-width: 700px) { max-width: none; width: 100%; margin: 0; }
`;
const MoreMenu = styled.details`
    position: relative;
    summary { display: grid; place-items: center; width: 42px; height: 42px; border: 1px solid var(--borderColor); border-radius: 50%; list-style: none; cursor: pointer; }
    summary::-webkit-details-marker { display: none; }
    button { position: absolute; top: 50px; right: 0; z-index: 5; white-space: nowrap; padding: 14px 22px; border: 1px solid var(--borderColor); border-radius: 12px; background: var(--backgroundColor); box-shadow: 0 8px 24px var(--shadowColor); cursor: pointer; }
`;
const Skeleton = styled.div`
    aspect-ratio: 2480 / 3508; border-radius: 15px; background: var(--glassBackground);
    border: 1px solid var(--borderColor);
`;
function GallerySkeleton() {
    return <PosterGrid aria-busy="true">{[0, 1, 2, 3].map(i => <Skeleton key={i} />)}</PosterGrid>;
}

const fmt = (n = 0) => {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace('.0', '') + 'M';
    if (n >= 1_000)     return (n / 1_000).toFixed(1).replace('.0', '') + 'k';
    return String(n);
};

function StatsTab({ stats, isOwner }) {
    const { t } = useTranslation();

    if (!stats) return null;

    if (stats.totalPosters === 0) {
        return (
            <EmptyContainer>
                <Empty width={"20%"}/>
                <EmptyState><EmptyText>{t(isOwner ? 'DASH_NoPosters' : 'DASH_NoPublicPosters')}</EmptyText></EmptyState>
            </EmptyContainer>
        );
    }

    const summaryCards = [
        { label: t('DASH_TotalPosters'),   value: stats.totalPosters,   icon: <MdBarChart size={22}/> },
        { label: t('DASH_TotalDownloads'), value: stats.totalDownloads, icon: <IoCloudDownload size={22}/> },
        { label: t('DASH_TotalViews'),     value: stats.totalViews,     icon: <IoEye size={22}/> },
        { label: t('DASH_TotalFavorites'), value: stats.totalFavorites, icon: <IoHeart size={22}/> },
    ];

    const topCards = [
        { label: t('DASH_MostFavorited'),  poster: stats.mostFavorited,  stat: fmt(stats.mostFavorited?.favoritesCount), icon: <IoHeart size={13} /> },
        { label: t('DASH_MostDownloaded'), poster: stats.mostDownloaded, stat: fmt(stats.mostDownloaded?.downloads),      icon: <IoCloudDownload size={13} /> },
        { label: t('DASH_MostViewed'),     poster: stats.mostViewed,     stat: fmt(stats.mostViewed?.views),              icon: <IoEye size={13} /> },
    ];

    const validTopCards = topCards.filter(c => c.poster);

    return (
        <>
            <StatsGrid>
                {summaryCards.map(c => (
                    <StatCard key={c.label}>
                        <StatLabel>{c.label}</StatLabel>
                        <StatIconWrapper aria-hidden="true">{c.icon}</StatIconWrapper>
                        <StatValue title={String(c.value ?? 0)}>{fmt(c.value)}</StatValue>
                    </StatCard>
                ))}
            </StatsGrid>

            {validTopCards.length > 0 && (
                <>
                    <SectionTitle>{t('DASH_TopHighlights')}</SectionTitle>
                    <TopSection>
                        {validTopCards.map(c => (
                            <TopCard key={c.label} to={`/p/${c.poster._id}`}>
                                <TopCardCover>
                                    {c.poster.posterJson?.albumCover
                                        ? <img src={c.poster.posterJson.albumCover} alt={`${c.poster.albumName} album artwork`} loading="lazy" decoding="async" />
                                        : null
                                    }
                                </TopCardCover>
                                <TopCardInfo>
                                    <TopCardLabel>{c.label}</TopCardLabel>
                                    <TopCardAlbum>{c.poster.albumName}</TopCardAlbum>
                                    <TopCardArtist>{c.poster.artistsName}</TopCardArtist>
                                    <TopCardStat>
                                        {c.icon} {c.stat}
                                    </TopCardStat>
                                </TopCardInfo>
                            </TopCard>
                        ))}
                    </TopSection>
                </>
            )}
        </>
    );
}

export default function Profile() {
    const { ready: routeReady, fail: routeFailed } = useRouteTransition();
    const navigate = useNavigate();
    const { username: routeUsername } = useParams();
    const { user, loading, logout, isAuthenticated } = useAuth();
    const { t } = useTranslation();

    // Determine view mode — always accessed via /u/:username
    const isOwner = isAuthenticated && user?.username?.toLowerCase() === routeUsername?.toLowerCase();

    const [userProfile, setUserProfile]     = useState(null);
    const profileSeoData = useMemo(() => userProfile ? { profile: userProfile } : null, [userProfile]);
    useRouteSeoData(profileSeoData);
    const [profileNotFound, setProfileNotFound] = useState(false);
    const [profileError, setProfileError]       = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [activeTab, setActiveTab]         = useState('myposters');

    // My Posters / Public Posters
    const [myPosters, setMyPosters]         = useState([]);
    const [myPage, setMyPage]               = useState(1);
    const [myHasMore, setMyHasMore]         = useState(false);
    const [myLoading, setMyLoading]         = useState(false);
    const [myFetched, setMyFetched]         = useState(false);

    // Favorites
    const [favorites, setFavorites]         = useState([]);
    const [favPage, setFavPage]             = useState(1);
    const [favHasMore, setFavHasMore]       = useState(false);
    const [favLoading, setFavLoading]       = useState(false);
    const [favFetched, setFavFetched]       = useState(false);

    // Stats
    const [stats, setStats]                 = useState(null);
    const [statsLoading, setStatsLoading]   = useState(false);
    const [statsFetched, setStatsFetched]   = useState(false);

    // Featured poster
    const [pinnedPosterId, setPinnedPosterId] = useState(null);
    const [featuredPoster, setFeaturedPoster] = useState(null);

    // Delete confirm
    const [deleteTarget, setDeleteTarget]   = useState(null);
    const [deleteClosing, setDeleteClosing] = useState(false);

    // Filter & search
    const [visibilityFilter, setVisibilityFilter] = useState('all');
    const [favSearch, setFavSearch]               = useState('');
    const [posterSearch, setPosterSearch] = useState('');
    const queryKey = `${posterSearch.trim()}|${visibilityFilter}`;
    const latestQuery = useRef(queryKey);
    latestQuery.current = queryKey;
    const myRequest = useRef(0);
    const searchMounted = useRef(false);
    const [copied, setCopied] = useState(false);
    const [shareFallback, setShareFallback] = useState(false);
    const [tabErrors, setTabErrors] = useState({});
    const shareTimer = useRef(null);
    useEffect(() => () => clearTimeout(shareTimer.current), []);
    const profileUrl = `${SITE_URL}/u/${encodeURIComponent(routeUsername || '')}`;
    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(profileUrl);
            setCopied(true);
            setShareFallback(false);
            clearTimeout(shareTimer.current);
            shareTimer.current = setTimeout(() => setCopied(false), 2500);
        } catch { setShareFallback(true); }
    };

    useEffect(() => { window.scrollTo(0, 0); }, []);

    useEffect(() => {
        if (!loading) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [loading]);

    useEffect(() => {
        if (!routeUsername || loading) return;

        setProfileError(false);

        if (isOwner) {
            // Owner visiting their own profile: use private endpoint for full data
            trackProfileView(routeUsername, true);
            apiService.getUserProfile().then(d => {
                setUserProfile(d.user);
                if (d.user?.pinnedPosterId) setPinnedPosterId(d.user.pinnedPosterId);
            }).catch(() => {
                setProfileError(true);
                // Fallback to AuthContext user data so the profile shell still renders
                if (user) {
                    setUserProfile({
                        name: user.name,
                        username: user.username,
                        avatar: user.avatar,
                        bio: '',
                        badge: user.badge || null,
                        badgeProgress: null,
                        isAdmin: user.permissions?.includes('admin') || false,
                        hasSpotify: false,
                        hasGoogle: false,
                    });
                }
            });
        } else {
            // Public profile: fetch via community endpoint
            apiService.getUserPublicProfile(routeUsername, { page: 1, limit: 12 })
                .then(d => {
                    trackProfileView(routeUsername, false);
                    setUserProfile({
                        name: d.user.name,
                        username: d.user.username,
                        avatar: d.user.avatar,
                        bio: d.user.bio || '',
                        badge: d.user.badge,
                        badgeProgress: d.user.badgeProgress || null,
                        isAdmin: d.user.isAdmin || false,
                        hasSpotify: d.user.hasSpotify,
                        spotifyId: d.user.spotifyId || null,
                        hasGoogle: false,
                        pinnedPosterId: d.user.pinnedPosterId || null,
                        posterCount: d.user.posterCount,
                        totalDownloads: d.user.totalDownloads,
                        totalFavorites: d.user.totalFavorites,
                    });
                    if (d.user.pinnedPosterId) setPinnedPosterId(d.user.pinnedPosterId);
                    if (d.pinnedPoster) setFeaturedPoster(d.pinnedPoster);
                    setMyPosters(d.posters || []);
                    setMyPage(d.page || 1);
                    setMyHasMore(d.hasMore ?? false);
                    setMyFetched(true);
                    setProfileNotFound(false);
                })
                .catch(err => {
                    if (err.status === 404) setProfileNotFound(true);
                    else setProfileError(true);
                });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, loading, user, routeUsername]);

    useEffect(() => {
        if (loading || profileNotFound) return;
        if (profileError) routeFailed();
        else if (userProfile && myFetched) routeReady();
    }, [loading, profileNotFound, profileError, userProfile, myFetched, isOwner, routeReady, routeFailed]);

    useEffect(() => {
        // For public view, featured poster is already set from the initial fetch
        if (!isOwner) return;
        if (!isAuthenticated || !pinnedPosterId) return;
        let cancelled = false;
        apiService.getPoster(pinnedPosterId)
            .then(res => {
                if (!cancelled && res.poster) setFeaturedPoster(res.poster);
            })
            .catch(() => {});
        return () => { cancelled = true; };
    }, [isAuthenticated, pinnedPosterId, isOwner]);

    // Lazy-load each tab on first visit
    useEffect(() => {
        if (isOwner) {
            if (activeTab === 'myposters' && !myFetched) fetchMyPosters(1, false);
            if (activeTab === 'favorites' && !favFetched) fetchFavorites(1, false);
            if (activeTab === 'stats'     && !statsFetched) fetchStats();
        } else {
            // Public: posters already fetched from initial load, only stats needs lazy load
            if (activeTab === 'stats' && !statsFetched) fetchPublicStats();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab, isOwner]);

    const fetchMyPosters = useCallback(async (page, append) => {
        const request = ++myRequest.current;
        const isCurrent = () => request === myRequest.current && latestQuery.current === queryKey;
        setMyLoading(true);
        setTabErrors(prev => ({ ...prev, myposters: false }));
        try {
            const res = await apiService.getUserPosters({ page, limit: 12, q: posterSearch.trim(), visibility: visibilityFilter });
            if (!isCurrent()) return;
            setMyPosters(prev => append ? [...prev, ...res.posters] : res.posters);
            setMyPage(page);
            setMyHasMore(res.hasMore ?? false);
            setMyFetched(true);
        } catch { if (isCurrent()) { setTabErrors(prev => ({ ...prev, myposters: true })); routeFailed(); } }
        finally { if (isCurrent()) setMyLoading(false); }
    }, [posterSearch, visibilityFilter, queryKey, routeFailed]);

    const fetchPublicPosters = useCallback(async (page, append) => {
        if (!routeUsername) return;
        const request = ++myRequest.current;
        const isCurrent = () => request === myRequest.current && latestQuery.current === queryKey;
        setMyLoading(true);
        setTabErrors(prev => ({ ...prev, myposters: false }));
        try {
            const res = await apiService.getUserPublicProfile(routeUsername, { page, limit: 12, q: posterSearch.trim() });
            if (!isCurrent()) return;
            setMyPosters(prev => append ? [...prev, ...(res.posters || [])] : (res.posters || []));
            setMyPage(page);
            setMyHasMore(res.hasMore ?? false);
            setMyFetched(true);
        } catch { if (isCurrent()) setTabErrors(prev => ({ ...prev, myposters: true })); }
        finally { if (isCurrent()) setMyLoading(false); }
    }, [routeUsername, posterSearch, queryKey]);

    useEffect(() => {
        if (!searchMounted.current) {
            searchMounted.current = true;
            return;
        }
        ++myRequest.current;
        setMyLoading(true);
        setMyHasMore(false);
        setMyPage(0);
        setMyPosters([]);
        const timer = setTimeout(() => {
            (isOwner ? fetchMyPosters : fetchPublicPosters)(1, false);
        }, 300);
        return () => clearTimeout(timer);
    }, [queryKey, isOwner, fetchMyPosters, fetchPublicPosters]);

    const fetchFavorites = useCallback(async (page, append) => {
        setFavLoading(true);
        setTabErrors(prev => ({ ...prev, favorites: false }));
        try {
            const res = await apiService.getUserFavorites({ page, limit: 12 });
            setFavorites(prev => append ? [...prev, ...res.posters] : res.posters);
            setFavPage(page);
            setFavHasMore(res.hasMore ?? false);
            setFavFetched(true);
        } catch { setTabErrors(prev => ({ ...prev, favorites: true })); } finally { setFavLoading(false); }
    }, []);

    const fetchStats = useCallback(async () => {
        setStatsLoading(true);
        setTabErrors(prev => ({ ...prev, stats: false }));
        try {
            const res = await apiService.getUserStats();
            setStats(res.stats);
            setStatsFetched(true);
        } catch { setTabErrors(prev => ({ ...prev, stats: true })); } finally { setStatsLoading(false); }
    }, []);

    const fetchPublicStats = useCallback(async () => {
        if (!routeUsername) return;
        setStatsLoading(true);
        setTabErrors(prev => ({ ...prev, stats: false }));
        try {
            const res = await apiService.getUserPublicStats(routeUsername);
            setStats(res.stats);
            setStatsFetched(true);
        } catch { setTabErrors(prev => ({ ...prev, stats: true })); } finally { setStatsLoading(false); }
    }, [routeUsername]);

    const handlePin = useCallback(async (posterId) => {
        const newId = pinnedPosterId === posterId ? null : posterId;
        setPinnedPosterId(newId);
        if (newId) {
            trackProfilePosterPin(routeUsername, posterId);
            const found = myPosters.find(p => p._id === newId);
            if (found) setFeaturedPoster(found);
        } else {
            setFeaturedPoster(null);
        }
        try {
            await apiService.setPinnedPoster(newId);
        } catch {
            setPinnedPosterId(pinnedPosterId);
            setFeaturedPoster(featuredPoster);
        }
    }, [pinnedPosterId, myPosters, featuredPoster, routeUsername]);

    const handleVisibilityChange = async (posterId, visibility) => {
        try {
            await apiService.updatePosterVisibility(posterId, visibility);
            trackProfilePosterVisibility(routeUsername, posterId, visibility);
            setMyPosters(prev => prev.map(p => p._id === posterId ? { ...p, visibility } : p));
        } catch { /* noop */ }
    };

    const handleDeleteRequest  = (poster) => { setDeleteTarget(poster); setDeleteClosing(false); };
    const handleDeleteCancel   = () => {
        setDeleteClosing(true);
        setTimeout(() => { setDeleteTarget(null); setDeleteClosing(false); }, 300);
    };
    const handleDeleteConfirm  = async () => {
        if (!deleteTarget) return;
        try {
            await apiService.deletePoster(deleteTarget._id);
            trackProfilePosterDelete(routeUsername, deleteTarget._id, deleteTarget.albumName);
            setMyPosters(prev => prev.filter(p => p._id !== deleteTarget._id));
            if (deleteTarget._id === pinnedPosterId) {
                setPinnedPosterId(null);
                setFeaturedPoster(null);
            }
            setUserProfile(prev => Number.isFinite(prev?.posterCount)
                ? { ...prev, posterCount: Math.max(0, prev.posterCount - 1) } : prev);
            if (stats) setStats(s => ({ ...s, totalPosters: Math.max(0, s.totalPosters - 1) }));
        } catch { /* noop */ } finally { handleDeleteCancel(); }
    };

    const handleUnfavorite = async (posterId) => {
        try {
            await apiService.toggleFavorite(posterId);
            setFavorites(prev => prev.filter(p => p._id !== posterId));
            if (stats) setStats(s => ({ ...s, totalFavorites: Math.max(0, s.totalFavorites - 1) }));
        } catch { /* noop */ }
    };

    const handleLogout = async () => { await logout(); navigate('/login'); };

    const handleProfileUpdate = useCallback(async (updatedUser) => {
        const nextUsername = updatedUser?.username || user?.username || '';

        if (updatedUser) {
            setUserProfile((prev) => ({
                ...(prev || {}),
                ...updatedUser,
            }));
        }

        if (routeUsername && nextUsername && routeUsername.toLowerCase() !== nextUsername.toLowerCase()) {
            navigate(`/u/${encodeURIComponent(nextUsername)}`, { replace: true });
            return;
        }

        try {
            const d = await apiService.getUserProfile();
            setUserProfile(d.user);
        } catch {
            // Keep optimistic local state when refresh fails.
        }
    }, [navigate, routeUsername, user?.username]);

    useEffect(() => {
        if (profileNotFound) navigate('/error');
    }, [profileNotFound, navigate]);

    if (loading || profileNotFound) return null;

    // Backend offline and no user data to fall back on (visitor)
    if (profileError && !userProfile) {
        return (
            <Container>
                <ErrorContainer>
                    <PosterWall width={'25%'} />
                    <ErrorText>{t('PROFILE_FetchError')}</ErrorText>
                </ErrorContainer>
            </Container>
        );
    }

    const displayName = userProfile?.name || user?.name || '';

    // Computed
    // The pinned poster can be outside the loaded page. Prefer the list's
    // freshest data and include it only once, before applying search/filters.
    const pinnedPoster = myPosters.find(p => p._id === pinnedPosterId)
        || (featuredPoster?._id === pinnedPosterId ? featuredPoster : null);
    const orderedMyPosters = pinnedPoster
        ? [pinnedPoster, ...myPosters.filter(p => p._id !== pinnedPosterId)]
        : myPosters;
    const visibleMyPosters = isOwner && visibilityFilter !== 'all'
        ? orderedMyPosters.filter(p => p.visibility === visibilityFilter)
        : orderedMyPosters;

    const filteredMyPosters = visibleMyPosters.filter(p =>
        `${p.albumName || ''} ${p.artistsName || ''}`.toLowerCase().includes(posterSearch.trim().toLowerCase())
    );

    const filteredFavorites = favSearch.trim()
        ? favorites.filter(p => {
            const q = favSearch.toLowerCase();
            return p.albumName?.toLowerCase().includes(q)
                || p.artistsName?.toLowerCase().includes(q)
                || p.authorId?.name?.toLowerCase().includes(q)
                || p.authorId?.username?.toLowerCase().includes(q);
        })
        : favorites;

    return (
        <Container>
            <ProfileSection>
                <div>
                    <ProfileTop>
                        {userProfile?.avatar
                            ? <Avatar src={userProfile.avatar} alt={displayName} decoding="async" />
                            : <AvatarPlaceholder>{displayName.charAt(0).toUpperCase()}</AvatarPlaceholder>}
                        <UserInfo>
                            <UserName>
                                {displayName}
                                {userProfile?.badge && <TierBadge badge={userProfile.badge} badgeProgress={userProfile.badgeProgress} isOwner={isOwner} size={25} />}
                                {(userProfile?.isAdmin || (isOwner && user?.permissions?.includes('admin'))) && <TierBadge badge="admin" size={25} />}
                            </UserName>
                            <Username>@{userProfile?.username || user?.username}</Username>
                        </UserInfo>
                    </ProfileTop>
                    {userProfile?.bio && <BioText>{userProfile.bio}</BioText>}
                    {userProfile?.hasSpotify && userProfile?.spotifyId && (isOwner ? userProfile?.showSpotifyProfile : true) && (
                        <ProfileLinks><SpotifyLinkBtn href={`https://open.spotify.com/user/${userProfile.spotifyId}`} target="_blank" rel="noopener noreferrer">
                            <SpotifyIconWhite />{t('DASH_OpenSpotify')}
                        </SpotifyLinkBtn></ProfileLinks>
                    )}
                    <Summary>
                        {Number.isFinite(userProfile?.posterCount) && <span><strong>{fmt(userProfile.posterCount)}</strong>{t('DASH_Posters')}</span>}
                        {Number.isFinite(userProfile?.totalDownloads) && <span><strong>{fmt(userProfile.totalDownloads)}</strong>{t('DASH_TotalDownloads')}</span>}
                        {Number.isFinite(userProfile?.totalFavorites) && <span><strong>{fmt(userProfile.totalFavorites)}</strong>{t('DASH_TotalFavorites')}</span>}
                    </Summary>
                    <ActionBtns>
                        {isOwner && <>
                            <Btn onClick={() => navigate('/?create=1')}><FiPlus />{t('PROFILE_Create')}</Btn>
                            <Btn $variant="outline" onClick={() => { trackProfileEdit(routeUsername); setIsEditModalOpen(true); }}><FiEdit2 />{t('EditProfile')}</Btn>
                        </>}
                        <Btn $variant="outline" onClick={handleShare}><FiShare2 />{copied ? t('CARD_CTX_Copied') : t('PROFILE_Share')}</Btn>
                        {isOwner && <MoreMenu>
                            <summary aria-label={t('PROFILE_More')}><FiMoreHorizontal /></summary>
                            <button onClick={handleLogout}>{t('Logout')}</button>
                        </MoreMenu>}
                    </ActionBtns>
                    {shareFallback && <SearchBox style={{ margin: '16px 0 0', maxWidth: '100%' }}>
                        <SearchInput aria-label={t('PROFILE_Share')} value={profileUrl} readOnly onFocus={e => e.target.select()} />
                    </SearchBox>}
                </div>
            </ProfileSection>

            {/* Partial-load banner for owner when backend is down */}
            {profileError && userProfile && (
                <PartialBanner>{t('PROFILE_PartialError')}</PartialBanner>
            )}

            <TabRow aria-label={t('PROFILE_Collection')}>
                <Tab aria-pressed={activeTab === 'myposters'} $active={activeTab === 'myposters'} onClick={() => setActiveTab('myposters')}>
                    {isOwner ? t('DASH_MyPosters') : t('DASH_Posters')}
                </Tab>
                {isOwner && (
                    <Tab aria-pressed={activeTab === 'favorites'} $active={activeTab === 'favorites'} onClick={() => setActiveTab('favorites')}>
                        <IoHeart size={18} />
                        {t('DASH_Favorites')}
                    </Tab>
                )}
                <Tab aria-pressed={activeTab === 'stats'} $active={activeTab === 'stats'} onClick={() => setActiveTab('stats')}>
                    <MdBarChart size={20} />
                    {t('DASH_Stats')}
                </Tab>
            </TabRow>

            <TabContent key={activeTab}>
                {tabErrors[activeTab] && <PartialBanner role="alert">
                    <p>{t('PROFILE_FetchError')}</p>
                    <Btn $variant="outline" onClick={() => {
                        if (activeTab === 'stats') (isOwner ? fetchStats : fetchPublicStats)();
                        else if (activeTab === 'favorites') fetchFavorites(favFetched ? favPage + 1 : 1, favFetched);
                        else (isOwner ? fetchMyPosters : fetchPublicPosters)(myFetched ? myPage + 1 : 1, myFetched);
                    }}>{t('ROUTE_Retry')}</Btn>
                </PartialBanner>}
                {/* My Posters */}
                {activeTab === 'myposters' && (
                    myLoading && !myFetched ? (
                        <GallerySkeleton />
                    ) : (
                        <>
                            <ToolRow>
                                {isOwner && (
                                    <FilterBtnGroup>
                                        <FilterBtn aria-pressed={visibilityFilter === 'all'} $active={visibilityFilter === 'all'} onClick={() => setVisibilityFilter('all')}>{t('DASH_All')}</FilterBtn>
                                        <FilterBtn aria-pressed={visibilityFilter === 'public'} $active={visibilityFilter === 'public'} onClick={() => setVisibilityFilter('public')}>{t('DASH_Public')}</FilterBtn>
                                        <FilterBtn aria-pressed={visibilityFilter === 'private'} $active={visibilityFilter === 'private'} onClick={() => setVisibilityFilter('private')}>{t('DASH_Private')}</FilterBtn>
                                    </FilterBtnGroup>
                                )}
                                <SearchBox $alignLeft={!isOwner}><FiSearch aria-hidden="true" />
                                    <SearchInput maxLength={200} value={posterSearch} onChange={e => setPosterSearch(e.target.value)} aria-label={t('PROFILE_SearchAll')} placeholder={t('PROFILE_SearchAll')} />
                                </SearchBox>
                            </ToolRow>
                            {myLoading && myPage === 0 ? <GallerySkeleton /> : filteredMyPosters.length === 0 ? (!tabErrors.myposters && (
                                <EmptyContainer>
                                    <Empty width={"20%"}/>
                                    <EmptyState>
                                        <EmptyText>{t(posterSearch.trim() || visibilityFilter !== 'all' ? 'NoResults' : isOwner ? 'DASH_NoPosters' : 'DASH_NoPublicPosters')}</EmptyText>
                                        {posterSearch.trim() || visibilityFilter !== 'all'
                                            ? <Btn $variant="outline" onClick={() => { setPosterSearch(''); setVisibilityFilter('all'); }}>{t('PROFILE_Clear')}</Btn>
                                            : isOwner && <Btn onClick={() => navigate('/?create=1')}><FiPlus />{t('PROFILE_Create')}</Btn>}
                                    </EmptyState>
                                </EmptyContainer>
                            )) : (
                                <PosterGrid>
                                    {filteredMyPosters.map(p => (
                                        <PosterCard
                                            key={p._id}
                                            poster={p}
                                            index={0}
                                            variant={isOwner ? 'myposters' : 'community'}
                                            isOwner={isOwner}
                                            onDelete={isOwner ? handleDeleteRequest : undefined}
                                            onVisibilityChange={isOwner ? handleVisibilityChange : undefined}
                                            onPin={isOwner ? handlePin : undefined}
                                            pinned={p._id === pinnedPosterId}
                                        />
                                    ))}
                                </PosterGrid>
                            )}
                            {myHasMore && (
                                <LoadMoreBtn
                                    onClick={() => (isOwner ? fetchMyPosters : fetchPublicPosters)(myPage + 1, true)}
                                    disabled={myLoading}
                                >
                                    {myLoading ? '…' : t('COMMUNITY_LoadMore')}
                                </LoadMoreBtn>
                            )}
                        </>
                    )
                )}

                {/* Favorites */}
                {activeTab === 'favorites' && (
                    favLoading && !favFetched ? (
                        <GallerySkeleton />
                    ) : (
                        <>
                            <ToolRow>
                                <SearchBox><FiSearch aria-hidden="true" />
                                <SearchInput
                                    value={favSearch}
                                    onChange={e => setFavSearch(e.target.value)}
                                    aria-label={t('PROFILE_SearchLoaded')}
                                    placeholder={t('PROFILE_SearchLoaded')}
                                />
                                </SearchBox>
                            </ToolRow>
                            {filteredFavorites.length === 0 ? (!tabErrors.favorites && (
                                <EmptyContainer>
                                    <Empty width={"20%"}/>
                                    <EmptyState>
                                        <EmptyText>{t(favSearch.trim() ? 'NoResults' : 'DASH_NoFavorites')}</EmptyText>
                                        {favSearch.trim() && <Btn $variant="outline" onClick={() => setFavSearch('')}>{t('PROFILE_Clear')}</Btn>}
                                    </EmptyState>
                                </EmptyContainer>
                            )) : (
                                <PosterGrid>
                                    {filteredFavorites.map(p => (
                                        <PosterCard
                                            key={p._id}
                                            poster={p}
                                            index={0}
                                            variant="favorites"
                                            isOwner={isOwner}
                                            onUnfavorite={handleUnfavorite}
                                        />
                                    ))}
                                </PosterGrid>
                            )}
                            {favHasMore && (
                                <LoadMoreBtn
                                    onClick={() => fetchFavorites(favPage + 1, true)}
                                    disabled={favLoading}
                                >
                                    {favLoading ? '…' : t('COMMUNITY_LoadMore')}
                                </LoadMoreBtn>
                            )}
                        </>
                    )
                )}

                {/* Stats */}
                {activeTab === 'stats' && (
                    statsLoading ? (
                        <StatsGrid aria-busy="true">{[0, 1, 2, 3].map(i => <Skeleton key={i} style={{ aspectRatio: 'auto', height: 100 }} />)}</StatsGrid>
                    ) : (
                        <StatsTab stats={stats} isOwner={isOwner} />
                    )
                )}
            </TabContent>

            {isOwner && deleteTarget && (
                <AlertModal
                    title={t('DASH_ConfirmDeleteTitle')}
                    paragraph={t('DASH_ConfirmDelete')}
                    confirmText={t('DASH_Delete')}
                    onConfirm={handleDeleteConfirm}
                    cancelText={t('Cancel')}
                    onCancel={handleDeleteCancel}
                    canClose={true}
                    isClosing={deleteClosing}
                />
            )}

            {isOwner && (
                <EditProfileModal
                    isOpen={isEditModalOpen}
                    onClose={() => setIsEditModalOpen(false)}
                    onProfileUpdate={handleProfileUpdate}
                    initialBio={userProfile?.bio || ''}
                />
            )}
        </Container>
    );
}
