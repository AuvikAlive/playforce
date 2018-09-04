export const submit = component => async () => {
  const { onSubmit, afterSubmit, setFeedback } = component.props
  const { number, title, description } = component.state

  if (number && title && description) {
    setFeedback({ error: '', loading: true })

    try {
      const result = await onSubmit({ number, title, description })
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
