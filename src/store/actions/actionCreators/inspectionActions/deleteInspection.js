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
