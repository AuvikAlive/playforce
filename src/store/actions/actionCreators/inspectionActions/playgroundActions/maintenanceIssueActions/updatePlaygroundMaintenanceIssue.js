import { UPDATE_PLAYGROUND_MAINTENANCE_ISSUE } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'
import { updateMaintenanceIssueStateless } from '../../maintenanceIssueActions/'

export const updatePlaygroundMaintenanceIssue = ({
  userId,
  inspectionId,
  playgroundId,
  id,
  data,
}) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const playgroundRef = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)

  const payload = await dispatch(
    updateMaintenanceIssueStateless(playgroundRef, id, data)
  )

  dispatch({
    type: UPDATE_PLAYGROUND_MAINTENANCE_ISSUE,
    payload: { ...payload, playgroundId },
  })
}
