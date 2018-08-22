import { deleteImage } from '../storageActions/'
import { DELETE_PLAYGROUND_CONDITION_RATING } from '../../actionTypes'

export const deletePlaygroundConditionRating = (
  userId,
  inspectionId,
  playgroundId,
  id
) => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()
  const db = firebase.firestore()

  const ref = db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)
    .collection('conditionRatings')
    .doc(id)

  await ref.delete()

  dispatch(
    deleteImage(
      `${userId}/images/${inspectionId}/playgrounds/${playgroundId}/conditionRating-${id}`
    )
  )

  dispatch({
    type: DELETE_PLAYGROUND_CONDITION_RATING,
    payload: { playgroundId, id },
  })
}
