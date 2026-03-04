/* eslint-disable react/prop-types */
import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../contexts/AuthContext";
import { trackCommunityPosterOpenInEditor } from "../../services/analytics";
import CanvasPoster from "../PosterEditor/CanvasPoster";
import { IoEye, IoHeart, IoHeartOutline, IoCloudDownload, IoTrashOutline, IoEarthOutline, IoLockClosedOutline, IoHeartDislikeOutline, IoBookmark, IoBookmarkOutline, IoOpenOutline, IoPersonOutline, IoCopyOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import apiService from "../../services/apiService";
import adminService from "../../services/adminService";


const spin = keyframes`
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`;

const ctxScale = keyframes`
    from { opacity: 0; transform: scale(0.96) translateY(-4px); }
    to   { opacity: 1; transform: scale(1)    translateY(0);    }
`;


const Card = styled.div`
    border-radius: 15px;
    background-color: ${({ $bg }) => $bg || 'transparent'};
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    display: flex;
    flex-direction: column;
    user-select: none;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 0px 15px ${({ $bg }) => $bg ? $bg + '99' : 'rgba(0,0,0,0.2)'};
    }
`;

const ThumbnailWrapper = styled.div`
    position: relative;
    width: 100%;
    /* A4 portrait aspect ratio */
    aspect-ratio: 2480 / 3508;
    background: ${({ $bg }) => $bg || '#1a1a1a'};
    overflow: hidden;
    flex-shrink: 0;
`;

const ThumbnailImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    animation: ${fadeIn} 0.4s ease;
`;

/* Colored placeholder shown while canvas hasn't rendered yet */
const ColorPlaceholder = styled.div`
    position: absolute;
    inset: 0;
    background: ${({ $bg }) => $bg || '#1a1a1a'};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 6px;
    padding: 16px;
    text-align: center;
`;

const PlaceholderAlbum = styled.p`
    font-size: 1.1em;
    font-weight: 700;
    color: ${({ $color }) => $color || '#fff'};
    opacity: 0.85;
    margin: 0;
    word-break: break-word;
`;

const PlaceholderArtist = styled.p`
    font-size: 0.85em;
    color: ${({ $color }) => $color || '#fff'};
    opacity: 0.5;
    margin: 0;
`;

const SpinnerWrapper = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SpinnerIcon = styled.div`
    width: 22px;
    height: 22px;
    border: 2.5px solid transparent;
    border-top-color: ${({ $color }) => $color || 'rgba(255,255,255,0.6)'};
    border-radius: 50%;
    animation: ${spin} 0.7s linear infinite;
`;

const Overlay = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0) 55%);
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 10px;
    opacity: 0;
    transition: opacity 0.2s ease;

    ${Card}:hover & {
        opacity: 1;
    }
`;

const FavoriteBtn = styled.button`
    position: absolute;
    top: 10px;
    left: 10px;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: none;
    background: ${({ $txtColor }) => $txtColor ? $txtColor + 'cc' : 'rgba(255,255,255,0.1)'};
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: ${({ $active }) => $active ? 1 : 0};
    transition: opacity 0.2s ease, transform 0.15s ease;
    color: ${({ $bg }) => $bg || '#1a1a1a'};
    font-size: 1.1em;
    z-index: 2;

    ${Card}:hover & {
        opacity: 1;
    }

    &:hover {
        transform: scale(1.15);
    }

    &:active { transform: scale(0.95); }
`;

const PinBtn = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: none;
    background: ${({ $txtColor }) => $txtColor ? $txtColor + 'cc' : 'rgba(255,255,255,0.1)'};
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: ${({ $active }) => $active ? 1 : 0};
    transition: opacity 0.2s ease, transform 0.15s ease;
    color: ${({ $bg }) => $bg || '#1a1a1a'};
    font-size: 1.1em;
    z-index: 2;

    ${Card}:hover & {
        opacity: 1;
    }

    &:hover { transform: scale(1.15); }
    &:active { transform: scale(0.95); }
`;

const OverlayBtn = styled.button`
    display: flex;
    align-items: center;
    gap: 5px;
    background: rgba(255, 255, 255, 0.14);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.22);
    color: #fff;
    font-size: 0.78em;
    font-weight: 600;
    padding: 7px 11px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.15s;

    &:hover {
        background: rgba(255, 255, 255, 0.26);
    }
`;

const Info = styled.div`
    padding: 12px 14px 14px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 0;
