/* eslint-disable react/prop-types */
import { useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import { generateLogoWatermark } from '../svgs/LogoName.jsx';

const CanvasPoster = forwardRef(({ onImageReady, posterData, generatePoster, onTitleSizeAdjust, onTracksSizeAdjust, customFont, scale = 1.0, isThumbnail = false }, ref) => {
    const canvasRef = useRef(null);

    useImperativeHandle(ref, () => ({
        getCanvas: () => canvasRef.current
    }));

    useEffect(() => {
        const generatePosterContent = async () => {
            if (!generatePoster) return;

            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            const baseWidth = 2480;
            const baseHeight = 3508;
            const width = Math.round(baseWidth * scale);
            const height = Math.round(baseHeight * scale);
            
            const marginSide = Math.round((parseInt(posterData.marginSide) || 0) * scale);
            const marginTop = Math.round((parseInt(posterData.marginTop) || 0) * scale);
            const marginCover = Math.round((parseInt(posterData.marginCover) || 0) * scale);
            const marginBackground = Math.round((parseInt(posterData.marginBackground) || 0) * scale);
            const coverHorizontalPosition = Math.round((parseInt(posterData.coverHorizontalPosition) || 0) * scale);
            const coverVerticalPosition = Math.round((parseInt(posterData.coverVerticalPosition) || 0) * scale);
            const coverBlur = Math.round((parseInt(posterData.coverBlur) || 0) * scale * (isThumbnail ? 0.5 : 2));

            const loadCover = async (url) => {
                const image = new Image();
                image.crossOrigin = "anonymous";
                image.src = url;
                return new Promise((resolve) => {
                    image.onload = () => {
                        const coverSize = width - marginCover * 2;
                        const coverScale = coverSize / width * 11;

                        const coverX = marginCover + (coverHorizontalPosition * coverScale);
                        const coverY = marginCover + (coverVerticalPosition * coverScale);
                        
                        if (coverBlur > 0) {
                            ctx.filter = `blur(${coverBlur}px)`;
                        }
                        
                        ctx.drawImage(image, coverX, coverY, coverSize, coverSize);
                        
                        ctx.filter = 'none';
                        
                        if (posterData.useFade) {
                            let verticalFade = ctx.createLinearGradient(0, 0, 0, Math.round((3000 - (parseInt(posterData.marginBackground) || 0)) * scale));
                            const rgb = hexToRgb(posterData.backgroundColor);
                            verticalFade.addColorStop(0.5, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);
                            verticalFade.addColorStop(0.8, posterData.backgroundColor);
                            ctx.fillStyle = verticalFade;
                            ctx.fillRect(0, 0, canvas.width, Math.round((2500 - (parseInt(posterData.marginBackground) || 0)) * scale));
                        }
                        resolve();
                    };
                });
            };

            const drawWaterMark = async () => {
                const watermarkWidth = Math.round(500 * scale);
                const watermarkHeight = Math.round(134 * scale);
                const svgString = generateLogoWatermark(posterData.textColor, watermarkWidth, watermarkHeight);

                const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
                const url = URL.createObjectURL(svgBlob);
                
                const image = new Image();
                image.src = url;
                
                return new Promise((resolve) => {
                    image.onload = () => {
                        ctx.globalAlpha = '0.5';
                        ctx.drawImage(image, width - Math.round(70 * scale) - watermarkWidth, Math.round(50 * scale), watermarkWidth, watermarkHeight);
                        ctx.globalAlpha = '1';
                        URL.revokeObjectURL(url);
                        resolve();
                    };
                });
            };

            const drawAlbumInfos = async () => {
                let baseTitleFontSize = posterData.titleSize ? parseInt(posterData.titleSize) : 230;
                let titleFontSize = Math.round(baseTitleFontSize * scale);

                const fontFamily = customFont || 'Montserrat';
                if (!posterData.userAdjustedTitleSize && !posterData.initialTitleSizeSet) {
                    ctx.font = `bold ${titleFontSize}px ${fontFamily}`;
                    let titleWidth = ctx.measureText(posterData.albumName).width;

                    while (titleWidth > (width - marginSide * 2)) {
                        baseTitleFontSize -= 1;
                        titleFontSize = Math.round(baseTitleFontSize * scale);
                        ctx.font = `bold ${titleFontSize}px ${fontFamily}`;
                        titleWidth = ctx.measureText(posterData.albumName).width;
                    }

                    if (onTitleSizeAdjust && !isThumbnail) {
                        onTitleSizeAdjust(baseTitleFontSize, true);
                    }
                } else {
                    ctx.font = `bold ${titleFontSize}px ${fontFamily}`;
                }

                ctx.fillStyle = posterData.textColor;

                const baseY = Math.round(2500 * scale);
                const altY = Math.round(2790 * scale);

                if (posterData.showTracklist) {
                    ctx.fillText(posterData.albumName, marginSide, baseY + marginTop);
                } else {
                    ctx.fillText(posterData.albumName, marginSide, altY + marginTop);
                }

                let artistsFontSize = posterData.artistsSize ? Math.round(parseInt(posterData.artistsSize) * scale) : Math.round(110 * scale);
                ctx.font = `bold ${artistsFontSize}px ${customFont || 'Montserrat'}`;

                if (posterData.showTracklist) {
                    ctx.fillText(posterData.artistsName, marginSide, (baseY + marginTop) + artistsFontSize * 1.3);
                } else {
                    ctx.fillText(posterData.artistsName, marginSide, (Math.round(2820 * scale) + marginTop) + artistsFontSize);
                }

                const infoFontSize = Math.round(70 * scale);
                const detailFontSize = Math.round(60 * scale);
                const infoY = Math.round(3310 * scale);
                const detailY = Math.round(3390 * scale);

                ctx.font = `bold ${infoFontSize}px ${customFont || 'Montserrat'}`;
                ctx.fillText(posterData.titleRelease, marginSide, infoY);
                let releaseWidth = ctx.measureText(posterData.titleRelease).width;
                ctx.fillText(posterData.titleRuntime, releaseWidth + marginSide + Math.round(100 * scale), infoY);

                ctx.globalAlpha = 0.7;
                ctx.font = `bold ${detailFontSize}px ${customFont || 'Montserrat'}`;
                ctx.fillText(posterData.runtime, releaseWidth + marginSide + Math.round(100 * scale), detailY);
                ctx.fillText(posterData.releaseDate, marginSide, detailY);
                ctx.globalAlpha = 1;

                const colorBarY = Math.round(3368 * scale);
                const colorBarWidth = Math.round(145 * scale);
                const colorBarHeight = Math.round(30 * scale);

                ctx.fillStyle = posterData.color1;
                ctx.fillRect(Math.round((2045 - (parseInt(posterData.marginSide) || 0)) * scale), colorBarY, colorBarWidth, colorBarHeight);
                ctx.fillStyle = posterData.color2;
                ctx.fillRect(Math.round((2190 - (parseInt(posterData.marginSide) || 0)) * scale), colorBarY, colorBarWidth, colorBarHeight);
                ctx.fillStyle = posterData.color3;
                ctx.fillRect(Math.round((2335 - (parseInt(posterData.marginSide) || 0)) * scale), colorBarY, colorBarWidth, colorBarHeight);
            };

            const drawTracklist = async () => {
                ctx.fillStyle = posterData.textColor;
                let baseFontSize = posterData.tracksSize ? parseInt(posterData.tracksSize) : 50;
                let fontSize = baseFontSize * scale;
                
                const baseMarginTop = parseInt(posterData.marginTop || 0);
                const baseArtistsSize = parseInt(posterData.artistsSize) || 110;
                const rectY = Math.round((2500 + baseMarginTop + baseArtistsSize * 1.3 + 130) * scale);
                const releaseDateY = Math.round(3310 * scale);
                const maxTextHeight = releaseDateY - Math.round(50 * scale);
                const maxHorizontalLimit = width - marginSide;

                const tracks = posterData.tracklist.split('\n').filter(t => t.trim() !== '');

                if (!posterData.userAdjustedTracksSize && !posterData.initialTracksSizeSet) {
                    const measureLastCharPosition = (currentBaseFontSize) => {
                        const currentFontSize = currentBaseFontSize * scale;
                        ctx.font = `bold ${currentFontSize}px ${customFont || 'Montserrat'}`;
                        const baseMusicSize = currentBaseFontSize * 1.3;
                        const musicSizeIncrement = baseMusicSize * scale;
                        
                        let paddingMusic = marginSide + Math.round(10 * scale);
                        let maxWidthInColumn = 0;
                        let textHeight = rectY;
                        let lastCharPosition = 0;

                        tracks.forEach((track) => {
                            if (textHeight + musicSizeIncrement >= maxTextHeight) {
                                textHeight = rectY;
                                paddingMusic = paddingMusic + maxWidthInColumn + currentFontSize;
                                maxWidthInColumn = 0;
                            }
                            
                            const textWidth = ctx.measureText(`${track}`).width;
                            const trackEndPosition = paddingMusic + textWidth;
                            
                            if (textWidth > maxWidthInColumn) {
                                maxWidthInColumn = textWidth;
                            }
                            
                            lastCharPosition = Math.max(lastCharPosition, trackEndPosition);
                            textHeight += musicSizeIncrement;
                        });

                        return lastCharPosition;
                    };

                    let lastCharPosition = measureLastCharPosition(baseFontSize);
                    
                    while (lastCharPosition > maxHorizontalLimit && baseFontSize > 1) {
                        baseFontSize -= 1;
                        lastCharPosition = measureLastCharPosition(baseFontSize);
                    }

                    fontSize = baseFontSize * scale;

                    if (onTracksSizeAdjust && !isThumbnail) {
                        onTracksSizeAdjust(baseFontSize, true);
                    }
                }

                ctx.font = `bold ${fontSize}px ${customFont || 'Montserrat'}`;
                const baseMusicSize = baseFontSize * 1.3;
                const musicSizeIncrement = baseMusicSize * scale;
                
                let paddingMusic = marginSide + Math.round(7 * scale);
                let maxWidthInColumn = 0;
                let textHeight = rectY;

                tracks.forEach((track) => {
                    if (textHeight + musicSizeIncrement >= maxTextHeight) {
                        textHeight = rectY;
                        paddingMusic = paddingMusic + maxWidthInColumn + fontSize;
                        maxWidthInColumn = 0;
                    }
                    
                    const textWidth = ctx.measureText(`${track}`).width;
                    
                    if (textWidth > maxWidthInColumn) {
                        maxWidthInColumn = textWidth;
                    }
                    
                    ctx.fillText(`${track}`, paddingMusic, textHeight);
                    textHeight += musicSizeIncrement;
                });
            };

            const hexToRgb = (hex) => {
                const bigint = parseInt(hex.replace("#", ""), 16);
                return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
            };

            const getContrast = (rgb) => {
                const luminance = (c) => {
                    const val = c / 255;
                    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
                };
                const lum = 0.2126 * luminance(rgb.r) + 0.7152 * luminance(rgb.g) + 0.0722 * luminance(rgb.b);
                return lum > 0.179 ? "black" : "white";
            };

            const scannable = async () => {
                const rgb = hexToRgb(posterData.backgroundColor);
                const contrastColor = getContrast(rgb);
                const targetColor = posterData.textColor;
            
                const scannableSize = isThumbnail ? 320 : 640;
                const svgUrl = `https://scannables.scdn.co/uri/plain/svg/${posterData.backgroundColor.replace('#', '')}/${contrastColor}/${scannableSize}/spotify:album:${posterData.albumID}`;
                
                const response = await fetch(svgUrl);
                let svgText = await response.text();
                
                if(contrastColor == 'black'){
                    svgText = svgText.replace(/fill="#000000"/g, `fill="${targetColor}"`);
                } else{
                    svgText = svgText.replace(/fill="#ffffff"/g, `fill="${targetColor}"`);
                }

                svgText = svgText.replace(posterData.backgroundColor, 'transparent');
                
                const svgBlob = new Blob([svgText], { type: "image/svg+xml" });
                const updatedSvgUrl = URL.createObjectURL(svgBlob);
            
                return new Promise((resolve) => {
                    const image = new Image();
                    image.src = updatedSvgUrl;
            
                    image.onload = function () {
                        const scannableWidth = Math.round(480 * scale);
                        const scannableHeight = Math.round(120 * scale);
                        const scannableX = Math.round((2020 - (parseInt(posterData.marginSide) || 0)) * scale);
                        const scannableY = Math.round(3235 * scale);
                        
                        ctx.drawImage(image, scannableX, scannableY, scannableWidth, scannableHeight);
                        
                        const imageFormat = isThumbnail ? 'image/jpeg' : 'image/png';
                        const imageQuality = isThumbnail ? 0.7 : 1.0;
                        const imageUrl = canvas.toDataURL(imageFormat, imageQuality);
                        onImageReady(imageUrl);
                        URL.revokeObjectURL(updatedSvgUrl);
                        resolve();
                    };
                });
            };

            const drawBackground = async () => {
                ctx.fillStyle = posterData.backgroundColor;
                const bgY = Math.round(2480 * scale) - marginBackground;
                const bgHeight = height - bgY;
                ctx.fillRect(0, bgY, width, bgHeight);
            };

            ctx.clearRect(0, 0, width, height);
            
            ctx.fillStyle = posterData.backgroundColor;
            ctx.fillRect(0, 0, width, height);

            if (posterData.useUncompressed) {
                await loadCover(await posterData.uncompressedAlbumCover);
            } else {
                await loadCover(posterData.albumCover);
            }
            
            await drawBackground();
            await drawAlbumInfos();
            if (posterData.showTracklist) {
                await drawTracklist();
            }
            if (posterData.useWatermark) { 
                await drawWaterMark();
            }
            await scannable();
        };

        generatePosterContent();
    }, [generatePoster, posterData, onImageReady, customFont, scale, isThumbnail, onTitleSizeAdjust, onTracksSizeAdjust]);

    const canvasWidth = Math.round(2480 * scale);
    const canvasHeight = Math.round(3508 * scale);

    return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} style={{ display: 'none' }} />;
});

CanvasPoster.displayName = 'CanvasPoster';

export default CanvasPoster;
