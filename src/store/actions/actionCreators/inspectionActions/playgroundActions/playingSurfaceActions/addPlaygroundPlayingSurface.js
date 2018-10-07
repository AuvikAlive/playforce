import { ADD_PLAYGROUND_PLAYING_SURFACE } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'
import { addPlayingSurfaceStateless } from '../../playingSurfaceActions/'

export const addPlaygroundPlayingSurface = (
  userId,
  inspectionId,
  playgroundId,
  data
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const playgroundRef = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)

  const payload = await dispatch(
    addPlayingSurfaceStateless(playgroundRef, data)
  )

  dispatch({
    type: ADD_PLAYGROUND_PLAYING_SURFACE,
    payload: { ...payload, playgroundId },
  })

  return payload.id
}
