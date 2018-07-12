export const submit = component => async () => {
  const { email } = component.state
  const { sendPasswordResetEmail, setFeedback } = component.props

  if (email) {
    setFeedback({ error: '', loading: true })
    component.setState({ success: '' })

    try {
      await sendPasswordResetEmail(email)
      setFeedback({ loading: false })
      component.setState({
        success:
          "Email sent. If you haven't received it, please wait a couple of minutes then try again!",
      })
    } catch (error) {
      setFeedback({ error: error.message, loading: false })
    }
  } else {
    setFeedback({
      error: 'Please enter your email address!',
      loading: false,
    })
  }
}
