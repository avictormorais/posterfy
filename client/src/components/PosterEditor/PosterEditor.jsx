/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import styled, { css, keyframes } from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import NormalInput from "./inputs/NormalInput";
import DoubleInput from "./inputs/DoubleInput";
import ColorInput from "./inputs/ColorInput";
import { useState, useEffect, useRef, forwardRef } from "react";
import { useTranslation } from 'react-i18next';
import ColorSelector from "./ColorSelector";
import CoverEditor from "./CoverEditor";
import ReactDOM from 'react-dom';
import CheckInput from "./inputs/CheckInput";
import ClickInput from "./inputs/ClickInput";
import ButtonInput from "./inputs/ButtonInput";
import { FaFile, FaFont } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { MdOutlineRefresh } from "react-icons/md";
import { RiImage2Fill } from "react-icons/ri";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import LoadingDiv from "../Commom/LoadingDiv";
import { Palette } from "color-thief-react";
import CanvasPoster from "./CanvasPoster";
import AnimatedInput from "./inputs/AnimatedInput";
import { trackPosterDownload, trackPosterPreview } from "../../services/analytics";
import { exportPosterJson, importPosterJson } from "./PosterJsonIO";
import jsPDF from 'jspdf';
import { getHighestQualitySpotifyImage } from "../../utils/spotifyImageOptimizer";
import { TbFileTypePdf } from "react-icons/tb";
import { TbFileTypePng } from "react-icons/tb";

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

const posterRevealAnimation = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.95) translateY(15px);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
`;

const posterExitAnimation = keyframes`
    0% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
    100% {
        opacity: 0;
        transform: scale(0.95) translateY(-10px);
    }
`;

const PosterPreview = styled.img`
    width: 388px;
    height: 548px;
    margin-right: 20px;
    animation: ${props => props.visible 
        ? css`${posterRevealAnimation} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`
        : css`${posterExitAnimation} 0.3s cubic-bezier(0.4, 0, 1, 1) forwards`
    };
    transform-origin: center center;
    will-change: opacity, transform;

    @media (max-width: 1292px) {
        margin: 0;
    }

    @media (max-width: 450px) {
        width: 288px;
        height: 448px;
        margin: 0;
    }
`

const PreviewContainer = styled.div`
    width: 388px;
    height: 548px;
    margin-right: 20px;
    margin-left: 15px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    @media (max-width: 1292px) {
        margin: 0;
    }

    @media (max-width: 450px) {
        width: 288px;
        height: 448px;
        margin: 0;
        margin-bottom: 30px;
        margin-top: 20px;
    }
`

const flashAnimation = keyframes`
    0% {
        opacity: 0;
    }
    20% {
        opacity: 0.08;
    }
    100% {
        opacity: 0;
    }
`;

const FlashOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, 
        rgba(255, 255, 255, 0.6) 0%, 
        rgba(255, 255, 255, 0.3) 50%, 
        rgba(255, 255, 255, 0) 100%
    );
    pointer-events: none;
    z-index: 5;
    animation: ${props => props.visible 
        ? css`${flashAnimation} 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards`
        : 'none'
    };
    opacity: 0;
`

const LoadingIcon = styled(AiOutlineLoading3Quarters)`
    font-size: 3em;
    color: var(--textSecondary);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    opacity: ${props => props.visible ? 0.15 : 0};
    transition: opacity 0.3s ease;
    animation: ${props => props.visible ? keyframes`
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
    ` : 'none'} 1s linear infinite;
`

const EditorColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const TabsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--borderColor);
    width: 90%;
    margin-inline: auto;
`

const Tab = styled.div`
    padding: 10px 20px;
    font-size: 1em;
    font-weight: 500;
    color: ${({ $active }) => ($active ? 'var(--textColor)' : 'var(--textSecondary)')};
    cursor: pointer;
    border-bottom: ${({ $active }) => ($active ? '2px solid var(--AccentColor)' : 'none')};
    transition: color 0.3s, border-bottom 0.3s;

    &:hover {
        color: var(--textColor);
    }
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

