export const submit = component => async () => {
  const { updateProfile, setFeedback } = component.props
  const { preimplementationRecommendation } = component.state

  setFeedback({ error: '', loading: true })

  if (preimplementationRecommendation) {
    try {
      await updateProfile({ preimplementationRecommendation })
      setFeedback({ success: 'Recommendation updated!', loading: false })
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
