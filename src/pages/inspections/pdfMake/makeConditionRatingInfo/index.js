import { makeTitle } from './makeTitle'
import { makeDescription } from './makeDescription'
import { makeRiskAssessment } from './makeRiskAssessment/'
import { makeInjurySeverity } from './makeInjurySeverity'
import { makeRiskPriorityRating } from './makeRiskPriorityRating'
import { makeConditionRating } from './makeConditionRating'
import { makeFooter } from './makeFooter'

export const makeConditionRatingInfo = () => {
  return [
    makeTitle(),
    makeDescription(),
    makeRiskAssessment(),
    makeInjurySeverity(),
    makeRiskPriorityRating(),
    makeConditionRating(),
    makeFooter(),
  ]
}
