export const submit = component => async () => {
  const { name, address } = component.state
  const { setFeedback, onSubmit, afterSubmit } = component.props

  if (name && address) {
    setFeedback({ error: '', loading: true })

    try {
      const result = await onSubmit({ name, address })
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
