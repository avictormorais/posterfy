/* eslint-disable react/prop-types */

import watermarkSvgRaw from './watermark.svg?raw';

export const WATERMARK_VIEWBOX_WIDTH = 5696;
export const WATERMARK_VIEWBOX_HEIGHT = 909;
const WATERMARK_DEFAULT_COLOR = '#DF6D40';
const WATERMARK_BASE_FILL = '#DF6D40';

const normalizeDimension = (value, fallback) => {
    const numericValue = Number(value);
    return Number.isFinite(numericValue) && numericValue > 0 ? numericValue : fallback;
};

const escapeSvgAttribute = (value) => {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
};

const replaceLastOccurrence = (content, searchValue, replaceValue) => {
    const lastIndex = content.lastIndexOf(searchValue);
    if (lastIndex === -1) return content;

    return `${content.slice(0, lastIndex)}${replaceValue}${content.slice(lastIndex + searchValue.length)}`;
};

const withSize = (svgMarkup, width, height) => {
    return svgMarkup
        .replace(/width="[^"]*"/, `width="${width}"`)
        .replace(/height="[^"]*"/, `height="${height}"`);
};

const withColors = (svgMarkup, textColor, iconColor = textColor) => {
    const safeTextColor = escapeSvgAttribute(textColor || WATERMARK_DEFAULT_COLOR);
    const safeIconColor = escapeSvgAttribute(iconColor || safeTextColor);
    const baseFillAttr = `fill="${WATERMARK_BASE_FILL}"`;
    const textFillAttr = `fill="${safeTextColor}"`;
    const iconFillAttr = `fill="${safeIconColor}"`;

    const textPaintedSvg = svgMarkup.replace(new RegExp(baseFillAttr, 'g'), textFillAttr);
    if (safeIconColor === safeTextColor) {
        return textPaintedSvg;
    }

    return replaceLastOccurrence(textPaintedSvg, textFillAttr, iconFillAttr);
};

export const generateLogoWatermark = (
    textColor = WATERMARK_DEFAULT_COLOR,
    width = WATERMARK_VIEWBOX_WIDTH,
    height = WATERMARK_VIEWBOX_HEIGHT,
    iconColor = textColor
) => {
    const normalizedWidth = normalizeDimension(width, WATERMARK_VIEWBOX_WIDTH);
    const normalizedHeight = normalizeDimension(height, WATERMARK_VIEWBOX_HEIGHT);

    const sizedSvg = withSize(watermarkSvgRaw, normalizedWidth, normalizedHeight);
    return withColors(sizedSvg, textColor, iconColor);
};

function LogoName({ width, height, fill, textColor, iconColor, ariaLabel = 'Posterfy logo' }) {
    const resolvedTextColor = textColor || fill || WATERMARK_DEFAULT_COLOR;
    const resolvedIconColor = iconColor || resolvedTextColor;
    const svgMarkup = generateLogoWatermark(resolvedTextColor, width, height, resolvedIconColor);

    return (
        <span
            role="img"
            aria-label={ariaLabel}
            dangerouslySetInnerHTML={{ __html: svgMarkup }}
        />
    );
}

export default LogoName;