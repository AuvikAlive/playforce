import { ADD_PLAYGROUND_COMPLIANCE_ISSUE } from '../../../../actionTypes'
import { addComplianceIssueStateless } from '../../complianceIssueActions/'
import { getRootRef } from '../../../dbActions/'

export const addPlaygroundComplianceIssue = (
  userId,
  inspectionId,
  playgroundId,
  data
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)

  const payload = await dispatch(addComplianceIssueStateless(ref, data))

  dispatch({
    type: ADD_PLAYGROUND_COMPLIANCE_ISSUE,
    payload: { ...payload, playgroundId },
  })

  return payload.id
}
