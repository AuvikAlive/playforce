import { DELETE_SURFACE_TEST } from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { deleteSurfaceTestStateless } from './deleteSurfaceTestStateless'

export const deleteSurfaceTest = (userId, inspectionId, impactTest) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspections').doc(inspectionId)

  await dispatch(deleteSurfaceTestStateless(ref, impactTest))

  dispatch({ type: DELETE_SURFACE_TEST, payload: impactTest.id })
}
