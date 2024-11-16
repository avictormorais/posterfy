import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import posterExample from '../../assets/albumExample.png'
import NormalInput from "./inputs/NormalInput";
import DoubleInput from "./inputs/DoubleInput";
import ColorInput from "./inputs/ColorInput";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

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
`

const EditorSettings = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-inline: 30px;
    width: 100%;
    height: 100%;

    @media (max-width: 1300px) {
        margin-top: 15px;
    }
`

function PosterEditor(){
    const { t } = useTranslation();

    const [albumName, setAlbumName] = useState('');
    const [artistsName, setArtistsName] = useState('');
    const [titleSize, setTitleSize] = useState('');
    const [artistsSize, setArtistsSize] = useState('');
    const [tracksSize, setTracksSize] = useState('');
    const [marginTop, setMarginTop] = useState('');
    const [backgroundColor, setbackgroundColor] = useState('');
    const [textColor, setTextColor] = useState('');
    const [color1, setcolor1] = useState('red');
    const [color2, setcolor2] = useState('blue');
    const [color3, setcolor3] = useState('green');

    const [titleRelease, setTitleRelease] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [titleRuntime, setTitleRuntime] = useState('');
    const [runtime, setRuntime] = useState('');

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
                    />
                    <ColorInput 
                        title={t('EDITOR_TextColor')} 
                        value={textColor} 
                    />
                    <ColorInput 
                        title={t('EDITOR_BackgroundColor')} 
                        value={backgroundColor} 
                    />
                    <ColorInput 
                        title={`${t('EDITOR_Color')} 1`} 
                        value={color1} 
                    />
                    <ColorInput 
                        title={`${t('EDITOR_Color')} 2`} 
                        value={color2} 
                    />
                    <ColorInput 
                        title={`${t('EDITOR_Color')} 3`} 
                        value={color3} 
                    />
                </EditorSettings>
            </ContainerEditor>
        </Container>
    )
}

export default PosterEditor;