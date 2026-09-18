/* eslint-disable react/prop-types */
import styled from "styled-components";
import { HexColorPicker } from "react-colorful";
import { useState } from "react";
import { FaCheck, FaEyeDropper, FaPalette } from "react-icons/fa";
import { RiCloseLargeLine } from "react-icons/ri";
import { useRef } from "react";
import { trackColorSelection } from "../../services/analytics";

const Container = styled.div`
    position: absolute;
    top: ${props => props.$position?.top}px;
    left: ${props => props.$position?.left}px;
    z-index: 2147483647;
    background-color: var(--backgroundColor);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 3px solid var(--borderColor);

    @media (max-width: 768px) {
        position: fixed;
        top: max(16px, env(safe-area-inset-top));
        left: 50%;
        transform: translateX(-50%);
        width: min(340px, calc(100% - 32px));
        max-height: calc(100dvh - 32px - env(safe-area-inset-top) - env(safe-area-inset-bottom));
        box-sizing: border-box;
        overflow-y: auto;
        overscroll-behavior: contain;
        padding: 16px;
        > * { flex-shrink: 0; }
    }
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
        transition: all 0.2s ease;
    }

    .react-colorful__pointer{
        width: 15px;
        height: 15px;
        border-radius: 100%;
        border-width: 1px;
        transition: all 0.2s ease;
    }
    
    animation: pickerFadeIn 0.3s ease-out forwards;
    opacity: 0;
    transform: translateY(-10px);
    
    @keyframes pickerFadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        .react-colorful__hue { height: 24px; }
        .react-colorful__pointer { width: 24px; height: 24px; }
    }
`

const HorizontalDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    
    animation: divSlideUp 0.4s ease-out forwards;
    opacity: 0;
    transform: translateY(10px);
    
    @keyframes divSlideUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    &:nth-of-type(2) { animation-delay: 0.1s; }
    &:nth-of-type(3) { animation-delay: 0.2s; }
    &:nth-of-type(4) { animation-delay: 0.3s; }

    @media (max-width: 768px) {
        flex-wrap: wrap;
        gap: 8px;
    }
`

const PredefinedColor = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 100%;
    margin-inline: auto;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
        transform: scale(1.2);
        box-shadow: 0 0 0 2px var(--textColor);
    }
    
    &:active {
        transform: scale(1.1);
    }
    
    animation: colorSlideIn 0.4s ease-out forwards;
    opacity: 0;
    transform: scale(0.5);
    
    @keyframes colorSlideIn {
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    &:nth-child(1) { animation-delay: 0.1s; }
    &:nth-child(2) { animation-delay: 0.15s; }
    &:nth-child(3) { animation-delay: 0.2s; }
    &:nth-child(4) { animation-delay: 0.25s; }
    &:nth-child(5) { animation-delay: 0.3s; }
    &:nth-child(6) { animation-delay: 0.35s; }
    &:nth-child(7) { animation-delay: 0.4s; }
    &:nth-child(8) { animation-delay: 0.45s; }

    @media (max-width: 768px) {
        width: 32px;
        height: 32px;
    }
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

    @media (max-width: 768px) {
        width: 0;
        min-width: 0;
        flex: 1;
        min-height: 44px;
        box-sizing: border-box;
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
    transition: all 0.3s ease;
    
    &:hover {
        opacity: 0.8;
        transform: scale(1.1) rotate(5deg);
        color: var(--backgroundColor);
    }
    
    &:active {
        transform: scale(0.95) rotate(5deg);
    }

    @media (max-width: 768px) {
        box-sizing: border-box;
        width: 44px;
        height: 44px;
        padding: 12px;
        flex-shrink: 0;
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
    transition: all 0.3s ease;
    
    &:hover {
        opacity: 0.8;
        transform: scale(1.1) rotate(-5deg);
        color: var(--backgroundColor);
    }
    
    &:active {
        transform: scale(0.95) rotate(-5deg);
    }

    @media (max-width: 768px) {
        box-sizing: border-box;
        width: 44px;
        height: 44px;
        padding: 12px;
        flex-shrink: 0;
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
    transition: all 0.3s ease;
    
    &:hover {
        opacity: 0.8;
        transform: scale(1.1) rotate(90deg);
        color: #ff4444;
        background-color: rgba(255, 68, 68, 0.1);
    }
    
    &:active {
        transform: scale(0.95) rotate(90deg);
    }

    @media (max-width: 768px) {
        box-sizing: border-box;
        width: 44px;
        height: 44px;
        padding: 12px;
        flex-shrink: 0;
    }
`

