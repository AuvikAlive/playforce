import { UPDATE__SURFACE_TEST } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const updateSurfaceTest = (userId, inspectionId, id, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('impactTests')
    .doc(id)

  await ref.update({ surface: data })

  dispatch({ type: UPDATE__SURFACE_TEST, payload: { surface: data, id } })
}
