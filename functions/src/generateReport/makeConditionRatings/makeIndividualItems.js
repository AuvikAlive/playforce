import { makeItems } from './makeItems'
import { makeAncillaryItems } from './makeAncillaryItems'
import { equipmentTypes } from './equipmentTypes'
import { capitalize } from '../utils/'

export const makeIndividualItems = conditionRatings => {
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
    makeItems(playItems, 'Play'),
    makeItems(fitnessItems, 'Fitness'),
    makeAncillaryItems(ancillaryItems),
  ]
}
