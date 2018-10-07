import { UPDATE_PLAYGROUND_COMPLIANCE_ISSUE } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'
import { updateComplianceIssueStateless } from '../../complianceIssueActions/'

export const updatePlaygroundComplianceIssue = ({
  userId,
  inspectionId,
  playgroundId,
  id,
  data,
}) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)

  const payload = await dispatch(updateComplianceIssueStateless(ref, id, data))

  dispatch({
    type: UPDATE_PLAYGROUND_COMPLIANCE_ISSUE,
    payload: { ...payload, playgroundId },
  })
}
