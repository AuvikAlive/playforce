export const submit = component => async maintenanceIssue => {
  const { addMaintenanceIssue, userId, inspectionId } = component.props

  const maintenanceIssueId = await addMaintenanceIssue(
    userId,
    inspectionId,
    maintenanceIssue
  )

  return maintenanceIssueId
}
