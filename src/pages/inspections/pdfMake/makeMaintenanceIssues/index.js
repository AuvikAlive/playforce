import { makeTitle } from '../makeTitle'
import { makePlaygroundItems } from './makePlaygroundItems'
import { makeIndividualItems } from './makeIndividualItems'

export const makeMaintenanceIssues = ({
  maintenanceIssuesAdded,
  maintenanceIssues,
  playgroundsCompleted,
  playgrounds,
}) => {
  if (
    (!playgroundsCompleted && !maintenanceIssuesAdded) ||
    (playgroundsCompleted &&
      playgrounds.every(
        ({ maintenanceIssues }) => maintenanceIssues.length === 0
      ))
  ) {
    return null
  }

  return [
    makeTitle('IDENTIFIED MAINTENANCE ISSUES'),
    playgroundsCompleted
      ? makePlaygroundItems(playgrounds)
      : makeIndividualItems(maintenanceIssues),
    {
      text: '',
      pageBreak: 'after',
    },
  ]
}
