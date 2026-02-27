import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import apiService from "../../services/apiService";
import { FaGoogle } from "react-icons/fa";
import { SiSpotify } from "react-icons/si";
import { useTranslation } from 'react-i18next';
import Loading from "../../components/Commom/Loading";
import PosterWall from "../../components/svgs/PosterWall.jsx";
import EditProfileModal from "../../components/EditProfileModal";
import Hint from "../../components/Commom/Hint";
import TierBadge, { AdminBadge } from "../../components/Commom/TierBadge";
import AlertModal from "../../components/Commom/AlertModal";
import { IoEye, IoHeart, IoCloudDownload } from "react-icons/io5";
import { MdBarChart } from "react-icons/md";
import PosterCard from "../../components/Community/PosterCard";
import {
    trackProfileView,
    trackProfileEdit,
    trackProfileSpotifyConnect,
    trackProfilePosterPin,
    trackProfilePosterDelete,
    trackProfilePosterVisibility
} from "../../services/analytics";

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    min-height: 85dvh;
    flex-direction: column;
    padding-bottom: 20px;
`;

const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 100px;

    @media (max-width: 600px) {
        width: 90%;
        margin-top: 80px;
    }
`;

const BioSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    padding-inline: 10px;

    @media (max-width: 600px) { width: 90%; }
`;

const ProfileTop = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 900px) { flex-wrap: wrap; }

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

const ProfileBottom = styled.div`
    padding-left: 110px;
    margin-top: 10px;

    @media (max-width: 900px) { padding-left: 0; margin-top: 12px; }
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    flex: 1;
    min-width: 0;

    @media (max-width: 600px) {
        margin-left: 0;
        margin-top: 12px;
        align-items: center;
    }
`;

const UserName = styled.h2`
    color: var(--textColor);
    font-size: 1.5em;
    font-weight: 800;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;

    @media (max-width: 600px) {
        font-size: 1.25em;
        justify-content: center;
    }
`;

const Username = styled.p`
    color: var(--textColor);
    font-size: 0.95em;
    font-weight: 600;
    opacity: 0.6;
    margin: 4px 0 0;
`;

const BadgeIcon = styled.div`
    background-color: var(--textColor);
    border-radius: 50%;
    padding: 3px;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-shrink: 0;
`;

const GoogleIcon  = styled(FaGoogle)`  width:14px; height:14px; fill:var(--backgroundColor); `;
const SpotifyIcon = styled(SiSpotify)` width:14px; height:14px; fill:var(--backgroundColor); `;

const BioText = styled.p`
    font-size: 0.9em;
    color: var(--textColor);
    opacity: 0.72;
    margin: 8px 0 0;
    line-height: 1.55;
    max-width: 460px;
    white-space: pre-wrap;
    word-break: break-word;
    font-weight: bold;

    @media (max-width: 600px) {
        font-size: 0.85em;
        max-width: 100%;
        text-align: center;
    }
`;

const ProfileLinks = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 12px;

    @media (max-width: 600px) { justify-content: center; }
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

const ConnectSpotifyBtn = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 20px;
    background: transparent;
    color: var(--textColor);
    font-size: 0.78em;
    font-weight: 700;
    border: 1.5px dashed rgba(128,128,128,0.35);
    cursor: pointer;
    transition: all 0.2s;
    flex-shrink: 0;

    &:hover {
        border-color: #1DB954;
        color: #1DB954;
        border-style: solid;
    }
`;

const ActionBtns = styled.div`
    display: flex;
    gap: 10px;
    margin-left: auto;

    @media (max-width: 900px) { margin-left: 0; margin-top: 16px; }

    @media (max-width: 600px) {
        width: 100%;
        justify-content: center;
        margin-top: 16px;
    }
`;

