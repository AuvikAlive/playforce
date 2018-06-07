import { deleteImage } from '../storageActions/'
import { DELETE_DROP_TEST } from '../../actionTypes'

export const deleteDropTest = (
  userId,
  inspectionId,
  impactTestId,
  dropNumber
) => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const batch = db.batch()
  const inspectionRef = db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)

  let storageImages = []

  const dropRef = inspectionRef
    .collection('impactTests')
    .doc(impactTestId)
    .collection('dropTests')
    .doc(dropNumber)

  storageImages.push(
    `${userId}/images/${inspectionId}/impactTests/${impactTestId}/${dropNumber}`
  )

  batch.delete(dropRef)

  await batch.commit()

  dispatch({
    type: DELETE_DROP_TEST,
    payload: { id: dropNumber, impactTestId },
  })

  storageImages.forEach(item => {
    dispatch(deleteImage(item))
  })
}
