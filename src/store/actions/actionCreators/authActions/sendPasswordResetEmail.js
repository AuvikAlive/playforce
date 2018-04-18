export const sendPasswordResetEmail = email => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const auth = firebase.auth()

  return auth.sendPasswordResetEmail(email)
}
