import { deleteImage } from '../storageActions/'

export const deleteImpactSurface = (userId, inspectionId, impactTest) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const batch = db.batch()
  const inspectionRef = db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)

  let storageImages = []

  const { id, dropTests } = impactTest

  const impactRef = inspectionRef.collection('impactTests').doc(id)

  batch.delete(impactRef)

  dropTests.forEach(({ dropNumber, image }) => {
    const dropRef = impactRef.collection('dropTests').doc(dropNumber)

    storageImages.push(
      `${userId}/images/${inspectionId}/impactTests/${id}/${dropNumber}`
    )

    batch.delete(dropRef)
  })

  await batch.commit()

  storageImages.forEach(item => {
    dispatch(deleteImage(item))
  })
}
