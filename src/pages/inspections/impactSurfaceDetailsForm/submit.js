export const submit = component => async () => {
  const { location, surfaceType, material, condition } = component.state
  const { setFeedback, onSubmit, afterSubmit } = component.props

  if (location && surfaceType && material && condition) {
    setFeedback({ error: '', loading: true })

    try {
      const result = await onSubmit({
        location,
        surfaceType,
        material,
        condition,
      })
      setFeedback({ loading: false })
      afterSubmit && afterSubmit(result)
    } catch (error) {
      setFeedback({ error: error.message, loading: false })
    }
  } else {
    setFeedback({
      error: 'Please fill up the form correctly!',
    })
  }
}