const Btn = styled.button`
    padding: 8px 20px;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 0.85em;
    transition: all 0.2s;
    background: ${({ $variant }) => $variant === 'outline'
        ? 'transparent'
        : $variant === 'danger'
        ? 'var(--AccentColor)'
        : 'var(--textColor)'};
    color: ${({ $variant }) => $variant === 'outline'
        ? 'var(--textColor)'
        : 'var(--backgroundColor)'};
    border: 2px solid ${({ $variant }) => $variant === 'outline' ? 'var(--textColor)' : 'transparent'};

    &:hover {
        background: ${({ $variant }) => $variant === 'outline'
            ? 'var(--textColor)'
            : 'var(--AccentColor)'};
        color: var(--backgroundColor);
        border-color: transparent;
    }
`;

const TabRow = styled.div`
    display: flex;
    gap: 0;
    margin-top: 28px;
    width: 80%;
    border-bottom: 2px solid var(--borderColor, rgba(128,128,128,0.2));

    @media (max-width: 600px) {
        width: 90%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        &::-webkit-scrollbar { display: none; }
    }
`;

const Tab = styled.button`
    padding: 12px 24px;
    background: transparent;
    border: none;
    border-bottom: 3px solid ${({ $active }) => $active ? 'var(--AccentColor)' : 'transparent'};
    margin-bottom: -2px;
    color: ${({ $active }) => $active ? 'var(--AccentColor)' : 'var(--textColor)'};
    font-weight: 700;
    font-size: 0.95em;
    cursor: pointer;
    transition: all 0.18s;
    display: flex;
    align-items: center;
    gap: 7px;

    &:hover { color: var(--AccentColor); }

    @media (max-width: 600px) {
        padding: 10px 16px;
        font-size: 0.85em;
        white-space: nowrap;
        flex-shrink: 0;
    }
`;

const TabContent = styled.div`
    width: 80%;
    margin-top: 16px;
    animation: ${fadeIn} 0.25s ease;

    @media (max-width: 600px) { width: 90%; }
`;

const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;

    @media (max-width: 1000px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 500px)  { grid-template-columns: 1fr; }
`;

const StatCard = styled.div`
    background: var(--glassBackground);
    border-radius: 14px;
    padding: 20px 22px;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const StatValue = styled.p`
    font-size: 2em;
    font-weight: 800;
    margin: 0;
    color: var(--textColor);
`;

const StatLabel = styled.p`
    font-size: 0.8em;
    margin: 0;
    opacity: 0.55;
    color: var(--textColor);
    font-weight: 600;
`;

const TopSection = styled.div`
    margin-top: 36px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    @media (max-width: 900px) { grid-template-columns: 1fr; }
`;

const TopCard = styled.div`
    background: var(--glassBackground);
    border-radius: 14px;
    padding: 18px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover { transform: translateY(-3px); }
`;

const TopCardLabel = styled.p`
    font-size: 0.75em;
    font-weight: 700;
    opacity: 0.5;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin: 0;
    color: var(--textColor);
`;

const TopCardAlbum = styled.p`
    font-size: 1em;
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
    font-size: 0.85em;
    font-weight: 700;
    margin: 0;
    color: var(--AccentColor);
`;

const PosterGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;

    @media (max-width: 1300px) { grid-template-columns: repeat(3, 1fr); }
    @media (max-width: 900px)  { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 500px)  { grid-template-columns: 1fr; gap: 12px; }
`;

const ToolRow = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
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
    flex: 1;
    min-width: 0;
    padding: 10px 14px;
    border-radius: 20px;
    border: 1.5px solid rgba(128,128,128,0.25);
    background: transparent;
    color: var(--textColor);
    font-size: 0.85em;
    outline: none;
    font-weight: bolder;

    &::placeholder { opacity: 1; }
    &:focus { border-color: var(--AccentColor); }
`;

const FeaturedContainer = styled.div`
    display: flex;
    width: 80%;

    @media (max-width: 600px) { width: 90%; }
`;


