import { UPDATE_PLAYGROUND_CONDITION_RATING } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'
import { updateConditionRatingStateless } from '../../conditionRatingActions/'

export const updatePlaygroundConditionRating = ({
  userId,
  inspectionId,
  playgroundId,
  id,
  data,
}) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)

  const payload = await dispatch(updateConditionRatingStateless(ref, id, data))

  dispatch({
    type: UPDATE_PLAYGROUND_CONDITION_RATING,
    payload: { ...payload, playgroundId },
  })
}
