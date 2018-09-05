export const calculateImpactArea = freeFallHeight => {
  if (!freeFallHeight) {
    return ''
  } else if (freeFallHeight >= 0 && freeFallHeight <= 600) {
    return '≤ 1500 mm'
  } else if (freeFallHeight >= 600 && freeFallHeight <= 1500) {
    return '1500 mm'
  } else if (freeFallHeight > 1500) {
    return `${Math.round((freeFallHeight * 2) / 3 + 500)} mm`
  }

  return 0
}
