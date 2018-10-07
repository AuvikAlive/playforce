import {
  FETCH_COMPLIANCE_ISSUES,
  FETCH_COMPLIANCE_ISSUES_COMPLETED,
} from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { fetchComplianceIssuesStateless } from './fetchComplianceIssuesStateless'

export const fetchComplianceIssues = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_COMPLIANCE_ISSUES })

  const rootRef = dispatch(getRootRef)
  const inspectionRef = rootRef.collection('inspections').doc(inspectionId)
  const items = await dispatch(fetchComplianceIssuesStateless(inspectionRef))

  dispatch({ type: FETCH_COMPLIANCE_ISSUES_COMPLETED, payload: items })
}
