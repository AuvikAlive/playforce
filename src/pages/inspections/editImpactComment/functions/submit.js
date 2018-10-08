export const submit = component => async () => {
  const { saveImpactComment, setFeedback } = component.props

  const { comment } = component.state

  setFeedback({ error: '', loading: true })

  if (comment) {
    try {
      await saveImpactComment(comment)
      setFeedback({ success: 'Comment saved!', loading: false })
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
