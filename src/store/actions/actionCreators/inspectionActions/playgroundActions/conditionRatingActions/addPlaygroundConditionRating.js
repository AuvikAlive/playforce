import { ADD_PLAYGROUND_CONDITION_RATING } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'
import { addConditionRatingStateless } from '../../conditionRatingActions/'

export const addPlaygroundConditionRating = (
  userId,
  inspectionId,
  playgroundId,
  data
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)

  const payload = await dispatch(addConditionRatingStateless(ref, data))

  dispatch({
    type: ADD_PLAYGROUND_CONDITION_RATING,
    payload: { ...payload, playgroundId },
  })

  return payload.id
}
