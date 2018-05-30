import chunk from 'lodash/chunk'
import { verticalMargin, subHeaderFontSize } from '../globals'
import { makeImage } from './makeImage'
import { makeEquipmentType } from './makeEquipmentType'
import { makeManufacturer } from './makeManufacturer'
import { makeCondition } from './makeCondition'

export const makePlayItems = playItems => {
  const conditionRatingItems = playItems.map(
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

  return [
    {
      text: 'Play Items',
      fontSize: subHeaderFontSize,
      font: 'Oswald',
      marginBottom: verticalMargin,
    },
    grid,
  ]
}
