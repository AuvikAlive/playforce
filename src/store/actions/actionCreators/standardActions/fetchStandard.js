import { FETCH_STANDARD, FETCH_STANDARD_COMPLETED } from '../../actionTypes'

export const fetchStandard = (userId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_STANDARD })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const doc = await db
    .collection('users')
    .doc(userId)
    .collection('standards')
    .doc(id)
    .get()
  const item = { id: doc.id, ...doc.data() }

  dispatch({ type: FETCH_STANDARD_COMPLETED, payload: item })
}
