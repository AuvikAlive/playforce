import {
  FETCH_IMPACT_TESTS,
  FETCH_IMPACT_TESTS_COMPLETED,
} from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { fetchDropTests } from '../dropTestActions/'

export const fetchImpactTests = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_IMPACT_TESTS })

  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('impactTests')
    .orderBy('surface.location')

  const querySnapshot = await ref.get()

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
