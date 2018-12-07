export const signUp = async (component, values) => {
  const { username, email, password } = values
  const { setFeedback, signUp, history } = component.props

  setFeedback({ error: "", loading: true })

  try {
    await signUp(email, password, username)
    history.push({
      pathname: "/dashboard",
      state: { name: "Dashboard" },
    })
  } catch (error) {
    setFeedback({ error: error.message, loading: false })
  }
}
