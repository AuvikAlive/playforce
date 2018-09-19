import { deleteImage } from '../storageActions/'
import { DELETE_PLAYGROUND_DROP_TEST } from '../../actionTypes'
import { getFirestore, getRootRef } from '../dbActions/'

export const deletePlaygroundDropTest = ({
  userId,
  inspectionId,
  impactTestId,
  playgroundId,
  id,
}) => async (dispatch, getState, getFirebase) => {
  const db = dispatch(getFirestore)
  const rootRef = dispatch(getRootRef)

  let storageImages = []

  return db.runTransaction(async transaction => {
    const ref = rootRef
      .collection('inspections')
      .doc(inspectionId)
      .collection('playgrounds')
      .doc(playgroundId)
      .collection('impactTests')
      .doc(impactTestId)
      .collection('dropTests')
      .doc(id)

    storageImages.push(ref)

    await transaction.delete(ref)

    dispatch({
      type: DELETE_PLAYGROUND_DROP_TEST,
      payload: { id, impactTestId, playgroundId },
    })

    storageImages.forEach(ref => {
      dispatch(deleteImage(ref))
    })
  })
}