const FeaturedWrap = styled.div`
    width: fit-content;
    max-width: 80%;
    margin-top: 28px;
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s;
    padding: 20px 80px 20px 24px;
    display: flex;
    align-items: center;
    gap: 20px;
    background: linear-gradient(
        to right,
        var(--glassBackground) 0%,
        var(--glassBackground) calc(100% - 80px),
        transparent 100%
    );
    margin-right: auto;

    /* color accent: left border strip */
    &::before {
        content: '';
        position: absolute;
        left: 0; top: 0; bottom: 0;
        width: 4px;
        background: ${({ $bg }) => $bg || 'var(--AccentColor)'};
    }

    &:hover { transform: translateY(-2px); }

    @media (max-width: 600px) { padding: 16px 64px 16px 18px; gap: 14px; max-width: 95%; }
`;

const FeaturedCoverWrap = styled.div`
    position: relative;
    flex-shrink: 0;

    &::before {
        content: '';
        position: absolute;
        inset: -18px;
        border-radius: 50%;
        background: radial-gradient(circle, ${({ $bg }) => $bg ? `${$bg}88` : 'transparent'} 0%, transparent 60%);
        pointer-events: none;
        z-index: 0;
    }
`;

const FeaturedCover = styled.img`
    width: 72px;
    height: 72px;
    border-radius: 8px;
    object-fit: cover;
    display: block;
    position: relative;
    z-index: 1;
    box-shadow: 0 4px 16px rgba(0,0,0,0.18);

    @media (max-width: 600px) { width: 58px; height: 58px; }
`;

const FeaturedCoverFallback = styled.div`
    width: 72px;
    height: 72px;
    border-radius: 8px;
    background: ${({ $bg }) => $bg || 'rgba(128,128,128,0.2)'};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) { width: 58px; height: 58px; }
`;

const FeaturedInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`;

const FeaturedLabel = styled.span`
    font-size: 0.63em;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--AccentColor);
    margin-bottom: 3px;
`;

const FeaturedAlbum = styled.p`
    font-size: 1.1em;
    font-weight: 800;
    margin: 0;
    color: var(--textColor);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 600px) { font-size: 0.95em; }
`;

const FeaturedArtist = styled.p`
    font-size: 0.83em;
    font-weight: 600;
    margin: 0;
    opacity: 0.45;
    color: var(--textColor);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const EmptyState = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 20px;
    opacity: 0.45;
    gap: 12px;
    text-align: center;
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
    width: 80%;
    padding: 12px 16px;
    border-radius: 8px;
    background: var(--glassBackground);
    border: 1px solid var(--borderColor);
    color: var(--textColor);
    font-size: 0.85em;
    text-align: center;
    opacity: 0.7;
    margin-bottom: 10px;

    @media (max-width: 600px) { width: 90%; font-size: 0.8em; }
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

const fmt = (n = 0) => {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace('.0', '') + 'M';
    if (n >= 1_000)     return (n / 1_000).toFixed(1).replace('.0', '') + 'k';
    return String(n);
};

