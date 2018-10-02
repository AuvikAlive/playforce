import { deleteImage } from '../storageActions/'
import { getRootRef, getBatch } from '../dbActions/'

export const deleteInspections = (userId, list) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const batch = dispatch(getBatch)
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspections')

  let storageImages = []

  const Promises = list.map(async inspectionId => {
    const inspectionRef = ref.doc(inspectionId)
    const inspectionDoc = await inspectionRef.get()

    inspectionDoc.data().cover.image &&
      storageImages.push({ ref: inspectionRef })

    const conditionRatingsSnapshot = await inspectionRef
      .collection('conditionRatings')
      .get()

    if (!conditionRatingsSnapshot.empty) {
      conditionRatingsSnapshot.forEach(({ ref }) => {
        batch.delete(ref)
        storageImages.push({ ref })
      })
    }

    const complianceIssuesSnapshot = await inspectionRef
      .collection('complianceIssues')
      .get()

    if (!complianceIssuesSnapshot.empty) {
      complianceIssuesSnapshot.forEach(({ ref, data }) => {
        batch.delete(ref)

        const { images } = data()

        images.forEach((item, index) => {
          storageImages.push({ ref, index })
        })
      })
    }

    const maintenanceIssuesSnapshot = await inspectionRef
      .collection('maintenanceIssues')
      .get()

    if (!maintenanceIssuesSnapshot.empty) {
      maintenanceIssuesSnapshot.forEach(({ ref, data }) => {
        batch.delete(ref)

        const { images } = data()

        images.forEach((item, index) => {
          storageImages.push({ ref, index })
        })
      })
    }

    const playingSurfacesSnapshot = await inspectionRef
      .collection('playingSurfaces')
      .get()

    if (!playingSurfacesSnapshot.empty) {
      playingSurfacesSnapshot.forEach(({ ref }) => {
        batch.delete(ref)
      })
    }

    batch.delete(inspectionRef)

    return storageImages
  })

  await Promise.all(Promises)

  await batch.commit()

  storageImages.forEach(item => {
    dispatch(deleteImage(item))
  })
}
