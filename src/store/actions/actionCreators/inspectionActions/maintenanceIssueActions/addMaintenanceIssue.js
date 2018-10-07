import { ADD_MAINTENANCE_ISSUE } from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { addMaintenanceIssueStateless } from './addMaintenanceIssueStateless'

export const addMaintenanceIssue = (userId, inspectionId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const inspectionRef = rootRef.collection('inspections').doc(inspectionId)

  const payload = await dispatch(
    addMaintenanceIssueStateless(inspectionRef, data)
  )

  dispatch({
    type: ADD_MAINTENANCE_ISSUE,
    payload,
  })

  return payload.id
}
