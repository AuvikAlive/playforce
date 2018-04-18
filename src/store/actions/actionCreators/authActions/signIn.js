export const signIn = (email, password, persistence) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const auth = firebase.auth()

  persistence
    ? auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    : auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)

  return firebase.login({
    email,
    password,
  })
}
