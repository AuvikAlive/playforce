import { getRootRef } from '../dbActions/'

export const searchInspections = (userId, query) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspections')

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
