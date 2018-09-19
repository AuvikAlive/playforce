import { getFirestore, getRootRef } from '../dbActions/'
import { saveImage } from '../storageActions/'

export const addInspection = (userId, cover) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const db = dispatch(getFirestore)
  const rootRef = dispatch(getRootRef)

  return db.runTransaction(async transaction => {
    const userDoc = await transaction.get(rootRef)
    const inspectionCount = userDoc.data().inspectionCount || 0

    transaction.update(rootRef, { inspectionCount: inspectionCount + 1 })

    const ref = rootRef.collection('inspections').doc()

    const {
      image,
      location: { name },
    } = cover

    if (image) {
      const downloadURL = await dispatch(saveImage(ref, image))
      cover.image = downloadURL
    } else {
      delete cover.image
    }

    transaction.set(ref, {
      cover,
      site: cover.location.id,
      inspectionNumber: inspectionCount + 1,
      archived: false,
      name,
    })

    return ref.id
  })
}
