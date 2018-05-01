export const updateStandard = (userId, id, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = db
    .collection('users')
    .doc(userId)
    .collection('standards')
    .doc(id)

  ref.update(data)
}
