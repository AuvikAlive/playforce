import { makeTitle } from '../makeTitle'
import { makePlaygroundItems } from './makePlaygroundItems'
import { makeIndividualItems } from './makeIndividualItems'

export const makeMaintenanceIssues = ({
  maintenanceIssuesAdded,
  maintenanceIssues,
  playgroundsCompleted,
  playgrounds,
}) => [
  makeTitle('IDENTIFIED MAINTENANCE ISSUES'),
  playgroundsCompleted
    ? makePlaygroundItems(playgrounds)
    : makeIndividualItems(maintenanceIssues),
  {
    text: '',
    pageBreak: 'after',
  },
]
