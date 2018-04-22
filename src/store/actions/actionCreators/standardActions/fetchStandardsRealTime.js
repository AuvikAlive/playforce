import { FETCH_STANDARDS, FETCH_STANDARDS_COMPLETED } from '../../actionTypes'

export const fetchStandardsRealTime = userId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_STANDARDS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
    .collection('standards')

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc =>
      items.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    dispatch({ type: FETCH_STANDARDS_COMPLETED, payload: items })
  })
}
