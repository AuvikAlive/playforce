import { UPDATE_PLAYGROUND_PLAYING_SURFACE } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'
import { updatePlayingSurfaceStateless } from '../../playingSurfaceActions/'

export const updatePlaygroundPlayingSurface = ({
  userId,
  inspectionId,
  playgroundId,
  id,
  data,
}) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const playgroundRef = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)

  await dispatch(updatePlayingSurfaceStateless(playgroundRef, id, data))

  dispatch({
    type: UPDATE_PLAYGROUND_PLAYING_SURFACE,
    payload: { ...data, id, playgroundId },
  })
}
