import { makeItems } from './makeItems'
import { makeAncillaryItems } from './makeAncillaryItems'
import { equipmentTypes } from './equipmentTypes'
import { capitalize } from '../utils/'

export const makeIndividualItems = async conditionRatings => {
  const playItems = conditionRatings.filter(
    ({ type }) => capitalize(type) === equipmentTypes[0]
  )

  const fitnessItems = conditionRatings.filter(
    ({ type }) => capitalize(type) === equipmentTypes[1]
  )

  const ancillaryItems = conditionRatings.filter(
    ({ type }) => capitalize(type) === equipmentTypes[2]
  )

  return [
    await makeItems(playItems, 'Play'),
    await makeItems(fitnessItems, 'Fitness'),
    makeAncillaryItems(ancillaryItems),
  ]
}
