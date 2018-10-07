import { UPDATE_COMPLIANCE_ISSUE } from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { updateComplianceIssueStateless } from './updateComplianceIssueStateless'

export const updateComplianceIssue = (userId, inspectionId, id, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const inspectionRef = rootRef.collection('inspections').doc(inspectionId)

  const payload = await dispatch(
    updateComplianceIssueStateless(inspectionRef, id, data)
  )

  dispatch({
    type: UPDATE_COMPLIANCE_ISSUE,
    payload,
  })
}
