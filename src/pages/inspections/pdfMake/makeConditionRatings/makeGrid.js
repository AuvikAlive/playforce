import { verticalMargin } from '../globals'
import chunk from 'lodash/chunk'
import { makeImage } from './makeImage'
import { makeEquipmentType } from './makeEquipmentType'
import { makeAssetId } from './makeAssetId'
import { makeManufacturer } from './makeManufacturer'
import { makeCondition } from './makeCondition'

export const makeGrid = conditionRatings => {
  const conditionRatingItems = conditionRatings.map(
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
      makeAssetId(assetId),
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

    if (index + 1 === array.length) {
      row.pageBreak = 'after'
    }

    return row
  })

  return grid
}
