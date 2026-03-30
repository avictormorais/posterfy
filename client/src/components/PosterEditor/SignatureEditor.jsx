import styled from "styled-components";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { RiCloseLargeLine, RiDeleteBin6Line } from "react-icons/ri";
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
    
    &:nth-of-type(1) { animation-delay: 0.1s; }
    &:nth-of-type(2) { animation-delay: 0.2s; }
    &:nth-of-type(3) { animation-delay: 0.3s; }
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

const Remove = styled(RiDeleteBin6Line)`
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
        color: #ff4444;
        background-color: rgba(255, 68, 68, 0.1);
    }
    
    &:active {
        transform: scale(0.95);
    }
`;

const ErrorMessage = styled.div`
    padding: 10px;
    background-color: rgba(255, 68, 68, 0.1);
    border: 1px solid #ff4444;
    border-radius: 5px;
    color: #ff4444;
    font-size: 0.85em;
    text-align: center;
`

function SignatureEditor({ position, signatureUrl, initialHorizontalPosition, initialVerticalPosition, initialScale, onDone, onClose }){
    const { t } = useTranslation();
    const [horizontalPosition, setHorizontalPosition] = useState(initialHorizontalPosition || 0);
    const [verticalPosition, setVerticalPosition] = useState(initialVerticalPosition || 0);
    const [scale, setScale] = useState(initialScale || 1);

    const handleConfirm = () => {
        onDone({
            horizontalPosition,
            verticalPosition,
            scale
        });
    };

    const handleRemove = () => {
        onDone({
            disabled: true
        });
    };

    return (
        <Container style={{ position: 'absolute', top: position?.top, left: position?.left, zIndex: 1000 }}>
            {!signatureUrl ? (
                <ErrorMessage>{t('EDITOR_SignatureNotFound')}</ErrorMessage>
            ) : (
                <>
                    <SliderContainer>
                        <LabelRow>
                            <Label>{t('EDITOR_HorizontalPosition')}</Label>
                            <ValueInput
                                type="number"
                                value={horizontalPosition}
                                onChange={(e) => setHorizontalPosition(parseInt(e.target.value) || 0)}
                            />
                        </LabelRow>
                        <Slider
                            type="range"
                            min="-100"
                            max="100"
                            step="1"
                            value={horizontalPosition}
                            onChange={(e) => setHorizontalPosition(Number(e.target.value))}
                        />
                    </SliderContainer>

                    <SliderContainer>
                        <LabelRow>
                            <Label>{t('EDITOR_VerticalPosition')}</Label>
                            <ValueInput
                                type="number"
                                value={verticalPosition}
                                onChange={(e) => setVerticalPosition(parseInt(e.target.value) || 0)}
                            />
                        </LabelRow>
                        <Slider
                            type="range"
                            min="-100"
                            max="100"
                            step="1"
                            value={verticalPosition}
                            onChange={(e) => setVerticalPosition(Number(e.target.value))}
                        />
                    </SliderContainer>

                    <SliderContainer>
                        <LabelRow>
                            <Label>{t('EDITOR_Scale')}</Label>
                            <ValueInput
                                type="number"
                                min="0.1"
                                max="3"
                                step="0.1"
                                value={parseFloat(scale).toFixed(1)}
                                onChange={(e) => setScale(Number(e.target.value))}
                            />
                        </LabelRow>
                        <Slider
                            type="range"
                            min="0.1"
                            max="3"
                            step="0.1"
                            value={scale}
                            onChange={(e) => setScale(Number(e.target.value))}
                        />
                    </SliderContainer>

                    <ButtonsContainer>
                        <Cancel onClick={onClose} />
                        <Remove onClick={handleRemove} />
                        <Check onClick={handleConfirm} />
                    </ButtonsContainer>
                </>
            )}
        </Container>
    );
}

export default SignatureEditor;
