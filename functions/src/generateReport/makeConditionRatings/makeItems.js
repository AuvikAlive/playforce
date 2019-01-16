import { chunk } from 'lodash'
import { verticalMargin, subHeaderFontSize } from '../constants'
import { makeImage } from './makeImage'
import { makeEquipmentType } from './makeEquipmentType'
import { makeManufacturer } from './makeManufacturer'
import { makeCondition } from './makeCondition'

export const makeItems = async (items, itemName) => {
  if (items.length === 0) {
    return null
  }

  const conditionRatingItems = items.map(
    async ({ image, description, manufacturer, condition }, index) => [
      await makeImage(image),
      makeEquipmentType(description),
      makeManufacturer(manufacturer),
      makeCondition(condition),
    ]
  )

  const tuples = chunk(await Promise.all(conditionRatingItems), 2)

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
      text: `${itemName} Items`,
      fontSize: subHeaderFontSize,
      font: 'Oswald',
      marginBottom: verticalMargin,
    },
    grid,
  ]
}
