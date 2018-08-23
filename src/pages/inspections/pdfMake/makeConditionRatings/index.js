import { makePlaygroundItems } from './makePlaygroundItems'
import { makeIndividualItems } from './makeIndividualItems'
import { makeTitle } from './makeTitle'

export const makeConditionRatings = (
  conditionRatings,
  playgroundsCompleted,
  playgrounds
) => {
  return [
    makeTitle(),
    playgroundsCompleted
      ? makePlaygroundItems(playgrounds)
      : makeIndividualItems(conditionRatings),

    {
      text: '',
      pageBreak: 'after',
    },
  ]
}
