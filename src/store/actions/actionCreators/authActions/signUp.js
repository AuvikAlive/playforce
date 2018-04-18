export const signUp = (email, password, displayName) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()

  return firebase.createUser({ email, password }, { displayName, email })
}
