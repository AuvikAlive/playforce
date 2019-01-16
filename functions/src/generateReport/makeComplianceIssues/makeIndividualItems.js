import { makeIssueItems } from './makeIssueItems'

export const makeIndividualItems = complianceIssues =>
  complianceIssues && complianceIssues.length > 0
    ? [makeIssueItems(complianceIssues)]
    : [
        {
          text: 'No compliance issues identified',
        },
      ]
