// import { makePlaygroundItems } from './makePlaygroundItems'
import { makeIndividualItems } from './makeIndividualItems'
import { makeTitle } from './makeTitle'

export const makeConditionRatings = async conditionRatings => [
  makeTitle(),
  await makeIndividualItems(conditionRatings),
  {
    text: '',
    pageBreak: 'after',
  },
]
