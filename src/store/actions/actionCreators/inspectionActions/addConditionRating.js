import { saveImage } from '../saveImage'

export const addConditionRating = (userId, inspectionId, data) => async (
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
    .doc()

  const { image } = data
  const downloadURL = await dispatch(
    saveImage(
      `${userId}/images/${inspectionId}/conditionRatings/${ref.id}`,
      image
    )
  )

  data.image = downloadURL

  await ref.set(data)

  return ref.id
}
