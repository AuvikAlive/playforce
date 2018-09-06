import { deleteImage } from '../storageActions/'

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

  const firebase = getFirebase()
  const db = firebase.firestore()
  const batch = db.batch()
  const inspectionRef = db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)

  let storageImages = inspection.cover.image
    ? [`${userId}/images/${inspectionId}/cover`]
    : []

  if (conditionRatingsAdded) {
    const { conditionRatings } = inspection

    conditionRatings.forEach(({ id }) => {
      batch.delete(inspectionRef.collection('conditionRatings').doc(id))

      storageImages.push(
        `${userId}/images/${inspectionId}/conditionRating-${id}`
      )
    })
  }

  if (complianceIssuesAdded) {
    const { complianceIssues } = inspection

    complianceIssues.forEach(({ id, images }) => {
      batch.delete(inspectionRef.collection('complianceIssues').doc(id))

      images.forEach((item, index) => {
        storageImages.push(
          `${userId}/images/${inspectionId}/complianceIssue-${id}-issue${index}`
        )
      })
    })
  }

  if (maintenanceIssuesAdded) {
    const { maintenanceIssues } = inspection

    maintenanceIssues.forEach(({ id, images }) => {
      batch.delete(inspectionRef.collection('maintenanceIssues').doc(id))

      images.forEach((item, index) => {
        storageImages.push(
          `${userId}/images/${inspectionId}/maintenanceIssue-${id}-issue${index}`
        )
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
          batch.delete(impactTestRef.collection('dropTests').doc(id))

          storageImages.push(
            `${userId}/images/${inspectionId}/impactTests/${impactTestId}/${id}`
          )
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
          batch.delete(playgroundRef.collection('conditionRatings').doc(id))

          storageImages.push(
            `${userId}/images/${inspectionId}/playgrounds/${playgroundId}/conditionRating-${id}`
          )
        })
      }

      if (complianceIssues.length > 0) {
        complianceIssues.forEach(({ id, images }) => {
          batch.delete(playgroundRef.collection('complianceIssues').doc(id))

          images.forEach((item, index) => {
            storageImages.push(
              `${userId}/images/${inspectionId}/playgrounds/${playgroundId}/complianceIssue-${id}-issue${index}`
            )
          })
        })
      }

      if (maintenanceIssues.length > 0) {
        maintenanceIssues.forEach(({ id, images }) => {
          batch.delete(playgroundRef.collection('maintenanceIssues').doc(id))

          images.forEach((item, index) => {
            storageImages.push(
              `${userId}/images/${inspectionId}/playgrounds/${playgroundId}/maintenanceIssue-${id}-issue${index}`
            )
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
              batch.delete(impactTestRef.collection('dropTests').doc(id))

              storageImages.push(
                `${userId}/images/${inspectionId}/playgrounds/${playgroundId}/impactTests/${impactTestId}/${id}`
              )
            })
          }
        })
      }
    })
  }

  // if (conditionRatingsAdded) {
  //   const querySnapshot = await inspectionRef
  //     .collection('conditionRatings')
  //     .get()

  //   querySnapshot.forEach(doc => {
  //     batch.delete(doc.ref)
  //   })
  // }

  // if (complianceIssuesAdded) {
  //   const querySnapshot = await inspectionRef
  //     .collection('complianceIssues')
  //     .get()

  //   querySnapshot.forEach(doc => {
  //     batch.delete(doc.ref)
  //   })
  // }

  // if (maintenanceIssuesAdded) {
  //   const querySnapshot = await inspectionRef
  //     .collection('maintenanceIssues')
  //     .get()

  //   querySnapshot.forEach(doc => {
  //     batch.delete(doc.ref)
  //   })
  // }

  batch.delete(inspectionRef)

  await batch.commit()

  storageImages.forEach(item => {
    dispatch(deleteImage(item))
  })
}
