export const deleteReportNote = (userId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()

  return db
    .collection('users')
    .doc(userId)
    .collection('reportNotes')
    .doc(id)
    .delete()
}
