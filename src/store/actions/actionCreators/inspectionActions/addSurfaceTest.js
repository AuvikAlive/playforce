import { ADD_SURFACE_TEST } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const addSurfaceTest = (userId, inspectionId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('impactTests')
    .doc()

  await ref.set({ surface: data })

  dispatch({ type: ADD_SURFACE_TEST, payload: { surface: data, id: ref.id } })

  return ref.id
}
