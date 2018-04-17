import { FETCH_STANDARDS, FETCH_STANDARDS_COMPLETED } from '../../actionTypes'

export const fetchStandards = userId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_STANDARDS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const querySnapshot = await db
    .collection('users')
    .doc(userId)
    .collection('standards')
    .get()

  let items = []

  querySnapshot.forEach(doc =>
    items.push({
      id: doc.id,
      ...doc.data(),
    })
  )
  dispatch({ type: FETCH_STANDARDS_COMPLETED, payload: items })
}
