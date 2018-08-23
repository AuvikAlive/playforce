export const submit = component => async updatedValue => {
  const { updateMaintenanceIssue, setFeedback } = component.props

  await updateMaintenanceIssue(updatedValue)

  setFeedback({ success: 'Issue updated!' })
}
