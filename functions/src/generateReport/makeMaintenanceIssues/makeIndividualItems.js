import { makeIssueItems } from './makeIssueItems'

export const makeIndividualItems = maintenanceIssues =>
  maintenanceIssues && maintenanceIssues.length > 0
    ? [makeIssueItems(maintenanceIssues)]
    : [
        {
          text: 'No maintenance issues identified',
        },
      ]
