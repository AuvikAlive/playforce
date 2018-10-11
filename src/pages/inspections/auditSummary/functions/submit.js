export const submit = component => async () => {
  const {
    updateAuditSummary,
    userId,
    inspectionId,
    setFeedback,
    displayName,
    title,
    company,
    signature,
  } = component.props

  const { summary } = component.state

  if (summary) {
    setFeedback({ error: '', loading: true })
    await updateAuditSummary(userId, inspectionId, {
      summary,
      displayName,
      title,
      company,
      signature,
    })
    setFeedback({ success: 'Audit Summary saved!', loading: false })
  } else {
    setFeedback({
      error: 'Please fill up the form correctly!',
    })
  }
}
