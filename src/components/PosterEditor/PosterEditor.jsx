import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import posterExample from '../../assets/albumExample.png'
import NormalInput from "./inputs/NormalInput";
import DoubleInput from "./inputs/DoubleInput";
import ColorInput from "./inputs/ColorInput";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import ColorSelector from "./ColorSelector";
import CheckInput from "./inputs/CheckInput";
import { IoMdDownload } from "react-icons/io";
import { MdOutlineRefresh } from "react-icons/md";

const Container = styled.div`
    width: 80%;
    margin-inline: auto;
`

const DivBack = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
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
`

function PosterEditor(){
    const { t } = useTranslation();

    const [albumName, setAlbumName] = useState('');
    const [artistsName, setArtistsName] = useState('');
    const [titleSize, setTitleSize] = useState('');
    const [artistsSize, setArtistsSize] = useState('');
    const [tracksSize, setTracksSize] = useState('');
    const [marginTop, setMarginTop] = useState('');
    const [backgroundColor, setbackgroundColor] = useState('#5900ff');
    const [textColor, setTextColor] = useState('#ff9100');
    const [color1, setcolor1] = useState('#ff0000');
    const [color2, setcolor2] = useState('#00ff40');
    const [color3, setcolor3] = useState('#2600ff');
    const [useFade, setUseFade] = useState(true);
    const [showTracklist, setShowTracklist] = useState(false);

    const [titleRelease, setTitleRelease] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [titleRuntime, setTitleRuntime] = useState('');
    const [runtime, setRuntime] = useState('');

    const [showColorSelector, setShowColorSelector] = useState(false);
    const [colorInputPosition, setColorInputPosition] = useState(null);
    const [currentColorInput, setCurrentColorInput] = useState(null);

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

    useEffect(() => {
        setTitleRelease(t('EDITOR_ReleaseTitle'));
        setTitleRuntime(t('EDITOR_RuntimeTitle'));
    }, [t]);

    return(
        <Container>
            <DivBack>
                <ArrowBack/>
                <TextBack>
                    {t('GoBack')}
                </TextBack>
            </DivBack>
            <ContainerEditor>
                <PosterPreview src={posterExample}/>
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
                            title={t('EDITOR_Fade')}
                            value={useFade}
                            onChange={(newValue) => setUseFade(newValue)}
                            text={t('EDITOR_FadeText')}
                        />
                        <CheckInput
                            title={t('EDITOR_Tracklist')}
                            value={showTracklist}
                            onChange={(newValue) => setShowTracklist(newValue)}
                            text={t('EDITOR_TracklistText')}
                        />

                        {showColorSelector && colorInputPosition && currentColorInput && (
                            <ColorSelector
                                DefaultColor={currentColorInput === 'backgroundColor' ? backgroundColor : 
                                            currentColorInput === 'textColor' ? textColor : 
                                            currentColorInput === 'color1' ? color1 : 
                                            currentColorInput === 'color2' ? color2 : color3}
                                image="https://i.scdn.co/image/ab67616d0000b2739efc623f9c64c8efb583b186"
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
                        <ButtonDiv>
                            <IconDownload/>
                            <ButtonText>
                                {t('EDITOR_Download')}
                            </ButtonText>
                        </ButtonDiv>
                        <ButtonDiv>
                        <IconApply/>
                            <ButtonText>
                                {t('EDITOR_Apply')}
                            </ButtonText>
                        </ButtonDiv>
                    </DivButtons>
                </EditorColumn>
            </ContainerEditor>
        </Container>
    )
}

export default PosterEditor;