`;

const AlbumName = styled.p`
    font-size: 1em;
    font-weight: 700;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ $color }) => $color || 'var(--textColor)'};
`;

const ArtistName = styled.p`
    font-size: 0.85em;
    opacity: 0.55;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ $color }) => $color || 'var(--textColor)'};
`;

const Divider = styled.hr`
    border: none;
    border-top: 1px solid ${({ $color }) => $color ? $color + '33' : 'var(--borderColor)'};
    margin: 5px 0;
`;

const AuthorRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`;

const AvatarWrap = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.68em;
    font-weight: 700;
    color: var(--backgroundColor);
`;

const AvatarImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const AuthorMeta = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;
`;

const AuthorName = styled.span`
    font-size: 0.85em;
    font-weight: 600;
    opacity: 0.8;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ $color }) => $color || 'var(--textColor)'};
`;

const BadgeLabel = styled.span`
    font-size: 0.65em;
    font-weight: 600;
    color: ${({ $color }) => $color || '#999'};
    text-transform: capitalize;
    line-height: 1.2;
`;

const StatsRow = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 5px;
`;

const Stat = styled.span`
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 0.8em;
    opacity: 0.45;
    color: ${({ $color }) => $color || 'var(--textColor)'};
`;

const CardActionRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 14px 14px;
    flex-wrap: wrap;
`;

const CardActionBtn = styled.button`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 6px 12px;
    border-radius: 20px;
    border: none;
    background: transparent;
    color: var(--textColor);
    font-size: 0.78em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.18s;
    flex: 1;
    justify-content: center;
    background-color: ${({ $accentColor }) => $accentColor || '#fff'};
    color: ${({ $backgroundColor }) => $backgroundColor || '#fff'};
    transition: all 0.18s ease;

    &:hover {
        transform: scale(1.025);
        background-color: ${({ $accentColor }) => $accentColor || '#fff'};;
    }
`;

const CardVisibilityBadge = styled.span`
    font-size: 0.72em;
    font-weight: 700;
    padding: 3px 10px;
    margin-top: 4px;
    border-radius: 20px;
    background-color: ${({ $color }) => $color || '#fff'};
    color: ${({ $backgroundColor }) => $backgroundColor || '#fff'};
    align-self: flex-start;
    display: flex;
    align-items: center;
    gap: 4px;
`;

const CtxOverlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 9998;
`;

const CtxMenu = styled.div`
    position: fixed;
    z-index: 9999;
    min-width: 222px;
    background: var(--backgroundColor);
    border: 1px solid color-mix(in srgb, var(--textColor) 11%, transparent);
    border-radius: 14px;
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.22), 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 5px;
    animation: ${ctxScale} 0.13s cubic-bezier(0.22, 1, 0.36, 1) both;
`;

const CtxItem = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 9px 12px;
    background: none;
    border: none;
    border-radius: 9px;
    cursor: pointer;
    color: var(--textColor);
    font-size: 0.875em;
    font-weight: 500;
    text-align: left;
    transition: background 0.12s;

    &:hover {
        background: color-mix(in srgb, var(--textColor) 8%, transparent);
    }

    &[data-danger='true'] {
        color: var(--AccentColor);
        &:hover { background: rgba(224, 82, 82, 0.09); }
    }

    svg { font-size: 1.1em; flex-shrink: 0; opacity: 0.7; }
`;

const CtxDivider = styled.div`
    height: 1px;
    background: color-mix(in srgb, var(--textColor) 10%, transparent);
    margin: 4px 0;
`;

const CtxLabel = styled.div`
    font-size: 0.68em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    opacity: 0.35;
    padding: 6px 12px 2px;
    color: var(--textColor);
    user-select: none;
`;


const fmt = (n = 0) => {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace('.0', '') + 'M';
    if (n >= 1_000)     return (n / 1_000).toFixed(1).replace('.0', '') + 'k';
    return String(n);
};

const BADGE_COLORS = {
    bronze:  '#cd7f32',
    silver:  '#a8a9ad',
    gold:    '#ffc107',
    diamond: '#5bc4f5',
};

const getBadgeInfo = (badge) => {
    if (!badge) return null;
    const [type, tier] = badge.split('_');
    return { type, tier, color: BADGE_COLORS[tier] || '#999' };
};


