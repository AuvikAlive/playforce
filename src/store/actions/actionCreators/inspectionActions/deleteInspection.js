import { deleteImage } from '../storageActions/'
import { getFirestore, getRootRef } from '../dbActions/'

export const deleteInspection = (inspection, userId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const {
    id: inspectionId,
    conditionRatingsAdded,
    complianceIssuesAdded,
    maintenanceIssuesAdded,
    playingSurfaces,
    impactTests,
    playgrounds,
  } = inspection

  const db = dispatch(getFirestore)
  const batch = db.batch()
  const rootRef = dispatch(getRootRef)
  const inspectionRef = rootRef.collection('inspections').doc(inspectionId)

  let storageImages = inspection.cover.image ? [{ ref: inspectionRef }] : []

  if (conditionRatingsAdded) {
    const { conditionRatings } = inspection

    conditionRatings.forEach(({ id }) => {
      const ref = inspectionRef.collection('conditionRatings').doc(id)

      batch.delete(ref)
      storageImages.push({ ref })
    })
  }

  if (complianceIssuesAdded) {
    const { complianceIssues } = inspection

    complianceIssues.forEach(({ id, images }) => {
      const ref = inspectionRef.collection('complianceIssues').doc(id)

      batch.delete(ref)

      images.forEach((item, index) => {
        storageImages.push({ ref, index })
      })
    })
  }

  if (maintenanceIssuesAdded) {
    const { maintenanceIssues } = inspection

    maintenanceIssues.forEach(({ id, images }) => {
      const ref = inspectionRef.collection('maintenanceIssues').doc(id)

      batch.delete(ref)

      images.forEach((item, index) => {
        storageImages.push({ ref, index })
      })
    })
  }

  if (playingSurfaces && playingSurfaces.length > 0) {
    playingSurfaces.forEach(({ id }) => {
      batch.delete(inspectionRef.collection('playingSurfaces').doc(id))
    })
  }

  if (impactTests && impactTests.length > 0) {
    impactTests.forEach(({ id: impactTestId, dropTests }) => {
      const impactTestRef = inspectionRef
        .collection('impactTests')
        .doc(impactTestId)

      batch.delete(impactTestRef)

      if (dropTests.length > 0) {
        dropTests.forEach(({ id, image }) => {
          const ref = impactTestRef.collection('dropTests').doc(id)

          batch.delete(ref)
          storageImages.push({ ref })
        })
      }
    })
  }

  if (playgrounds && playgrounds.length > 0) {
    playgrounds.forEach(playground => {
      const {
        id: playgroundId,
        conditionRatings,
        complianceIssues,
        maintenanceIssues,
        playingSurfaces,
        impactTests,
      } = playground

      const playgroundRef = inspectionRef
        .collection('playgrounds')
        .doc(playgroundId)

      batch.delete(playgroundRef)

      if (conditionRatings.length > 0) {
        conditionRatings.forEach(({ id }) => {
          const ref = playgroundRef.collection('conditionRatings').doc(id)

          batch.delete(ref)
          storageImages.push({ ref })
        })
      }

      if (complianceIssues.length > 0) {
        complianceIssues.forEach(({ id, images }) => {
          const ref = playgroundRef.collection('complianceIssues').doc(id)

          batch.delete(ref)

          images.forEach((item, index) => {
            storageImages.push({ ref, index })
          })
        })
      }

      if (maintenanceIssues.length > 0) {
        maintenanceIssues.forEach(({ id, images }) => {
          const ref = playgroundRef.collection('maintenanceIssues').doc(id)

          batch.delete(ref)

          images.forEach((item, index) => {
            storageImages.push({ ref, index })
          })
        })
      }

      if (playingSurfaces.length > 0) {
        playingSurfaces.forEach(({ id }) => {
          batch.delete(playgroundRef.collection('playingSurfaces').doc(id))
        })
      }

      if (impactTests.length > 0) {
        impactTests.forEach(({ id: impactTestId, dropTests }) => {
          const impactTestRef = playgroundRef
            .collection('impactTests')
            .doc(impactTestId)
          batch.delete(impactTestRef)

          if (dropTests.length > 0) {
            dropTests.forEach(({ id, image }) => {
              const ref = impactTestRef.collection('dropTests').doc(id)

              batch.delete(ref)
              storageImages.push({ ref })
            })
          }
        })
      }
    })
  }

  batch.delete(inspectionRef)

  await batch.commit()

  storageImages.forEach(({ ref, index }) => {
    dispatch(deleteImage(ref, index))
  })
}
