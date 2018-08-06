export const submit = component => async () => {
  const { onSubmit, setFeedback } = component.props
  const { text, customInspectionNumber } = component.state

  setFeedback({ error: '', loading: true })

  if (text) {
    try {
      await onSubmit({ text, customInspectionNumber })
      setFeedback({ success: 'Certifcate text updated!', loading: false })
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
