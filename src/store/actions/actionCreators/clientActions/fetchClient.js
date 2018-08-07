import { FETCH_CLIENT, FETCH_CLIENT_COMPLETED } from '../../actionTypes'

export const fetchClient = (userId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_CLIENT })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const doc = await db
    .collection('users')
    .doc(userId)
    .collection('clients')
    .doc(id)
    .get()
  const item = { id: doc.id, ...doc.data() }

  dispatch({ type: FETCH_CLIENT_COMPLETED, payload: item })
}
