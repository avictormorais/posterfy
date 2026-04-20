/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import styled, { css, keyframes } from "styled-components";
import { IoArrowBack, IoTrashOutline } from "react-icons/io5";
import { BiSolidTrashAlt } from "react-icons/bi";
import { BiSolidAlbum } from "react-icons/bi";
import { RiListOrdered } from "react-icons/ri";
import { RiDownloadCloudFill } from "react-icons/ri";
import { BsSendFill } from "react-icons/bs";
import NormalInput from "./inputs/NormalInput";
import DoubleInput from "./inputs/DoubleInput";
import ColorInput from "./inputs/ColorInput";
import { useState, useEffect, useRef, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import apiService from "../../services/apiService";
import { useTranslation } from 'react-i18next';
import ColorSelector from "./ColorSelector";
import CoverEditor from "./CoverEditor";
import SignatureEditor from "./SignatureEditor";
import ReactDOM from 'react-dom';
import CheckInput from "./inputs/CheckInput";
import ClickInput from "./inputs/ClickInput";
import ButtonInput from "./inputs/ButtonInput";
import { FaFile, FaFont } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { MdOutlineRefresh, MdPublic, MdLockOutline } from "react-icons/md";
import { RiImage2Fill } from "react-icons/ri";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { HiInformationCircle } from "react-icons/hi";
import LoadingDiv from "../Commom/LoadingDiv";
import AlertModal from "../Commom/AlertModal";
import { Palette } from "color-thief-react";
import CanvasPoster from "./CanvasPoster";
import AnimatedInput from "./inputs/AnimatedInput";
import { getSignatureBySpotifyId } from "../../services/signatureService.js";
import { trackPosterDownload, trackPosterPreview, trackCommunityPosterPublish, trackCommunityPosterDownload, trackCommunityPosterSave } from "../../services/analytics";
import { exportPosterJson, importPosterJson } from "./PosterJsonIO";
import jsPDF from 'jspdf';
import { getHighestQualitySpotifyImage } from "../../utils/spotifyImageOptimizer";
import { TbFileTypePdf } from "react-icons/tb";
import { TbFileTypePng } from "react-icons/tb";
import SetPasswordSVG from "../svgs/Login/SetPasswordSVG"
import PosterInfo from "./PosterInfo";

const RELEASE_DEFAULTS = new Set([
    'Release date',
    'Lançamento',
    'Fecha de lanzamiento',
    '发布日期'
]);
const RUNTIME_DEFAULTS = new Set([
    'Runtime',
    'Duração',
    'Duración',
    '时长',
]);

const LOCALE_MAP = { en: 'en-US', pt: 'pt-BR', es: 'es-ES', zh: 'zh-CN' };
const DATE_FMT   = { day: 'numeric', month: 'short', year: 'numeric' };
const MONTH_MAP = {
    jan: 1,
    janeiro: 1,
    january: 1,
    ene: 1,
    enero: 1,
    feb: 2,
    fev: 2,
    fevereiro: 2,
    february: 2,
    febrero: 2,
    mar: 3,
    marco: 3,
    março: 3,
    march: 3,
    marzo: 3,
    apr: 4,
    abr: 4,
    abril: 4,
    april: 4,
    may: 5,
    mai: 5,
    maio: 5,
    mayo: 5,
    jun: 6,
    junho: 6,
    june: 6,
    junio: 6,
    jul: 7,
    julho: 7,
    july: 7,
    julio: 7,
    aug: 8,
    ago: 8,
    agosto: 8,
    august: 8,
    sep: 9,
    sept: 9,
    set: 9,
    septiembre: 9,
    setembro: 9,
    september: 9,
    oct: 10,
    out: 10,
    octubre: 10,
    outubro: 10,
    october: 10,
    nov: 11,
    noviembre: 11,
    novembro: 11,
    november: 11,
    dec: 12,
    dic: 12,
    dez: 12,
    diciembre: 12,
    dezembro: 12,
    december: 12
};

const normalizeMonthToken = (token = '') =>
    token
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[.,]/g, '')
        .trim();

const createSafeDate = (year, month, day) => {
    const y = Number(year);
    const m = Number(month);
    const d = Number(day);

    if (!Number.isInteger(y) || !Number.isInteger(m) || !Number.isInteger(d)) return null;
    if (y < 1900 || y > 2100 || m < 1 || m > 12 || d < 1 || d > 31) return null;

    const date = new Date(y, m - 1, d);
    if (date.getFullYear() !== y || date.getMonth() !== m - 1 || date.getDate() !== d) return null;
    return date;
};

function tryParseDate(str) {
    if (!str) return null;

    const input = String(str).trim();

    if (/^\d{4}-\d{2}-\d{2}$/.test(input)) {
        const [y, m, d] = input.split('-');
        return createSafeDate(y, m, d);
    }

    const zhDate = input.match(/^(\d{4})\s*年\s*(\d{1,2})\s*月\s*(\d{1,2})\s*日?$/);
    if (zhDate) {
        return createSafeDate(zhDate[1], zhDate[2], zhDate[3]);
    }

    const numericDate = input.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{4})$/);
    if (numericDate) {
        return createSafeDate(numericDate[3], numericDate[2], numericDate[1]);
    }

    const normalizedInput = input
        .replace(/\s+de\s+/gi, ' ')
        .replace(/,/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    const dmy = normalizedInput.match(/^(\d{1,2})\s+([^\s]+)\s+(\d{4})$/i);
    if (dmy) {
        const month = MONTH_MAP[normalizeMonthToken(dmy[2])];
        if (month) {
            return createSafeDate(dmy[3], month, dmy[1]);
        }
    }

    const mdy = normalizedInput.match(/^([^\s]+)\s+(\d{1,2})\s+(\d{4})$/i);
    if (mdy) {
        const month = MONTH_MAP[normalizeMonthToken(mdy[1])];
        if (month) {
            return createSafeDate(mdy[3], month, mdy[2]);
        }
    }

    const d = new Date(input);
    if (!isNaN(d.getTime()) && d.getFullYear() >= 1900 && d.getFullYear() <= 2100) return d;
    return null;
}

function localizeDate(str, lang) {
    const date = tryParseDate(str);
    if (!date) return str;
    const normalizedLang = String(lang || '').toLowerCase().split('-')[0];
    const locale = LOCALE_MAP[normalizedLang] || 'en-US';
    return new Intl.DateTimeFormat(locale, DATE_FMT).format(date);
}

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
    width: 90%;
    margin-inline: auto;
    position: relative;
