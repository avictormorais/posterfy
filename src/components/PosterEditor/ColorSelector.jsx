/* eslint-disable react/prop-types */
import styled from "styled-components";
import { HexColorPicker } from "react-colorful";
import { useState } from "react";
import { FaCheck, FaEyeDropper, FaPalette } from "react-icons/fa";
import { RiCloseLargeLine } from "react-icons/ri";
import { useRef } from "react";
import { trackColorSelection } from "../../services/analytics";

const Container = styled.div`
    background-color: var(--backgroundColor);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 3px solid var(--borderColor);
`

const ColorPicker = styled(HexColorPicker)`
    .react-colorful__hue {
        height: 8px;
        border-radius: 0 0 5px 5px;
        margin-inline: 0.5px;
    }

    .react-colorful__saturation {
        border-radius: 5px 5px 0 0;
    }

    .react-colorful__hue-pointer {
        width: 15px;
        height: 15px;
        border-radius: 100%;
        border-width: 1px;
    }

    .react-colorful__pointer{
        width: 15px;
        height: 15px;
        border-radius: 100%;
        border-width: 1px;
    }
`

const HorizontalDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 15px;
`

const PredefinedColor = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 100%;
    margin-inline: auto;
    cursor: pointer;
`

const HexText = styled.p`
    font-size: 1em;
    font-weight: bold;
    opacity: 0.8;
    margin-block: auto;
    color: var(--textColor);
`

const Input = styled.input`
    background-color: var(--glassBackground);
    border: 1px solid var(--borderColor);
    outline: none;
    font-weight: bold;
    color: var(--textColor);
    opacity: 0.8;
    width: 100%;
    max-width: 150px;
    margin-right: auto;
    margin-left: 10px;
    font-size: 1em;
    padding: 3px;
    border-radius: 5px;
    
    &::placeholder {
        color: var(--textSecondary);
    }
`

const Dropper = styled(FaEyeDropper)`
    font-size: 1em;
    background-color: var(--glassBackground);
    color: var(--textColor);
    padding: 5px;
    border-radius: 5px;
    margin-left: auto;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
        opacity: 0.8;
        transform: scale(1.05);
    }
`

const Palette = styled(FaPalette)`
    font-size: 1em;
    background-color: var(--glassBackground);
    color: var(--textColor);
    padding: 5px;
    border-radius: 5px;
    margin-left: auto;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
        opacity: 0.8;
        transform: scale(1.05);
    }
`

const Cancel = styled(RiCloseLargeLine)`
    font-size: 1em;
    background-color: var(--glassBackground);
    color: var(--textColor);
    padding: 5px;
    border-radius: 5px;
    margin-inline: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
        opacity: 0.8;
        transform: scale(1.05);
        color: #ff4444;
    }
`

const Check = styled(FaCheck)`
    font-size: 1em;
    background-color: var(--glassBackground);
    color: var(--textColor);
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
        opacity: 0.8;
        transform: scale(1.05);
        color: var(--PosterfyGreen);
    }
`

const Image = styled.img`
    border-radius: 5px;
    max-width: 200px;
    height: auto;
    height: 200px;
    background-color: var(--glassBackground);
    border: 1px solid var(--borderColor);
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    cursor: crosshair;
`

function ColorSelector({ DefaultColor, image, predefinedColors, position, onDone, onClose }) {
    const [color, setColor] = useState(DefaultColor);
    const [toggleDropper, setToggleDropper] = useState(false);
    const canvasRef = useRef(null);
    const imageRef = useRef(null);

    function handleToggleDropper() {
        setToggleDropper(!toggleDropper);
    }

    function handleInputChange(e) {
        setColor(e.target.value === '' ? '#' : e.target.value);
    }

    function handleImageClick(e) {
        const canvas = canvasRef.current;
        const image = imageRef.current;
        const rect = image.getBoundingClientRect();
        const ctx = canvas.getContext("2d");
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const pixel = ctx.getImageData(x, y, 1, 1).data;
        const hex = `#${[...pixel].slice(0, 3).map(c => c.toString(16).padStart(2, '0')).join('')}`;
        setColor(hex);
        handleToggleDropper();
    }

    return (
        <Container style={{ position: 'absolute', top: position.top, left: position.left, zIndex: 1000 }}>
            <canvas ref={canvasRef} style={{ display: 'none' }} />
            {toggleDropper ? (
                <Image
                    ref={imageRef}
                    crossOrigin="anonymous"
                    draggable="false"
                    src={image}
                    onClick={handleImageClick}
                    onLoad={() => {
                        const canvas = canvasRef.current;
                        const ctx = canvas.getContext("2d");
                        const img = imageRef.current;
                        canvas.width = img.width;
                        canvas.height = img.height;
                        ctx.drawImage(img, 0, 0, img.width, img.height);
                    }}
                />            
            ) : (
                <ColorPicker color={color} onChange={setColor} />
            )}
            <HorizontalDiv>
                {predefinedColors.map(predefinedColor => (
                    <PredefinedColor
                        key={predefinedColor}
                        style={{ backgroundColor: predefinedColor }}
                        onClick={() => setColor(predefinedColor)}
                    />
                ))}
            </HorizontalDiv>
            <HorizontalDiv>
                <HexText>Hex</HexText>
                <Input value={color} onChange={handleInputChange} />
            </HorizontalDiv>
            <HorizontalDiv>
                {toggleDropper ? <Palette onClick={handleToggleDropper} /> : <Dropper onClick={handleToggleDropper} />}
                <Cancel onClick={onClose} />
                <Check onClick={() => {
                    onDone(color);
                    trackColorSelection(color);
                }} />
            </HorizontalDiv>
        </Container>
    );
}

export default ColorSelector;