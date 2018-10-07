import { DELETE_PLAYGROUND_COMPLIANCE_ISSUE } from '../../../../actionTypes'
import { deleteComplianceIssueStateless } from '../../complianceIssueActions/'
import { getRootRef } from '../../../dbActions/'

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

  await dispatch(deleteComplianceIssueStateless(ref, id, images))

  dispatch({
    type: DELETE_PLAYGROUND_COMPLIANCE_ISSUE,
    payload: { id, playgroundId },
  })
}
