export const submit = component => async () => {
  const { client } = component.state
  const { setFeedback, userId } = component.props

  if (client) {
    setFeedback({ error: '', loading: true })
    const { saveClient } = component.props

    try {
      await saveClient(userId, { name: client })
      component.setState({ client: '' })
      setFeedback({ success: 'Client added!', loading: false })
    } catch (error) {
      setFeedback({ error: error.message, loading: false })
    }
  } else {
    setFeedback({
      error: 'Please fill up the form correctly!',
    })
  }
}
