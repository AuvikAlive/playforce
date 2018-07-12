import { showActionGoBack } from '../../../../functions/'

export const deleteMaintenanceIssue = component => async () => {
  const {
    deleteMaintenanceIssue,
    userId,
    inspectionId,
    maintenanceIssueId,
    maintenanceIssue,
  } = component.props

  await deleteMaintenanceIssue(
    userId,
    inspectionId,
    maintenanceIssueId,
    maintenanceIssue.images
  )

  const message = 'Issue deleted!'

  showActionGoBack(component, message)()
}
