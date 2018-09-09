import {
  getSingleImagePath,
  getMultipleImagePath,
  deleteImage,
} from '../storageActions/'
import { DELETE_PLAYGROUND } from '../../actionTypes'
import { getFirestore, getRootRef } from '../dbActions/'

export const deletePlayground = (userId, inspectionId, playground) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const db = dispatch(getFirestore)
  const batch = db.batch()

  const {
    id: playgroundId,
    conditionRatings,
    complianceIssues,
    maintenanceIssues,
    playingSurfaces,
    impactTests,
  } = playground

  const rootRef = dispatch(getRootRef)

  const playgroundRef = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)

  let storageImages = []

  batch.delete(playgroundRef)

  if (conditionRatings.length > 0) {
    conditionRatings.forEach(({ id }) => {
      const ref = playgroundRef.collection('conditionRatings').doc(id)

      batch.delete(ref)
      storageImages.push(getSingleImagePath(ref))
    })
  }

  if (complianceIssues.length > 0) {
    complianceIssues.forEach(({ id, images }) => {
      const ref = playgroundRef.collection('complianceIssues').doc(id)

      batch.delete(ref)

      images.forEach((item, index) => {
        storageImages.push(getMultipleImagePath(ref, index))
      })
    })
  }

  if (maintenanceIssues.length > 0) {
    maintenanceIssues.forEach(({ id, images }) => {
      const ref = playgroundRef.collection('maintenanceIssues').doc(id)

      batch.delete(ref)

      images.forEach((item, index) => {
        storageImages.push(getMultipleImagePath(ref, index))
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
          storageImages.push(getSingleImagePath(ref))
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
