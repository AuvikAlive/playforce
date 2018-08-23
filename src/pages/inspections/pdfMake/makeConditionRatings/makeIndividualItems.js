import { makeItems } from './makeItems'
import { makeAncillaryItems } from './makeAncillaryItems'
import { equipmentTypes } from '../../../../constants/'
import { capitalize } from '../../../../functions/capitalize'

export const makeIndividualItems = conditionRatings => {
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
    makeItems(playItems, 'Play'),
    makeItems(fitnessItems, 'Fitness'),
    makeAncillaryItems(ancillaryItems),
  ]
}
