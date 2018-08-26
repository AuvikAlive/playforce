import { makeTitle } from '../makeTitle'
import { makePlaygroundItems } from './makePlaygroundItems'
import { makeIndividualItems } from './makeIndividualItems'

export const makeComplianceIssues = ({
  complianceIssuesAdded,
  complianceIssues,
  playgroundsCompleted,
  playgrounds,
}) => {
  return [
    makeTitle('IDENTIFIED COMPLIANCE ISSUES'),
    playgroundsCompleted
      ? makePlaygroundItems(playgrounds)
      : makeIndividualItems(complianceIssues),
    {
      text: '',
      pageBreak: 'after',
    },
  ]
}
