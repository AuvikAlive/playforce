import { makeTitle } from './makeTitle'
import { makeItems } from './makeItems'
import { makeAncillaryItems } from './makeAncillaryItems'
import { equipmentTypes } from '../../../../globals/constants'
import { capitalize } from '../../../../utilities/capitalize'

export const makeConditionRatings = conditionRatings => {
  const playItems = conditionRatings.filter(
    ({ itemType }) => capitalize(itemType) === equipmentTypes[0]
  )

  const fitnessItems = conditionRatings.filter(
    ({ itemType }) => capitalize(itemType) === equipmentTypes[1]
  )

  const ancillaryItems = conditionRatings.filter(
    ({ itemType }) => capitalize(itemType) === equipmentTypes[2]
  )

  return [
    makeTitle(),
    makeItems(playItems, 'Play'),
    makeItems(fitnessItems, 'Fitness'),
    makeAncillaryItems(ancillaryItems),
    {
      text: '',
      pageBreak: 'after',
    },
  ]
}
