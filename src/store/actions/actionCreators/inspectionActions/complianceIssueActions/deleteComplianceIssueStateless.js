import { deleteImage } from '../../storageActions/'

export const deleteComplianceIssueStateless = (baseRef, id, images) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const complianceIssueRef = baseRef.collection('complianceIssues').doc(id)

  await complianceIssueRef.delete()

  images.forEach((item, index) => {
    dispatch(deleteImage(complianceIssueRef, index))
  })
}
