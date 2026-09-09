const PRINT_READY_FORMATS = new Set(['png', 'pdf'])
const PRINT_READY_SCALES = new Set([1, 1.5])
const CLEAN_ACCESS_REASONS = new Set(['unlocked', 'account_grant'])

export const getExportPolicy = (format, scale) => {
  if (format === 'jpg' && scale === 0.6) {
    return { tier: 'free', includeWatermark: true }
  }

  if (PRINT_READY_FORMATS.has(format) && PRINT_READY_SCALES.has(scale)) {
    return { tier: 'print_ready', includeWatermark: false }
  }

  return null
}

export const getPreviewWatermarkPolicy = (isPrintReadyEnabled, isPrintReadyUnlocked) => {
  const hasCleanPreviewAccess = isPrintReadyUnlocked === true

  return {
    includeWatermark: !hasCleanPreviewAccess,
    includePatternWatermark: isPrintReadyEnabled === true && !hasCleanPreviewAccess
  }
}

export const hasCleanPrintReadyAccess = (access) => (
  access?.authorized === true
  && access?.tier === 'print_ready'
  && CLEAN_ACCESS_REASONS.has(access.reason)
)
