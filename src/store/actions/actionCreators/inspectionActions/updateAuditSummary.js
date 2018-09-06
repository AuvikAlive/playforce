import { getRootRef } from '../dbActions/'

export const updateAuditSummary = (userId, inspectionId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspections').doc(inspectionId)

  return ref.update({ auditSummary: data })
}
