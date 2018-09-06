import { getRootRef } from '../dbActions/'

export const saveImpactGeneralInfo = (userId, inspectionId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspections').doc(inspectionId)

  return ref.update({ impactGeneralInfo: data })
}
