export const deleteManufacturer = (userId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()

  return db
    .collection('users')
    .doc(userId)
    .collection('manufacturers')
    .doc(id)
    .delete()
}
