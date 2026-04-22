/* eslint-disable react/prop-types */
import { useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import { generateLogoWatermark, WATERMARK_VIEWBOX_WIDTH, WATERMARK_VIEWBOX_HEIGHT } from '../svgs/LogoName.jsx';
import { getSignatureBySpotifyId } from '../../services/signatureService.js';

const parseNumeric = (value, fallback = 0) => {
    const parsed = parseInt(value, 10);
    return Number.isFinite(parsed) ? parsed : fallback;
};

const CanvasPoster = forwardRef(({ onImageReady, posterData, generatePoster, onTitleSizeAdjust, onTracksSizeAdjust, customFont, scale = 1.0, isThumbnail = false, onArtistIdDiscovered }, ref) => {
    const canvasRef = useRef(null);
    const onImageReadyRef = useRef(onImageReady);
    const onTitleSizeAdjustRef = useRef(onTitleSizeAdjust);
    const onTracksSizeAdjustRef = useRef(onTracksSizeAdjust);
    const onArtistIdDiscoveredRef = useRef(onArtistIdDiscovered);
    const renderVersionRef = useRef(0);

    useEffect(() => {
        onImageReadyRef.current = onImageReady;
    }, [onImageReady]);

    useEffect(() => {
        onTitleSizeAdjustRef.current = onTitleSizeAdjust;
    }, [onTitleSizeAdjust]);

    useEffect(() => {
        onTracksSizeAdjustRef.current = onTracksSizeAdjust;
    }, [onTracksSizeAdjust]);

    useEffect(() => {
        onArtistIdDiscoveredRef.current = onArtistIdDiscovered;
    }, [onArtistIdDiscovered]);

    useImperativeHandle(ref, () => ({
        getCanvas: () => canvasRef.current
    }));

    useEffect(() => {
        const renderVersion = renderVersionRef.current + 1;
        renderVersionRef.current = renderVersion;
        let disposed = false;

        const isCurrent = () => !disposed && renderVersionRef.current === renderVersion;

        const emitImageReady = (sourceCanvas) => {
            if (!isCurrent() || !onImageReadyRef.current || !sourceCanvas) return;

            const imageFormat = isThumbnail ? 'image/jpeg' : 'image/png';
            const imageQuality = isThumbnail ? 0.7 : 1.0;

            try {
                const imageUrl = sourceCanvas.toDataURL(imageFormat, imageQuality);
                onImageReadyRef.current(imageUrl);
            } catch {
                // Ignore export errors for malformed canvases.
            }
        };

        const generatePosterContent = async () => {
            if (!generatePoster || !posterData) return;

            const liveCanvas = canvasRef.current;
            if (!liveCanvas) return;

            const baseWidth = 2480;
            const baseHeight = 3508;
            const width = Math.round(baseWidth * scale);
            const height = Math.round(baseHeight * scale);

            const outputCanvas = document.createElement('canvas');
            outputCanvas.width = width;
            outputCanvas.height = height;
            const ctx = outputCanvas.getContext('2d');
            if (!ctx) return;

            if (document.fonts?.ready) {
                try {
                    await document.fonts.ready;
                } catch {
                    // Continue even if fonts API fails.
                }
            }
            if (!isCurrent()) return;

            const marginSide = Math.round(parseNumeric(posterData.marginSide) * scale);
            const marginTop = Math.round(parseNumeric(posterData.marginTop) * scale);
            const marginCover = Math.round(parseNumeric(posterData.marginCover) * scale);
            const marginBackground = Math.round(parseNumeric(posterData.marginBackground) * scale);
            const coverHorizontalPosition = Math.round(parseNumeric(posterData.coverHorizontalPosition) * scale);
            const coverVerticalPosition = Math.round(parseNumeric(posterData.coverVerticalPosition) * scale);
            const coverBlur = Math.round(parseNumeric(posterData.coverBlur) * scale * (isThumbnail ? 0.5 : 2));
            
            const safeText = (value) => (typeof value === 'string' ? value : '');

            const loadCover = async (url) => {
                if (!url) return false;

                const image = new Image();
                image.crossOrigin = "anonymous";
                image.decoding = 'async';
                image.src = url;

                return new Promise((resolve) => {
                    const finalize = (loaded) => {
                        image.onload = null;
                        image.onerror = null;
                        image.onabort = null;
                        resolve(loaded);
                    };

                    image.onload = () => {
                        if (!isCurrent()) return finalize(false);

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
                            const verticalFade = ctx.createLinearGradient(0, 0, 0, Math.round((3000 - parseNumeric(posterData.marginBackground)) * scale));
                            const rgb = hexToRgb(posterData.backgroundColor || '#000000');
                            verticalFade.addColorStop(0.5, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);
                            verticalFade.addColorStop(0.8, posterData.backgroundColor || '#000000');
                            ctx.fillStyle = verticalFade;
                            ctx.fillRect(0, 0, outputCanvas.width, Math.round((2500 - parseNumeric(posterData.marginBackground)) * scale));
                        }
                        finalize(true);
                    };

                    image.onerror = () => finalize(false);
                    image.onabort = () => finalize(false);
                });
            };

            const drawWaterMark = async () => {
                const baseWatermarkHeight = parseNumeric(posterData.watermarkHeight, 85);
                const proportionalWatermarkWidth = Math.round((baseWatermarkHeight * WATERMARK_VIEWBOX_WIDTH) / WATERMARK_VIEWBOX_HEIGHT);
                const baseWatermarkWidth = parseNumeric(posterData.watermarkWidth, proportionalWatermarkWidth);

                const watermarkWidth = Math.round(baseWatermarkWidth * scale * 1.5);
                const watermarkHeight = Math.round(baseWatermarkHeight * scale * 1.5);

                const watermarkTextColor = posterData.watermarkTextColor || posterData.textColor || '#ffffff';
                const watermarkIconColor = posterData.watermarkIconColor || watermarkTextColor;
                const svgString = generateLogoWatermark(watermarkTextColor, watermarkWidth, watermarkHeight, watermarkIconColor);

                const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
                const url = URL.createObjectURL(svgBlob);

                const image = new Image();
                image.src = url;

                return new Promise((resolve) => {
                    const finalize = () => {
                        image.onload = null;
                        image.onerror = null;
                        image.onabort = null;
                        URL.revokeObjectURL(url);
                        resolve();
                    };

                    image.onload = () => {
                        if (isCurrent()) {
                            ctx.globalAlpha = 0.5;
                            ctx.drawImage(image, width - Math.round(105 * scale) - watermarkWidth, Math.round(37 * scale * 1.5), watermarkWidth, watermarkHeight);
                            ctx.globalAlpha = 1;
                        }
                        finalize();
                    };

                    image.onerror = finalize;
                    image.onabort = finalize;
                });
            };

            const drawAlbumInfos = async () => {
                let baseTitleFontSize = posterData.titleSize ? parseNumeric(posterData.titleSize, 230) : 230;
                let titleFontSize = Math.round(baseTitleFontSize * scale);

                const fontFamily = customFont || 'Montserrat';
                if (!posterData.userAdjustedTitleSize && !posterData.initialTitleSizeSet) {
                    ctx.font = `bold ${titleFontSize}px ${fontFamily}`;
                    let titleWidth = ctx.measureText(safeText(posterData.albumName)).width;

                    while (titleWidth > (width - marginSide * 2)) {
                        baseTitleFontSize -= 1;
                        titleFontSize = Math.round(baseTitleFontSize * scale);
                        ctx.font = `bold ${titleFontSize}px ${fontFamily}`;
                        titleWidth = ctx.measureText(safeText(posterData.albumName)).width;
                    }

                    if (onTitleSizeAdjustRef.current && !isThumbnail) {
                        onTitleSizeAdjustRef.current(baseTitleFontSize, true);
                    }
                } else {
                    ctx.font = `bold ${titleFontSize}px ${fontFamily}`;
                }

                ctx.fillStyle = posterData.textColor || '#ffffff';

                const baseY = Math.round(2500 * scale);
                const altY = Math.round(2790 * scale);

                if (posterData.showTracklist) {
                    ctx.fillText(safeText(posterData.albumName), marginSide, baseY + marginTop);
                } else {
                    ctx.fillText(safeText(posterData.albumName), marginSide, altY + marginTop);
                }

                const artistsFontSize = posterData.artistsSize ? Math.round(parseNumeric(posterData.artistsSize, 110) * scale) : Math.round(110 * scale);
                ctx.font = `bold ${artistsFontSize}px ${customFont || 'Montserrat'}`;

                if (posterData.showTracklist) {
                    ctx.fillText(safeText(posterData.artistsName), marginSide, (baseY + marginTop) + artistsFontSize * 1.3);
                } else {
                    ctx.fillText(safeText(posterData.artistsName), marginSide, (Math.round(2820 * scale) + marginTop) + artistsFontSize);
                }

                const infoFontSize = Math.round(70 * scale);
                const detailFontSize = Math.round(60 * scale);
                const infoY = Math.round(3310 * scale);
                const detailY = Math.round(3390 * scale);

                ctx.font = `bold ${infoFontSize}px ${customFont || 'Montserrat'}`;
                ctx.fillText(safeText(posterData.titleRelease), marginSide, infoY);
                const titleReleaseWidth = ctx.measureText(safeText(posterData.titleRelease)).width;

                ctx.font = `bold ${detailFontSize}px ${customFont || 'Montserrat'}`;
                const releaseDateWidth = ctx.measureText(safeText(posterData.releaseDate)).width;

                const releaseColWidth = Math.max(titleReleaseWidth, releaseDateWidth);
                const runtimeX = releaseColWidth + marginSide + Math.round(100 * scale);

                ctx.font = `bold ${infoFontSize}px ${customFont || 'Montserrat'}`;
                ctx.fillText(safeText(posterData.titleRuntime), runtimeX, infoY);

                ctx.globalAlpha = 0.7;
                ctx.font = `bold ${detailFontSize}px ${customFont || 'Montserrat'}`;
                ctx.fillText(safeText(posterData.runtime), runtimeX, detailY);
                ctx.fillText(safeText(posterData.releaseDate), marginSide, detailY);
                ctx.globalAlpha = 1;

                const colorBarY = Math.round(3368 * scale);
                const colorBarWidth = Math.round(145 * scale);
                const colorBarHeight = Math.round(30 * scale);

                ctx.fillStyle = posterData.color1 || '#000000';
                ctx.fillRect(Math.round((2045 - parseNumeric(posterData.marginSide)) * scale), colorBarY, colorBarWidth, colorBarHeight);
                ctx.fillStyle = posterData.color2 || '#000000';
                ctx.fillRect(Math.round((2190 - parseNumeric(posterData.marginSide)) * scale), colorBarY, colorBarWidth, colorBarHeight);
                ctx.fillStyle = posterData.color3 || '#000000';
                ctx.fillRect(Math.round((2335 - parseNumeric(posterData.marginSide)) * scale), colorBarY, colorBarWidth, colorBarHeight);
            };

            const drawTracklist = async () => {
                const tracklistText = safeText(posterData.tracklist);
                if (!tracklistText) return;

                ctx.fillStyle = posterData.textColor || '#ffffff';
                let baseFontSize = posterData.tracksSize ? parseNumeric(posterData.tracksSize, 50) : 50;
                let fontSize = baseFontSize * scale;

                const baseMarginTop = parseNumeric(posterData.marginTop);
                const baseArtistsSize = parseNumeric(posterData.artistsSize, 110);
                const rectY = Math.round((2500 + baseMarginTop + baseArtistsSize * 1.3 + 130) * scale);
                const releaseDateY = Math.round(3310 * scale);
                const maxTextHeight = releaseDateY - Math.round(50 * scale);
                const maxHorizontalLimit = width - marginSide;

                const tracks = tracklistText.split('\n').filter(t => t.trim() !== '');
                if (!tracks.length) return;

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

                    if (onTracksSizeAdjustRef.current && !isThumbnail) {
                        onTracksSizeAdjustRef.current(baseFontSize, true);
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
                const safeHex = (hex || '#000000').replace("#", "");
                const bigint = parseInt(safeHex, 16);
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
                const albumId = safeText(posterData.albumID);
                if (!albumId) return;

                const rgb = hexToRgb(posterData.backgroundColor || '#000000');
                const contrastColor = getContrast(rgb);
                const targetColor = posterData.textColor || '#ffffff';

                const scannableSize = isThumbnail ? 320 : 640;
                const backgroundHex = (posterData.backgroundColor || '#000000').replace('#', '');
                const svgUrl = `https://scannables.scdn.co/uri/plain/svg/${backgroundHex}/${contrastColor}/${scannableSize}/spotify:album:${albumId}`;

                try {
                    const response = await fetch(svgUrl);
                    if (!response.ok) return;

                    let svgText = await response.text();
                    if (!svgText || !svgText.includes('<svg')) return;

                    if (contrastColor === 'black') {
                        svgText = svgText.replace(/fill="#000000"/g, `fill="${targetColor}"`);
                    } else {
                        svgText = svgText.replace(/fill="#ffffff"/g, `fill="${targetColor}"`);
                    }

                    svgText = svgText.replace(posterData.backgroundColor || '#000000', 'transparent');

                    const svgBlob = new Blob([svgText], { type: "image/svg+xml" });
                    const updatedSvgUrl = URL.createObjectURL(svgBlob);

                    await new Promise((resolve) => {
                        const image = new Image();

                        const finalize = () => {
                            image.onload = null;
                            image.onerror = null;
                            image.onabort = null;
                            URL.revokeObjectURL(updatedSvgUrl);
                            resolve();
                        };

                        image.onload = () => {
                            if (isCurrent()) {
                                const scannableWidth = Math.round(480 * scale);
                                const scannableHeight = Math.round(120 * scale);
                                const scannableX = Math.round((2020 - parseNumeric(posterData.marginSide)) * scale);
                                const scannableY = Math.round(3235 * scale);

                                ctx.drawImage(image, scannableX, scannableY, scannableWidth, scannableHeight);
                            }
                            finalize();
                        };

                        image.onerror = finalize;
                        image.onabort = finalize;
                        image.src = updatedSvgUrl;
                    });
                } catch {
                    // Ignore scannable failures to avoid blocking poster rendering.
                }
            };

            const drawSignature = async () => {
                if (!posterData.spotifyArtistId && !posterData.artistsName) {
                    return Promise.resolve();
                }

                return new Promise(async (resolve) => {
                    let resolved = false;
                    
                    const handleResolve = () => {
                        if (!resolved) {
                            resolved = true;
                            resolve();
                        }
                    };

                    const timeout = setTimeout(handleResolve, 5000);

                    try {
                        const result = await getSignatureBySpotifyId(posterData.spotifyArtistId, posterData.artistsName);
                        
                        if (!result) {
                            clearTimeout(timeout);
                            return handleResolve();
                        }

                        const { url: signatureUrl, spotifyId } = result;

                        if (!posterData.spotifyArtistId && spotifyId && onArtistIdDiscoveredRef.current) {
                            onArtistIdDiscoveredRef.current(spotifyId);
                        }

                        const baseSignatureWidth = 480 * scale;
                        const signatureScaleFactor = posterData.signatureScale || 1;
                        const signatureWidth = Math.round(baseSignatureWidth * signatureScaleFactor);
                        
                        const baseX = Math.round((2020 - parseNumeric(posterData.marginSide)) * scale);
                        const adjustedX = baseX + Math.round((signatureWidth / 100) * (posterData.signatureHorizontalPosition || 0));
                        
                        const signatureGap = Math.round(30 * scale);
                        const baseSignatureY = Math.round(3235 * scale);
                        
                        const signatureColor = posterData.textColor;

                        let imageUrl = signatureUrl;

                        if (signatureUrl.toLowerCase().endsWith('.svg')) {
                            try {
                                const res = await fetch(signatureUrl, { mode: 'cors' });
                                let svgText = await res.text();

                                svgText = svgText.replace(/#000000/gi, signatureColor);
                                svgText = svgText.replace(/<svg([^>]*)/, `<svg fill="${signatureColor}"$1`);

                                const base64Svg = btoa(unescape(encodeURIComponent(svgText)));
                                imageUrl = `data:image/svg+xml;base64,${base64Svg}`;
                            } catch (error) {
                            }
                        }

                        const image = new Image();
                        image.crossOrigin = 'anonymous';
                        
                        image.onload = () => {
                            clearTimeout(timeout);
                            const aspectRatio = image.width / image.height;
                            const signatureHeight = Math.round(signatureWidth / aspectRatio);
                            const baseY = baseSignatureY - signatureGap - signatureHeight;
                            const adjustedY = baseY + Math.round((signatureHeight / 100) * (posterData.signatureVerticalPosition || 0));

                            if (isCurrent()) {
                                ctx.drawImage(image, adjustedX, adjustedY, signatureWidth, signatureHeight);
                            }
                            handleResolve();
                        };

                        image.onerror = () => {
                            clearTimeout(timeout);
                            handleResolve();
                        };

                        image.onabort = () => {
                            clearTimeout(timeout);
                            handleResolve();
                        };
                        
                        image.src = imageUrl;
                    } catch (error) {
                        clearTimeout(timeout);
                        handleResolve();
                    }
                });
            };

            const drawBackground = async () => {
                ctx.fillStyle = posterData.backgroundColor;
                const bgY = Math.round(2480 * scale) - marginBackground;
                const bgHeight = height - bgY;
                ctx.fillRect(0, bgY, width, bgHeight);
            };

            ctx.clearRect(0, 0, width, height);

            ctx.fillStyle = posterData.backgroundColor || '#000000';
            ctx.fillRect(0, 0, width, height);

            const coverSource = posterData.useUncompressed
                ? (posterData.uncompressedAlbumCover || posterData.albumCover)
                : posterData.albumCover;
            await loadCover(coverSource);
            if (!isCurrent()) return;

            await drawBackground();
            if (!isCurrent()) return;
            await drawAlbumInfos();
            if (!isCurrent()) return;
            if (posterData.showTracklist) {
                await drawTracklist();
            }
            if (!isCurrent()) return;

            await drawWaterMark();
            // if (posterData.useWatermark) { deactivated for now as per design decision
            //     await drawWaterMark();
            // }

            if (!isCurrent()) return;
            if (posterData.showArtistSignature) {
                await drawSignature();
            }
            if (!isCurrent()) return;
            await scannable();
            if (!isCurrent()) return;

            await new Promise(resolve => requestAnimationFrame(() => {
                requestAnimationFrame(resolve);
            }));

            if (!isCurrent()) return;

            const liveCtx = liveCanvas.getContext('2d');
            if (liveCtx) {
                liveCtx.clearRect(0, 0, liveCanvas.width, liveCanvas.height);
                liveCtx.drawImage(outputCanvas, 0, 0);
            }

            emitImageReady(outputCanvas);
        };

        generatePosterContent().catch(() => {
            if (!isCurrent()) return;
            emitImageReady(canvasRef.current);
        });

        return () => {
            disposed = true;
        };
    }, [generatePoster, posterData, customFont, scale, isThumbnail]);

    const canvasWidth = Math.round(2480 * scale);
    const canvasHeight = Math.round(3508 * scale);

    return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} style={{ display: 'none' }} />;
});

CanvasPoster.displayName = 'CanvasPoster';

export default CanvasPoster;