const TracklistContainer = styled.div`
    padding: 20px 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 1300px) {
        width: 90%;
        min-height: 250px;
    }

    @media (max-width: 850px) {
        width: 85%;
    }

    @media (max-width: 600px) {
        padding: 0px;
    }
`

const TracklistButtonsContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
    flex-wrap: wrap;
    width: 100%;

    @media (max-width: 700px) {
        justify-content: space-between;
        gap: 0;
        width: 106%;
    }
`

const TracklistButton = styled.button`
    background: var(--glassBackground);
    color: var(--textColor);
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 12px;
    cursor: pointer;
    transition: background 0.3s ease;
    
    &:hover {
        background: var(--borderColor);
    }
    
    &:active {
        transform: scale(0.95);
    }
`

const TracklistTextarea = styled.textarea`
    width: 100%;
    flex: 1;
    background: var(--glassBackground);
    color: var(--textColor);
    border: none;
    padding: 15px;
    font-size: 14px;
    resize: none;
    border-radius: 8px;
    overflow-y: scroll;
    max-height: 300px;
    line-height: 1.5em;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }

    &:focus {
        outline: none;
        background: var(--glassBackground);
    }

    @media (max-width: 530px) {
        padding: 10px;
    }
`

const DivButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
    margin-top: 15px;
    margin-left: 22px;
    justify-content: flex-end;

    @media (max-width: 700px) {
        justify-content: center;
        margin-left: 0px;
    }

    @media (max-width: 500px) {
        flex-direction: column;
    }
`

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 22px;
    border-radius: 10px;
    background: var(--glassBackground);
    border: 1px solid var(--borderColor);
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;

    &:hover {
        background-color: var(--AccentColor);
        
        svg {
            stroke: var(--backgroundColor) !important;
            fill: ${props => props.apply ? 'var(--backgroundColor) !important' : 'none' } ;
        }

        span {
            color: var(--backgroundColor) !important;
        }
    }

    &:active {
        transform: scale(0.98);
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`

const ButtonText = styled.span`
    font-size: 0.9em;
    font-weight: 600;
    transition: color 0.2s ease;
`

const IconDownload = styled(IoMdDownload)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`

const IconPDF = styled(TbFileTypePdf)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`;

const IconPNG = styled(TbFileTypePng)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`;

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
`

const FakePoster = styled.div`
    width: 560px;
    margin-right: 20px;

    @media (max-width: 450px) {
        width: 95%;
        margin-right: 0;
    }
`

const ShortcutsInfo = styled.p`
    font-size: 0.8em;
    color: var(--textSecondary);
    margin-top: 12px;
    text-align: right;
    line-height: 1.6;
    margin-left: 20px;
    width: 100%;

    @media (max-width: 700px) {
        text-align: center;
        margin-left: 0px;
    }
`

const IconImage = styled(RiImage2Fill)`
    font-size: 3em;
`;

const PosterEditor = forwardRef(({ albumID, handleClickBack, model, modelParams, initialPosterJson }, ref) => {
    const { t } = useTranslation();
    const previewRef = useRef(null);
    const canvasRef = useRef(null);
    const exportCanvasRef = useRef(null);

    const [albumName, setAlbumName] = useState('');
    const [artistsName, setArtistsName] = useState('');
    const [titleSize, setTitleSize] = useState('200');
    const [artistsSize, setArtistsSize] = useState('110');
    const [tracksSize, setTracksSize] = useState('50');
    const [marginTop, setMarginTop] = useState(modelParams?.marginTop ?? '');
    const [marginSide, setmarginSide] = useState(160);
    const [marginCover, setMarginCover] = useState(modelParams?.marginCover ?? 0);
    const [marginBackground, setmarginBackground] = useState(modelParams?.marginBackground ?? 0);
    const [backgroundColor, setbackgroundColor] = useState('#5900ff');
    const [textColor, setTextColor] = useState('#ff9100');
    const [color1, setcolor1] = useState('#ff0000');
    const [color2, setcolor2] = useState('#00ff40');
    const [color3, setcolor3] = useState('#2600ff');
    const [useWatermark, setUseWatermark] = useState(true);
    const [useFade, setUseFade] = useState(modelParams?.useFade ?? true);
    const [showTracklist, setShowTracklist] = useState(modelParams?.showTracklist ?? false);
    const [albumCover, setAlbumCover] = useState('');
    const [uncompressedAlbumCover, setUncompressedAlbumCover] = useState('');
    const [customFont, setCustomFont] = useState('');
    const [customFontFile, setCustomFontFile] = useState(null);
    const [activeTab, setActiveTab] = useState('information');

    function applyPosterJson(json) {
        setIsLoadedFromJson(true);
        setAlbumName(json.albumName || '');
        setArtistsName(json.artistsName || '');
        setTitleSize(json.titleSize || '200');
        setArtistsSize(json.artistsSize || '110');
        setTracksSize(json.tracksSize || '50');
        setMarginTop(json.marginTop || '');
        setmarginSide(json.marginSide || 160);
        setMarginCover(json.marginCover || 0);
        setmarginBackground(json.marginBackground || 0);
        setbackgroundColor(json.backgroundColor || '#5900ff');
        setTextColor(json.textColor || '#ff9100');
        setcolor1(json.color1 || '#ff0000');
        setcolor2(json.color2 || '#00ff40');
        setcolor3(json.color3 || '#2600ff');
        
        if (json.coverZoom !== undefined) {
            setCoverZoom(json.coverZoom);
        } else if (json.marginCover !== undefined) {
            setCoverZoom(-json.marginCover / 11);
        } else {
            setCoverZoom(0);
        }
        
        setCoverHorizontalPosition(json.coverHorizontalPosition || 0);
        setCoverVerticalPosition(json.coverVerticalPosition || 0);
        setCoverBlur(json.coverBlur || 0);
        setUseWatermark(json.useWatermark !== undefined ? json.useWatermark : true);
        setUseFade(json.useFade !== undefined ? json.useFade : true);
        setShowTracklist(json.showTracklist !== undefined ? json.showTracklist : false);
        setUseUncompressed(json.useUncompressed !== undefined ? json.useUncompressed : false);
        setAlbumCover(json.albumCover || '');
        setUncompressedAlbumCover(json.uncompressedAlbumCover || '');
        setCustomFont(json.customFont || '');
        setTracklist(json.tracklist || '');
        setTitleRelease(json.titleRelease || '');
        setReleaseDate(json.releaseDate || '');
        setTitleRuntime(json.titleRuntime || '');
        setRuntime(json.runtime || '');
        handleApplyClick();
    }

    useEffect(() => {
        if (customFontFile) {
            const reader = new FileReader();
            reader.onload = async (e) => {
                const fontName = 'CustomFont';
                const fontFace = new FontFace(fontName, e.target.result);
                try {
                    const font = await fontFace.load();
                    document.fonts.add(font);
                    setCustomFont(fontName);
                } catch (error) {
                    console.error('Erro ao carregar fonte:', error);
                }
            };
            reader.readAsArrayBuffer(customFontFile);
        }
    }, [customFontFile]);

    useEffect(() => {
        if (initialPosterJson) {
            applyPosterJson(initialPosterJson);
        }
    }, [initialPosterJson]);

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
    
    const [showCoverEditor, setShowCoverEditor] = useState(false);
    const [coverEditorPosition, setCoverEditorPosition] = useState(null);
    
    const [coverZoom, setCoverZoom] = useState(0);
    const [coverHorizontalPosition, setCoverHorizontalPosition] = useState(0);
    const [coverVerticalPosition, setCoverVerticalPosition] = useState(0);
    const [coverBlur, setCoverBlur] = useState(0);

    const [userAdjustedTitleSize, setUserAdjustedTitleSize] = useState(false);
    const [initialTitleSizeSet, setInitialTitleSizeSet] = useState(false);
    const [userAdjustedTracksSize, setUserAdjustedTracksSize] = useState(false);
    const [initialTracksSizeSet, setInitialTracksSizeSet] = useState(false);
    const [isLoadedFromJson, setIsLoadedFromJson] = useState(false);

    useEffect(() => {
        if (!isLoadedFromJson) {
            const calculatedMargin = -coverZoom * 10;
            setMarginCover(calculatedMargin);
        }
    }, [coverZoom, isLoadedFromJson]);

    const handleTitleSizeChange = (e) => {
        setTitleSize(e.target.value);
        setUserAdjustedTitleSize(true);
    };

    const handleTitleSizeAdjust = (adjustedSize, isInitial) => {
        if (isInitial && !initialTitleSizeSet) {
            setTitleSize(adjustedSize);
            setInitialTitleSizeSet(true);
        } else if (!userAdjustedTitleSize) {
            setTitleSize(adjustedSize);
        }
    };

    const handleTracksSizeChange = (e) => {
        setTracksSize(e.target.value);
        setUserAdjustedTracksSize(true);
    };

    const handleTracksSizeAdjust = (adjustedSize, isInitial) => {
        if (isInitial && !initialTracksSizeSet) {
            setTracksSize(adjustedSize);
            setInitialTracksSizeSet(true);
        } else if (!userAdjustedTracksSize) {
            setTracksSize(adjustedSize);
        }
    };

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
        marginBackground,
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
        albumID,
        coverZoom,
        coverHorizontalPosition,
        coverVerticalPosition,
        coverBlur,
        userAdjustedTitleSize,
        initialTitleSizeSet,
        userAdjustedTracksSize,
        initialTracksSizeSet
    };

    const [image, setImage] = useState(null);
    const [exportImage, setExportImage] = useState(null);
    const [exportMode, setExportMode] = useState(null);
    const [generatePoster, setGeneratePoster] = useState(false);
    const [generateExport, setGenerateExport] = useState(false);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [infosLoaded, setInfosLoaded] = useState(false);
    const [spinApplyButton, setSpinApplyButton] = useState(false);
    const [loadingVisible, setLoadingVisible] = useState(false);

    useEffect(() => {
        if (generatePoster) {
            setPreviewVisible(false);

            const loadingTimer = setTimeout(() => {
                setLoadingVisible(true);
            }, 100);
            
            return () => clearTimeout(loadingTimer);
        } else {
            setLoadingVisible(false);
        }
    }, [generatePoster]);

    const handlePreviewReady = (imageUrl) => {
        setGeneratePoster(false);
        setSpinApplyButton(false);
        
        trackPosterPreview(albumName, artistsName);
        
        setTimeout(() => {
            setImage(imageUrl);
            setLoadingVisible(false);
            setTimeout(() => {
                setPreviewVisible(true);
            }, 50);
        }, 300);
    };

    const handleExportReady = (imageUrl) => {
        setExportImage(imageUrl);
        setGenerateExport(false);
    };

    useEffect(() => {
        if (exportImage && exportMode) {
            if (exportMode === 'png') {
                const link = document.createElement('a');
                link.href = exportImage;
                link.download = `Posterfy - ${albumName}.png`;
                link.click();
                trackPosterDownload(albumName, 'poster', artistsName);
            } else if (exportMode === 'pdf') {
                const img = new Image();
                img.onload = () => {
                    const pdf = new jsPDF({
                        orientation: 'portrait',
                        unit: 'mm',
                        format: 'a4',
                        compress: false
                    });
                    pdf.addImage(exportImage, 'JPEG', 0, 0, 210, 297, undefined, 'FAST');
                    pdf.save(`Posterfy - ${albumName}.pdf`);
                    trackPosterDownload(albumName, 'poster_pdf', artistsName);
                };
                img.src = exportImage;
            }
            setExportImage(null);
            setExportMode(null);
        }
    }, [exportImage, exportMode, albumName, artistsName]);

    const handleApplyClick = () => {
        setUserAdjustedTitleSize(false);
        setUserAdjustedTracksSize(false);
        setPreviewVisible(false);
        requestAnimationFrame(() => {
            setSpinApplyButton(true);
            setGeneratePoster(true);
            if (previewRef.current) {
                const rect = previewRef.current.getBoundingClientRect();
                const elementTop = rect.top + window.scrollY;
                const elementHeight = rect.height;
                const windowHeight = window.innerHeight;
                const centerOffset = (windowHeight - elementHeight) / 2;
                
                window.scrollTo({
                    top: elementTop - centerOffset,
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
        setIsLoadedFromJson(false); 
    };

    const handleDownloadClick = () => {
        setExportMode('png');
        setGenerateExport(true);
    };

    const handleDownloadPDFClick = () => {
        setExportMode('pdf');
        setGenerateExport(true);
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
            trackPosterDownload(albumName, 'uncompressed_cover', artistsName);
        } else {
            if (!albumCover) return;
            const blob = await (await fetch(albumCover)).blob();
            const link = Object.assign(document.createElement('a'), {
                href: URL.createObjectURL(blob),
                download: `Posterfy - ${albumName} Cover.png`
            });
            link.click();
            URL.revokeObjectURL(link.href);
            trackPosterDownload(albumName, 'cover', artistsName);
        }
    };

    function handleColorInputClick(position, colorInputName) {
        setColorInputPosition(position);
        setCurrentColorInput(colorInputName);
        setShowColorSelector(true);
    }

    function handleColorSelectorClose() {
        setShowColorSelector(false);
    };
    
    function handleCoverEditorClick(position) {
        setCoverEditorPosition(position);
        setShowCoverEditor(true);
    }
    
    function handleCoverEditorClose() {
        setShowCoverEditor(false);
    }

    const handleRemoveParentheses = () => {
        const lines = tracklist.split('\n');
        const cleanedLines = lines.map(line => 
            line.replace(/\([^)]*\)/g, '').replace(/\s+/g, ' ').trim()
        );
        setTracklist(cleanedLines.join('\n'));
    };

    const handleRemoveBrackets = () => {
        const lines = tracklist.split('\n');
        const cleanedLines = lines.map(line => 
            line.replace(/\[[^\]]*\]/g, '').replace(/\s+/g, ' ').trim()
        );
        setTracklist(cleanedLines.join('\n'));
    };

    async function getItunesUncompressedAlbumCover(searchQuery, country = "us") {
        try {
            let apiUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(searchQuery)}&country=${country}&entity=album&limit=1`;
            let response = await fetch(apiUrl);
            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    
            let data = await response.json();
            if (!data.results?.length) {
                console.warn("No album data found.");
                setUseUncompressed(false)
                return false;
            }
    
            let result = data.results[0];
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
                
                const originalCoverUrl = albumData.images[0]?.url;
                const highQualityCoverUrl = await getHighestQualitySpotifyImage(originalCoverUrl);
                setAlbumCover(highQualityCoverUrl);
                
                setReleaseDate(albumData.release_date);
                const uncompressedCover = await getItunesUncompressedAlbumCover(albumData.name + " " + formattedArtistsName);
                setUncompressedAlbumCover(uncompressedCover ? uncompressedCover : highQualityCoverUrl);
                
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
                    if (index === 3 && (typeof modelParams?.showTracklist === 'undefined')) {
                        setShowTracklist(true);
                    }
                    return `${index + 1}. ${track.name}`;
                });
                setTracklist(tracklist.join("\n"));
                
                setInfosLoaded(true);          
    
            } catch (error) {
                console.error("Error trying to fetch album data:", error);
            }
        };
    
        if(initialPosterJson){
            applyPosterJson(initialPosterJson);
            setInfosLoaded(true);
        } else{
            setIsLoadedFromJson(false);
            fetchAlbumData();
        }
    }, [albumID]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === 's') {
                event.preventDefault();
                handleApplyClick();
            } else if (event.ctrlKey && event.shiftKey && event.key === 'D') {
                event.preventDefault();
                handleDownloadPDFClick();
            } else if (event.ctrlKey && event.key === 'd') {
                event.preventDefault();
                handleDownloadClick();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [image, albumName, handleDownloadClick]);

    return(
        <>
            {!infosLoaded ? (
                <LoadingDiv/>
            ) : (
                <Container ref={ref}>
                <Palette src={albumCover} crossOrigin="anonymous" format="hex" colorCount={5}>
                    {({ data }) => {
                        useEffect(() => {
                            if (data && data.length > 0 && !isLoadedFromJson) {
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
                            ref={canvasRef}
                            onImageReady={handlePreviewReady}
                            posterData={posterData}
                            generatePoster={generatePoster}
                            onTitleSizeAdjust={handleTitleSizeAdjust}
                            onTracksSizeAdjust={handleTracksSizeAdjust}
                            customFont={customFont}
                            scale={0.3}
                        />

                        {generateExport && (
                            <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
                                <CanvasPoster
                                    ref={exportCanvasRef}
                                    onImageReady={handleExportReady}
                                    posterData={posterData}
                                    generatePoster={generateExport}
                                    customFont={customFont}
                                    scale={1.0}
                                />
                            </div>
                        )}

                        <PreviewContainer>
                            <FlashOverlay visible={previewVisible} />
                            {image ? (
                                <PosterPreview src={image} ref={previewRef} visible={previewVisible} />
                            ) : (
                                <FakePoster ref={previewRef} />
                            )}
                            <LoadingIcon visible={loadingVisible} />
                        </PreviewContainer>
                        <EditorColumn>
                            <AnimatedInput animationDelay={50}>
                                <TabsContainer>
                                    <Tab 
                                        $active={activeTab === 'information'} 
                                        onClick={() => setActiveTab('information')}
                                    >
                                        {t('EDITOR_InformationTab')}
                                    </Tab>
                                    <Tab 
                                        $active={activeTab === 'tracklist'} 
                                        onClick={() => setActiveTab('tracklist')}
                                    >
                                        {t('EDITOR_TracklistTab')}
                                    </Tab>
                                </TabsContainer>
                            </AnimatedInput>
                            {activeTab === 'information' ? (
                                <EditorSettings>
                                    <AnimatedInput animationDelay={0}>
                                        <NormalInput 
                                            title={t('EDITOR_AlbumName')} 
                                            value={albumName} 
                                            onChange={(e) => setAlbumName(e.target.value)}
                                        />
                                    </AnimatedInput>
                                    <AnimatedInput animationDelay={50}>
                                        <NormalInput 
                                            title={t('EDITOR_ArtistName')} 
                                            value={artistsName} 
                                            onChange={(e) => setArtistsName(e.target.value)}
                                        />
                                    </AnimatedInput>
                                    <AnimatedInput animationDelay={100}>
                                        <NormalInput 
                                            title={t('EDITOR_TitleSize')} 
                                            value={titleSize} 
                                            onChange={handleTitleSizeChange}
                                        />
                                    </AnimatedInput>
                                    <AnimatedInput animationDelay={150}>
                                        <NormalInput 
                                            title={t('EDITOR_ArtistSize')} 
                                            value={artistsSize} 
                                            onChange={(e) => setArtistsSize(e.target.value)}
                                        />
                                    </AnimatedInput>
                                    <AnimatedInput animationDelay={200}>
                                        <NormalInput 
                                            title={t('EDITOR_TracksSize')} 
                                            value={tracksSize} 
                                            onChange={handleTracksSizeChange}
                                        />
                                    </AnimatedInput>
                                    <AnimatedInput animationDelay={250}>
                                        <NormalInput 
                                            title={t('EDITOR_MarginTop')} 
                                            value={marginTop} 
                                            onChange={(e) => setMarginTop(e.target.value)}
                                        />
                                    </AnimatedInput>
                                    <AnimatedInput animationDelay={300}>
                                        <NormalInput 
                                            title={t('EDITOR_MarginSide')} 
                                            value={marginSide} 
                                            onChange={(e) => setmarginSide(e.target.value)}
                                        />
                                    </AnimatedInput>
                                    <AnimatedInput animationDelay={350}>
                                        <ButtonInput
                                            title={t('EDITOR_CoverEditor')}
                                            text={t('EDITOR_EditCover')}
                                            onClick={handleCoverEditorClick}
                                            icon={IconImage}
                                        />
                                    </AnimatedInput>
                                    <AnimatedInput animationDelay={375}>
                                        <NormalInput 
                                            title={t('EDITOR_MarginBackground')}
                                            value={marginBackground}
                                            onChange={(e) => setmarginBackground(e.target.value)}
                                        />
                                    </AnimatedInput>
            
                                    <AnimatedInput animationDelay={400}>
                                        <DoubleInput 
                                            title={titleRelease} 
                                            value={releaseDate} 
                                            onChangeTitle={(e) => setTitleRelease(e.target.value)} 
                                            onChangeDate={(e) => setReleaseDate(e.target.value)}
                                        />
                                    </AnimatedInput>
                                    <AnimatedInput animationDelay={450}>
                                        <DoubleInput 
                                            title={titleRuntime} 
                                            value={runtime} 
                                            onChangeTitle={(e) => setTitleRuntime(e.target.value)} 
                                            onChangeDate={(e) => setRuntime(e.target.value)}
                                        />
                                    </AnimatedInput>
            
                                    <AnimatedInput animationDelay={500}>
                                        <ColorInput 
                                            title={t('EDITOR_BackgroundColor')} 
                                            value={backgroundColor} 
                                            onClick={(position) => handleColorInputClick(position, 'backgroundColor')}
                                        />
                                    </AnimatedInput>
                                    <AnimatedInput animationDelay={550}>
                                        <ColorInput 
                                            title={t('EDITOR_TextColor')} 
                                            value={textColor} 
                                            onClick={(position) => handleColorInputClick(position, 'textColor')}
                                        />
                                    </AnimatedInput>
                                    <AnimatedInput animationDelay={600}>
                                        <ColorInput 
                                            title={`${t('EDITOR_Color')} 1`} 
                                            value={color1} 
                                            onClick={(position) => handleColorInputClick(position, 'color1')}
                                        />
                                    </AnimatedInput>
                                    <AnimatedInput animationDelay={650}>
                                        <ColorInput 
                                            title={`${t('EDITOR_Color')} 2`} 
                                            value={color2} 
                                            onClick={(position) => handleColorInputClick(position, 'color2')}
                                        />
                                    </AnimatedInput>
                                    <AnimatedInput animationDelay={700}>
                                        <ColorInput 
                                            title={`${t('EDITOR_Color')} 3`} 
                                            value={color3} 
                                            onClick={(position) => handleColorInputClick(position, 'color3')}
                                        />
                                    </AnimatedInput>
            
                                    <AnimatedInput animationDelay={750}>
                                        <CheckInput
                                            title={t('EDITOR_Watermark')}
                                            value={useWatermark}
                                            onChange={(newValue) => setUseWatermark(newValue)}
                                            text={t('EDITOR_WatermarkText')}
                                        />
                                    </AnimatedInput>
                                    <AnimatedInput animationDelay={800}>
                                        <CheckInput
                                            title={t('EDITOR_Fade')}
                                            value={useFade}
                                            onChange={(newValue) => setUseFade(newValue)}
                                            text={t('EDITOR_FadeText')}
                                        />
                                    </AnimatedInput>
                                    <AnimatedInput animationDelay={850}>
                                        <CheckInput
                                            title={t('EDITOR_Uncompressed')}
                                            value={useUncompressed}
                                            onChange={(newValue) => setUseUncompressed(newValue)}
                                            text={t('EDITOR_UncompressedText')}
                                        />
                                    </AnimatedInput>
                                    <AnimatedInput animationDelay={900}>
                                        <CheckInput
                                            title={t('EDITOR_Tracklist')}
                                            value={showTracklist}
                                            onChange={(newValue) => setShowTracklist(newValue)}
                                            text={t('EDITOR_TracklistText')}
                                        />
                                    </AnimatedInput>
                                    <AnimatedInput animationDelay={950}>
                                        <ClickInput
                                            title={t('EDITOR_Cover')}
                                            onChange={handleFileChange}
                                            text={fileName}
                                            accept="image/png, image/jpg, image/jpeg"
                                            icon={FaFile}
                                        />
                                    </AnimatedInput>
                                    <AnimatedInput animationDelay={1000}>
                                        <ClickInput
                                            title={t('EDITOR_Font')}
                                            text={customFontFile?.name || t('EDITOR_DefaultFont')}
                                            onChange={setCustomFontFile}
                                            accept=".ttf,.otf"
                                            icon={FaFont}
                                        />
                                    </AnimatedInput>

                                </EditorSettings>
                            ) : (
                                <TracklistContainer>
                                    <TracklistTextarea
                                        value={tracklist}
                                        onChange={(e) => setTracklist(e.target.value)}
                                        placeholder={t('EDITOR_TracklistPlaceholder')}
                                        data-lenis-prevent
                                    />
                                    <TracklistButtonsContainer>
                                        <TracklistButton onClick={handleRemoveParentheses}>
                                            {t('EDITOR_RemoveParentheses')}
                                        </TracklistButton>
                                        <TracklistButton onClick={handleRemoveBrackets}>
                                            {t('EDITOR_RemoveBrackets')}
                                        </TracklistButton>
                                    </TracklistButtonsContainer>
                                </TracklistContainer>
                            )}
                            <AnimatedInput animationDelay={1050}>
                                <DivButtons>
                                    <ButtonDiv onClick={handleDownloadClick}>
                                        <IconPNG/>
                                        <ButtonText>PNG</ButtonText>
                                    </ButtonDiv>
                                    <ButtonDiv onClick={handleDownloadPDFClick}>
                                        <IconPDF/>
                                        <ButtonText>PDF</ButtonText>
                                    </ButtonDiv>
                                    <ButtonDiv apply onClick={handleApplyClick}>
                                        <IconApply $spinning={spinApplyButton}/>
                                        <ButtonText>{t('EDITOR_Apply')}</ButtonText>
                                    </ButtonDiv>
                                    {/* <ButtonDiv onClick={() => exportPosterJson(posterData)}>
                                        <IconDownload/>
                                        <ButtonText>Exportar JSON</ButtonText>
                                    </ButtonDiv>
                                    <ButtonDiv onClick={() => importPosterJson(applyPosterJson)}>
                                        <IconDownload/>
                                        <ButtonText>Importar JSON</ButtonText>
                                    </ButtonDiv> */}
                                </DivButtons>
                            </AnimatedInput>
                            <AnimatedInput animationDelay={1100}>
                                <ShortcutsInfo>
                                    Ctrl+S: {t('EDITOR_Apply')} • Ctrl+D: PNG • Ctrl+Shift+D: PDF
                                </ShortcutsInfo>
                            </AnimatedInput>
                        </EditorColumn>
                    </ContainerEditor>
                    
                    {showColorSelector && colorInputPosition && currentColorInput && ReactDOM.createPortal(
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
                                handleColorSelectorClose();
                            }}
                            position={colorInputPosition}
                            onClose={handleColorSelectorClose}
                        />, document.body
                    )}
                    
                    {showCoverEditor && coverEditorPosition && ReactDOM.createPortal(
                        <CoverEditor
                            position={coverEditorPosition}
                            albumCoverUrl={useUncompressed ? uncompressedAlbumCover : albumCover}
                            initialZoom={coverZoom}
                            initialHorizontalPosition={coverHorizontalPosition}
                            initialVerticalPosition={coverVerticalPosition}
                            initialBlur={coverBlur}
                            onDone={(values) => {
                                setIsLoadedFromJson(false);
                                setCoverZoom(values.zoom);
                                setCoverHorizontalPosition(values.horizontalPosition);
                                setCoverVerticalPosition(values.verticalPosition);
                                setCoverBlur(values.blur);
                                handleCoverEditorClose();
                            }}
                            onClose={handleCoverEditorClose}
                        />, document.body
                    )}
                </Container>
            )}
        </>
    )
});

PosterEditor.displayName = 'PosterEditor';

export default PosterEditor;