export const addSite = (userId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = db
    .collection('users')
    .doc(userId)
    .collection('sites')
    .doc()

  await ref.set(data)

  return ref.id
}
