import { FETCH_SITES, FETCH_SITES_COMPLETED } from '../../actionTypes'

export const fetchSites = userId => async (dispatch, getState, getFirebase) => {
  dispatch({ type: FETCH_SITES })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const querySnapshot = await db
    .collection('users')
    .doc(userId)
    .collection('sites')
    .get()

  let items = []

  querySnapshot.forEach(doc =>
    items.push({
      id: doc.id,
      ...doc.data(),
    })
  )

  dispatch({ type: FETCH_SITES_COMPLETED, payload: items })
}
