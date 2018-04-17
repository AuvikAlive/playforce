export const saveManufacturer = (userId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
    .collection('manufacturers')
    .doc()

  return ref.set(data)
}
