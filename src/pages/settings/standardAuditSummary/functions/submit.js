export const submit = component => async () => {
  const { updateProfile, setFeedback } = component.props
  const { standardAuditSummary } = component.state

  setFeedback({ error: '', loading: true })

  if (standardAuditSummary) {
    try {
      await updateProfile({ standardAuditSummary })
      setFeedback({ success: 'Summary updated!', loading: false })
    } catch (error) {
      setFeedback({ error: error.message, loading: false })
    }
  } else {
    setFeedback({
      error: 'Please fill up the form correctly!',
      loading: false,
    })
  }
}
