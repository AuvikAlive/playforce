import { getRootRef } from '../dbActions/'

export const saveCustomCertificateText = (userId, inspectionId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspections').doc(inspectionId)
  const { text, customInspectionNumber } = data

  return ref.update({ customCertificateText: text, customInspectionNumber })
}
