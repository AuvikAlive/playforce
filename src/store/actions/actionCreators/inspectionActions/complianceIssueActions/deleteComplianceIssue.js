import { DELETE_COMPLIANCE_ISSUE } from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { deleteComplianceIssueStateless } from './deleteComplianceIssueStateless'

export const deleteComplianceIssue = (
  userId,
  inspectionId,
  id,
  images
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)
  const inspectionRef = rootRef.collection('inspections').doc(inspectionId)

  await dispatch(deleteComplianceIssueStateless(inspectionRef, id, images))

  dispatch({
    type: DELETE_COMPLIANCE_ISSUE,
    payload: id,
  })
}
