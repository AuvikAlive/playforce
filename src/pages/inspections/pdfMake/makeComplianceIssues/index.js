import { makeTitle } from './makeTitle'
import { makeIssueItems } from './makeIssueItems'

export const makeComplianceIssues = (
  complianceIssuesAdded,
  complianceIssues
) => {
  if (!complianceIssuesAdded) {
    return [
      makeTitle(),
      {
        text: 'No compliance issues identified',
        pageBreak: 'after',
      },
    ]
  }

  return [makeTitle(), makeIssueItems(complianceIssues)]
}
