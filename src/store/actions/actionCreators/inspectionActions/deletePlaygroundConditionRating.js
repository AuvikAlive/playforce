import { deleteImage } from '../storageActions/'
import { DELETE_PLAYGROUND_CONDITION_RATING } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

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
    .collection('conditionRatings')
    .doc(id)

  await ref.delete()

  dispatch(deleteImage(ref))

  dispatch({
    type: DELETE_PLAYGROUND_CONDITION_RATING,
    payload: { playgroundId, id },
  })
}
