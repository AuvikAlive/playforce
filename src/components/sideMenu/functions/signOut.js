export const signOut = component => () => {
  const { firebase, history } = component.props
  const { clearSubscriptions } = component.context

  clearSubscriptions()

  firebase.logout()
  history.push('/signIn')
}
