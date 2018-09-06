import { DELETE_PLAYGROUND_PLAYING_SURFACE } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const deletePlaygroundPlayingSurface = (
  userId,
  inspectionId,
  playgroundId,
  id
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)
    .collection('playingSurfaces')
    .doc(id)

  await ref.delete()

  dispatch({
    type: DELETE_PLAYGROUND_PLAYING_SURFACE,
    payload: { id, playgroundId },
  })
}
