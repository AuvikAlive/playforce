import { showActionGoBack } from '../../../../functions/'

export const deleteMaintenanceIssue = component => async () => {
  const { deleteMaintenanceIssue, maintenanceIssue } = component.props

  await deleteMaintenanceIssue(maintenanceIssue.images)

  showActionGoBack(component, 'Issue deleted!')()
}
