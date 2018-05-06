import { makeTitle } from './makeTitle'
import { makeTable } from './makeTable'

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

  return [makeTitle(), makeTable(complianceIssues)]
}
