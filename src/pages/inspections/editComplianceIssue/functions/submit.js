export const submit = component => async updatedValue => {
  const { updateComplianceIssue, setFeedback } = component.props

  await updateComplianceIssue(updatedValue)
  setFeedback({ success: 'Issue updated!' })
}
