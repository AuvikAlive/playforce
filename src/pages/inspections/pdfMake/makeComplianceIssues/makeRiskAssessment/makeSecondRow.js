import { blue, green, yellow, pink, purple } from '../../constants'
import {
  probabilities,
  severities,
  riskLevels,
} from '../../../../../constants/'

const colorMap = {
  VL: blue,
  L: green,
  M: yellow,
  H: pink,
  VH: purple,
}

export const makeSecondRow = (probabilityIndex, severityIndex) => {
  const colorProperty = riskLevels[probabilityIndex][severityIndex]
    .substring(0, 2)
    .trim()

  return [
    probabilities[probabilityIndex].probability,
    severities[severityIndex].serverity,
    {
      text: riskLevels[probabilityIndex][severityIndex],
      fillColor: colorMap[colorProperty],
    },
  ]
}
