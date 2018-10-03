import { DELETE_PLAYGROUND_SURFACE_TEST } from '../../../../actionTypes'
import { getBatch, getRootRef } from '../../../dbActions/'
import { deleteImage } from '../../../storageActions/'

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

      storageImages.push(dropRef)

      batch.delete(dropRef)
    })

  await batch.commit()

  dispatch({
    type: DELETE_PLAYGROUND_SURFACE_TEST,
    payload: { id, playgroundId },
  })

  storageImages.forEach(dropRef => {
    dispatch(deleteImage(dropRef))
  })
}
