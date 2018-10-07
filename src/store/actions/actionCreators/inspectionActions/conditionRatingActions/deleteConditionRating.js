import { DELETE_CONDITION_RATING } from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { deleteConditionRatingStateless } from './deleteConditionRatingStateless'

export const deleteConditionRating = (userId, inspectionId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspections').doc(inspectionId)

  await dispatch(deleteConditionRatingStateless(ref, id))

  dispatch({
    type: DELETE_CONDITION_RATING,
    payload: id,
  })
}
