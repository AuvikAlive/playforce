import { deleteImage } from '../storageActions/'
import { DELETE_PLAYGROUND_DROP_TEST } from '../../actionTypes'

export const deletePlaygroundDropTest = ({
  userId,
  inspectionId,
  impactTestId,
  playgroundId,
  id,
}) => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()
  const db = firebase.firestore()

  let storageImages = []

  return db.runTransaction(async transaction => {
    const ref = db
      .collection('users')
      .doc(userId)
      .collection('inspections')
      .doc(inspectionId)
      .collection('playgrounds')
      .doc(playgroundId)
      .collection('impactTests')
      .doc(impactTestId)
      .collection('dropTests')
      .doc(id)

    storageImages.push(
      `${userId}/images/${inspectionId}/playgrounds/${playgroundId}/impactTests/${impactTestId}/${id}`
    )

    await transaction.delete(ref)

    dispatch({
      type: DELETE_PLAYGROUND_DROP_TEST,
      payload: { id, impactTestId, playgroundId },
    })

    storageImages.forEach(item => {
      dispatch(deleteImage(item))
    })
  })
}
