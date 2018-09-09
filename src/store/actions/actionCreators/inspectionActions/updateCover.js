import { getRootRef } from '../dbActions/'
import { getSingleImagePath, saveImage } from '../storageActions/'

export const updateCover = (userId, inspectionId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspections').doc(inspectionId)
  const { image } = data

  if (image) {
    const storagePath = getSingleImagePath(ref)
    const downloadURL = await dispatch(saveImage(storagePath, image))

    data.image = downloadURL
  } else {
    delete data.image
  }

  return ref.update({ cover: data })
}
