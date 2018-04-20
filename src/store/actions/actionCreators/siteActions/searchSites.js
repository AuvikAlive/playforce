export const searchSites = (userId, name) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  let items = []
  let querySnapshot = await db
    .collection('users')
    .doc(userId)
    .collection('sites')
    .where('name', '==', name)
    .get()

  if (querySnapshot.empty) {
    querySnapshot = await db
      .collection('users')
      .doc(userId)
      .collection('sites')
      .where('name', '>=', name)
      .get()

    if (querySnapshot.empty) {
      querySnapshot = await db
        .collection('users')
        .doc(userId)
        .collection('sites')
        .where('name', '<=', name)
        .get()
    }
  }

  querySnapshot.forEach(doc =>
    items.push({
      id: doc.id,
      ...doc.data(),
    })
  )

  return items
}
