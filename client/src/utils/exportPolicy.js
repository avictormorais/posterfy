const PRINT_READY_FORMATS = new Set(['png', 'pdf'])
const PRINT_READY_SCALES = new Set([1, 1.5])

export const getExportPolicy = (format, scale) => {
  if (format === 'jpg' && scale === 0.6) {
    return { tier: 'free', includeWatermark: true }
  }

  if (PRINT_READY_FORMATS.has(format) && PRINT_READY_SCALES.has(scale)) {
    return { tier: 'print_ready', includeWatermark: false }
  }

  return null
}
