/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../contexts/AuthContext";
import apiService from "../../services/apiService";
import AlertModal from "../Commom/AlertModal";
import {
    IoHeart,
    IoHeartOutline,
    IoTrashOutline,
    IoLockClosedOutline,
    IoEarthOutline,
    IoCheckmark,
} from "react-icons/io5";
import TierBadge from "../Commom/TierBadge";


const fmt = (n = 0) => {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(".0", "") + "M";
    if (n >= 1_000) return (n / 1_000).toFixed(1).replace(".0", "") + "k";
    return String(n);
};


const InfoSection = styled.div`
    width: 100%;
    margin-top: 28px;
    padding-top: 10px;
`;

const TopRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 14px;
`;

const AuthorArea = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    transition: opacity 0.15s;
    &:hover { opacity: 0.75; }
`;

const AvatarWrap = styled.div`
    width: 46px;
    height: 46px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    background: var(--textColor);
    color: var(--backgroundColor);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    font-weight: 700;
`;

const AvatarImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const AuthorMeta = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const AuthorName = styled.span`
    font-size: 1em;
    font-weight: 700;
    color: var(--textColor);
    display: flex;
    align-items: center;
    gap: 6px;
`;

const AuthorSub = styled.span`
    font-size: 0.78em;
    color: var(--textColor);
    opacity: 0.45;
`;

const RightArea = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
`;

const VisibilityBadge = styled.span`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.78em;
    font-weight: 600;
    padding: 5px 11px;
    border-radius: 20px;
    background: rgba(128, 128, 128, 0.12);
    color: var(--textColor);
    opacity: 0.65;
`;

const LikeButton = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 15px;
    border-radius: 20px;
    border: 1.5px solid ${({ $active }) => $active ? "var(--textColor)" : "rgba(128,128,128,0.3)"};
    background: ${({ $active }) => $active ? "var(--textColor)" : "transparent"};
    color: ${({ $active }) => $active ? "var(--backgroundColor)" : "var(--textColor)"};
    font-size: 0.88em;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
        border-color: var(--textColor);
        transform: scale(1.04);
    }

    &:disabled {
        opacity: 0.45;
        cursor: not-allowed;
    }
`;

const StatsRow = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 16px;
    flex-wrap: wrap;
`;

const Stat = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.88em;
    color: var(--textColor);
    opacity: 0.45;
`;

const ControlsSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 16px;
`;

const AdminControlsBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 16px;
    padding: 14px 16px;
    border-radius: 12px;
    border: 1.5px solid rgba(231, 76, 60, 0.3);
    background: rgba(231, 76, 60, 0.05);
`;

const ControlsLabel = styled.p`
    font-size: 0.7em;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #e74c3c;
    margin: 0 0 6px 0;
    display: flex;
    align-items: center;
    gap: 6px;
`;

