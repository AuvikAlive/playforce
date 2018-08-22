import { deleteImage } from '../storageActions/'
import { DELETE_PLAYGROUND_COMPLIANCE_ISSUE } from '../../actionTypes'

export const deletePlaygroundComplianceIssue = ({
  userId,
  inspectionId,
  playgroundId,
  id,
  images,
}) => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()
  const db = firebase.firestore()

  const ref = db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)
    .collection('complianceIssues')
    .doc(id)

  await ref.delete()

  images.forEach((item, index) => {
    dispatch(
      deleteImage(
        `${userId}/images/${inspectionId}/playgrounds/${playgroundId}/complianceIssue-${id}-issue${index}`
      )
    )
  })

  dispatch({
    type: DELETE_PLAYGROUND_COMPLIANCE_ISSUE,
    payload: { id, playgroundId },
  })
}
