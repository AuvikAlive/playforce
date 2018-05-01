export const updateProfile = data => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()

  return firebase.updateProfile(data)
}
