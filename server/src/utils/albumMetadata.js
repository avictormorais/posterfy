const cleanText = (value, maxLength = 300) => (
  typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
)

const cleanArtists = (value, fallback = []) => {
  const artists = Array.isArray(value) ? value : fallback
  return artists
    .filter(name => typeof name === 'string' && name.trim())
    .slice(0, 20)
    .map(name => name.trim().slice(0, 200))
}

const cleanExternalIds = (value) => {
  if (value instanceof Map) value = Object.fromEntries(value)
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {}
  return Object.fromEntries(
    Object.entries(value)
      .filter(([key, id]) => /^[a-z0-9_]{1,30}$/i.test(key) && typeof id === 'string' && id.trim())
      .slice(0, 10)
      .map(([key, id]) => [key.toLowerCase(), id.trim().slice(0, 100)])
  )
}

export const normalizeAlbumMetadata = (value = {}, fallback = {}) => {
  const providerAlbumId = cleanText(value.providerAlbumId || fallback.providerAlbumId, 100)
  const albumName = cleanText(value.albumName || fallback.albumName, 300)
  const artistNames = cleanArtists(value.artistNames, fallback.artistNames)
  const releaseDate = cleanText(value.releaseDate || fallback.releaseDate, 50)
  const parsedTrackCount = Number(value.trackCount ?? fallback.trackCount)

  return {
    provider: 'spotify',
    providerAlbumId,
    albumName,
    artistNames,
    releaseDate,
    trackCount: Number.isInteger(parsedTrackCount) && parsedTrackCount >= 0 ? parsedTrackCount : null,
    externalIds: cleanExternalIds(value.externalIds || fallback.externalIds)
  }
}

export const albumMetadataFields = {
  provider: { type: String, enum: ['spotify'], default: 'spotify' },
  providerAlbumId: { type: String, required: true, trim: true },
  albumName: { type: String, default: '', trim: true },
  artistNames: { type: [String], default: [] },
  releaseDate: { type: String, default: '', trim: true },
  trackCount: { type: Number, default: null, min: 0 },
  externalIds: { type: Map, of: String, default: {} }
}
