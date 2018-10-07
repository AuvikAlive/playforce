import { DELETE_PLAYGROUND_MAINTENANCE_ISSUE } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'
import { deleteMaintenanceIssueStateless } from '../../maintenanceIssueActions/'

export const deletePlaygroundMaintenanceIssue = ({
  userId,
  inspectionId,
  playgroundId,
  id,
  images,
}) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const playgroundRef = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)

  await dispatch(deleteMaintenanceIssueStateless(playgroundRef, id, images))

  dispatch({
    type: DELETE_PLAYGROUND_MAINTENANCE_ISSUE,
    payload: { id, playgroundId },
  })
}
