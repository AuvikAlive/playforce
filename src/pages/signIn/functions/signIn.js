export const signIn = component => async () => {
  const { email, password, checked } = component.state
  const { setFeedback, signIn, history } = component.props

  setFeedback({ error: '', loading: true })

  if (email && password) {
    try {
      await signIn(email, password, checked)
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
