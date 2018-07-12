export const submit = component => async () => {
  const { onSubmit, afterSubmit, setFeedback } = component.props
  const { images, finding, equipment, recommendations } = component.state

  if (images.length > 0 && finding && equipment && recommendations) {
    setFeedback({ error: '', loading: true })

    try {
      const result = await onSubmit({
        images: images.slice(0, 4),
        finding,
        equipment,
        recommendations,
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
