import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../contexts/AuthContext";
import apiService from "../../services/apiService";
import { FaGoogle } from "react-icons/fa";
import { SiSpotify } from "react-icons/si";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    flex-direction: column;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 20px;
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 20px;
    border-radius: 10px;
    background-color: var(--backgroundColor);
`;

const Avatar = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
`;

const UserDetail = styled.p`
    color: var(--textColor);
    font-size: 1em;
    margin: 0;
    align-items: center;
    justify-content: center;
    display: flex;

    strong{
        margin-right: 5px;
    }
`;

const LogoutButton = styled.button`
    background-color: var(--AccentColor);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bolder;
    font-size: 1em;
    transition: all 0.3s ease;

    &:hover {
        opacity: 0.8;
    }
`;

const LoadingText = styled.p`
    color: var(--textColor);
    font-size: 1.2em;
`;

const GoogleIcon = styled(FaGoogle)`
    width: 20px;
    height: 20px;
`;

const SpotifyIcon = styled(SiSpotify)`
    width: 20px;
    height: 20px;
    margin-left: 5px;
`;


export default function Dashboard() {
    const navigate = useNavigate();
    const { user, loading, logout, isAuthenticated } = useAuth();
    const [userProfile, setUserProfile] = useState(null);

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

    if (loading) {
        return (
            <Container>
                <Navbar iconColor="var(--AccentColor)" />
                <Content>
                    <LoadingText>Loading...</LoadingText>
                </Content>
            </Container>
        );
    }

    if (!user) {
        return null;
    }

    return (
        <Container>
            <Navbar iconColor="var(--AccentColor)" />
            <Content>
                <UserInfo>
                    {userProfile?.avatar && (
                        <Avatar src={userProfile.avatar} alt={userProfile.name} />
                    )}
                    <UserDetail><strong>Name:</strong> {userProfile?.name || user.name}</UserDetail>
                    <UserDetail><strong>Username:</strong> @{userProfile?.username || user.username}</UserDetail>
                    <UserDetail><strong>Email:</strong> {userProfile?.email || user.email}</UserDetail>
                    <UserDetail>
                        <strong>Connected Accounts:</strong> {userProfile?.hasGoogle && <GoogleIcon />} {userProfile?.hasSpotify && <SpotifyIcon />}
                    </UserDetail>
                </UserInfo>

                <LogoutButton onClick={handleLogout}>
                    Logout
                </LogoutButton>
            </Content>
        </Container>
    );
}