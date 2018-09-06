import { UPDATE_PLAYGROUND_SURFACE_TEST } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

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
    .collection('impactTests')
    .doc(id)

  await ref.update({ surface: data })

  dispatch({
    type: UPDATE_PLAYGROUND_SURFACE_TEST,
    payload: { surface: data, id, playgroundId },
  })
}
