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
    const impactTestRef = db
      .collection('users')
      .doc(userId)
      .collection('inspections')
      .doc(inspectionId)
      .collection('impactTests')
      .doc(impactTestId)

    // const impactTestDoc = await transaction.get(impactTestRef)

    // const dropCount = impactTestDoc.data().dropCount

    // transaction.update(impactTestRef, { dropCount: dropCount - 1 })

    const ref = impactTestRef.collection('dropTests').doc(id)

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
