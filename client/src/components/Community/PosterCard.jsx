/* eslint-disable react/prop-types */
import { useState, useEffect, useRef, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { trackCommunityPosterOpenInEditor } from "../../services/analytics";
import CanvasPoster from "../PosterEditor/CanvasPoster";
import { IoEye, IoHeart, IoCloudDownload } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import apiService from "../../services/apiService";


const spin = keyframes`
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`;


const Card = styled.div`
    border-radius: 13px;
    background-color: ${({ $bg }) => $bg || 'var(--glassBackground)'};
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    display: flex;
    flex-direction: column;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 36px rgba(0, 0, 0, 0.2);
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
    background: var(--AccentColor);
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


function PosterCard({ poster }) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const cardRef = useRef(null);

    const [isVisible, setIsVisible]     = useState(false);
    const [thumbnailUrl, setThumbnailUrl] = useState(null);

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

    const handleOpenInEditor = (e) => {
        e.stopPropagation();
        apiService.registerEdit(poster._id).catch(() => {});
        trackCommunityPosterOpenInEditor(poster._id, poster.albumName, poster.artistsName);
        navigate(`/p/${poster._id}`);
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

    return (
        <Card ref={cardRef} onClick={handleCardClick} $bg={bgColor}>
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
                        {/* {isVisible && hasAlbumCover && (
                            <SpinnerWrapper>
                                <SpinnerIcon $color={txtColor} />
                            </SpinnerWrapper>
                        )} */}
                    </ColorPlaceholder>
                )}

                {/* <Overlay>
                    <OverlayBtn onClick={handleOpenInEditor}>
                        <FiEdit2 size={12} />
                        {t('COMMUNITY_OpenInEditor')}
                    </OverlayBtn>
                </Overlay> */}
            </ThumbnailWrapper>

            <Info>
                <AlbumName $color={txtColor}>{poster.albumName}</AlbumName>
                <ArtistName $color={txtColor}>{poster.artistsName}</ArtistName>

                <Divider $color={txtColor} />

                <AuthorRow>
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

                {/* <StatsRow>
                    <Stat $color={txtColor}><IoEye size={15} /> {fmt(poster.views)}</Stat>
                    <Stat $color={txtColor}><IoCloudDownload size={15} /> {fmt(poster.downloads)}</Stat>
                    <Stat $color={txtColor}><IoHeart size={15} /> {fmt(poster.favoritesCount)}</Stat>
                </StatsRow> */}
            </Info>
        </Card>
    );
}

export default PosterCard;
