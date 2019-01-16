import { blue, green, yellow, pink, purple } from '../../constants'

const colorMap = {
  VL: blue,
  L: green,
  M: yellow,
  H: pink,
  VH: purple,
}

export const makeSecondRow = (probability, severity, level) => {
  const colorProperty = level.substring(0, 2).trim()

  return [
    probability,
    severity,
    {
      text: level,
      fillColor: colorMap[colorProperty],
    },
  ]
}
