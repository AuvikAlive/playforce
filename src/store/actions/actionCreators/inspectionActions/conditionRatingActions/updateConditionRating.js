import { UPDATE_CONDITION_RATING } from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { updateConditionRatingStateless } from './updateConditionRatingStateless'

export const updateConditionRating = (userId, inspectionId, id, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspections').doc(inspectionId)
  const payload = await dispatch(updateConditionRatingStateless(ref, id, data))

  dispatch({
    type: UPDATE_CONDITION_RATING,
    payload,
  })
}
