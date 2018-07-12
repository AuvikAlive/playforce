export const submit = component => async commonIssue => {
  const {
    updateCommonIssue,
    userId,
    commonIssueId,
    setFeedback,
  } = component.props

  await updateCommonIssue(userId, commonIssueId, commonIssue)
  setFeedback({ success: 'Issue updated!' })
}
