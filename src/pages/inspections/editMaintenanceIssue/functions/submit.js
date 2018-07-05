export const submit = component => async updatedValue => {
  const {
    updateMaintenanceIssue,
    userId,
    inspectionId,
    maintenanceIssueId,
    setFeedback,
  } = component.props

  await updateMaintenanceIssue(
    userId,
    inspectionId,
    maintenanceIssueId,
    updatedValue
  )
  setFeedback({ success: 'Issue updated!' })
}
