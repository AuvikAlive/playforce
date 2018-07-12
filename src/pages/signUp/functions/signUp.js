export const signUp = component => async () => {
  const { username, email, password } = component.state
  const { setFeedback, signUp, history } = component.props

  if (username && email && password) {
    setFeedback({ error: '', loading: true })

    try {
      await signUp(email, password, username)
      history.push({
        pathname: '/dashboard',
        state: { name: 'Dashboard' },
      })
    } catch (error) {
      setFeedback({ error: error.message, loading: false })
    }
  } else {
    setFeedback({
      error: 'Please fill up the form properly!',
      loading: false,
    })
  }
}
