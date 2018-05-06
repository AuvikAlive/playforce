import { makeTitle } from './makeTitle'
import { makeIssueItems } from './makeIssueItems'

export const makeMaintenanceIssues = (
  maintenanceIssuesAdded,
  maintenanceIssues
) => {
  if (!maintenanceIssuesAdded) {
    return null
  }

  return [makeTitle(), makeIssueItems(maintenanceIssues)]
}
