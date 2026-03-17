const WIKIDATA_ENDPOINT = "https://query.wikidata.org/sparql";
const COMMONS_ENDPOINT = "https://commons.wikimedia.org/w/api.php";
const USER_AGENT = 'Posterfy/1.0 (posterfy.space)';

async function getRealDirectUrl(fileNameOrUrl) {
  let fileName = fileNameOrUrl;
  
  if (fileName.includes('/')) {
    fileName = fileName.split('/').pop();
  }
  
  fileName = decodeURIComponent(fileName);
  
  if (!fileName.startsWith('File:')) {
    fileName = 'File:' + fileName;
  }

  const params = new URLSearchParams({
    action: "query",
    titles: fileName,
    prop: "imageinfo",
    iiprop: "url",
    format: "json",
    origin: "*"
  });

  try {
    const res = await fetch(`${COMMONS_ENDPOINT}?${params.toString()}`);
    const data = await res.json();
    const pages = data.query.pages;
    const pageId = Object.keys(pages)[0];

    if (pageId === "-1") {
      return null;
    }

    const directUrl = pages[pageId].imageinfo[0].url;
    return directUrl;
  } catch (e) {
    return null;
  }
}

async function searchWikimediaCommons(name) {
  const searchUrl = `${COMMONS_ENDPOINT}?action=query&list=search&srsearch=${encodeURIComponent(
    name + " signature"
  )}&srnamespace=6&format=json&origin=*`;

  try {
    const res = await fetch(searchUrl, { headers: { 'User-Agent': USER_AGENT } });
    const data = await res.json();
    const searchList = data.query.search;

    if (!searchList || searchList.length === 0) return { svg: null, png: null };

    const svgFile = searchList.find(r => r.title.toLowerCase().endsWith('.svg'));
    const pngFile = searchList.find(r => r.title.toLowerCase().endsWith('.png'));

    const getUrl = async (fileTitle) => {
      if (!fileTitle) return null;
      const infoUrl = `${COMMONS_ENDPOINT}?action=query&titles=${encodeURIComponent(fileTitle)}&prop=imageinfo&iiprop=url&format=json&origin=*`;
      try {
        const infoRes = await fetch(infoUrl);
        const infoData = await infoRes.json();
        const pageId = Object.keys(infoData.query.pages)[0];
        return infoData.query.pages[pageId].imageinfo[0].url;
      } catch (e) {
        return null;
      }
    };

    return { svg: await getUrl(svgFile?.title), png: await getUrl(pngFile?.title) };
  } catch (e) {
    return { svg: null, png: null };
  }
}

async function getSignatureBySpotifyId(spotifyId, fallbackName = null) {
  const sparqlQuery = `
    SELECT ?artistLabel ?signature WHERE {
      ?artist wdt:P1902 "${spotifyId}" .
      OPTIONAL { ?artist wdt:P109 ?signature . }
      SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
    }`;

  try {
    const wikiRes = await fetch(
      `${WIKIDATA_ENDPOINT}?query=${encodeURIComponent(sparqlQuery)}&format=json`,
      {
        headers: {
          'User-Agent': USER_AGENT,
          'Accept': 'application/sparql-results+json'
        }
      }
    );

    const wikiData = await wikiRes.json();
    let artistName = fallbackName;
    let wikidataUrl = null;

    if (wikiData.results.bindings.length > 0) {
      const result = wikiData.results.bindings[0];
      artistName = result.artistLabel.value;
      wikidataUrl = result.signature ? result.signature.value.replace("http://", "https://") : null;

      if (wikidataUrl && wikidataUrl.toLowerCase().endsWith('.svg')) {
        const directUrl = await getRealDirectUrl(wikidataUrl);
        if (directUrl) {
          return directUrl;
        }
        return wikidataUrl;
      }
    }

    if (artistName) {
      const commonsResults = await searchWikimediaCommons(artistName);

      if (commonsResults.svg) {
        return commonsResults.svg;
      }

      if (commonsResults.png) {
        return commonsResults.png;
      }
    }

    if (wikidataUrl && wikidataUrl.toLowerCase().endsWith('.png')) {
      const directUrl = await getRealDirectUrl(wikidataUrl);
      if (directUrl) {
        return directUrl;
      }
      return wikidataUrl;
    }
  } catch (e) {
  }

  return null;
}

export { getSignatureBySpotifyId, searchWikimediaCommons };
