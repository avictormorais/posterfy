import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../contexts/AuthContext";
import apiService from "../../services/apiService";
import { FaGoogle } from "react-icons/fa";
import { SiSpotify } from "react-icons/si";
import { useTranslation } from 'react-i18next';
import { BiSolidHourglass } from "react-icons/bi";
import Loading from "../../components/Commom/Loading";
import EditProfileModal from "../../components/EditProfileModal";

const Container = styled.div`
    display: flex;
    align-items: center;
    min-height: 85dvh;
    flex-direction: column;
`;

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    margin-top: 120px;
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    width: 100%;
`;

const Avatar = styled.img`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
    background-color: var(--textColor);
    border: 3px solid var(--textColor);
`;

const UserName = styled.h2`
    color: var(--textColor);
    font-size: 1.5em;
    font-weight: bolder;
    align-items: center;
    justify-content: center;
`;

const Username = styled.p`
    color: var(--textColor);
    font-size: 1em;
    font-weight: bolder;
    opacity: 0.75;
    margin-top: 3px;
`;

const LogoutButton = styled.button`
    background-color: var(--AccentColor);
    color: var(--backgroundColor);
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bolder;
    font-size: 0.85em;
    transition: all 0.3s ease;
    width: 120px;
    height: 30px;
    margin-left: 10px;

    &:hover {
        background-color: var(--textColor);
    }
`;

const EditButton = styled.button`
    background-color: var(--textColor);
    color: var(--backgroundColor);
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bolder;
    font-size: 0.85em;
    transition: all 0.3s ease;
    width: 120px;
    height: 30px;
    margin-left: auto;

    &:hover {
        background-color: var(--AccentColor);
    }
`;

const LoadingText = styled.p`
    color: var(--textColor);
    font-size: 1.2em;
`;

const GoogleIcon = styled(FaGoogle)`
    width: 15px;
    height: 15px;
    fill: var(--backgroundColor);
`;

const SpotifyIcon = styled(SiSpotify)`
    width: 15px;
    height: 15px;
    fill: var(--backgroundColor);
`;

const BadgeDiv = styled.div`
    background-color: var(--textColor);
    border-radius: 20px;
    padding: 5px;
    width: 15px;
    height: 15px;
    margin-left: 10px;
    margin-top: 2px;
    cursor: pointer;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

const HourglassIcon = styled(BiSolidHourglass)`
    width: 100px;
    height: 100px;
    fill: var(--textColor);
    margin-top: 150px;
`;

const NoActivityText = styled.p`
    color: var(--textColor);
    font-size: 1.35em;
    margin-top: 20px;
`;

const NotMobileDiv = styled.div`
    display: flex;
    margin-left: auto;

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

const MobileDiv = styled.div`
    display: none;
    width: 80%;
    margin-top: 20px;

    @media screen and (max-width: 900px) {
        display: flex;
    }
`;

export default function Dashboard() {
    const navigate = useNavigate();
    const { user, loading, logout, isAuthenticated } = useAuth();
    const [userProfile, setUserProfile] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            navigate('/login');
            return;
        }

        if (isAuthenticated && user) {
            fetchUserProfile();
        }
    }, [isAuthenticated, loading, navigate, user]);

    const fetchUserProfile = async () => {
        try {
            const data = await apiService.getUserProfile();
            setUserProfile(data.user);
        } catch (error) {
            console.error('Failed to fetch user profile:', error);
        }
    };

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    const handleEditProfile = () => {
        setIsEditModalOpen(true);
    };

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
    };

    const handleProfileUpdate = () => {
        fetchUserProfile();
    };

    if (loading) {
        return (
            <Loading isVisible={true} initialFade={true} />
        );
    }

    if (!user) {
        return null;
    }

    return (
        <Container>
            <Navbar iconColor="var(--AccentColor)" />
            <ProfileContainer>
                {userProfile?.avatar && (
                    <Avatar src={userProfile.avatar} alt={userProfile.name} />
                )}
                <UserInfo>
                    <Row>
                        <UserName>
                            {userProfile?.name || user.name}
                        </UserName>
                        {userProfile?.hasGoogle && (
                            <BadgeDiv title={t('ConnectedToGoogle')}><GoogleIcon /></BadgeDiv>
                        )}
                        {userProfile?.hasSpotify && (
                            <BadgeDiv title={t('ConnectedToSpotify')}><SpotifyIcon /></BadgeDiv>
                        )}

                        <NotMobileDiv>
                            <EditButton onClick={handleEditProfile}>{t('EditProfile')}</EditButton>
                            <LogoutButton onClick={handleLogout}>{t('Logout')}</LogoutButton>
                        </NotMobileDiv>
                    </Row>
                    <Username>@{userProfile?.username || user.username}</Username>
                </UserInfo>
            </ProfileContainer>

            <MobileDiv>
                <EditButton onClick={handleEditProfile}>{t('EditProfile')}</EditButton>
                <LogoutButton onClick={handleLogout}>{t('Logout')}</LogoutButton>
            </MobileDiv>

            <HourglassIcon/>
            <NoActivityText>{t('NoActivityYet')}</NoActivityText>

            <EditProfileModal
                isOpen={isEditModalOpen}
                onClose={handleCloseEditModal}
                onProfileUpdate={handleProfileUpdate}
            />
        </Container>
    );
}