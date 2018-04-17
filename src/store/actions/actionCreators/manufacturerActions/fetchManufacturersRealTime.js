import {
  FETCH_MANUFACTURERS,
  FETCH_MANUFACTURERS_COMPLETED,
} from '../../actionTypes'

export const fetchManufacturersRealTime = userId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_MANUFACTURERS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
    .collection('manufacturers')

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc =>
      items.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    dispatch({ type: FETCH_MANUFACTURERS_COMPLETED, payload: items })
  })
}