`

const TabSlider = styled.div`
    position: absolute;
    bottom: -1px;
    height: 2px;
    background: var(--AccentColor);
    transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    left: ${props => props.left || 0}px;
    width: ${props => props.width || 0}px;
    border-radius: 5px;
`

const Tab = styled.div`
    padding: 10px 20px;
    font-size: 1em;
    font-weight: 500;
    color: ${({ $active }) => ($active ? 'var(--textColor)' : 'var(--textSecondary)')};
    cursor: pointer;
    transition: color 0.3s;
    display: flex;
    flex-direction: row;
    font-weight: 500;
    position: relative;
    flex-shrink: 0;
    user-select: none;

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
    padding: 2px 40px;
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
    padding: 8px 26px;
    border-radius: 6px;
    font-size: 12px;
    cursor: pointer;
    font-weight: bolder;
    
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
    max-height: 400px;
    line-height: 1.5em;

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

const TracklistListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    max-height: 490px;
    overflow-y: auto;
    padding-right: 8px;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: var(--borderColor);
        border-radius: 3px;

        &:hover {
            background: var(--textSecondary);
        }
    }

    @media (max-width: 530px) {
        gap: 6px;
        max-height: 400px;
    }
`

const TracklistItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 4px 2px;
    background: var(--glassBackground);
    border-radius: 6px;
    transition: background 0.2s ease, opacity 0.2s ease, transform 0.2s ease;
    opacity: ${props => props.isDragging ? 0.5 : 1};
    transform: ${props => props.isDragging ? 'scale(0.95)' : 'scale(1)'};
    
    &:hover {
        background: var(--borderColor);
    }

    ${props => props.isDragOver && css`
        background: var(--AccentColor);
        opacity: 0.7;
        border-radius: 8px;
    `}

    @media (max-width: 530px) {
        gap: 8px;
        padding: 8px 10px;
    }
`

const TrackItemIndex = styled.div`
    font-weight: 700;
    font-size: 1.1em;
    color: var(--textColor);
    min-width: 35px;
    text-align: right;
    width: 15px;
    cursor: grab;
    user-select: none;
    transition: opacity 0.2s ease, color 0.2s ease;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        cursor: grabbing;
    }

    @media (max-width: 530px) {
        font-size: 0.95em;
        min-width: 30px;
    }
`

const TrackItemName = styled.input`
    flex: 1;
    background: transparent;
    border: none;
    color: var(--textColor);
    font-size: 0.95em;
    font-family: inherit;
    padding: 4px 6px;
    transition: background 0.2s ease;

    &:focus {
        outline: none;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 4px;
    }

    &::placeholder {
        color: var(--textSecondary);
    }

    @media (max-width: 530px) {
        font-size: 0.85em;
    }
`

const TrackItemDuration = styled.input`
    font-size: 0.85em;
    color: var(--textSecondary);
    min-width: 45px;
    text-align: right;
    opacity: 0.7;
    font-weight: bolder;
    background: transparent;
    border: none;
    font-family: inherit;
    padding: 4px 6px;
    transition: background 0.2s ease;

    &:focus {
        outline: none;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 4px;
    }

    &::placeholder {
        color: var(--textSecondary);
    }

    @media (max-width: 530px) {
        font-size: 0.75em;
        min-width: 38px;
    }
`

const TracklistItemAdd = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 4px 2px;
    background: var(--glassBackground);
    border-radius: 6px;
    opacity: 0.45;
    transition: opacity 0.2s ease, background 0.2s ease;
    cursor: pointer;
    
    &:hover {
        opacity: 0.65;
        background: var(--borderColor);
    }

    input {
        cursor: pointer;
    }

    @media (max-width: 530px) {
        gap: 8px;
        padding: 8px 10px;
    }
