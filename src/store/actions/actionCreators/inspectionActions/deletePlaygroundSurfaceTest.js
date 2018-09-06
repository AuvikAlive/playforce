import { deleteImage } from '../storageActions/'
import { DELETE_PLAYGROUND_SURFACE_TEST } from '../../actionTypes'
import { getBatch, getRootRef } from '../dbActions/'

export const deletePlaygroundSurfaceTest = (
  userId,
  inspectionId,
  playgroundId,
  impactTest
) => async (dispatch, getState, getFirebase) => {
  const batch = dispatch(getBatch)
  const { id, dropTests } = impactTest
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)
    .collection('impactTests')
    .doc(id)

  let storageImages = []

  batch.delete(ref)

  dropTests &&
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
