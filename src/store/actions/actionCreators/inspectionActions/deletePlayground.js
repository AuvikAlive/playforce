import { deleteImage } from '../storageActions/'
import { DELETE_PLAYGROUND } from '../../actionTypes'

export const deletePlayground = (userId, inspectionId, playground) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const batch = db.batch()

  const {
    id: playgroundId,
    conditionRatings,
    complianceIssues,
    maintenanceIssues,
    playingSurfaces,
    impactTests,
  } = playground

  const playgroundRef = db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)

  let storageImages = []

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

  await batch.commit()

  dispatch({
    type: DELETE_PLAYGROUND,
    payload: playgroundId,
  })

  storageImages.forEach(item => {
    dispatch(deleteImage(item))
  })
}
