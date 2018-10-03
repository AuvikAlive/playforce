import { DELETE_COMPLIANCE_ISSUE } from '../../../actionTypes'
import { deleteImage } from '../../storageActions/'
import { getRootRef } from '../../dbActions/'

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
    dispatch(deleteImage(ref, index))
  })

  dispatch({
    type: DELETE_COMPLIANCE_ISSUE,
    payload: id,
  })
}
