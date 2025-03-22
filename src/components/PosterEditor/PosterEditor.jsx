/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import styled, { css, keyframes } from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import NormalInput from "./inputs/NormalInput";
import DoubleInput from "./inputs/DoubleInput";
import ColorInput from "./inputs/ColorInput";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import ColorSelector from "./ColorSelector";
import CheckInput from "./inputs/CheckInput";
import FileInput from "./inputs/FileInput";
import { IoMdDownload } from "react-icons/io";
import { MdOutlineRefresh } from "react-icons/md";
import LoadingDiv from "../LoadingDiv";
import { Palette } from "color-thief-react";
import CanvasPoster from "./CanvasPoster";

const Container = styled.div`
    width: 80%;
    margin-inline: auto;
`

const DivBack = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: min-content;
    margin-top: 25px;
    cursor: pointer;
`

const ArrowBack = styled(IoArrowBack)`
    font-size: 2em;
    margin-right: 5px;
    cursor: pointer;
`

const TextBack = styled.h3`
    font-size: 1.3em;
    font-weight: bold;
`

const ContainerEditor = styled.div`
    width: 100%;
    height: auto;
    margin-top: 15px;
    display: flex;
    flex-direction: row;

    @media (max-width: 1300px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const PosterPreview = styled.img`
    width: 388px;

    @media (max-width: 450px) {
        width: 95%;
    }
`

const EditorColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const EditorSettings = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 7px;
    padding-inline: 30px;
    width: 100%;

    @media (max-width: 1300px) {
        margin-top: 15px;
    }

    @media (max-width: 530px) {
        padding: 0;
    }
`

const DivButtons = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    margin-inline: -20px;
    justify-content: end;

    @media (max-width: 450px) {
        justify-content: center;
    }

    @media (max-width: 350px) {
        flex-direction: column;
    }
`

const ButtonDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 7px 15px;
    width: min-content;
    margin-left: 15px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    z-index: 1;

    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0);
        transition: background-color 0.5s;
        z-index: -1;
    }

    :hover::before {
        background-color: rgba(255, 255, 255, 0.1);
    }

    @media (max-width: 350px) {
        margin-inline: auto;
        margin-bottom: 20px;
        padding-inline: 50px;
    }
`

const ButtonText = styled.p`
    font-size: .85em;
    margin-inline: 10px;
    font-weight: bold;
`

const IconDownload = styled(IoMdDownload)`
    font-size: 1.15em;
`

const IconApply = styled(MdOutlineRefresh)`
    font-size: 1.15em;
    will-change: transform;
    ${({ $spinning }) =>
            $spinning
                    ? css`
                  animation: ${keyframes`
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                  `} 0.8s linear infinite;
              `
                    : css`
                  animation: ${keyframes`
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                  `} 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
              `}
`;

const FakePoster = styled.div`
    width: 560px;

    @media (max-width: 450px) {
        width: 95%;
    }
