import { DELETE_MAINTENANCE_ISSUE } from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { deleteMaintenanceIssueStateless } from './deleteMaintenanceIssueStateless'

export const deleteMaintenanceIssue = (
  userId,
  inspectionId,
  id,
  images
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)
  const inspectionRef = rootRef.collection('inspections').doc(inspectionId)

  await dispatch(deleteMaintenanceIssueStateless(inspectionRef, id, images))

  dispatch({
    type: DELETE_MAINTENANCE_ISSUE,
    payload: id,
  })
}
