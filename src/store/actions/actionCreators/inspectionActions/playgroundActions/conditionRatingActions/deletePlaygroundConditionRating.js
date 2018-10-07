import { DELETE_PLAYGROUND_CONDITION_RATING } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'
import { deleteConditionRatingStateless } from '../../conditionRatingActions/'

export const deletePlaygroundConditionRating = (
  userId,
  inspectionId,
  playgroundId,
  id
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)

  await dispatch(deleteConditionRatingStateless(ref, id))

  dispatch({
    type: DELETE_PLAYGROUND_CONDITION_RATING,
    payload: { playgroundId, id },
  })
}
