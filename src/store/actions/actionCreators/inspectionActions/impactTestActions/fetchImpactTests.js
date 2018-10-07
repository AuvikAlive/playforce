import {
  FETCH_IMPACT_TESTS,
  FETCH_IMPACT_TESTS_COMPLETED,
} from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { fetchImpactTestsStateless } from './fetchImpactTestsStateless'

export const fetchImpactTests = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_IMPACT_TESTS })

  const rootRef = dispatch(getRootRef)
  const inspectionRef = rootRef.collection('inspections').doc(inspectionId)
  const items = await dispatch(fetchImpactTestsStateless(inspectionRef))

  dispatch({ type: FETCH_IMPACT_TESTS_COMPLETED, payload: items })
}
