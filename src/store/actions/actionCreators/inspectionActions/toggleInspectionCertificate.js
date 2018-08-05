import { TOGGLE_INSPECTION_CERTIFICATE } from '../../actionTypes'

export const toggleInspectionCertificate = (
  userId,
  inspectionId,
  certificate
) => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)

  dispatch({
    type: TOGGLE_INSPECTION_CERTIFICATE,
  })

  return ref.update({ certificate: !certificate })
}
