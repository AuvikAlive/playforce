import { UPDATE_PLAYGROUND_SURFACE_TEST } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'
import { updateSurfaceTestStateless } from '../../impactTestActions/'

export const updatePlaygroundSurfaceTest = ({
  userId,
  inspectionId,
  playgroundId,
  id,
  data,
}) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)

  const payload = await dispatch(updateSurfaceTestStateless(ref, id, data))

  dispatch({
    type: UPDATE_PLAYGROUND_SURFACE_TEST,
    payload: { ...payload, playgroundId },
  })
}
