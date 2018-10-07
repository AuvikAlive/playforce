import { deleteImage } from '../../storageActions/'

export const deleteMaintenanceIssueStateless = (baseRef, id, images) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const maintenanceIssueRef = baseRef.collection('maintenanceIssues').doc(id)

  await maintenanceIssueRef.delete()

  images.forEach((item, index) => {
    dispatch(deleteImage(maintenanceIssueRef, index))
  })
}
