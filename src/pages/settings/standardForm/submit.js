export const submit = component => async () => {
  const { onSubmit, afterSubmit, setFeedback } = component.props
  const { code, title, publishDate } = component.state

  if (code && title && publishDate) {
    setFeedback({ error: '', loading: true })

    try {
      const result = await onSubmit({ code, title, publishDate })
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
