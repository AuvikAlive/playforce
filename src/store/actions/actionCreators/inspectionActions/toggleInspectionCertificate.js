import { TOGGLE_INSPECTION_CERTIFICATE } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const toggleInspectionCertificate = (
  userId,
  inspectionId,
  certificate
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspections').doc(inspectionId)

  dispatch({
    type: TOGGLE_INSPECTION_CERTIFICATE,
  })

  return ref.update({ certificate: !certificate })
}
