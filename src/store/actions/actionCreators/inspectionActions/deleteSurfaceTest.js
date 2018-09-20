import { deleteImage } from '../storageActions/'
import { DELETE_SURFACE_TEST } from '../../actionTypes'
import { getBatch, getRootRef } from '../dbActions/'

export const deleteSurfaceTest = (userId, inspectionId, impactTest) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const batch = dispatch(getBatch)
  const rootRef = dispatch(getRootRef)
  const inspectionRef = rootRef.collection('inspections').doc(inspectionId)

  let storageImages = []

  const { id, dropTests } = impactTest
  const impactRef = inspectionRef.collection('impactTests').doc(id)

  batch.delete(impactRef)

  dropTests &&
    dropTests.forEach(dropTest => {
      const dropRef = impactRef.collection('dropTests').doc(dropTest.id)

      storageImages.push(dropRef)

      batch.delete(dropRef)
    })

  await batch.commit()

  dispatch({ type: DELETE_SURFACE_TEST, payload: id })

  storageImages.forEach(dropRef => {
    dispatch(deleteImage(dropRef))
  })
}
