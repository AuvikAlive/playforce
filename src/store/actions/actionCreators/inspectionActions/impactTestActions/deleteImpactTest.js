import { DELETE_IMPACT_TEST } from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { deleteImpactTestStateless } from './deleteImpactTestStateless'

export const deleteImpactTest = (userId, inspectionId, impactTests) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const inspectionRef = rootRef.collection('inspections').doc(inspectionId)

  await dispatch(deleteImpactTestStateless(inspectionRef, impactTests))

  dispatch({
    type: DELETE_IMPACT_TEST,
  })
}
