/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styled from "styled-components";
import Album from "./Commom/Album";
import LoadingDiv from "./Commom/LoadingDiv";
import { useTranslation } from "react-i18next";

const Container = styled.div`
    width: 81%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    gap: 20px;
    justify-content: center;
    justify-items: center;

    @media (max-width: 650px) {
        display: flex;
        overflow-x: scroll;
        gap: 15px;
        flex-direction: column;
        width: 89%;
    }
`;

const LoadMoreButton = styled.button`
    width: 81%;
    margin: 20px auto;
    padding: 8px 17px;
    background-color: var(--AccentColor);
    color: var(--backgroundColor);
    border: none;
    border-radius: 25px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: block;
    background-color: var(--textColor);

    &:hover {
        background-color: var(--AccentColor);
    }

    &:disabled {
        background-color: #666;
        cursor: not-allowed;
    }

    @media (max-width: 650px) {
        width: 89%;
    }
`;

const PaginationContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-inline: auto;
`;

function Grid({ query, onclick }) {
    const {t} = useTranslation();

    const [albums, setAlbums] = useState([]);
    const [token, setToken] = useState('');
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const limit = 20;

    useEffect(() => {
        const fetchAccessToken = async () => {
            const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
            const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

            const response = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`
                },
                body: 'grant_type=client_credentials'
            });

            const data = await response.json();
            setToken(data.access_token);
        };

        fetchAccessToken();
    }, []);

    useEffect(() => {
        setAlbums([]);
        setOffset(0);
        setHasMore(true);
    }, [query]);

    useEffect(() => {
        const fetchAlbums = async (isLoadMore = false) => {
            if (!token) return;
            
            if (!isLoadMore) {
                setLoading(true);
            } else {
                setLoadingMore(true);
            }
    
            try {
                let response;
                const currentOffset = isLoadMore ? offset : 0;
                
                if (query) {
                    response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=album&limit=${limit}&offset=${currentOffset}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                } else {
                    response = await fetch(`https://api.spotify.com/v1/browse/new-releases?offset=${currentOffset}&limit=${limit}&locale=en-US`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                }
    
                if (!response.ok) {
                    const errorMessage = await response.text();
                    throw new Error(`Erro na API: ${errorMessage}`);
                }
                
                const data = await response.json();
                const albumsData = (query ? data.albums.items : data.albums.items).filter(album => album !== null && album !== undefined);
                
                const newAlbums = albumsData.map(album => ({
                    id: album.id,
                    title: album.name,
                    artist: album.artists?.map(artist => artist.name).join(', '),
                    cover: album.images[0]?.url
                }));

                if (isLoadMore) {
                    setAlbums(prevAlbums => [...prevAlbums, ...newAlbums]);
                } else {
                    setAlbums(newAlbums);
                }

                const totalResults = query ? data.albums.total : data.albums.total;
                const currentTotal = isLoadMore ? albums.length + newAlbums.length : newAlbums.length;
                setHasMore(currentTotal < totalResults && newAlbums.length === limit);
                
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
                setLoadingMore(false);
            }
        };
    
        if (token && (albums.length === 0 || offset === 0)) {
            fetchAlbums(false);
        }
    }, [query, token]);

    const loadMoreAlbums = async () => {
        if (!token || !hasMore || loadingMore) return;
        
        const newOffset = offset + limit;
        setOffset(newOffset);
        
        try {
            setLoadingMore(true);
            let response;
            
            if (query) {
                response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=album&limit=${limit}&offset=${newOffset}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            } else {
                response = await fetch(`https://api.spotify.com/v1/browse/new-releases?offset=${newOffset}&limit=${limit}&locale=en-US`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            }

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`Erro na API: ${errorMessage}`);
            }
            
            const data = await response.json();
            const albumsData = (query ? data.albums.items : data.albums.items).filter(album => album !== null && album !== undefined);
            
            const newAlbums = albumsData.map(album => ({
                id: album.id,
                title: album.name,
                artist: album.artists?.map(artist => artist.name).join(', '),
                cover: album.images[0]?.url
            }));

            setAlbums(prevAlbums => [...prevAlbums, ...newAlbums]);

            const totalResults = query ? data.albums.total : data.albums.total;
            const currentTotal = albums.length + newAlbums.length;
            setHasMore(currentTotal < totalResults && newAlbums.length === limit);
            
        } catch (err) {
            console.error(err);
        } finally {
            setLoadingMore(false);
        }
    };
    

    return (
        <>
            {loading && albums.length === 0 ? (
                <LoadingDiv/>
            ) : (
                <>
                    <Container>
                        {albums.map((album, index) => (
                            <Album 
                                key={album.id} 
                                onClick={() => onclick(album.id)} 
                                cover={album.cover} 
                                title={album.title} 
                                artist={album.artist} 
                                id={album.id}
                                animationDelay={index - offset * 100}
                            />
                        ))}
                    </Container>
                    {hasMore && (
                        <PaginationContainer>
                            <LoadMoreButton 
                                onClick={loadMoreAlbums} 
                                disabled={loadingMore}
                            >
                                {loadingMore ? t("LoadingMore") : t("LoadMore")}
                            </LoadMoreButton>
                        </PaginationContainer>
                    )}
                </>
            )}
        </>
    );
}

export default Grid;
