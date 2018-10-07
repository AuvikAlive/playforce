import { ADD_COMPLIANCE_ISSUE } from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { addComplianceIssueStateless } from './addComplianeIssueStateless'

export const addComplianceIssue = (userId, inspectionId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const inspectionRef = rootRef.collection('inspections').doc(inspectionId)

  const payload = await dispatch(
    addComplianceIssueStateless(inspectionRef, data)
  )

  dispatch({
    type: ADD_COMPLIANCE_ISSUE,
    payload,
  })

  return payload.id
}
