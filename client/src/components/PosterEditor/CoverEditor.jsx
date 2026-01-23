/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { RiCloseLargeLine } from "react-icons/ri";
import { useTranslation } from 'react-i18next';

const Container = styled.div`
    background-color: var(--backgroundColor);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 3px solid var(--borderColor);
    gap: 15px;
`

const Canvas = styled.canvas`
    width: 200px;
    height: 200px;
    border-radius: 5px;
    border: 2px solid var(--borderColor);
    background-color: var(--glassBackground);
    cursor: grab;
    
    &:active {
        cursor: grabbing;
    }
    
    animation: canvasFadeIn 0.3s ease-out forwards;
    opacity: 0;
    transform: scale(0.9);
    
    @keyframes canvasFadeIn {
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`

const SliderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    
    animation: sliderSlideIn 0.4s ease-out forwards;
    opacity: 0;
    transform: translateY(10px);
    
    @keyframes sliderSlideIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    &:nth-of-type(2) { animation-delay: 0.1s; }
    &:nth-of-type(3) { animation-delay: 0.2s; }
    &:nth-of-type(4) { animation-delay: 0.3s; }
`

const LabelRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`

const Label = styled.label`
    font-size: 0.9em;
    font-weight: bold;
    color: var(--textColor);
    opacity: 0.8;
    margin-left: 5px;
`

const ValueInput = styled.input`
    width: 50px;
    padding: 4px 6px;
    padding-right: 4px;
    font-size: 0.85em;
    font-weight: bold;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 5px;
    color: var(--textColor);
    text-align: center;
    outline: none;
    transition: all 0.2s ease;
    
    &:hover {
        background-color: var(--glassBackground);
        border-color: var(--borderColor);
    }
    
    &:focus {
        background-color: var(--glassBackground);
        border-color: var(--AccentColor);
    }
    
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

const Slider = styled.input`
    width: 100%;
    height: 8px;
    border-radius: 5px;
    background: var(--glassBackground);
    outline: none;
    border: 1px solid var(--borderColor);
    -webkit-appearance: none;
    appearance: none;
    
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--textColor);
        cursor: pointer;
        transition: all 0.2s ease;
        border: 2px solid var(--backgroundColor);
        
        &:hover {
            transform: scale(1.2);
            background: var(--AccentColor);
        }
        
        &:active {
            transform: scale(1.1);
        }
    }
    
    &::-moz-range-thumb {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--textColor);
        cursor: pointer;
        transition: all 0.2s ease;
        border: 2px solid var(--backgroundColor);
        
        &:hover {
            transform: scale(1.2);
            background: var(--AccentColor);
        }
        
        &:active {
            transform: scale(1.1);
        }
    }
`

const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 10px;
    
    animation: buttonsSlideIn 0.4s ease-out forwards;
    opacity: 0;
    transform: translateY(10px);
    animation-delay: 0.4s;
    
    @keyframes buttonsSlideIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`

const Cancel = styled(RiCloseLargeLine)`
    font-size: 1em;
    background-color: var(--glassBackground);
    color: var(--textColor);
    padding: 5px;
    border-radius: 5px;
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
`

