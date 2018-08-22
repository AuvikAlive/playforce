export const submit = component => async complianceIssue => {
  const { addComplianceIssue } = component.props

  const complianceIssueId = await addComplianceIssue(complianceIssue)

  return complianceIssueId
}
