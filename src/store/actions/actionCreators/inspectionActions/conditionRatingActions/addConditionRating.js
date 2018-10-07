import { ADD_CONDITION_RATING } from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { addConditionRatingStateless } from './addConditionRatingStateless'

export const addConditionRating = (userId, inspectionId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspections').doc(inspectionId)
  const payload = await dispatch(addConditionRatingStateless(ref, data))

  dispatch({
    type: ADD_CONDITION_RATING,
    payload,
  })

  return payload.id
}
