import { UPDATE_MAINTENANCE_ISSUE } from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { updateMaintenanceIssueStateless } from './updateMaintenanceIssueStateless'

export const updateMaintenanceIssue = (
  userId,
  inspectionId,
  id,
  data
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)
  const inspectionRef = rootRef.collection('inspections').doc(inspectionId)

  const payload = await dispatch(
    updateMaintenanceIssueStateless(inspectionRef, id, data)
  )

  dispatch({
    type: UPDATE_MAINTENANCE_ISSUE,
    payload,
  })
}