function PosterCard({ poster, variant = 'community', onDelete, onVisibilityChange, onUnfavorite, onPin, pinned = false }) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { isAuthenticated, user } = useAuth();
    const isAdmin = user?.permissions?.includes('admin');
    const cardRef = useRef(null);

    const [isVisible, setIsVisible]               = useState(false);
    const [thumbnailUrl, setThumbnailUrl]         = useState(null);
    const [favorited, setFavorited]               = useState(poster.favorited || false);
    const [favLoading, setFavLoading]             = useState(false);
    const [ctxMenu, setCtxMenu]                   = useState(null);
    const [ctxCopied, setCtxCopied]               = useState('');
    const [adminDeleted, setAdminDeleted]         = useState(false);
    const [localVisibility, setLocalVisibility]   = useState(poster.visibility);

    useEffect(() => {
        const el = cardRef.current;
        if (!el || thumbnailUrl) return;

        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.05 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [thumbnailUrl]);

    const handleImageReady = useCallback((url) => {
        setThumbnailUrl(url);
    }, []);

    const handleCardClick = () => navigate(`/p/${poster._id}`);

    const handleFavorite = async (e) => {
        e.stopPropagation();
        if (!isAuthenticated || favLoading) return;
        setFavLoading(true);
        const prev = favorited;
        setFavorited(!prev);
        try {
            await apiService.toggleFavorite(poster._id);
        } catch {
            setFavorited(prev);
        } finally {
            setFavLoading(false);
        }
    };

    const handleOpenInEditor = (e) => {
        e.stopPropagation();
        apiService.registerEdit(poster._id).catch(() => {});
        trackCommunityPosterOpenInEditor(poster._id, poster.albumName, poster.artistsName);
        navigate(`/p/${poster._id}`);
    };

    useEffect(() => {
        if (!ctxMenu) return;
        const preventScroll = (e) => e.preventDefault();
        const preventKeys = (e) => {
            if ([' ', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.key))
                e.preventDefault();
        };
        document.addEventListener('wheel',     preventScroll, { passive: false });
        document.addEventListener('touchmove', preventScroll, { passive: false });
        document.addEventListener('keydown',   preventKeys);
        return () => {
            document.removeEventListener('wheel',     preventScroll);
            document.removeEventListener('touchmove', preventScroll);
            document.removeEventListener('keydown',   preventKeys);
        };
    }, [ctxMenu]);

    const handleContextMenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const menuW = 240;
        const menuH = isAdmin ? 340 : 220;
        const x = e.clientX + menuW > window.innerWidth  ? e.clientX - menuW : e.clientX;
        const y = e.clientY + menuH > window.innerHeight ? e.clientY - menuH : e.clientY;
        setCtxMenu({ x, y });
    };

    const handleCtxFavorite = async () => {
        setCtxMenu(null);
        if (!isAuthenticated || favLoading) return;
        setFavLoading(true);
        const prev = favorited;
        setFavorited(!prev);
        try { await apiService.toggleFavorite(poster._id); }
        catch { setFavorited(prev); }
        finally { setFavLoading(false); }
    };

    const copyToClipboard = (text, label) => {
        navigator.clipboard.writeText(text).catch(() => {});
        setCtxCopied(label);
        setTimeout(() => { setCtxCopied(''); setCtxMenu(null); }, 1200);
    };

    const handleAdminDelete = async () => {
        setCtxMenu(null);
        try { await adminService.deletePoster(poster._id); setAdminDeleted(true); }
        catch { /* silent */ }
    };

    const handleAdminVisibility = async () => {
        setCtxMenu(null);
        const next = localVisibility === 'public' ? 'private' : 'public';
        try { await adminService.changeVisibility(poster._id, next); setLocalVisibility(next); }
        catch { /* silent */ }
    };

    const author   = poster.authorId;
    const pj       = poster.posterJson || {};
    const badgeInfo = author ? getBadgeInfo(author.badge) : null;

    // Build posterData for CanvasPoster — always show watermark in community previews
    const posterData = {
        ...pj,
        albumID:         poster.spotifyAlbumId,
        albumCover:      pj.albumCover || '',
        useUncompressed: false,
        useWatermark:    true,
    };

    const hasAlbumCover = Boolean(pj.albumCover);
    const bgColor  = pj.backgroundColor || '#1a1a1a';
    const txtColor = pj.textColor || '#ffffff';

    if (adminDeleted) return null;

    return (<>
        <Card ref={cardRef} onClick={handleCardClick} $bg={bgColor} onContextMenu={handleContextMenu}>
            <ThumbnailWrapper $bg={bgColor}>
                {/* CanvasPoster renders to a hidden canvas internally */}
                {isVisible && hasAlbumCover && !thumbnailUrl && (
                    <CanvasPoster
                        posterData={posterData}
                        generatePoster={true}
                        scale={0.3}
                        isThumbnail={true}
                        onImageReady={handleImageReady}
                    />
                )}

                {thumbnailUrl ? (
                    <ThumbnailImg src={thumbnailUrl} alt={poster.albumName} />
                ) : (
                    /* Placeholder while canvas generates (or if no cover stored) */
                    <ColorPlaceholder $bg={bgColor}>
                        <PlaceholderAlbum $color={txtColor}>{poster.albumName}</PlaceholderAlbum>
                        <PlaceholderArtist $color={txtColor}>{poster.artistsName}</PlaceholderArtist>
                    </ColorPlaceholder>
                )}

                {isAuthenticated && variant !== 'favorites' && (
                    <FavoriteBtn
                        $active={favorited}
                        $bg={bgColor}
                        $txtColor={txtColor}
                        onClick={handleFavorite}
                    >
                        {favorited
                            ? <IoHeart style={{ color: bgColor, fill: bgColor }} />
                            : <IoHeartOutline style={{ color: bgColor, stroke: bgColor }} />
                        }
                    </FavoriteBtn>
                )}

                {variant === 'myposters' && onPin && (
                    <PinBtn
                        $active={pinned}
                        $bg={bgColor}
                        $txtColor={txtColor}
                        onClick={(e) => { e.stopPropagation(); onPin(poster._id); }}
                        title={pinned ? 'Remover destaque' : 'Fixar no destaque'}
                    >
                        {pinned
                            ? <IoBookmark style={{ color: bgColor, fill: bgColor }} />
                            : <IoBookmarkOutline style={{ color: bgColor, stroke: bgColor }} />
                        }
                    </PinBtn>
                )}
            </ThumbnailWrapper>

            <Info>
                <AlbumName $color={txtColor}>{poster.albumName}</AlbumName>
                <ArtistName $color={txtColor}>{poster.artistsName}</ArtistName>

                {/* Community: author info */}
                {variant === 'community' && author?.username && (
                    <>
                        <Divider $color={txtColor} />
                        <AuthorRow
                            style={{ cursor: 'pointer' }}
                            onClick={(e) => { e.stopPropagation(); navigate(`/u/${author.username}`); }}
                        >
                            <AvatarWrap $color={txtColor}>
                                {author?.avatar
                                    ? <AvatarImg src={author.avatar} alt={author.name} />
                                    : (author?.name || '?').charAt(0).toUpperCase()
                                }
                            </AvatarWrap>
                            <AuthorMeta>
                                <AuthorName $color={txtColor}>
                                    {author?.name || author?.username || 'Unknown'}
                                </AuthorName>
                                {badgeInfo && (
                                    <BadgeLabel $color={txtColor}>
                                        {t(`BADGE_TYPE_${badgeInfo.type}`)} {t(`BADGE_TIER_${badgeInfo.tier}`)}
                                    </BadgeLabel>
                                )}
                            </AuthorMeta>
                        </AuthorRow>
                    </>
                )}

                {/* My Posters: visibility badge */}
                {variant === 'myposters' && (
                    <CardVisibilityBadge $backgroundColor={bgColor} $color={txtColor} $public={poster.visibility === 'public'}>
                        {poster.visibility === 'public' ? t('DASH_Public') : t('DASH_Private')}
                    </CardVisibilityBadge>
                )}

                {/* Favorites: author info */}
                {variant === 'favorites' && (
                    <>
                        <Divider $color={txtColor} />
                        <AuthorRow
                            style={{ cursor: author?.username ? 'pointer' : 'default' }}
                            onClick={(e) => { if (author?.username) { e.stopPropagation(); navigate(`/u/${author.username}`); } }}
                        >
                            <AvatarWrap>
                                {author?.avatar
                                    ? <AvatarImg src={author.avatar} alt={author.name} />
                                    : (author?.name || '?').charAt(0).toUpperCase()
                                }
                            </AvatarWrap>
                            <AuthorMeta>
                                <AuthorName $color={txtColor}>
                                    {author?.name || author?.username || 'Unknown'}
                                </AuthorName>
                                {badgeInfo && (
                                    <BadgeLabel $color={txtColor}>
                                        {t(`BADGE_TYPE_${badgeInfo.type}`)} {t(`BADGE_TIER_${badgeInfo.tier}`)}
                                    </BadgeLabel>
                                )}
                            </AuthorMeta>
                        </AuthorRow>
                    </>
                )}
            </Info>

            {/* My Posters: action buttons */}
            {variant === 'myposters' && (
                <CardActionRow>
                    <CardActionBtn
                        $accentColor={txtColor}
                        $backgroundColor={bgColor}
                        onClick={(e) => { e.stopPropagation(); onVisibilityChange(poster._id, poster.visibility === 'public' ? 'private' : 'public'); }}
                    >
                        {poster.visibility === 'public' ? t('DASH_MakePrivate') : t('DASH_MakePublic')}
                    </CardActionBtn>
                    <CardActionBtn
                        $danger
                        $accentColor={txtColor}
                        $backgroundColor={bgColor}
                        onClick={(e) => { e.stopPropagation(); onDelete(poster); }}
                    >
                        {t('DASH_Delete')}
                    </CardActionBtn>
                </CardActionRow>
            )}

            {/* Favorites: unfavorite button */}
            {variant === 'favorites' && (
                <CardActionRow>
                    <CardActionBtn
                        $danger
                        $accentColor={txtColor}
                        $backgroundColor={bgColor}
                        onClick={(e) => { e.stopPropagation(); onUnfavorite(poster._id); }}
                    >
                        {t('DASH_Unfavorite')}
                    </CardActionBtn>
                </CardActionRow>
            )}
        </Card>

        {ctxMenu && createPortal(
            <>
                <CtxOverlay
                    onClick={() => setCtxMenu(null)}
                    onContextMenu={(e) => { e.preventDefault(); setCtxMenu(null); }}
                />
                <CtxMenu style={{ left: ctxMenu.x, top: ctxMenu.y }}>
                    {isAuthenticated && variant !== 'favorites' && (
                        <CtxItem onClick={handleCtxFavorite}>
                            {favorited ? <IoHeart /> : <IoHeartOutline />}
                            {favorited ? t('CARD_CTX_Unlike') : t('CARD_CTX_Like')}
                        </CtxItem>
                    )}
                    <CtxItem onClick={() => { setCtxMenu(null); navigate(`/p/${poster._id}`); }}>
                        <IoEye />
                        {t('CARD_CTX_Open')}
                    </CtxItem>
                    <CtxItem onClick={() => { setCtxMenu(null); window.open(`/p/${poster._id}`, '_blank'); }}>
                        <IoOpenOutline />
                        {t('CARD_CTX_OpenNewTab')}
                    </CtxItem>
                    {author?.username && (
                        <CtxItem onClick={() => { setCtxMenu(null); navigate(`/u/${author.username}`); }}>
                            <IoPersonOutline />
                            {t('CARD_CTX_UserProfile')}
                        </CtxItem>
                    )}
                    {author?.username && (
                        <CtxItem onClick={() => { setCtxMenu(null); window.open(`/u/${author.username}`, '_blank'); }}>
                            <IoOpenOutline />
                            {t('CARD_CTX_UserProfileNewTab')}
                        </CtxItem>
                    )}

                    {isAdmin && (
                        <>
                            <CtxDivider />
                            <CtxLabel>{t('CARD_CTX_Admin')}</CtxLabel>
                            {author?._id && (
                                <CtxItem onClick={() => copyToClipboard(String(author._id), 'user')}>
                                    <IoCopyOutline />
                                    {ctxCopied === 'user' ? t('CARD_CTX_Copied') : t('CARD_CTX_CopyUserId')}
                                </CtxItem>
                            )}
                            <CtxItem onClick={() => copyToClipboard(String(poster._id), 'poster')}>
                                <IoCopyOutline />
                                {ctxCopied === 'poster' ? t('CARD_CTX_Copied') : t('CARD_CTX_CopyPosterId')}
                            </CtxItem>
                            <CtxItem onClick={handleAdminVisibility}>
                                {localVisibility === 'public' ? <IoLockClosedOutline /> : <IoEarthOutline />}
                                {localVisibility === 'public' ? t('DASH_MakePrivate') : t('DASH_MakePublic')}
                            </CtxItem>
                            <CtxItem data-danger="true" onClick={handleAdminDelete}>
                                <IoTrashOutline />
                                {t('CARD_CTX_Delete')}
                            </CtxItem>
                        </>
                    )}
                </CtxMenu>
            </>,
            document.body
        )}
    </>);
}

export default PosterCard;
