import { UPDATE__SURFACE_TEST } from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { updateSurfaceTestStateless } from './updateSurfaceTestStateless'

export const updateSurfaceTest = (userId, inspectionId, id, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspections').doc(inspectionId)
  const payload = await dispatch(updateSurfaceTestStateless(ref, id, data))

  dispatch({ type: UPDATE__SURFACE_TEST, payload })
}
