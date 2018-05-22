import { deleteImage } from '../storageActions/'
import { DELETE_MAINTENANCE_ISSUE } from '../../actionTypes'

export const deleteMaintenanceIssue = (
  userId,
  inspectionId,
  id,
  images
) => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()
  const db = firebase.firestore()

  const ref = db
    .collection('users')
    .doc(userId)
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
