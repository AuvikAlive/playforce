export const deleteInspectionType = (userId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()

  return db
    .collection('users')
    .doc(userId)
    .collection('inspectionTypes')
    .doc(id)
    .delete()
}
