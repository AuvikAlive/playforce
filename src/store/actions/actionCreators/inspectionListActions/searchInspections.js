export const searchInspections = (userId, query) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = db
    .collection('users')
    .doc(userId)
    .collection('inspections')

  let items = []
  let querySnapshot = await ref.where('name', '==', query).get()

  if (querySnapshot.empty) {
    querySnapshot = await ref.where('name', '>=', query).get()

    if (querySnapshot.empty) {
      querySnapshot = await ref.where('name', '<=', query).get()
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
