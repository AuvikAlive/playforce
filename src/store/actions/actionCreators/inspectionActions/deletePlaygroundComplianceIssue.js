import { deleteImage } from '../storageActions/'
import { DELETE_PLAYGROUND_COMPLIANCE_ISSUE } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const deletePlaygroundComplianceIssue = ({
  userId,
  inspectionId,
  playgroundId,
  id,
  images,
}) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
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
