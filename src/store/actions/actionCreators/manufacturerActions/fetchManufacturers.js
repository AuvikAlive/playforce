import {
  FETCH_MANUFACTURERS,
  FETCH_MANUFACTURERS_COMPLETED,
} from '../../actionTypes'

export const fetchManufacturers = userId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_MANUFACTURERS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const querySnapshot = await db
    .collection('users')
    .doc(userId)
    .collection('manufacturers')
    .get()

  let items = []

  querySnapshot.forEach(doc =>
    items.push({
      id: doc.id,
      ...doc.data(),
    })
  )
  dispatch({ type: FETCH_MANUFACTURERS_COMPLETED, payload: items })
}