const Check = styled(FaCheck)`
    font-size: 1em;
    background-color: var(--glassBackground);
    color: var(--textColor);
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        opacity: 0.8;
        transform: scale(1.1);
        color: var(--AccentColor);
        background-color: rgba(76, 175, 80, 0.1);
    }
    
    &:active {
        transform: scale(0.95);
    }

    @media (max-width: 768px) {
        box-sizing: border-box;
        width: 44px;
        height: 44px;
        padding: 12px;
        flex-shrink: 0;
    }
`

const Image = styled.img`
    border-radius: 5px;
    max-width: 200px;
    height: auto;
    height: 200px;
    background-color: var(--glassBackground);
    border: 5px solid var(--borderColor);
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    cursor: crosshair;
    transition: all 0.3s ease;
    
    animation: imageZoomIn 0.3s ease-out forwards;
    opacity: 0;
    transform: scale(0.8);
    
    @keyframes imageZoomIn {
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    &:hover {
        transform: scale(1.02);
        border-color: var(--textColor);
    }
`

function ColorSelector({ DefaultColor, image, predefinedColors, position, onDone, onClose }) {
    const [color, setColor] = useState(DefaultColor);
    const [toggleDropper, setToggleDropper] = useState(false);
    const [hoverColor, setHoverColor] = useState(null);
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
        const x = Math.floor(e.clientX - rect.left);
        const y = Math.floor(e.clientY - rect.top);
        const pixel = ctx.getImageData(x, y, 1, 1).data;
        const hex = `#${[...pixel].slice(0, 3).map(c => c.toString(16).padStart(2, '0')).join('')}`;
        setColor(hex);
        handleToggleDropper();
    }

    function handleImageMouseMove(e) {
        const canvas = canvasRef.current;
        const image = imageRef.current;
        const rect = image.getBoundingClientRect();
        const x = Math.floor(e.clientX - rect.left);
        const y = Math.floor(e.clientY - rect.top);
        if (canvas) {
            const ctx = canvas.getContext("2d");
            try {
                const pixel = ctx.getImageData(x, y, 1, 1).data;
                const hex = `#${[...pixel].slice(0, 3).map(c => c.toString(16).padStart(2, '0')).join('')}`;
                setHoverColor(hex);
            } catch {
                setHoverColor(null);
            }
        }
    }

    function handleImageMouseLeave() {
        setHoverColor(null);
    }

    return (
        <Container $position={position} data-lenis-prevent>
            <canvas ref={canvasRef} style={{ display: 'none' }} />
            {toggleDropper ? (
                <Image
                    ref={imageRef}
                    crossOrigin="anonymous"
                    draggable="false"
                    src={image}
                    onClick={handleImageClick}
                    onMouseMove={handleImageMouseMove}
                    onMouseLeave={handleImageMouseLeave}
                    onLoad={() => {
                        const canvas = canvasRef.current;
                        const ctx = canvas.getContext("2d");
                        const img = imageRef.current;
                        canvas.width = img.width;
                        canvas.height = img.height;
                        ctx.drawImage(img, 0, 0, img.width, img.height);
                    }}
                    style={hoverColor ? { borderColor: hoverColor } : {}}
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