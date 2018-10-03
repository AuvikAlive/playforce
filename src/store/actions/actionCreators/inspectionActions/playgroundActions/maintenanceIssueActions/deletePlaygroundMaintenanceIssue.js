import { DELETE_PLAYGROUND_MAINTENANCE_ISSUE } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'
import { deleteImage } from '../../../storageActions/'

export const deletePlaygroundMaintenanceIssue = ({
  userId,
  inspectionId,
  playgroundId,
  id,
  images,
}) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)
    .collection('maintenanceIssues')
    .doc(id)

  await ref.delete()

  images.forEach((item, index) => {
    dispatch(deleteImage(ref, index))
  })

  dispatch({
    type: DELETE_PLAYGROUND_MAINTENANCE_ISSUE,
    payload: { id, playgroundId },
  })
}
