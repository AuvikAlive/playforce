import { deleteImage } from '../storageActions/'
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
    dispatch(
      deleteImage(
        `${userId}/images/${inspectionId}/maintenanceIssue-${id}-issue${index}`
      )
    )
  })

  dispatch({
    type: DELETE_MAINTENANCE_ISSUE,
    payload: id,
  })
}
