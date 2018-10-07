import {
  FETCH_CONDITION_RATINGS,
  FETCH_CONDITION_RATINGS_COMPLETED,
} from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { fetchConditionRatingsStateless } from './fetchConditionRatingsStateless'

export const fetchConditionRatings = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_CONDITION_RATINGS })

  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspections').doc(inspectionId)
  const items = await dispatch(fetchConditionRatingsStateless(ref))

  dispatch({ type: FETCH_CONDITION_RATINGS_COMPLETED, payload: items })
}
