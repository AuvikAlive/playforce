export const updateReportNote = (userId, id, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = db
    .collection('users')
    .doc(userId)
    .collection('reportNotes')
    .doc(id)

  return ref.update(data)
}
