export const signOut = component => () => {
  const { signOut, history } = component.props
  const { clearSubscriptions } = component.context

  clearSubscriptions()

  signOut()
  history.push('/signIn')
}
