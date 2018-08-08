export const submit = component => async () => {
  const { saveNotes, setFeedback, userId, inspectionId } = component.props
  const { notes } = component.state

  setFeedback({ error: '', loading: true })

  if (notes) {
    try {
      await saveNotes(userId, inspectionId, { notes })
      setFeedback({ success: 'Notes saved!', loading: false })
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