`

const TracklistItemAddBtn = styled.button`
    width: 28px;
    height: 28px;
    padding: 0;
    background: transparent;
    border: none;
    color: var(--textSecondary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: all 0.2s ease;
    font-size: 1.5em;
    font-weight: bold;

    &:active {
        transform: scale(0.9);
    }

    @media (max-width: 530px) {
        width: 24px;
        height: 24px;
    }
`

const TrackItemDeleteBtn = styled.button`
    width: 28px;
    height: 28px;
    padding: 0;
    background: transparent;
    border: none;
    color: var(--textSecondary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: all 0.2s ease;
    font-size: 1.2em;

    svg {
        width: 18px;
        height: 18px;
        color: var(--textSecondary);
        transition: color 0.2s ease;
    }

    &:hover svg {
        color: #ff4444;
    }

    &:active {
        transform: scale(0.9);
    }

    @media (max-width: 530px) {
        width: 24px;
        height: 24px;
    }
`

const TrackItemDeleteIcon = styled(BiSolidTrashAlt)`
    font-size: 5em;
    margin-right: 5px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    fill: var(--textColor);
`

const InfosIcon = styled(BiSolidAlbum)`
    font-size: 1.25em;
    margin-right: 8px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    fill: var(--textColor);
    margin-top: -1px;
`;

const TracksIcon = styled(RiListOrdered)`
    font-size: 1.25em;
    margin-right: 8px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    fill: var(--textColor);
    margin-top: -1px;
`;

const ExportIcon = styled(RiDownloadCloudFill)`
    font-size: 1.25em;
    margin-right: 8px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    fill: var(--textColor);
    margin-top: -1px;
`;

const PublishIcon = styled(BsSendFill)`
    font-size: 1.05em;
    margin-right: 8px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    fill: var(--textColor);
    margin-top: 1px;
`;

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

const ExportContainer = styled.div`
    padding: 40px;
    padding-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 1300px) {
        width: 90%;
    }

    @media (max-width: 530px) {
        padding: 20px;
    }
`;

const ExportSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const ExportLabel = styled.h3`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
    margin: 0;
`;

const FormatGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 12px;
`;

const FormatOption = styled.div`
    padding: 10px;
    border-radius: 12px;
    background: var(--glassBackground);
    border: 2px solid ${props => props.$selected ? 'var(--AccentColor)' : 'var(--borderColor)'};
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 5px;
    
    &:hover {
        border-color: var(--AccentColor);
        transform: translateY(-2px);
    }
`;

const FormatName = styled.div`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
`;

const FormatDescription = styled.div`
    font-size: 0.75em;
    color: var(--textSecondary);
`;

const TipBox = styled.div`
    padding: 10px 10px;
    border-radius: 10px;
    background: var(--glassBackground);
    border: 1px solid var(--borderColor);
    display: flex;
    align-items: center;
    gap: 12px;
`;

const TipText = styled.p`
    font-size: 0.9em;
    color: var(--textColor);
    margin: 0;
    line-height: 1.5;
`;

const DownloadButton = styled.button`
    padding: 10px 15px;
    border-radius: 12px;
    background: var(--AccentColor);
    color: var(--backgroundColor);
    border: none;
    font-size: 1em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 20px var(--borderColor);
    }
    
    &:active {
        transform: translateY(0);
    }
    
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
    }
`;

const PublishErrorBox = styled.div`
    background: rgba(231, 76, 60, 0.12);
    border: 1px solid rgba(231, 76, 60, 0.35);
    border-radius: 10px;
    padding: 10px 14px;
    font-size: 0.88em;
    color: #e74c3c;
    line-height: 1.5;
`;

const VisibilityOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

const VisibilityCard = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 12px 14px;
    border-radius: 12px;
    border: 2px solid ${({ $selected }) => $selected ? 'var(--AccentColor)' : 'var(--borderColor)'};
    background: ${({ $selected }) => $selected ? 'var(--AccentColor)20' : 'transparent'};
    cursor: pointer;
    transition: all 0.18s;
    text-align: left;

    &:hover {
        border-color: var(--AccentColor);
        background: var(--AccentColor)14;
    }
`;

const VCardIconWrap = styled.div`
    font-size: 1.5em;
    color: ${({ $selected }) => $selected ? 'var(--AccentColor)' : 'var(--textColor)'};
    display: flex;
    align-items: center;
    flex-shrink: 0;
`;

const VCardBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const VCardTitle = styled.span`
    font-size: 1.4em;
    font-weight: 700;
    color: var(--textColor);
`;

const VCardDesc = styled.span`
    font-size: 1.1em;
    opacity: 0.65;
    color: var(--textColor);
`;

const IconPublic = styled(MdPublic)`
    font-size: 2em;
`;

const IconPrivate = styled(MdLockOutline)`
    font-size: 2em;
`;

const EmptyStateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70%;
    padding: 1rem;
`;

const TextLogin = styled.p`
    font-size: 1em;
    color: var(--textColor);
    margin-top: 15px;
    font-weight: bolder;
`;

const LoginButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 20px;
    background: var(--AccentColor);
    color: var(--backgroundColor);
    border: none;
    font-size: 1em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
`;

const PosterEditor = forwardRef(({ albumID, handleClickBack, model, modelParams, initialPosterJson, source, posterId, posterFullData, onPublishSuccess }, ref) => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const { user, isAuthenticated } = useAuth();
    const previewRef = useRef(null);
    const canvasRef = useRef(null);
    const exportCanvasRef = useRef(null);

    const [albumName, setAlbumName] = useState('');
    const [albumNameOriginal, setAlbumNameOriginal] = useState('');
    const [artistsName, setArtistsName] = useState('');
    const [artistsNameOriginal, setArtistsNameOriginal] = useState('');
    const [spotifyArtistId, setSpotifyArtistId] = useState('');
    const [titleSize, setTitleSize] = useState('200');
    const [artistsSize, setArtistsSize] = useState('110');
    const [tracksSize, setTracksSize] = useState('50');
    const [marginTop, setMarginTop] = useState(modelParams?.marginTop ?? '');
    const [marginSide, setmarginSide] = useState(160);
    const [marginCover, setMarginCover] = useState(modelParams?.marginCover ?? 0);
    const [marginBackground, setmarginBackground] = useState(modelParams?.marginBackground ?? 0);
    const [backgroundColor, setbackgroundColor] = useState(modelParams?.backgroundColor ?? '#5900ff');
    const [textColor, setTextColor] = useState(modelParams?.textColor ?? '#ff9100');
    const [color1, setcolor1] = useState(modelParams?.color1 ?? '#ff0000');
    const [color2, setcolor2] = useState(modelParams?.color2 ?? '#00ff40');
    const [color3, setcolor3] = useState(modelParams?.color3 ?? '#2600ff');
    const [useWatermark, setUseWatermark] = useState(true);
    const [useFade, setUseFade] = useState(modelParams?.useFade ?? true);
    const [showTracklist, setShowTracklist] = useState(modelParams?.showTracklist ?? false);
    const [showArtistSignature, setShowArtistSignature] = useState(modelParams?.showArtistSignature ?? false);
    const [albumCover, setAlbumCover] = useState('');
    const [uncompressedAlbumCover, setUncompressedAlbumCover] = useState('');
    const [customFont, setCustomFont] = useState('');
    const [customFontFile, setCustomFontFile] = useState(null);
    const [activeTab, setActiveTab] = useState('information');

    const tabRefs = useRef({});
    const [sliderPos, setSliderPos] = useState({ left: 0, width: 0 });

    const [publishVisibility, setPublishVisibility] = useState('public');
    const [isPublishing, setIsPublishing] = useState(false);
    const [publishError, setPublishError] = useState('');

    const [saveConfirmModal, setSaveConfirmModal] = useState(false);
    const [isSavingPoster, setIsSavingPoster] = useState(false);
    const [saveError, setSaveError] = useState('');

    function applyPosterJson(json) {
        setIsLoadedFromJson(true);
        setAlbumName(json.albumName || '');
        setAlbumNameOriginal(json.albumNameOriginal || json.albumName || '');
        setArtistsName(json.artistsName || '');
        setArtistsNameOriginal(json.artistsNameOriginal || json.artistsName || '');
        setSpotifyArtistId(json.spotifyArtistId || '');
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
        setSignatureHorizontalPosition(json.signatureHorizontalPosition || 0);
        setSignatureVerticalPosition(json.signatureVerticalPosition || 0);
        setSignatureScale(json.signatureScale || 1);
        setUseWatermark(json.useWatermark !== undefined ? json.useWatermark : true);
        setUseFade(json.useFade !== undefined ? json.useFade : true);
        setShowTracklist(json.showTracklist !== undefined ? json.showTracklist : false);
        setShowArtistSignature(json.showArtistSignature !== undefined ? json.showArtistSignature : false);
        setUseUncompressed(json.useUncompressed !== undefined ? json.useUncompressed : false);
        setAlbumCover(json.albumCover || '');
        setUncompressedAlbumCover(json.uncompressedAlbumCover || '');
        setCustomFont(json.customFont || '');
        setTracklist(json.tracklist || '');
        setTrackDurations(json.trackDurations || []);
        prevTracklistRef.current = json.tracklist || '';
        setTitleRelease(RELEASE_DEFAULTS.has(json.titleRelease) ? t('EDITOR_ReleaseTitle') : (json.titleRelease ?? ''));
        const sourceReleaseDate = json.rawReleaseDate || json.releaseDate || '';
        rawReleaseDateRef.current = sourceReleaseDate;
        setReleaseDate(localizeDate(sourceReleaseDate, i18n.language));
        setTitleRuntime(RUNTIME_DEFAULTS.has(json.titleRuntime) ? t('EDITOR_RuntimeTitle') : (json.titleRuntime ?? ''));
        setRuntime(json.runtime || '');
        setNewTrackName('');
        setNewTrackDuration('');
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
    const [trackDurations, setTrackDurations] = useState([]);
    const [newTrackName, setNewTrackName] = useState('');
    const [newTrackDuration, setNewTrackDuration] = useState('');
    const [draggedTrackIndex, setDraggedTrackIndex] = useState(null);
    const [dragOverIndex, setDragOverIndex] = useState(null);
    const prevTracklistRef = useRef('');

    const [titleRelease, setTitleRelease] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const rawReleaseDateRef = useRef('');
    const [titleRuntime, setTitleRuntime] = useState('');
    const [runtime, setRuntime] = useState('');

    useEffect(() => {
        const tabElement = tabRefs.current[activeTab];
        if (tabElement) {
            const { offsetLeft, offsetWidth } = tabElement;
            setSliderPos({ left: offsetLeft, width: offsetWidth });
        }
    }, [activeTab]);

    useEffect(() => {
        const initializeSlider = () => {
            const tabElement = tabRefs.current['information'];
            if (tabElement) {
                const { offsetLeft, offsetWidth } = tabElement;
                setSliderPos({ left: offsetLeft, width: offsetWidth });
            } else {
                requestAnimationFrame(initializeSlider);
            }
        };
        
        requestAnimationFrame(() => {
            setTimeout(initializeSlider, 0);
        });
    }, []);

    useEffect(() => {
        setTitleRelease(prev => RELEASE_DEFAULTS.has(prev) ? t('EDITOR_ReleaseTitle') : prev);
        setTitleRuntime(prev => RUNTIME_DEFAULTS.has(prev) ? t('EDITOR_RuntimeTitle') : prev);
        if (rawReleaseDateRef.current) {
            const localized = localizeDate(rawReleaseDateRef.current, i18n.language);
            setReleaseDate(localized);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [i18n.language]);

    useEffect(() => {
        const currentTracks = tracklist.split('\n').filter(t => t.trim() !== '');
        
        if (currentTracks.length > 0 && trackDurations.length > 0) {
            let totalMs = 0;
            
            for (let i = 0; i < Math.min(currentTracks.length, trackDurations.length); i++) {
                if (trackDurations[i]) {
                    totalMs += trackDurations[i];
                }
            }
            
            const totalSeconds = Math.floor(totalMs / 1000);
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
            
            const formattedRuntime = hours > 0
                ? `${hours}h ${minutes}min ${seconds}s`
                : `${minutes}min ${seconds}s`;
            
            setRuntime(formattedRuntime);
        }
    }, [tracklist, trackDurations]);

    const [showColorSelector, setShowColorSelector] = useState(false);
    const [colorInputPosition, setColorInputPosition] = useState(null);
    const [currentColorInput, setCurrentColorInput] = useState(null);
    
    const [showCoverEditor, setShowCoverEditor] = useState(false);
    const [coverEditorPosition, setCoverEditorPosition] = useState(null);
    
    const [coverZoom, setCoverZoom] = useState(modelParams?.coverZoom ?? 0);
    const [coverHorizontalPosition, setCoverHorizontalPosition] = useState(0);
    const [coverVerticalPosition, setCoverVerticalPosition] = useState(0);
    const [coverBlur, setCoverBlur] = useState(0);
    
    const [showSignatureEditor, setShowSignatureEditor] = useState(false);
    const [signatureEditorPosition, setSignatureEditorPosition] = useState(null);
    const [signatureHorizontalPosition, setSignatureHorizontalPosition] = useState(0);
    const [signatureVerticalPosition, setSignatureVerticalPosition] = useState(0);
    const [signatureScale, setSignatureScale] = useState(1);
    const [signatureUrl, setSignatureUrl] = useState(null);

    const [userAdjustedTitleSize, setUserAdjustedTitleSize] = useState(false);
    const [initialTitleSizeSet, setInitialTitleSizeSet] = useState(false);
    const [userAdjustedTracksSize, setUserAdjustedTracksSize] = useState(false);
    const [initialTracksSizeSet, setInitialTracksSizeSet] = useState(false);
    const [isLoadedFromJson, setIsLoadedFromJson] = useState(false);

    const [exportFormat, setExportFormat] = useState('png');
    const [exportScale, setExportScale] = useState(1.0);

    const hasModelBackgroundColor = modelParams?.backgroundColor !== undefined;
    const hasModelTextColor = modelParams?.textColor !== undefined;
    const hasModelColor1 = modelParams?.color1 !== undefined;
    const hasModelColor2 = modelParams?.color2 !== undefined;
    const hasModelColor3 = modelParams?.color3 !== undefined;

    useEffect(() => {
        const loadSignatureUrl = async () => {
            if (!spotifyArtistId && !artistsName) return;
            if (signatureUrl) return;

            try {
                const result = await getSignatureBySpotifyId(spotifyArtistId, artistsName);
                if (result) {
                    setSignatureUrl(result.url);
                }
            } catch (error) {
            }
        };

        if (spotifyArtistId || artistsName) {
            loadSignatureUrl();
        }
    }, [spotifyArtistId, artistsName, signatureUrl]);

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

    const handleArtistIdDiscovered = (artistId) => {
        if (!spotifyArtistId) {
            setSpotifyArtistId(artistId);
        }
    };

    const posterData = {
        albumCover,
        uncompressedAlbumCover,
        useUncompressed,
        albumName,
        artistsName,
        spotifyArtistId,
        titleSize,
        artistsSize,
        tracksSize,
        marginTop,
        marginSide,
        marginCover,
        marginBackground,
        titleRelease,
        rawReleaseDate: rawReleaseDateRef.current || releaseDate,
        releaseDate,
        titleRuntime,
        runtime,
        backgroundColor,
        textColor,
        useWatermark,
        useFade,
        showTracklist,
        showArtistSignature,
        tracklist,
        trackDurations,
        color1,
        color2,
        color3,
        albumID,
        coverZoom,
        coverHorizontalPosition,
        coverVerticalPosition,
        coverBlur,
        signatureHorizontalPosition,
        signatureVerticalPosition,
        signatureScale,
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
                if (posterId) {
                    apiService.registerDownload(posterId).catch(() => {});
                    trackCommunityPosterDownload(posterId, albumName, artistsName, 'png');
                }
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
                    if (posterId) {
                        apiService.registerDownload(posterId).catch(() => {});
                        trackCommunityPosterDownload(posterId, albumName, artistsName, 'pdf');
                    }
                };
                img.src = exportImage;
            } else if (exportMode === 'jpg') {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx.fillStyle = '#FFFFFF';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, 0, 0);
                    canvas.toBlob((blob) => {
                        const link = document.createElement('a');
                        link.href = URL.createObjectURL(blob);
                        link.download = `Posterfy - ${albumName}.jpg`;
                        link.click();
                        URL.revokeObjectURL(link.href);
                        trackPosterDownload(albumName, 'poster_jpg', artistsName);
                        if (posterId) apiService.registerDownload(posterId).catch(() => {});
                    }, 'image/jpeg', 0.95);
                };
                img.src = exportImage;
            }
            setExportImage(null);
            setExportMode(null);
        }
    }, [exportImage, exportMode, albumName, artistsName]);

    useEffect(() => {
        setExportImage(null);
    }, [exportScale]);

    const handleApplyClick = () => {
        setUserAdjustedTitleSize(false);
        setUserAdjustedTracksSize(false);
        setPreviewVisible(false);
        requestAnimationFrame(() => {
            setSpinApplyButton(true);
            setGeneratePoster(true);
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

    const handlePublish = async () => {
        setIsPublishing(true);
        setPublishError('');
        try {
            const posterJsonPayload = posterData;

            if (posterId) {
                const result = await apiService.updatePosterJson(posterId, posterJsonPayload, albumName, artistsName);
                onPublishSuccess?.(result.poster._id);
                handleClickBack();
                return;
            }

            const payload = {
                spotifyAlbumId: albumID,
                albumName,
                albumNameOriginal: albumNameOriginal || albumName,
                artistsName,
                artistsNameOriginal: artistsNameOriginal || artistsName,
                releaseDate: rawReleaseDateRef.current || releaseDate,
                visibility: publishVisibility,
                posterJson: posterJsonPayload,
            };
            const result = await apiService.publishPoster(payload);
            trackCommunityPosterPublish(albumName, artistsName, publishVisibility);
            onPublishSuccess?.(result.poster._id);
            handleClickBack();
        } catch (err) {
            setPublishError(err.message || t('COMMUNITY_PublishError'));
        } finally {
            setIsPublishing(false);
        }
    };

    const handleSavePoster = async () => {
        setIsSavingPoster(true);
        try {
            const posterJsonPayload = posterData;
            await apiService.updatePosterJson(posterId, posterJsonPayload, albumName, artistsName);
            trackCommunityPosterSave(posterId, albumName, artistsName);
            setSaveConfirmModal(false);
            onPublishSuccess?.(posterId);
            handleClickBack();
        } catch (err) {
            console.error('Failed to save poster:', err);
            const errorMessage = err.message || 'Failed to save poster changes';
            if (err.status === 403 || err.status === 401) {
                setSaveError('Unauthorized: Only the poster owner can edit it');
            } else if (err.status === 404) {
                setSaveError('Poster not found. It may have been deleted.');
            } else {
                setSaveError(errorMessage);
            }
        } finally {
            setIsSavingPoster(false);
        }
    };

    const handleDownloadPDFClick = () => {
        setExportMode('pdf');
        setGenerateExport(true);
    };

    const handleDownloadJPGClick = () => {
        setExportMode('jpg');
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

    function handleSignatureEditorClick(position) {
        setSignatureEditorPosition(position);
        setShowSignatureEditor(true);
    }

    function handleSignatureEditorClose() {
        setShowSignatureEditor(false);
    }

    function handleSignatureToggle(position) {
        if (!showArtistSignature) {
            setShowArtistSignature(true);
            setPreviewVisible(false);
            setGeneratePoster(true);
        } else {
            if (!signatureUrl && spotifyArtistId) {
                const loadSignature = async () => {
                    try {
                        const result = await getSignatureBySpotifyId(spotifyArtistId, artistsName);
                        if (result) {
                            setSignatureUrl(result.url);
                            setTimeout(() => {
                                setSignatureEditorPosition(position);
                                setShowSignatureEditor(true);
                            }, 100);
                        } else {
                            setSignatureEditorPosition(position);
                            setShowSignatureEditor(true);
                        }
                    } catch (error) {
                        setSignatureEditorPosition(position);
                        setShowSignatureEditor(true);
                    }
                };
                loadSignature();
            } else {
                setSignatureEditorPosition(position);
                setShowSignatureEditor(true);
            }
        }
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

    const formatDuration = (ms) => {
        if (!ms) return '';
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${String(seconds).padStart(2, '0')}`;
    };

    const parseTracklistToArray = () => {
        const lines = tracklist.split('\n').filter(line => line.trim() !== '');
        return lines.map((line, idx) => {
            const match = line.match(/^(\d+\.\s*)?(.+)$/);
            const name = match ? match[2].trim() : line.trim();
            return {
                index: idx + 1,
                name: name,
                duration: trackDurations[idx] || null,
                originalLine: line
            };
        });
    };

    const updateTrackName = (idx, newName) => {
        const lines = tracklist.split('\n');
        lines[idx] = newName;
        setTracklist(lines.join('\n'));
    };

    const deleteTrack = (idx) => {
        const lines = tracklist.split('\n');
        lines.splice(idx, 1);
        
        const newDurations = trackDurations.filter((_, i) => i !== idx);
        setTrackDurations(newDurations);
        
        setTracklist(lines.join('\n'));
    };

    const updateTrackDuration = (idx, durationStr) => {
        if (!durationStr.trim()) {
            const newDurations = [...trackDurations];
            newDurations[idx] = 0;
            setTrackDurations(newDurations);
            return;
        }

        const parts = durationStr.split(':');
        if (parts.length !== 2) return;

        const minutes = parseInt(parts[0], 10);
        const seconds = parseInt(parts[1], 10);
        
        if (isNaN(minutes) || isNaN(seconds) || seconds > 59) return;

        const totalMs = (minutes * 60 + seconds) * 1000;
        const newDurations = [...trackDurations];
        newDurations[idx] = totalMs;
        setTrackDurations(newDurations);
    };

    const addNewTrack = () => {
        if (!newTrackName.trim()) {
            return; 
        }

        const lines = tracklist.split('\n').filter(l => l.trim() !== '');
        const nextIndex = lines.length + 1;
        
        lines.push(`${nextIndex}. ${newTrackName}`);
        
        let durationMs = 0;
        if (newTrackDuration.trim()) {
            const parts = newTrackDuration.split(':');
            if (parts.length === 2) {
                const minutes = parseInt(parts[0], 10);
                const seconds = parseInt(parts[1], 10);
                if (!isNaN(minutes) && !isNaN(seconds) && seconds <= 59) {
                    durationMs = (minutes * 60 + seconds) * 1000;
                }
            }
        }
        
        setTracklist(lines.join('\n'));
        setTrackDurations([...trackDurations, durationMs]);
        
        setNewTrackName('');
        setNewTrackDuration('');
    };

    const handleTrackDragStart = (index) => {
        setDraggedTrackIndex(index);
    };

    const handleTrackDragOver = (e, index) => {
        e.preventDefault();
        setDragOverIndex(index);
    };

    const handleTrackDragLeave = () => {
        setDragOverIndex(null);
    };

    const handleTrackDrop = (e, dropIndex) => {
        e.preventDefault();
        setDragOverIndex(null);

        if (draggedTrackIndex === null || draggedTrackIndex === dropIndex) {
            setDraggedTrackIndex(null);
            return;
        }

        const lines = tracklist.split('\n').filter(l => l.trim() !== '');
        const newDurations = [...trackDurations];

        const draggedLine = lines[draggedTrackIndex];
        const draggedDuration = newDurations[draggedTrackIndex];

        lines.splice(draggedTrackIndex, 1);
        newDurations.splice(draggedTrackIndex, 1);

        lines.splice(dropIndex, 0, draggedLine);
        newDurations.splice(dropIndex, 0, draggedDuration);

        const reorderedLines = lines.map((line, idx) => {
            const match = line.match(/^(\d+\.\s*)?(.+)$/);
            const name = match ? match[2].trim() : line.trim();
            return `${idx + 1}. ${name}`;
        });

        setTracklist(reorderedLines.join('\n'));
        setTrackDurations(newDurations);
        setDraggedTrackIndex(null);
    };

    const handleTrackDragEnd = () => {
        setDraggedTrackIndex(null);
        setDragOverIndex(null);
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
                setAlbumNameOriginal(albumData.name);
                setArtistsName(formattedArtistsName);
                setArtistsNameOriginal(formattedArtistsName);
                if (albumData.artists.length > 0) {
                    console.debug("Setting Spotify artist ID:", albumData.artists[0].id);
                    setSpotifyArtistId(albumData.artists[0].id);
                }
                
                const originalCoverUrl = albumData.images[0]?.url;
                const highQualityCoverUrl = await getHighestQualitySpotifyImage(originalCoverUrl);
                setAlbumCover(highQualityCoverUrl);
                
                rawReleaseDateRef.current = albumData.release_date;
                setReleaseDate(localizeDate(albumData.release_date, i18n.language));
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
                
                const durations = albumData.tracks.items.map(track => track.duration_ms);
                
                setTracklist(tracklist.join("\n"));
                setTrackDurations(durations);
                prevTracklistRef.current = tracklist.join("\n");
                setNewTrackName('');
                setNewTrackDuration('');
                
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
            setNewTrackName('');
            setNewTrackDuration('');
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

    const isFirstRender = useRef(true);
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        if (!infosLoaded) return;

        const debounceTimer = setTimeout(() => {
            handleApplyClick();
        }, 1000);

        return () => {
            clearTimeout(debounceTimer);
        };
    }, [
        albumName,
        artistsName,
        titleSize,
        artistsSize,
        tracksSize,
        marginTop,
        marginSide,
        marginCover,
        marginBackground,
        backgroundColor,
        textColor,
        color1,
        color2,
        color3,
        useWatermark,
        useFade,
        showTracklist,
        showArtistSignature,
        tracklist,
        useUncompressed,
        titleRelease,
        releaseDate,
        titleRuntime,
        runtime,
        coverZoom,
        coverHorizontalPosition,
        coverVerticalPosition,
        coverBlur,
        customFont,
        infosLoaded
    ]);

    return(
        <>
            {!infosLoaded ? (
                <LoadingDiv/>
            ) : (
                <Container ref={ref}>
                <Palette src={albumCover} crossOrigin="anonymous" format="hex" colorCount={5}>
                    {({ data }) => {
                        useEffect(() => {
                            if (!data || data.length === 0 || isLoadedFromJson) return;

                            let changed = false;

                            if (!hasModelBackgroundColor && data[0]) {
                                setbackgroundColor(data[0]);
                                changed = true;
                            }
                            if (!hasModelTextColor && data[1]) {
                                setTextColor(data[1]);
                                changed = true;
                            }
                            if (!hasModelColor1 && data[2]) {
                                setcolor1(data[2]);
                                changed = true;
                            }
                            if (!hasModelColor2 && data[3]) {
                                setcolor2(data[3]);
                                changed = true;
                            }
                            if (!hasModelColor3 && data[4]) {
                                setcolor3(data[4]);
                                changed = true;
                            }

                            if (changed) {
                                handleApplyClick();
                            }
                        }, [
                            data,
                            isLoadedFromJson,
                            hasModelBackgroundColor,
                            hasModelTextColor,
                            hasModelColor1,
                            hasModelColor2,
                            hasModelColor3
                        ]);
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
                            onArtistIdDiscovered={handleArtistIdDiscovered}
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
                                    onArtistIdDiscovered={handleArtistIdDiscovered}
                                    customFont={customFont}
                                    scale={exportScale}
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
                                        ref={(el) => (tabRefs.current['information'] = el)}
                                        $active={activeTab === 'information'} 
                                        onClick={() => setActiveTab('information')}
                                    >
                                        <>
                                            <InfosIcon/>
                                            {t('EDITOR_InformationTab')}
                                        </>
                                    </Tab>
                                    <Tab 
                                        ref={(el) => (tabRefs.current['tracklist'] = el)}
                                        $active={activeTab === 'tracklist'} 
                                        onClick={() => setActiveTab('tracklist')}
                                    >
                                        <>
                                            <TracksIcon/>
                                            {t('EDITOR_TracklistTab')}
                                        </>
                                    </Tab>
                                    <Tab 
                                        ref={(el) => (tabRefs.current['export'] = el)}
                                        $active={activeTab === 'export'} 
                                        onClick={() => setActiveTab('export')}
                                    >
                                        <>
                                            <ExportIcon/>
                                            {t('EDITOR_ExportTab')}
                                        </>
                                    </Tab>
                                    {source === 'search_creation' && (
                                        <Tab 
                                            ref={(el) => (tabRefs.current['publish'] = el)}
                                            $active={activeTab === 'publish'} 
                                            onClick={() => setActiveTab('publish')}
                                        >
                                            <>
                                                <PublishIcon/>
                                                {t('EDITOR_PublishTab')}
                                            </>
                                        </Tab>
                                    )}
                                    <TabSlider left={sliderPos.left} width={sliderPos.width} />
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
                                            onChangeDate={(e) => { rawReleaseDateRef.current = e.target.value; setReleaseDate(e.target.value); }}
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
            
                                    {/* <AnimatedInput animationDelay={750}>
                                        <CheckInput
                                            title={t('EDITOR_Watermark')}
                                            value={useWatermark}
                                            onChange={(newValue) => setUseWatermark(newValue)}
                                            text={t('EDITOR_WatermarkText')}
                                        />
                                    </AnimatedInput> */}
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
                                    {(signatureUrl || showArtistSignature) && (
                                        <AnimatedInput animationDelay={950}>
                                            <ButtonInput
                                                title={t('EDITOR_Signature')}
                                                text={showArtistSignature ? t('EDITOR_EditSignature') : t('EDITOR_SignatureText')}
                                                onClick={handleSignatureToggle}
                                                icon={RiImage2Fill}
                                            />
                                        </AnimatedInput>
                                    )}
                                    {/* TODO: Rework cover/image input in the future */}
                                    {/* <AnimatedInput animationDelay={1000}>
                                        <ClickInput
                                            title={t('EDITOR_Cover')}
                                            onChange={handleFileChange}
                                            text={fileName}
                                            accept="image/png, image/jpg, image/jpeg"
                                            icon={FaFile}
                                        />
                                    </AnimatedInput> */}
                                    {/* TODO: Rework alternative font input in the future */}
                                    {/* <AnimatedInput animationDelay={1000}>
                                        <ClickInput
                                            title={t('EDITOR_Font')}
                                            text={customFontFile?.name || t('EDITOR_DefaultFont')}
                                            onChange={setCustomFontFile}
                                            accept=".ttf,.otf"
                                            icon={FaFont}
                                        />
                                    </AnimatedInput> */}

                                </EditorSettings>
                            ) : activeTab === 'tracklist' ? (
                                <TracklistContainer>
                                    <TracklistListContainer data-lenis-prevent>
                                        {parseTracklistToArray().map((track, idx) => (
                                            <TracklistItem 
                                                key={idx}
                                                draggable={true}
                                                onDragStart={() => handleTrackDragStart(idx)}
                                                onDragOver={(e) => handleTrackDragOver(e, idx)}
                                                onDragLeave={handleTrackDragLeave}
                                                onDrop={(e) => handleTrackDrop(e, idx)}
                                                onDragEnd={handleTrackDragEnd}
                                                isDragging={draggedTrackIndex === idx}
                                                isDragOver={dragOverIndex === idx}
                                            >
                                                <TrackItemIndex draggable={true}>{track.index}.</TrackItemIndex>
                                                <TrackItemName 
                                                    value={track.name}
                                                    onChange={(e) => updateTrackName(idx, e.target.value)}
                                                    placeholder={t('EDITOR_TrackNamePlaceholder') || 'Track name'}
                                                    draggable={false}
                                                />
                                                <TrackItemDuration
                                                    type="text"
                                                    value={track.duration ? formatDuration(track.duration) : ''}
                                                    onChange={(e) => updateTrackDuration(idx, e.target.value)}
                                                    placeholder="0:00"
                                                    draggable={false}
                                                />
                                                <TrackItemDeleteBtn 
                                                    onClick={() => deleteTrack(idx)}
                                                    title={t('EDITOR_DeleteTrack') || 'Delete track'}
                                                    draggable={false}
                                                >
                                                    <TrackItemDeleteIcon />
                                                </TrackItemDeleteBtn>
                                            </TracklistItem>
                                        ))}
                                        <TracklistItemAdd title={t('EDITOR_AddNewTrack') || 'Add new track'}>
                                            <TrackItemIndex>{parseTracklistToArray().length + 1}.</TrackItemIndex>
                                            <TrackItemName
                                                value={newTrackName}
                                                onChange={(e) => setNewTrackName(e.target.value)}
                                                placeholder={t('EDITOR_TrackNamePlaceholder') || 'Track name'}
                                                onClick={(e) => e.stopPropagation()}
                                            />
                                            <TrackItemDuration
                                                value={newTrackDuration}
                                                onChange={(e) => setNewTrackDuration(e.target.value)}
                                                placeholder="0:00"
                                                onClick={(e) => e.stopPropagation()}
                                            />
                                            <TracklistItemAddBtn type="button" onClick={addNewTrack}>
                                                +
                                            </TracklistItemAddBtn>
                                        </TracklistItemAdd>
                                    </TracklistListContainer>
                                    <TracklistButtonsContainer>
                                        <TracklistButton onClick={handleRemoveParentheses}>
                                            {t('EDITOR_RemoveParentheses')}
                                        </TracklistButton>
                                        <TracklistButton onClick={handleRemoveBrackets}>
                                            {t('EDITOR_RemoveBrackets')}
                                        </TracklistButton>
                                    </TracklistButtonsContainer>
                                </TracklistContainer>
                            ) : activeTab === 'export' ? (
                                <ExportContainer>
                                    <ExportSection>
                                        <ExportLabel>{t('EXPORT_Format')}</ExportLabel>
                                        <FormatGrid>
                                            <FormatOption 
                                                $selected={exportFormat === 'png'}
                                                onClick={() => setExportFormat('png')}
                                            >
                                                <FormatName>PNG</FormatName>
                                            </FormatOption>
                                            <FormatOption 
                                                $selected={exportFormat === 'pdf'}
                                                onClick={() => setExportFormat('pdf')}
                                            >
                                                <FormatName>PDF</FormatName>
                                            </FormatOption>
                                            <FormatOption 
                                                $selected={exportFormat === 'jpg'}
                                                onClick={() => setExportFormat('jpg')}
                                            >
                                                <FormatName>JPG</FormatName>
                                            </FormatOption>
                                        </FormatGrid>
                                    </ExportSection>

                                    <ExportSection>
                                        <ExportLabel>{t('EXPORT_Size')}</ExportLabel>
                                        <FormatGrid>
                                            <FormatOption 
                                                $selected={exportScale === 0.3}
                                                onClick={() => setExportScale(0.3)}
                                            >
                                                <FormatName>{t('EXPORT_SizeThumbnail')}</FormatName>
                                                <FormatDescription>{t('EXPORT_SizeDescription_Thumbnail')}</FormatDescription>
                                            </FormatOption>
                                            <FormatOption 
                                                $selected={exportScale === 0.6}
                                                onClick={() => setExportScale(0.6)}
                                            >
                                                <FormatName>{t('EXPORT_SizeMedium')}</FormatName>
                                                <FormatDescription>{t('EXPORT_SizeDescription_Medium')}</FormatDescription>
                                            </FormatOption>
                                            <FormatOption 
                                                $selected={exportScale === 1.0}
                                                onClick={() => setExportScale(1.0)}
                                            >
                                                <FormatName>{t('EXPORT_SizeNormal')}</FormatName>
                                                <FormatDescription>{t('EXPORT_SizeDescription_Normal')}</FormatDescription>
                                            </FormatOption>
                                            <FormatOption
                                                $selected={exportScale === 1.5}
                                                onClick={() => setExportScale(1.5)}
                                            >
                                                <FormatName>{t('EXPORT_SizeExtreme')}</FormatName>
                                                <FormatDescription>{t('EXPORT_SizeDescription_Extreme')}</FormatDescription>
                                            </FormatOption>
                                        </FormatGrid>
                                    </ExportSection>

                                    <TipBox>
                                        <HiInformationCircle size={24} style={{ color: 'var(--AccentColor)', flexShrink: 0 }} />
                                        <TipText>{t('EXPORT_PrintTip')}</TipText>
                                    </TipBox>

                                    <DownloadButton onClick={() => {
                                        if (exportFormat === 'png') handleDownloadClick();
                                        else if (exportFormat === 'pdf') handleDownloadPDFClick();
                                        else if (exportFormat === 'jpg') handleDownloadJPGClick();
                                    }}>
                                        {t('EXPORT_DownloadButton')}
                                    </DownloadButton>
                                </ExportContainer>
                            ) : activeTab === 'publish' && source === 'search_creation' ? (
                                <ExportContainer>
                                    {!isAuthenticated ? (
                                        <EmptyStateContainer>
                                            <SetPasswordSVG width={'62%'} height={120} />
                                            <TextLogin>{t('COMMUNITY_LoginToPublish')}</TextLogin>
                                            <LoginButton onClick={() => navigate('/login')}>{t('Login')}</LoginButton>
                                        </EmptyStateContainer>
                                    ) : (
                                        <>
                                            <ExportSection>
                                                <ExportLabel>{t('COMMUNITY_VisibilityLabel')}</ExportLabel>
                                                <VisibilityOptions>
                                                    <VisibilityCard
                                                        $selected={publishVisibility === 'public'}
                                                        onClick={() => setPublishVisibility('public')}
                                                    >
                                                        <VCardIconWrap $selected={publishVisibility === 'public'}>
                                                            <IconPublic />
                                                        </VCardIconWrap>
                                                        <VCardBody>
                                                            <VCardTitle>{t('COMMUNITY_Public')}</VCardTitle>
                                                            <VCardDesc>{t('COMMUNITY_PublicDesc')}</VCardDesc>
                                                        </VCardBody>
                                                    </VisibilityCard>
                                                    <VisibilityCard
                                                        $selected={publishVisibility === 'private'}
                                                        onClick={() => setPublishVisibility('private')}
                                                    >
                                                        <VCardIconWrap $selected={publishVisibility === 'private'}>
                                                            <IconPrivate />
                                                        </VCardIconWrap>
                                                        <VCardBody>
                                                            <VCardTitle>{t('COMMUNITY_Private')}</VCardTitle>
                                                            <VCardDesc>{t('COMMUNITY_PrivateDesc')}</VCardDesc>
                                                        </VCardBody>
                                                    </VisibilityCard>
                                                </VisibilityOptions>
                                            </ExportSection>
                                            {publishError && (
                                                <PublishErrorBox>{publishError}</PublishErrorBox>
                                            )}
                                            <DownloadButton
                                                onClick={handlePublish}
                                                disabled={isPublishing}
                                            >
                                                {isPublishing ? t('COMMUNITY_Publishing') : t('COMMUNITY_Publish')}
                                            </DownloadButton>
                                        </>
                                    )}
                                </ExportContainer>
                            ) : null}
                            {/* <AnimatedInput animationDelay={1050}>
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
                                    <ButtonDiv onClick={() => exportPosterJson(posterData)}>
                                        <IconDownload/>
                                        <ButtonText>Exportar JSON</ButtonText>
                                    </ButtonDiv>
                                    <ButtonDiv onClick={() => importPosterJson(applyPosterJson)}>
                                        <IconDownload/>
                                        <ButtonText>Importar JSON</ButtonText>
                                    </ButtonDiv>
                                </DivButtons>
                            </AnimatedInput>
                            <AnimatedInput animationDelay={1100}>
                                <ShortcutsInfo>
                                    Ctrl+S: {t('EDITOR_Apply')} • Ctrl+D: PNG • Ctrl+Shift+D: PDF
                                </ShortcutsInfo>
                            </AnimatedInput> */}
                        </EditorColumn>
                    </ContainerEditor>

                    {posterFullData && (
                        <PosterInfo
                            poster={posterFullData}
                            onDeleted={handleClickBack}
                            onVisibilityChanged={() => {}}
                            onSave={() => setSaveConfirmModal(true)}
                            isSavingPoster={isSavingPoster}
                            isOwnerOrAdmin={user?.id === posterFullData?.authorId || user?.permissions?.includes('admin')}
                        />
                    )}
                    
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

                    {showSignatureEditor && signatureEditorPosition && ReactDOM.createPortal(
                        <SignatureEditor
                            position={signatureEditorPosition}
                            signatureUrl={signatureUrl}
                            initialHorizontalPosition={signatureHorizontalPosition}
                            initialVerticalPosition={signatureVerticalPosition}
                            initialScale={signatureScale}
                            onDone={(values) => {
                                if (values.disabled) {
                                    setShowArtistSignature(false);
                                    setPreviewVisible(false);
                                    setGeneratePoster(true);
                                } else {
                                    setSignatureHorizontalPosition(values.horizontalPosition);
                                    setSignatureVerticalPosition(values.verticalPosition);
                                    setSignatureScale(values.scale);
                                    setPreviewVisible(false);
                                    setGeneratePoster(true);
                                }
                                handleSignatureEditorClose();
                            }}
                            onClose={handleSignatureEditorClose}
                        />, document.body
                    )}

                    {posterId && saveConfirmModal && ReactDOM.createPortal(
                        <AlertModal
                            title={t('EDITOR_SavePosterTitle')}
                            paragraph={t('EDITOR_SavePosterMessage')}
                            confirmText={t('EDITOR_SaveConfirm')}
                            onConfirm={handleSavePoster}
                            cancelText={t('EDITOR_SaveCancel')}
                            onCancel={() => {
                                setSaveConfirmModal(false);
                                setSaveError('');
                            }}
                            canClose={true}
                            isClosing={false}
                            errorMessage={saveError}
                        />, document.body
                    )}
                </Container>
            )}
        </>
    )
});

PosterEditor.displayName = 'PosterEditor';

export default PosterEditor;