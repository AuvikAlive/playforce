import {
  FETCH_INSPECTION,
  FETCH_INSPECTION_COMPLETED,
} from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { fetchImpactTests } from '../impactTestActions/'

export const fetchStandaloneImpactTestRealTime = (
  userId,
  inspectionId
) => async (dispatch, getState, getFirebase) => {
  dispatch({ type: FETCH_INSPECTION })

  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspections').doc(inspectionId)

  await dispatch(fetchImpactTests(userId, inspectionId))

  return ref.onSnapshot(async doc => {
    if (doc.exists) {
      const item = { id: doc.id, ...doc.data() }

      dispatch({ type: FETCH_INSPECTION_COMPLETED, payload: item })

      return item
    }
  })
}
