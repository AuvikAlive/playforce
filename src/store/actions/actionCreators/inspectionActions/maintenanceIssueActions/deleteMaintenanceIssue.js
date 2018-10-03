import { DELETE_MAINTENANCE_ISSUE } from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { deleteImage } from '../../storageActions/'

export const deleteMaintenanceIssue = (
  userId,
  inspectionId,
  id,
  images
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('maintenanceIssues')
    .doc(id)

  await ref.delete()

  images.forEach((item, index) => {
    dispatch(deleteImage(ref, index))
  })

  dispatch({
    type: DELETE_MAINTENANCE_ISSUE,
    payload: id,
  })
}
