export const submit = component => async () => {
  const { name } = component.state
  const { setFeedback, addGroup, history } = component.props

  if (name) {
    setFeedback({ error: '', loading: true })

    try {
      await addGroup(name)

      setFeedback({ loading: false, success: 'Group published!' })

      history.goBack()
    } catch (error) {
      setFeedback({ error: error.message, loading: false })
    }
  } else {
    setFeedback({
      error: 'Please fill up the form correctly!',
    })
  }
}