function StatsTab({ stats }) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    if (!stats) return null;

    const summaryCards = [
        { label: t('DASH_TotalPosters'),   value: stats.totalPosters   },
        { label: t('DASH_TotalDownloads'), value: stats.totalDownloads },
        { label: t('DASH_TotalViews'),     value: stats.totalViews     },
        { label: t('DASH_TotalFavorites'), value: stats.totalFavorites },
    ];

    const topCards = [
        { label: t('DASH_MostFavorited'),  poster: stats.mostFavorited,  stat: fmt(stats.mostFavorited?.favoritesCount), icon: <IoHeart size={13} /> },
        { label: t('DASH_MostDownloaded'), poster: stats.mostDownloaded, stat: fmt(stats.mostDownloaded?.downloads),      icon: <IoCloudDownload size={13} /> },
        { label: t('DASH_MostViewed'),     poster: stats.mostViewed,     stat: fmt(stats.mostViewed?.views),              icon: <IoEye size={13} /> },
    ];

    return (
        <>
            <StatsGrid>
                {summaryCards.map(c => (
                    <StatCard key={c.label}>
                        <StatValue>{fmt(c.value)}</StatValue>
                        <StatLabel>{c.label}</StatLabel>
                    </StatCard>
                ))}
            </StatsGrid>

            <TopSection>
                {topCards.map(c => c.poster ? (
                    <TopCard key={c.label} onClick={() => navigate(`/p/${c.poster._id}`)}>
                        <TopCardLabel>{c.label}</TopCardLabel>
                        <TopCardAlbum>{c.poster.albumName}</TopCardAlbum>
                        <TopCardArtist>{c.poster.artistsName}</TopCardArtist>
                        <TopCardStat style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            {c.icon} {c.stat}
                        </TopCardStat>
                    </TopCard>
                ) : null)}
            </TopSection>
        </>
    );
}

