import { makeTitle } from './makeTitle'
import { makeGrid } from './makeGrid'

export const makeConditionRatings = conditionRatings => [
  makeTitle(),
  makeGrid(conditionRatings),
]
