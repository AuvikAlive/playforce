import { deleteImage } from '../storageActions/'

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

  dispatch(
    deleteImage(`${userId}/images/${inspectionId}/conditionRating-${id}`)
  )

  return ref.delete()
}
