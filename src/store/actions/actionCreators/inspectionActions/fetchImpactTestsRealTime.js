import {
  FETCH_IMPACT_TESTS,
  FETCH_IMPACT_TESTS_COMPLETED,
} from '../../actionTypes'

export const fetchImpactTestsRealTime = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_IMPACT_TESTS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)
    .collection('impactTests')

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc =>
      items.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    dispatch({ type: FETCH_IMPACT_TESTS_COMPLETED, payload: items })
  })
}
