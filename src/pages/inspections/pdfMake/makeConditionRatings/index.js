import { makePlaygroundItems } from './makePlaygroundItems'
import { makeIndividualItems } from './makeIndividualItems'
import { makeTitle } from './makeTitle'

export const makeConditionRatings = (
  conditionRatings,
  playgroundsCompleted,
  playgrounds
) => [
  makeTitle(),
  playgroundsCompleted
    ? makePlaygroundItems(playgrounds)
    : makeIndividualItems(conditionRatings),

  {
    text: '',
    pageBreak: 'after',
  },
]
