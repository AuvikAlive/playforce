import { makeTitle } from './makeTitle'
import { makePlayItems } from './makePlayItems'
import { makeAncillaryItems } from './makeAncillaryItems'

export const makeConditionRatings = conditionRatings => {
  const playItems = conditionRatings.filter(
    ({ itemType }) => itemType === 'play'
  )

  const ancillaryItems = conditionRatings.filter(
    ({ itemType }) => itemType === 'ancillary'
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
