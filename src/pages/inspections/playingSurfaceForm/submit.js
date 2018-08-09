export const submit = component => async () => {
  const { surfaceType, material, impactArea, condition } = component.state
  const { setFeedback, onSubmit, afterSubmit } = component.props

  if (surfaceType && material && impactArea && condition) {
    setFeedback({ error: '', loading: true })

    try {
      const result = await onSubmit({
        surfaceType,
        material,
        impactArea,
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
