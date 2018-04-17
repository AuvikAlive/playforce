export const deleteStandard = (userId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()

  return db
    .collection('users')
    .doc(userId)
    .collection('standards')
    .doc(id)
    .delete()
}