const ControlsBtnRow = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`;

const VisibilityBtn = styled.button`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 9px 18px;
    border-radius: 10px;
    border: 1.5px solid rgba(128, 128, 128, 0.22);
    background: rgba(128, 128, 128, 0.07);
    color: var(--textColor);
    font-size: 0.86em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.18s ease;
    flex: 1;
    min-width: 130px;
    justify-content: center;

    &:hover:not(:disabled) {
        background: rgba(128, 128, 128, 0.14);
        border-color: rgba(128, 128, 128, 0.45);
        transform: translateY(-1px);
    }

    &:active:not(:disabled) {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
`;

const DeleteBtn = styled.button`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 9px 18px;
    border-radius: 10px;
    border: 1.5px solid rgba(231, 76, 60, 0.35);
    background: rgba(231, 76, 60, 0.07);
    color: #e74c3c;
    font-size: 0.86em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.18s ease;
    flex: 1;
    min-width: 100px;
    justify-content: center;

    &:hover:not(:disabled) {
        background: rgba(231, 76, 60, 0.16);
        border-color: rgba(231, 76, 60, 0.65);
        transform: translateY(-1px);
    }

    &:active:not(:disabled) {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
`;

const FilledHeart = styled(IoHeart)`
    fill: var(--backgroundColor);
`;

const OutlinedHeart = styled(IoHeartOutline)`
    stroke: var(--textColor);
`;

const SaveBtn = styled.button`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 9px 18px;
    border-radius: 10px;
    border: 1.5px solid rgba(76, 175, 80, 0.35);
    background: rgba(76, 175, 80, 0.07);
    color: #4cb050;
    font-size: 0.86em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.18s ease;
    flex: 1;
    min-width: 100px;
    justify-content: center;

    &:hover:not(:disabled) {
        background: rgba(76, 175, 80, 0.16);
        border-color: rgba(76, 175, 80, 0.65);
        transform: translateY(-1px);
    }

    &:active:not(:disabled) {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
`;

export default function PosterInfo({ poster, onDeleted, onVisibilityChanged, onSave, isSavingPoster, isOwnerOrAdmin }) {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const { user, isAuthenticated } = useAuth();

    const [favorited, setFavorited] = useState(poster.favorited || false);
    const [favCount, setFavCount] = useState(poster.favoritesCount || 0);
    const [favLoading, setFavLoading] = useState(false);

    const [visibility, setVisibility] = useState(poster.visibility || "public");
    const [visLoading, setVisLoading] = useState(false);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const author = poster.authorId;

    const isOwner = isAuthenticated && user?.id === author?._id?.toString();
    const isAdmin = isAuthenticated && user?.permissions?.includes("admin");

    const handleFavorite = async () => {
        if (!isAuthenticated || favLoading) return;
        setFavLoading(true);
        const prev = favorited;
        const prevCount = favCount;
        setFavorited(!prev);
        setFavCount(prev ? prevCount - 1 : prevCount + 1);
        try {
            await apiService.toggleFavorite(poster._id);
        } catch {
            setFavorited(prev);
            setFavCount(prevCount);
        } finally {
            setFavLoading(false);
        }
    };

    const handleVisibilityToggle = async () => {
        if (visLoading) return;
        setVisLoading(true);
        const newVis = visibility === "public" ? "private" : "public";
        try {
            await apiService.updatePosterVisibility(poster._id, newVis);
            setVisibility(newVis);
            onVisibilityChanged?.(poster._id, newVis);
        } catch (e) {
            console.error("Failed to update visibility", e);
        } finally {
            setVisLoading(false);
        }
    };

    const handleDelete = async () => {
        if (isDeleting) return;
        setIsDeleting(true);
        try {
            await apiService.deletePoster(poster._id);
            setShowDeleteModal(false);
            onDeleted?.(poster._id);
        } catch (e) {
            console.error("Failed to delete poster", e);
        } finally {
            setIsDeleting(false);
        }
    };

    const createdAt = poster.createdAt
        ? new Date(poster.createdAt).toLocaleDateString(i18n.language, {
            year: "numeric",
            month: "short",
            day: "numeric",
        })
        : null;

    return (
        <>
            {showDeleteModal && (
                <AlertModal
                    title={t("DASH_ConfirmDeleteTitle")}
                    paragraph={t("DASH_ConfirmDelete")}
                    confirmText={t("DASH_Delete")}
                    cancelText={t("GoBack")}
                    onConfirm={handleDelete}
                    onCancel={() => setShowDeleteModal(false)}
                    canClose={true}
                    isClosing={false}
                />
            )}

            <InfoSection>
                <TopRow>
                    <AuthorArea
                        onClick={() =>
                            author?.username && navigate(`/u/${author.username}`)
                        }
                    >
                        <AvatarWrap>
                            {author?.avatar ? (
                                <AvatarImg src={author.avatar} alt={author.name} />
                            ) : (
                                (author?.name || "?").charAt(0).toUpperCase()
                            )}
                        </AvatarWrap>
                        <AuthorMeta>
                            <AuthorName>
                                {author?.name || author?.username || "Unknown"}
                                {author?.badge && <TierBadge badge={author.badge} size={18} />}
                            </AuthorName>
                            {createdAt && (
                                <AuthorSub>
                                    {t("POSTER_INFO_PublishedAt")} {createdAt}
                                </AuthorSub>
                            )}
                        </AuthorMeta>
                    </AuthorArea>

                    <RightArea>
                        <VisibilityBadge>
                            {visibility === "public" ? (
                                <><IoEarthOutline /> {t("DASH_Public")}</>
                            ) : (
                                <><IoLockClosedOutline /> {t("DASH_Private")}</>
                            )}
                        </VisibilityBadge>
                        <LikeButton
                            $active={favorited}
                            onClick={handleFavorite}
                            disabled={!isAuthenticated || favLoading}
                        >
                            {favorited ? <FilledHeart /> : <OutlinedHeart />}
                            {fmt(favCount)}
                        </LikeButton>
                    </RightArea>
                </TopRow>

                {/* <StatsRow>
                    <Stat><IoEye /> {fmt(poster.views || 0)}</Stat>
                    <Stat><IoCloudDownload /> {fmt(poster.downloads || 0)}</Stat>
                    <Stat><FilledHeart /> {fmt(favCount)}</Stat>
                    <Stat><FiEdit2 /> {fmt(poster.edits || 0)}</Stat>
                </StatsRow> */}

                {isOwner && (
                    <ControlsSection>
                        <ControlsBtnRow>
                            {isOwnerOrAdmin && onSave && (
                                <SaveBtn
                                    onClick={onSave}
                                    disabled={isSavingPoster}
                                >
                                    <IoCheckmark /> {isSavingPoster ? '…' : t('EDITOR_SaveButton')}
                                </SaveBtn>
                            )}
                            <VisibilityBtn
                                onClick={handleVisibilityToggle}
                                disabled={visLoading}
                            >
                                {visibility === "public" ? (
                                    <><IoLockClosedOutline /> {t("DASH_MakePrivate")}</>
                                ) : (
                                    <><IoEarthOutline /> {t("DASH_MakePublic")}</>
                                )}
                            </VisibilityBtn>
                            <DeleteBtn onClick={() => setShowDeleteModal(true)}>
                                <IoTrashOutline /> {t("DASH_Delete")}
                            </DeleteBtn>
                        </ControlsBtnRow>
                    </ControlsSection>
                )}

                {isAdmin && !isOwner && (
                    <AdminControlsBox>
                        <ControlsLabel>
                            <IoTrashOutline /> {t("POSTER_INFO_AdminControls")}
                        </ControlsLabel>
                        <ControlsBtnRow>
                            {isOwnerOrAdmin && onSave && (
                                <SaveBtn
                                    onClick={onSave}
                                    disabled={isSavingPoster}
                                >
                                    <IoCheckmark /> {isSavingPoster ? '…' : t('EDITOR_SaveButton')}
                                </SaveBtn>
                            )}
                            <VisibilityBtn
                                onClick={handleVisibilityToggle}
                                disabled={visLoading}
                            >
                                {visibility === "public" ? (
                                    <><IoLockClosedOutline /> {t("DASH_MakePrivate")}</>
                                ) : (
                                    <><IoEarthOutline /> {t("DASH_MakePublic")}</>
                                )}
                            </VisibilityBtn>
                            <DeleteBtn onClick={() => setShowDeleteModal(true)}>
                                <IoTrashOutline /> {t("DASH_Delete")}
                            </DeleteBtn>
                        </ControlsBtnRow>
                    </AdminControlsBox>
                )}
            </InfoSection>
        </>
    );
}
