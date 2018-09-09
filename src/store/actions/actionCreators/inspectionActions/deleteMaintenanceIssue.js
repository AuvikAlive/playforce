import { getMultipleImagePath, deleteImage } from '../storageActions/'
import { DELETE_MAINTENANCE_ISSUE } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

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
    const storagePath = getMultipleImagePath(ref, index)
    dispatch(deleteImage(storagePath))
  })

  dispatch({
    type: DELETE_MAINTENANCE_ISSUE,
    payload: id,
  })
}
