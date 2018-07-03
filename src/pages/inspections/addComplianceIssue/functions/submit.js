export const submit = component => async complianceIssue => {
  const { addComplianceIssue, userId, inspectionId } = component.props

  const complianceIssueId = await addComplianceIssue(
    userId,
    inspectionId,
    complianceIssue
  )
  return complianceIssueId
}