`

function PosterEditor({ albumID, handleClickBack }){
    const { t } = useTranslation();
    const previewRef = useRef(null);

    const [albumName, setAlbumName] = useState('');
    const [artistsName, setArtistsName] = useState('');
    const [titleSize, setTitleSize] = useState('200');
    const [artistsSize, setArtistsSize] = useState('110');
    const [tracksSize, setTracksSize] = useState('50');
    const [marginTop, setMarginTop] = useState('');
    const [marginSide, setmarginSide] = useState(160);
    const [marginCover, setMarginCover] = useState(0);
    const [backgroundColor, setbackgroundColor] = useState('#5900ff');
    const [textColor, setTextColor] = useState('#ff9100');
    const [color1, setcolor1] = useState('#ff0000');
    const [color2, setcolor2] = useState('#00ff40');
    const [color3, setcolor3] = useState('#2600ff');
    const [useWatermark, setUseWatermark] = useState(true);
    const [useFade, setUseFade] = useState(true);
    const [showTracklist, setShowTracklist] = useState(false);
    const [albumCover, setAlbumCover] = useState('');
    const [uncompressedAlbumCover, setUncompressedAlbumCover] = useState('');
    const [useUncompressed, setUseUncompressed] = useState(false);
    const [fileName, setFileName] = useState("Original");
    const [tracklist, setTracklist] = useState('');

    const [titleRelease, setTitleRelease] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [titleRuntime, setTitleRuntime] = useState('');
    const [runtime, setRuntime] = useState('');

    const [showColorSelector, setShowColorSelector] = useState(false);
    const [colorInputPosition, setColorInputPosition] = useState(null);
    const [currentColorInput, setCurrentColorInput] = useState(null);

    const posterData = {
        albumCover,
        uncompressedAlbumCover,
        useUncompressed,
        albumName,
        artistsName,
        titleSize,
        artistsSize,
        tracksSize,
        marginTop,
        marginSide,
        marginCover,
        titleRelease,
        releaseDate,
        titleRuntime,
        runtime,
        backgroundColor,
        textColor,
        useWatermark,
        useFade,
        showTracklist,
        tracklist,
        color1,
        color2,
        color3,
        albumID
    };

    const [image, setImage] = useState(null);
    const [generatePoster, setGeneratePoster] = useState(false);
    const [infosLoaded, setInfosLoaded] = useState(false);

    const [spinApplyButton, setSpinApplyButton] = useState(false);

    const handleImageReady = (imageUrl) => {
        setImage(imageUrl);
        setGeneratePoster(false);
        setSpinApplyButton(false);
    };

    const handleApplyClick = () => {
        // requestAnimationFrame will prevent the initial stutter in the animation of the apply icon spinning
        requestAnimationFrame(() => {
            setSpinApplyButton(true); // Set spinning to true in the next frame
            setGeneratePoster(true);
            if (previewRef.current) {
                window.scrollTo({
                    top: previewRef.current.offsetTop - 150,
                    behavior: 'smooth'
                });
            }
        });
    };

    const handleFileChange = (file) => {
        setAlbumCover(URL.createObjectURL(file));
        setUseUncompressed(false);
        setUncompressedAlbumCover('');
        setFileName(file.name);
    };

    const handleDownloadClick = () => {
        if (!image) return;
        const link = document.createElement('a');
        link.href = image;
        link.download = `Posterfy - ${albumName}.png`;
        link.click();
    };
    
    const handleCoverDownloadClick = async () => {
        if (useUncompressed) {
            if (!uncompressedAlbumCover) return;
            const blob = await (await fetch(await uncompressedAlbumCover)).blob();
            const link = Object.assign(document.createElement('a'), {
                href: URL.createObjectURL(blob),
                download: `Posterfy - ${albumName} Uncompressed Cover.png`
            });
            link.click();
            URL.revokeObjectURL(link.href);
        } else {
            if (!albumCover) return;
            const blob = await (await fetch(albumCover)).blob();
            const link = Object.assign(document.createElement('a'), {
                href: URL.createObjectURL(blob),
                download: `Posterfy - ${albumName} Cover.png`
            });
            link.click();
            URL.revokeObjectURL(link.href);
        }
    };

    function handleColorInputClick(e, colorInputName) {
        const rect = e.target.getBoundingClientRect();
        setColorInputPosition({
            top: rect.top + window.scrollY,
            left: rect.left + window.scrollX,
        });
        setCurrentColorInput(colorInputName);
        setShowColorSelector(true);
    }

    function handleColorSelectorClose() {
        setShowColorSelector(false);
    };

    async function getItunesUncompressedAlbumCover(searchQuery, country = "us") {
        
        // Method derived from https://github.com/bendodson/itunes-artwork-finder/blob/master/api.php

        try {
            let apiUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(searchQuery)}&country=${country}&entity=album&limit=1`;
            let response = await fetch(apiUrl);
            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    
            let data = await response.json();
            if (!data.results?.length) {
                console.warn("No album data found.");
                setUseUncompressed(false);  // unable to find uncompressed based on inputted information
                return '';
            }
    
            let result = data.results[0]; // Take the first result
            let hires = result.artworkUrl100.replace("100x100bb", "100000x100000-999");
            let parts = hires.split("/image/thumb/");
            
            let uncompressedCover = parts.length === 2 
                ? `https://a5.mzstatic.com/us/r1000/0/${parts[1].split("/").slice(0, -1).join("/")}`
                : '';
            return uncompressedCover;

        } catch (error) {
            console.error("Error fetching album cover:", error.message);
            return '';
        }
    }

    useEffect(() => {
        setTitleRelease(t('EDITOR_ReleaseTitle'));
        setTitleRuntime(t('EDITOR_RuntimeTitle'));
    }, [t]);

    useEffect(() => {
        const fetchAlbumData = async () => {
            try {
                const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
                const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
    
                const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
                    method: "POST",
                    headers: {
                        Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams({
                        grant_type: "client_credentials",
                    }),
                });
    
                const tokenData = await tokenResponse.json();
                const accessToken = tokenData.access_token;
    
                const albumResponse = await fetch(`https://api.spotify.com/v1/albums/${albumID}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
    
                const albumData = await albumResponse.json();
                const formattedArtistsName = albumData.artists.map((artist) => artist.name).join(", ");
                setAlbumName(albumData.name);
                setArtistsName(formattedArtistsName);
                setAlbumCover(albumData.images[0]?.url);
                setReleaseDate(albumData.release_date);
                setUncompressedAlbumCover(await getItunesUncompressedAlbumCover(albumData.name + " " + formattedArtistsName));
                
                const runtime = albumData.tracks.items.reduce((totalDuration, track) => totalDuration + track.duration_ms, 0);
                const totalSeconds = Math.floor(runtime / 1000);
                const totalMinutes = Math.floor(totalSeconds / 60);
                const totalHours = Math.floor(totalMinutes / 60);
                const remainingSeconds = totalSeconds % 60;
                const remainingMinutes = totalMinutes % 60;

                const formattedRuntime = totalHours > 0
                ? `${totalHours}h ${remainingMinutes}min ${remainingSeconds}s`
                : `${remainingMinutes}min ${remainingSeconds}s`;
                setRuntime(formattedRuntime);

                const tracklist = albumData.tracks.items.map((track, index) => {
                    const trackNameWithoutParentheses = track.name.replace(/\s?[\[\(].*?[\]\)]/g, '');
                    if(index == 3){
                        setShowTracklist(true);
                    }
                    return `${index + 1}. ${trackNameWithoutParentheses}`;
                });
                setTracklist(tracklist.join("\n"));     
                
                setInfosLoaded(true);          
    
            } catch (error) {
                console.error("Error trying to fetch album data:", error);
            }
        };
    
        if (albumID) fetchAlbumData();
    }, [albumID]);
    

    return(
        <>
            {!infosLoaded ? (
                <LoadingDiv/>
            ) : (
                <Container>
                <Palette src={albumCover} crossOrigin="anonymous" format="hex" colorCount={5}>
                    {({ data }) => {
                        useEffect(() => {
                            if (data && data.length > 0) {
                                setbackgroundColor(data[0]);
                                setTextColor(data[1]);
                                setcolor1(data[2]);
                                setcolor2(data[3]);
                                setcolor3(data[4]);
                                handleApplyClick();
                            }
                        }, [data]);
                        return null;
                    }}
                </Palette>
                    <DivBack onClick={handleClickBack}>
                        <ArrowBack/>
                        <TextBack>
                            {t('GoBack')}
                        </TextBack>
                    </DivBack>
                    <ContainerEditor>
                        <CanvasPoster
                            onImageReady={handleImageReady}
                            posterData={posterData}
                            generatePoster={generatePoster}
                        />
                        {image ? (
                            <PosterPreview src={image} ref={previewRef} />
                        ) : (
                            <FakePoster ref={previewRef} />
                        )}
                        <EditorColumn>
                            <EditorSettings>
                                <NormalInput 
                                    title={t('EDITOR_AlbumName')} 
                                    value={albumName} 
                                    onChange={(e) => setAlbumName(e.target.value)}
                                />
                                <NormalInput 
                                    title={t('EDITOR_ArtistName')} 
                                    value={artistsName} 
                                    onChange={(e) => setArtistsName(e.target.value)}
                                />
                                <NormalInput 
                                    title={t('EDITOR_TitleSize')} 
                                    value={titleSize} 
                                    onChange={(e) => setTitleSize(e.target.value)}
                                />
                                <NormalInput 
                                    title={t('EDITOR_ArtistSize')} 
                                    value={artistsSize} 
                                    onChange={(e) => setArtistsSize(e.target.value)}
                                />
                                <NormalInput 
                                    title={t('EDITOR_TracksSize')} 
                                    value={tracksSize} 
                                    onChange={(e) => setTracksSize(e.target.value)}
                                />
                                <NormalInput 
                                    title={t('EDITOR_MarginTop')} 
                                    value={marginTop} 
                                    onChange={(e) => setMarginTop(e.target.value)}
                                />
                                <NormalInput 
                                    title={t('EDITOR_MarginSide')} 
                                    value={marginSide} 
                                    onChange={(e) => setmarginSide(e.target.value)}
                                />
                                <NormalInput 
                                    title={t('EDITOR_MarginCover')} 
                                    value={marginCover} 
                                    onChange={(e) => setMarginCover(e.target.value)}
                                />
        
                                <DoubleInput 
                                    title={titleRelease} 
                                    value={releaseDate} 
                                    onChangeTitle={(e) => setTitleRelease(e.target.value)} 
                                    onChangeDate={(e) => setReleaseDate(e.target.value)}
                                />
                                <DoubleInput 
                                    title={titleRuntime} 
                                    value={runtime} 
                                    onChangeTitle={(e) => setTitleRuntime(e.target.value)} 
                                    onChangeDate={(e) => setRuntime(e.target.value)}
                                />
        
                                <ColorInput 
                                    title={t('EDITOR_BackgroundColor')} 
                                    value={backgroundColor} 
                                    onClick={(e) => handleColorInputClick(e, 'backgroundColor')}
                                />
                                <ColorInput 
                                    title={t('EDITOR_TextColor')} 
                                    value={textColor} 
                                    onClick={(e) => handleColorInputClick(e, 'textColor')}
                                />
                                <ColorInput 
                                    title={`${t('EDITOR_Color')} 1`} 
                                    value={color1} 
                                    onClick={(e) => handleColorInputClick(e, 'color1')}
                                />
                                <ColorInput 
                                    title={`${t('EDITOR_Color')} 2`} 
                                    value={color2} 
                                    onClick={(e) => handleColorInputClick(e, 'color2')}
                                />
                                <ColorInput 
                                    title={`${t('EDITOR_Color')} 3`} 
                                    value={color3} 
                                    onClick={(e) => handleColorInputClick(e, 'color3')}
                                />
        
                                <CheckInput
                                    title={t('EDITOR_Watermark')}
                                    value={useWatermark}
                                    onChange={(newValue) => setUseWatermark(newValue)}
                                    text={t('EDITOR_WatermarkText')}
                                />
                                <CheckInput
                                    title={t('EDITOR_Fade')}
                                    value={useFade}
                                    onChange={(newValue) => setUseFade(newValue)}
                                    text={t('EDITOR_FadeText')}
                                />
                                <CheckInput
                                    title={t('EDITOR_Uncompressed')}
                                    value={useUncompressed}
                                    onChange={(newValue) => setUseUncompressed(newValue)}
                                    text={t('EDITOR_UncompressedText')}
                                />
                                <CheckInput
                                    title={t('EDITOR_Tracklist')}
                                    value={showTracklist}
                                    onChange={(newValue) => setShowTracklist(newValue)}
                                    text={t('EDITOR_TracklistText')}
                                />
                                <FileInput
                                    title={t('EDITOR_Cover')}
                                    onChange={handleFileChange}
                                    text={fileName}
                                />
        
                                {showColorSelector && colorInputPosition && currentColorInput && (
                                    <ColorSelector
                                        DefaultColor={currentColorInput === 'backgroundColor' ? backgroundColor : 
                                                    currentColorInput === 'textColor' ? textColor : 
                                                    currentColorInput === 'color1' ? color1 : 
                                                    currentColorInput === 'color2' ? color2 : color3}
                                        image={albumCover}
                                        predefinedColors={[color1, color2, color3, backgroundColor, textColor]}
                                        onDone={(selectedColor) => {
                                            switch (currentColorInput) {
                                                case 'backgroundColor':
                                                    setbackgroundColor(selectedColor);
                                                    break;
                                                case 'textColor':
                                                    setTextColor(selectedColor);
                                                    break;
                                                case 'color1':
                                                    setcolor1(selectedColor);
                                                    break;
                                                case 'color2':
                                                    setcolor2(selectedColor);
                                                    break;
                                                case 'color3':
                                                    setcolor3(selectedColor);
                                                    break;
                                                default:
                                                    break;
                                            }
                                            setColorInputPosition(null);
                                        }}
                                        position={colorInputPosition}
                                        onClose={handleColorSelectorClose}
                                    />
                                )}
                            </EditorSettings>
                            <DivButtons>
                                <ButtonDiv onClick={handleDownloadClick}>
                                    <IconDownload/>
                                    <ButtonText>
                                        {t('EDITOR_Download')}
                                    </ButtonText>
                                </ButtonDiv>
                                <ButtonDiv onClick={handleCoverDownloadClick}>
                                    <IconDownload/>
                                    <ButtonText>
                                        {t('EDITOR_DownloadCover')}
                                    </ButtonText>
                                </ButtonDiv>
                                <ButtonDiv onClick={handleApplyClick}>
                                    <IconApply $spinning={spinApplyButton}/>
                                    <ButtonText>
                                        {t('EDITOR_Apply')}
                                    </ButtonText>
                                </ButtonDiv>
                            </DivButtons>
                        </EditorColumn>
                    </ContainerEditor>
                </Container>
            )}
        </>
    )
}

export default PosterEditor;