import { deleteImage } from '../storageActions/'
import { DELETE_COMPLIANCE_ISSUE } from '../../actionTypes'

export const deleteComplianceIssue = (
  userId,
  inspectionId,
  id,
  images
) => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()
  const db = firebase.firestore()

  const ref = db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)
    .collection('complianceIssues')
    .doc(id)

  await ref.delete()

  images.forEach((item, index) => {
    dispatch(
      deleteImage(
        `${userId}/images/${inspectionId}/complianceIssue-${id}-issue${index}`
      )
    )
  })

  dispatch({
    type: DELETE_COMPLIANCE_ISSUE,
    payload: id,
  })
}
