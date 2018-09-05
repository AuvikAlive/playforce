import chunk from 'lodash/chunk'
import { verticalMargin, subHeaderFontSize } from '../constants'
import { makeImage } from './makeImage'
import { makeEquipmentType } from './makeEquipmentType'
import { makeCondition } from './makeCondition'

export const makeAncillaryItems = ancillaryItems => {
  if (ancillaryItems.length === 0) {
    return null
  }

  const conditionRatingItems = ancillaryItems.map(
    (
      {
        image,
        equipment,
        assetId,
        manufacturer,
        condition,
        estimatedDateInstalled,
      },
      index
    ) => [
      makeImage(image),
      makeEquipmentType(equipment),
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
      text: 'Ancillary Items',
      fontSize: subHeaderFontSize,
      font: 'Oswald',
      marginBottom: verticalMargin,
    },
    grid,
  ]
}
