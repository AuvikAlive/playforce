import { DELETE_PLAYGROUND_PLAYING_SURFACE } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'
import { deletePlayingSurfaceStateless } from '../../playingSurfaceActions/'

export const deletePlaygroundPlayingSurface = (
  userId,
  inspectionId,
  playgroundId,
  id
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const playgroundRef = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)

  await dispatch(deletePlayingSurfaceStateless(playgroundRef, id))

  dispatch({
    type: DELETE_PLAYGROUND_PLAYING_SURFACE,
    payload: { id, playgroundId },
  })
}
