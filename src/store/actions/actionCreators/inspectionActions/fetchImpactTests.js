import {
  FETCH_IMPACT_TESTS,
  FETCH_IMPACT_TESTS_COMPLETED,
} from '../../actionTypes'
import { fetchDropTests } from './fetchDropTests'

export const fetchImpactTests = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_IMPACT_TESTS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const querySnapshot = await db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)
    .collection('impactTests')
    .orderBy('surface.location')
    .get()

  let items = querySnapshot.docs.map(async doc => {
    const dropTests = await fetchDropTests(doc.ref)

    return {
      id: doc.id,
      ...doc.data(),
      dropTests,
    }
  })

  items = await Promise.all(items)

  dispatch({ type: FETCH_IMPACT_TESTS_COMPLETED, payload: items })
}
