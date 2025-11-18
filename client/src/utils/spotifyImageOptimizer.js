const SPOTIFY_IMAGE_PREFIXES = ['ab67616d000082c1', 'ab67616d0000b273'];

async function testImageUrl(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch {
        return false;
    }
}

function extractImageId(url) {
    const baseUrl = 'https://i.scdn.co/image/';
    if (!url.startsWith(baseUrl)) return null;
    return url.slice(baseUrl.length + 16);
}

export async function getHighestQualitySpotifyImage(originalUrl) {
    if (!originalUrl || !originalUrl.includes('i.scdn.co/image/')) {
        return originalUrl;
    }

    const imageId = extractImageId(originalUrl);
    if (!imageId) {
        return originalUrl;
    }

    for (const prefix of SPOTIFY_IMAGE_PREFIXES) {
        const testUrl = `https://i.scdn.co/image/${prefix}${imageId}`;
        const exists = await testImageUrl(testUrl);
        
        if (exists) {
            return testUrl;
        }
    }

    return originalUrl;
}
