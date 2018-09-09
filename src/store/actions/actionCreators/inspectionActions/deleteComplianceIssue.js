import { getMultipleImagePath, deleteImage } from '../storageActions/'
import { DELETE_COMPLIANCE_ISSUE } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const deleteComplianceIssue = (
  userId,
  inspectionId,
  id,
  images
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('complianceIssues')
    .doc(id)

  await ref.delete()

  images.forEach((item, index) => {
    const storagePath = getMultipleImagePath(ref, index)
    dispatch(deleteImage(storagePath))
  })

  dispatch({
    type: DELETE_COMPLIANCE_ISSUE,
    payload: id,
  })
}
