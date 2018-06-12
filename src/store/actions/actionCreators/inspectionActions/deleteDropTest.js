import { deleteImage } from '../storageActions/'
import { DELETE_DROP_TEST } from '../../actionTypes'

export const deleteDropTest = (
  userId,
  inspectionId,
  impactTestId,
  id
) => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()
  const db = firebase.firestore()

  let storageImages = []

  return db.runTransaction(async transaction => {
    const userRef = db.collection('users').doc(userId)
    const userDoc = await transaction.get(userRef)
    const dropCount = userDoc.data().dropCount

    transaction.update(userRef, { dropCount: dropCount - 1 })

    const ref = db
      .collection('users')
      .doc(userId)
      .collection('inspections')
      .doc(inspectionId)
      .collection('impactTests')
      .doc(impactTestId)
      .collection('dropTests')
      .doc(id)

    storageImages.push(
      `${userId}/images/${inspectionId}/impactTests/${impactTestId}/${id}`
    )

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
