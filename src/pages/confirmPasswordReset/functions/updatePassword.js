export const updatePassword = async component => {
  const { password, code } = component.state
  const { setFeedback, confirmPasswordReset } = component.props

  if (password) {
    setFeedback({ error: '', loading: true })

    try {
      await confirmPasswordReset(code, password)
      setFeedback({ loading: false })
      component.setState({ success: true })
    } catch (error) {
      setFeedback({ error: error.message, loading: false })
    }
  } else {
    setFeedback({
      error: 'Please enter your new password!',
      loading: false,
    })
  }
}
