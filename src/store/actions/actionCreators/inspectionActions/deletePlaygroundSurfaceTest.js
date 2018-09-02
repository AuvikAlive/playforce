import { deleteImage } from '../storageActions/'
import { DELETE_PLAYGROUND_SURFACE_TEST } from '../../actionTypes'

export const deletePlaygroundSurfaceTest = (
  userId,
  inspectionId,
  playgroundId,
  impactTest
) => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const batch = db.batch()
  const { id, dropTests } = impactTest
  const ref = db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)
    .collection('impactTests')
    .doc(id)

  let storageImages = []

  batch.delete(ref)

  dropTests.forEach(dropTest => {
    const dropRef = ref.collection('dropTests').doc(dropTest.id)

    storageImages.push(
      `${userId}/images/${inspectionId}/playgrounds/${playgroundId}/impactTests/${id}/${
        dropTest.id
      }`
    )

    batch.delete(dropRef)
  })

  await batch.commit()

  dispatch({
    type: DELETE_PLAYGROUND_SURFACE_TEST,
    payload: { id, playgroundId },
  })

  storageImages.forEach(item => {
    dispatch(deleteImage(item))
  })
}
