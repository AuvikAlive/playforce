export const submit = component => async () => {
  const { name } = component.state
  const { setFeedback, addProject, userId, history } = component.props

  if (name) {
    setFeedback({ error: '', loading: true })

    try {
      await addProject(userId, name)

      setFeedback({ loading: false, success: 'Project published!' })

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
