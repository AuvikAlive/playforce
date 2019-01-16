import { makeTitle } from '../makeTitle'
// import { makePlaygroundItems } from './makePlaygroundItems'
import { makeIndividualItems } from './makeIndividualItems'

export const makeComplianceIssues = async complianceIssues => [
  makeTitle('IDENTIFIED COMPLIANCE ISSUES'),
  await makeIndividualItems(complianceIssues),
  {
    text: '',
    pageBreak: 'after',
  },
]
