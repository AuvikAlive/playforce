export const submit = component => async () => {
  const { operator } = component.state
  const { saveOperator, userId, setFeedback } = component.props

  if (operator) {
    setFeedback({ error: '', loading: true })

    try {
      await saveOperator(userId, { name: operator })
      setFeedback({ loading: false })
      component.setState({ operator: '' })
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
