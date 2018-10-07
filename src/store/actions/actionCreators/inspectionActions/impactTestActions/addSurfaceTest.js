import { ADD_SURFACE_TEST } from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { addSurfaceTestStateless } from './addSurfaceTestStateless'

export const addSurfaceTest = (userId, inspectionId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspections').doc(inspectionId)
  const payload = await dispatch(addSurfaceTestStateless(ref, data))

  dispatch({ type: ADD_SURFACE_TEST, payload })

  return payload.id
}
