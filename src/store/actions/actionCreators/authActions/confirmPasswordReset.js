export const confirmPasswordReset = (code, password) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const auth = firebase.auth()

  return auth.confirmPasswordReset(code, password)
}
