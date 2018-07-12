export const signInWithProvider = (component, provider) => async () => {
  const { checked } = component.state
  const { setFeedback, signInWithProvider, history } = component.props

  setFeedback({ error: '', loading: true })

  try {
    await signInWithProvider(provider, checked)
    history.push({
      pathname: '/dashboard',
      state: { name: 'Dashboard' },
    })
  } catch (error) {
    setFeedback({ error: error.message, loading: false })
  }
}
