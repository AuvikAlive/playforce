import { getRootRef } from '../../dbActions/'
import { saveImpactGeneralInfoStateless } from './saveImpactGeneralInfoStateless'

export const saveImpactGeneralInfo = (userId, inspectionId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspections').doc(inspectionId)

  await dispatch(saveImpactGeneralInfoStateless(ref, data))
}
