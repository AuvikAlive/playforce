import { getSingleImagePath, deleteImage } from '../storageActions/'
import { DELETE_DROP_TEST } from '../../actionTypes'
import { getFirestore, getRootRef } from '../dbActions/'

export const deleteDropTest = (
  userId,
  inspectionId,
  impactTestId,
  id
) => async (dispatch, getState, getFirebase) => {
  const db = dispatch(getFirestore)
  const rootRef = dispatch(getRootRef)

  let storageImages = []

  return db.runTransaction(async transaction => {
    const inspectionRef = rootRef.collection('inspections').doc(inspectionId)

    const impactTestRef = inspectionRef
      .collection('impactTests')
      .doc(impactTestId)

    const ref = impactTestRef.collection('dropTests').doc(id)
    const storagePath = getSingleImagePath(ref)

    storageImages.push(storagePath)

    await transaction.delete(ref)

    dispatch({
      type: DELETE_DROP_TEST,
      payload: { id, impactTestId },
    })

    storageImages.forEach(item => {
      dispatch(deleteImage(item))
    })
  })
}
