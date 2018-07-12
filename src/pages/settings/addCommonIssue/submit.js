export const submit = component => async commonIssue => {
  const { addCommonIssue, userId } = component.props
  const commonIssueId = await addCommonIssue(userId, commonIssue)

  return commonIssueId
}
