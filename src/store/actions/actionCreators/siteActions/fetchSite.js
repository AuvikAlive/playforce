import { FETCH_SITE, FETCH_SITE_COMPLETED } from '../../actionTypes'

export const fetchSite = (userId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_SITE })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const doc = await db
    .collection('users')
    .doc(userId)
    .collection('sites')
    .doc(id)
    .get()
  const item = { id: doc.id, ...doc.data() }

  dispatch({ type: FETCH_SITE_COMPLETED, payload: item })
}
