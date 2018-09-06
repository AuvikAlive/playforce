import { saveImage } from '../storageActions/'
import { getFirestore, getRootRef } from '../dbActions/'

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

    const inspectionRef = rootRef.collection('inspections').doc()

    const {
      image,
      location: { name },
    } = cover

    if (image) {
      const downloadURL = await dispatch(
        saveImage(`${userId}/images/${inspectionRef.id}/cover`, image)
      )

      cover.image = downloadURL
    } else {
      delete cover.image
    }

    transaction.set(inspectionRef, {
      cover,
      site: cover.location.id,
      inspectionNumber: inspectionCount + 1,
      archived: false,
      name,
    })

    return inspectionRef.id
  })
}
