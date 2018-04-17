export const saveStandard = (userId, data, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const collectionRef = await db
    .collection('users')
    .doc(userId)
    .collection('standards')
  const ref = id ? collectionRef.doc(id) : collectionRef.doc()

  return id ? ref.update(data) : ref.set(data)
}
