import { getFirestore, getRootRef } from '../dbActions/'
import { saveImage } from '../storageActions/'

export const addInspection = (userId, cover) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const db = dispatch(getFirestore)
  const rootRef = dispatch(getRootRef)

  // batch.update(rootRef, { inspectionCount: inspectionCount + 1 })

  // const ref = rootRef.collection('inspections').doc()
  // const { image, location } = cover

  // if (image) {
  //   const downloadURL = await dispatch(saveImage(ref, image))
  //   cover.image = downloadURL
  // } else {
  //   delete cover.image
  // }

  // batch.set(ref, {
  //   cover,
  //   site: cover.location.id,
  //   inspectionNumber: inspectionCount + 1,
  //   archived: false,
  //   name: location.name,
  // })

  // await batch.commit()

  // return ref.id

  return db.runTransaction(async transaction => {
    const rootDoc = await transaction.get(rootRef)
    const inspectionCount = rootDoc.data().inspectionCount || 0

    transaction.update(rootRef, { inspectionCount: inspectionCount + 1 })

    const ref = rootRef.collection('inspections').doc()

    const { image, location } = cover

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
      name: location.name,
    })

    return ref.id
  })
}
