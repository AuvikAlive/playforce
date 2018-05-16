import { saveImage } from '../storageActions/'

export const updateCover = (userId, inspectionId, data) => async (
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

  const { image } = data
  const downloadURL = await dispatch(
    saveImage(`${userId}/images/${inspectionId}/cover`, image)
  )

  data.image = downloadURL

  return ref.update({ cover: data })
}
