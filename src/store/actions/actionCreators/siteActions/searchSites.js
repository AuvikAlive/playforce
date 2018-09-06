import { getRootRef } from '../dbActions/'

export const searchSites = (userId, name) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('sites')

  let items = []
  let querySnapshot = await ref.where('name', '==', name).get()

  if (querySnapshot.empty) {
    querySnapshot = await ref.where('name', '>=', name).get()

    if (querySnapshot.empty) {
      querySnapshot = await ref.where('name', '<=', name).get()
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
