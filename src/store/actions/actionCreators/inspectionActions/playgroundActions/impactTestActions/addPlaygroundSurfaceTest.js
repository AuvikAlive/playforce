import { ADD_PLAYGROUND_SURFACE_TEST } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'
import { addSurfaceTestStateless } from '../../impactTestActions/'

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

  const payload = await dispatch(addSurfaceTestStateless(ref, data))

  dispatch({
    type: ADD_PLAYGROUND_SURFACE_TEST,
    payload: { ...payload, playgroundId },
  })

  return payload.id
}
