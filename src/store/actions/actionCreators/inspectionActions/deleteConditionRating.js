import { deleteImage } from '../storageActions/'
import { DELETE_CONDITION_RATING } from '../../actionTypes'

export const deleteConditionRating = (userId, inspectionId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()

  const ref = db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)
    .collection('conditionRatings')
    .doc(id)

  await ref.delete()

  dispatch(
    deleteImage(`${userId}/images/${inspectionId}/conditionRating-${id}`)
  )

  dispatch({
    type: DELETE_CONDITION_RATING,
    payload: id,
  })
}
