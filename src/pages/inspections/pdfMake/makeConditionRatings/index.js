import { makeTitle } from './makeTitle'
import { makePlayItems } from './makePlayItems'
import { makeAncillaryItems } from './makeAncillaryItems'
import { equipmentTypes } from '../../../../globals/constants'
import { capitalize } from '../../../../utilities/capitalize'

export const makeConditionRatings = conditionRatings => {
  const playItems = conditionRatings.filter(
    ({ itemType }) => capitalize(itemType) === equipmentTypes[0]
  )

  const ancillaryItems = conditionRatings.filter(
    ({ itemType }) => capitalize(itemType) === equipmentTypes[1]
  )

  return [
    makeTitle(),
    makePlayItems(playItems),
    ancillaryItems.length > 0 ? makeAncillaryItems(ancillaryItems) : null,
    {
      text: '',
      pageBreak: 'after',
    },
  ]
}
