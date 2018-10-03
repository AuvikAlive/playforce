import { ADD_PLAYGROUND_PLAYING_SURFACE } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'

export const addPlaygroundPlayingSurface = (
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
    .collection('playingSurfaces')
    .doc()

  await ref.set(data)

  dispatch({
    type: ADD_PLAYGROUND_PLAYING_SURFACE,
    payload: { ...data, id: ref.id, playgroundId },
  })

  return ref.id
}
