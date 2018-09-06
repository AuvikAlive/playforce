import { saveImage } from '../storageActions/'
import { getRootRef } from '../dbActions/'

export const updateCover = (userId, inspectionId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspections').doc(inspectionId)
  const { image } = data

  if (image) {
    const downloadURL = await dispatch(
      saveImage(`${userId}/images/${inspectionId}/cover`, image)
    )

    data.image = downloadURL
  } else {
    delete data.image
  }

  return ref.update({ cover: data })
}
