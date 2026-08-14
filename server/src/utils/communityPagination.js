export const hasTextSearchTerm = (value) => /[\p{L}\p{N}]/u.test(value)

export const escapeSearchRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

export const getUniquePosterPage = (groups, page, limit) => {
  const seen = new Set()
  const orderedIds = []

  for (const group of groups) {
    for (const poster of group) {
      const id = poster?._id?.toString()
      if (!id || seen.has(id)) continue
      seen.add(id)
      orderedIds.push(poster._id)
    }
  }

  const skip = (page - 1) * limit
  const ids = orderedIds.slice(skip, skip + limit)

  return {
    ids,
    total: orderedIds.length,
    hasMore: skip + ids.length < orderedIds.length
  }
}
