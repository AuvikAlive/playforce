import { saveImage } from '../storageActions/'

export const updateConditionRating = (userId, inspectionId, id, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)
    .collection('conditionRatings')
    .doc(id)

  const { image } = data
  const downloadURL = await dispatch(
    saveImage(`${userId}/images/${inspectionId}/conditionRating-${id}`, image)
  )

  data.image = downloadURL

  return ref.update(data)
}
