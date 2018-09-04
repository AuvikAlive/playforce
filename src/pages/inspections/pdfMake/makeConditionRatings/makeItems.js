import chunk from 'lodash/chunk'
import { verticalMargin, subHeaderFontSize } from '../constants'
import { makeImage } from './makeImage'
import { makeEquipmentType } from './makeEquipmentType'
import { makeManufacturer } from './makeManufacturer'
import { makeCondition } from './makeCondition'

export const makeItems = (items, itemName) => {
  if (items.length === 0) {
    return null
  }

  const conditionRatingItems = items.map(
    (
      { image, equipment, manufacturer, condition, estimatedDateInstalled },
      index
    ) => [
      makeImage(image),
      makeEquipmentType(equipment),
      makeManufacturer(manufacturer),
      makeCondition(condition),
    ]
  )

  const tuples = chunk(conditionRatingItems, 2)

  const grid = tuples.map((tuple, index, array) => {
    const row = {
      columns: tuple,
      marginBottom: verticalMargin,
      unbreakable: true,
    }

    return row
  })

  return {
    unbreakable: true,
    stack: [
      {
        text: `${itemName} Items`,
        fontSize: subHeaderFontSize,
        font: 'Oswald',
        marginBottom: verticalMargin,
      },
      grid,
    ],
  }
}
