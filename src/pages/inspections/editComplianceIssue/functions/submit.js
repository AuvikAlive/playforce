export const submit = component => async updatedValue => {
  const {
    updateComplianceIssue,
    userId,
    inspectionId,
    complianceIssueId,
    setFeedback,
  } = component.props

  await updateComplianceIssue(
    userId,
    inspectionId,
    complianceIssueId,
    updatedValue
  )
  setFeedback({ success: 'Issue updated!' })
}
