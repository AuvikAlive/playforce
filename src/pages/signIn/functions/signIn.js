export const signIn = async (component, values) => {
  const { email, password } = values
  const { checked } = component.state
  const { setFeedback, signIn, history } = component.props

  setFeedback({ error: "", loading: true })

  try {
    await signIn(email, password, checked)
    history.push({
      pathname: "/dashboard",
      state: { name: "Dashboard" },
    })
  } catch (error) {
    setFeedback({ error: error.message, loading: false })
  }
}