export default function Profile() {
    const navigate = useNavigate();
    const { username: routeUsername } = useParams();
    const { user, loading, logout, isAuthenticated } = useAuth();
    const { t } = useTranslation();

    // Determine view mode — always accessed via /u/:username
    const isOwner = isAuthenticated && user?.username?.toLowerCase() === routeUsername?.toLowerCase();

    const [userProfile, setUserProfile]     = useState(null);
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

    useEffect(() => { window.scrollTo(0, 0); }, []);

    useEffect(() => {
        if (!loading) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [loading]);

    useEffect(() => {
        if (!routeUsername) return;

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
        // For public view, featured poster is already set from the initial fetch
        if (!isOwner) return;
        if (!isAuthenticated || !pinnedPosterId) return;
        apiService.getUserPosters({ page: 1, limit: 20 })
            .then(res => {
                const picks = (res.posters || []).filter(p => p.posterJson?.albumCover);
                const pinned = picks.find(p => p._id === pinnedPosterId);
                if (pinned) setFeaturedPoster(pinned);
            })
            .catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        setMyLoading(true);
        try {
            const res = await apiService.getUserPosters({ page, limit: 12 });
            setMyPosters(prev => append ? [...prev, ...res.posters] : res.posters);
            setMyPage(page);
            setMyHasMore(res.hasMore ?? false);
            setMyFetched(true);
        } catch { /* noop */ } finally { setMyLoading(false); }
    }, []);

    const fetchPublicPosters = useCallback(async (page, append) => {
        if (!routeUsername) return;
        setMyLoading(true);
        try {
            const res = await apiService.getUserPublicProfile(routeUsername, { page, limit: 12 });
            setMyPosters(prev => append ? [...prev, ...(res.posters || [])] : (res.posters || []));
            setMyPage(page);
            setMyHasMore(res.hasMore ?? false);
            setMyFetched(true);
        } catch { /* noop */ } finally { setMyLoading(false); }
    }, [routeUsername]);

    const fetchFavorites = useCallback(async (page, append) => {
        setFavLoading(true);
        try {
            const res = await apiService.getUserFavorites({ page, limit: 12 });
            setFavorites(prev => append ? [...prev, ...res.posters] : res.posters);
            setFavPage(page);
            setFavHasMore(res.hasMore ?? false);
            setFavFetched(true);
        } catch { /* noop */ } finally { setFavLoading(false); }
    }, []);

    const fetchStats = useCallback(async () => {
        setStatsLoading(true);
        try {
            const res = await apiService.getUserStats();
            setStats(res.stats);
            setStatsFetched(true);
        } catch { /* noop */ } finally { setStatsLoading(false); }
    }, []);

    const fetchPublicStats = useCallback(async () => {
        if (!routeUsername) return;
        setStatsLoading(true);
        try {
            const res = await apiService.getUserPublicStats(routeUsername);
            setStats(res.stats);
            setStatsFetched(true);
        } catch { /* noop */ } finally { setStatsLoading(false); }
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
        }
    }, [pinnedPosterId, myPosters]);

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

    useEffect(() => {
        if (profileNotFound) navigate('/error');
    }, [profileNotFound, navigate]);

    if (loading || profileNotFound) return <Loading isVisible={true} initialFade={true} />;

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
    const filteredMyPosters = isOwner && visibilityFilter !== 'all'
        ? myPosters.filter(p => p.visibility === visibilityFilter)
        : myPosters;

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
                <ProfileTop>
                    {userProfile?.avatar
                        ? <Avatar src={userProfile.avatar} alt={displayName} />
                        : <AvatarPlaceholder>{displayName.charAt(0).toUpperCase()}</AvatarPlaceholder>
                    }
                    <UserInfo>
                        <UserName>
                            {displayName}
                            {/* {userProfile?.hasGoogle && (
                                <Hint text={t('ConnectedToGoogle')} delay={200}>
                                    <BadgeIcon><GoogleIcon /></BadgeIcon>
                                </Hint>
                            )}
                            {userProfile?.hasSpotify && (
                                <Hint text={t('ConnectedToSpotify')} delay={200}>
                                    <BadgeIcon><SpotifyIcon /></BadgeIcon>
                                </Hint>
                            )} */}
                            <>
                                {userProfile?.badge && (
                                    <TierBadge
                                        badge={userProfile.badge}
                                        badgeProgress={userProfile.badgeProgress}
                                        isOwner={isOwner}
                                        size={25}
                                    />
                                )}
                                {(userProfile?.isAdmin || (isOwner && user?.permissions?.includes('admin'))) && (
                                    <AdminBadge size={25} />
                                )}
                            </>
                        </UserName>
                        <Username>@{userProfile?.username || user?.username}</Username>
                    </UserInfo>
                    {isOwner && (
                        <ActionBtns>
                            <Btn $variant="outline" onClick={() => { trackProfileEdit(routeUsername); setIsEditModalOpen(true); }}>{t('EditProfile')}</Btn>
                            <Btn onClick={handleLogout}>{t('Logout')}</Btn>
                        </ActionBtns>
                    )}
                </ProfileTop>
            </ProfileSection>

            <BioSection>
                {userProfile?.bio && <BioText>{userProfile.bio}</BioText>}
                {userProfile !== null && isOwner && !userProfile?.hasSpotify && (
                    <ProfileLinks>
                        <ConnectSpotifyBtn onClick={() => { trackProfileSpotifyConnect(routeUsername); window.location.href = apiService.getSpotifyAuthUrl(); }}>
                            <SiSpotify size={13} />
                            {t('DASH_ConnectSpotify')}
                        </ConnectSpotifyBtn>
                    </ProfileLinks>
                )}
                {userProfile !== null && userProfile?.hasSpotify && (isOwner ? userProfile?.showSpotifyProfile : true) && (
                    <ProfileLinks>
                        <SpotifyLinkBtn
                            href={`https://open.spotify.com/user/${userProfile.spotifyId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SpotifyIconWhite size={13} />
                            {t('DASH_OpenSpotify')}
                        </SpotifyLinkBtn>
                    </ProfileLinks>
                )}
            </BioSection>

            {/* Featured Poster */}
            {featuredPoster && (() => {
                const pj = featuredPoster.posterJson || {};
                const cover = pj.albumCover;
                const accentColor = pj.backgroundColor;
                return (
                    <FeaturedContainer>
                        <FeaturedWrap
                            $bg={accentColor}
                            onClick={() => navigate(`/p/${featuredPoster._id}`)}
                        >
                            <FeaturedCoverWrap $bg={accentColor}>
                                {cover
                                    ? <FeaturedCover src={cover} alt={featuredPoster.albumName} />
                                    : <FeaturedCoverFallback $bg={accentColor} />
                                }
                            </FeaturedCoverWrap>
                            <FeaturedInfo>
                                <FeaturedLabel>{t('DASH_FeaturedPoster')}</FeaturedLabel>
                                <FeaturedAlbum>{featuredPoster.albumName}</FeaturedAlbum>
                                <FeaturedArtist>{featuredPoster.artistsName}</FeaturedArtist>
                            </FeaturedInfo>
                        </FeaturedWrap>
                    </FeaturedContainer>
                );
            })()}

            {/* Partial-load banner for owner when backend is down */}
            {profileError && userProfile && (
                <PartialBanner>{t('PROFILE_PartialError')}</PartialBanner>
            )}

            <TabRow>
                <Tab $active={activeTab === 'myposters'} onClick={() => setActiveTab('myposters')}>
                    {isOwner ? t('DASH_MyPosters') : t('DASH_Posters')}
                </Tab>
                {isOwner && (
                    <Tab $active={activeTab === 'favorites'} onClick={() => setActiveTab('favorites')}>
                        <IoHeart size={18} />
                        {t('DASH_Favorites')}
                    </Tab>
                )}
                <Tab $active={activeTab === 'stats'} onClick={() => setActiveTab('stats')}>
                    <MdBarChart size={20} />
                    {t('DASH_Stats')}
                </Tab>
            </TabRow>

            <TabContent key={activeTab}>
                {/* My Posters */}
                {activeTab === 'myposters' && (
                    myLoading && !myFetched ? (
                        <EmptyState><EmptyText>…</EmptyText></EmptyState>
                    ) : (
                        <>
                            {isOwner && (
                                <ToolRow>
                                    <FilterBtnGroup>
                                        <FilterBtn $active={visibilityFilter === 'all'} onClick={() => setVisibilityFilter('all')}>{t('DASH_All')}</FilterBtn>
                                        <FilterBtn $active={visibilityFilter === 'public'} onClick={() => setVisibilityFilter('public')}>{t('DASH_Public')}</FilterBtn>
                                        <FilterBtn $active={visibilityFilter === 'private'} onClick={() => setVisibilityFilter('private')}>{t('DASH_Private')}</FilterBtn>
                                    </FilterBtnGroup>
                                </ToolRow>
                            )}
                            {filteredMyPosters.length === 0 ? (
                                <EmptyState><EmptyText>{isOwner ? t('DASH_NoPosters') : t('DASH_NoPublicPosters')}</EmptyText></EmptyState>
                            ) : (
                                <PosterGrid>
                                    {filteredMyPosters.map(p => (
                                        <PosterCard
                                            key={p._id}
                                            poster={p}
                                            variant={isOwner ? 'myposters' : 'community'}
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
                        <EmptyState><EmptyText>…</EmptyText></EmptyState>
                    ) : (
                        <>
                            <ToolRow>
                                <SearchInput
                                    value={favSearch}
                                    onChange={e => setFavSearch(e.target.value)}
                                    placeholder={t('COMMUNITY_SearchPlaceholder') || 'Buscar...'}
                                />
                            </ToolRow>
                            {filteredFavorites.length === 0 ? (
                                <EmptyState><EmptyText>{t('DASH_NoFavorites')}</EmptyText></EmptyState>
                            ) : (
                                <PosterGrid>
                                    {filteredFavorites.map(p => (
                                        <PosterCard
                                            key={p._id}
                                            poster={p}
                                            variant="favorites"
                                            onUnfavorite={handleUnfavorite}
                                        />
                                    ))}
                                </PosterGrid>
                            )}
                            {favHasMore && !favSearch && (
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
                        <EmptyState><EmptyText>…</EmptyText></EmptyState>
                    ) : (
                        <StatsTab stats={stats} />
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
                    onProfileUpdate={() => apiService.getUserProfile().then(d => setUserProfile(d.user)).catch(() => {})}
                    initialBio={userProfile?.bio || ''}
                />
            )}
        </Container>
    );
}