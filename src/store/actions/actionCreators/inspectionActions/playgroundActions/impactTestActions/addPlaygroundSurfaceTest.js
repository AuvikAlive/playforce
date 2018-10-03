import { ADD_PLAYGROUND_SURFACE_TEST } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'

export const addPlaygroundSurfaceTest = (
  userId,
  inspectionId,
  playgroundId,
  data
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)
    .collection('impactTests')
    .doc()

  await ref.set({ surface: data })

  dispatch({
    type: ADD_PLAYGROUND_SURFACE_TEST,
    payload: { surface: data, id: ref.id, playgroundId },
  })

  return ref.id
}