function CoverEditor({ position, albumCoverUrl, initialZoom = 0, initialHorizontalPosition = 0, initialVerticalPosition = 0, initialBlur = 0, onDone, onClose }) {
    const { t } = useTranslation();
    const [zoom, setZoom] = useState(initialZoom);
    const [horizontalPosition, setHorizontalPosition] = useState(initialHorizontalPosition);
    const [verticalPosition, setVerticalPosition] = useState(initialVerticalPosition);
    const [blur, setBlur] = useState(initialBlur);
    const canvasRef = useRef(null);
    const imageRef = useRef(null);
    const isDraggingRef = useRef(false);
    const dragStartRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (albumCoverUrl) {
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.src = albumCoverUrl;
            img.onload = () => {
                imageRef.current = img;
                drawCanvas();
            };
        }
    }, [albumCoverUrl]);

    useEffect(() => {
        drawCanvas();
    }, [zoom, horizontalPosition, verticalPosition, blur]);

    const handleMouseDown = (e) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const width = canvas.width;
        const height = canvas.height;
        const baseSize = Math.min(width, height);
        const zoomFactor = 1 + (zoom / 100);
        const size = baseSize * zoomFactor;
        const centerX = width / 2;
        const centerY = height / 2;
        const offsetX = (width / 2) * (horizontalPosition / 50);
        const offsetY = (height / 2) * (verticalPosition / 50);
        const x = centerX - size / 2 + offsetX;
        const y = centerY - size / 2 + offsetY;

        if (mouseX >= x && mouseX <= x + size && mouseY >= y && mouseY <= y + size) {
            isDraggingRef.current = true;
            dragStartRef.current = { x: mouseX, y: mouseY };
            canvas.style.cursor = 'grabbing';
        }
    };

    const handleMouseMove = (e) => {
        if (!isDraggingRef.current) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const deltaX = mouseX - dragStartRef.current.x;
        const deltaY = mouseY - dragStartRef.current.y;

        dragStartRef.current = { x: mouseX, y: mouseY };

        const width = canvas.width;
        const height = canvas.height;
        
        const newHorizontal = horizontalPosition + (deltaX / (width / 2)) * 50;
        const newVertical = verticalPosition + (deltaY / (height / 2)) * 50;

        setHorizontalPosition(Math.max(-50, Math.min(50, newHorizontal)));
        setVerticalPosition(Math.max(-50, Math.min(50, newVertical)));
    };

    const handleMouseUp = () => {
        isDraggingRef.current = false;
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.style.cursor = 'grab';
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [zoom, horizontalPosition, verticalPosition, blur]);

    const drawCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        ctx.clearRect(0, 0, width, height);

        const baseSize = Math.min(width, height);
        
        const zoomFactor = 1 + (zoom / 100);
        const size = baseSize * zoomFactor;

        const centerX = width / 2;
        const centerY = height / 2;

        const offsetX = (width / 2) * (horizontalPosition / 50);
        const offsetY = (height / 2) * (verticalPosition / 50);

        const x = centerX - size / 2 + offsetX;
        const y = centerY - size / 2 + offsetY;

        if (imageRef.current) {
            ctx.filter = `blur(${blur / 5}px)`;
            ctx.drawImage(imageRef.current, x, y, size, size);
            ctx.filter = 'none';
        }
    };

    return (
        <Container style={{ position: 'absolute', top: position.top, left: position.left, zIndex: 2147483647 }}>
            <Canvas ref={canvasRef} width={200} height={200} />
            
            <SliderContainer>
                <LabelRow>
                    <Label>{t('COVER_EDITOR_Size')}</Label>
                    <ValueInput
                        type="number"
                        value={zoom}
                        onChange={(e) => setZoom(parseInt(e.target.value) || 0)}
                    />
                </LabelRow>
                <Slider
                    type="range"
                    min="-100"
                    max="100"
                    step="1"
                    value={zoom}
                    onChange={(e) => setZoom(Number(e.target.value))}
                />
            </SliderContainer>
            
            <SliderContainer>
                <LabelRow>
                    <Label>{t('COVER_EDITOR_Blur')}</Label>
                    <ValueInput
                        type="number"
                        value={blur}
                        onChange={(e) => setBlur(parseInt(e.target.value) || 0)}
                    />
                </LabelRow>
                <Slider
                    type="range"
                    min="0"
                    max="20"
                    step="1"
                    value={blur}
                    onChange={(e) => setBlur(Number(e.target.value))}
                />
            </SliderContainer>
            
            <SliderContainer>
                <LabelRow>
                    <Label>{t('COVER_EDITOR_HorizontalPosition')}</Label>
                    <ValueInput
                        type="number"
                        value={horizontalPosition}
                        onChange={(e) => setHorizontalPosition(parseInt(e.target.value) || 0)}
                    />
                </LabelRow>
                <Slider
                    type="range"
                    min="-50"
                    max="50"
                    step="1"
                    value={horizontalPosition}
                    onChange={(e) => setHorizontalPosition(Number(e.target.value))}
                />
            </SliderContainer>
            
            <SliderContainer>
                <LabelRow>
                    <Label>{t('COVER_EDITOR_VerticalPosition')}</Label>
                    <ValueInput
                        type="number"
                        value={verticalPosition}
                        onChange={(e) => setVerticalPosition(parseInt(e.target.value) || 0)}
                    />
                </LabelRow>
                <Slider
                    type="range"
                    min="-50"
                    max="50"
                    step="1"
                    value={verticalPosition}
                    onChange={(e) => setVerticalPosition(Number(e.target.value))}
                />
            </SliderContainer>
            
            <ButtonsContainer>
                <Cancel onClick={onClose} />
                <Check onClick={() => onDone({ zoom, horizontalPosition, verticalPosition, blur })} />
            </ButtonsContainer>
        </Container>
    );
}

export default CoverEditor;