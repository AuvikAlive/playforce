import { makeTitle } from '../makeTitle'
// import { makePlaygroundItems } from './makePlaygroundItems'
import { makeIndividualItems } from './makeIndividualItems'

export const makeMaintenanceIssues = maintenanceIssues => {
  if (maintenanceIssues && maintenanceIssues.length > 0) {
    return [
      makeTitle('IDENTIFIED MAINTENANCE ISSUES'),
      makeIndividualItems(maintenanceIssues),
      {
        text: '',
        pageBreak: 'after',
      },
    ]
  }

  return null
}
