import {
  FETCH_MAINTENANCE_ISSUES,
  FETCH_MAINTENANCE_ISSUES_COMPLETED,
} from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { fetchMaintenanceIssuesStateless } from './fetchMaintenanceIssuesStateless'

export const fetchMaintenanceIssues = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_MAINTENANCE_ISSUES })

  const rootRef = dispatch(getRootRef)
  const inspectionRef = rootRef.collection('inspections').doc(inspectionId)
  const items = await dispatch(fetchMaintenanceIssuesStateless(inspectionRef))

  dispatch({ type: FETCH_MAINTENANCE_ISSUES_COMPLETED, payload: items })
}
