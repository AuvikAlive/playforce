import { ADD_PLAYGROUND_MAINTENANCE_ISSUE } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'
import { addMaintenanceIssueStateless } from '../../maintenanceIssueActions/'

export const addPlaygroundMaintenanceIssue = (
  userId,
  inspectionId,
  playgroundId,
  data
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const playgroundRef = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)

  const payload = await dispatch(
    addMaintenanceIssueStateless(playgroundRef, data)
  )

  dispatch({
    type: ADD_PLAYGROUND_MAINTENANCE_ISSUE,
    payload: { ...payload, playgroundId },
  })

  return payload.id
}
