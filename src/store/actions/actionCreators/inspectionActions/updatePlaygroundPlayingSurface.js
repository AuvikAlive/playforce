import { UPDATE_PLAYGROUND_PLAYING_SURFACE } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const updatePlaygroundPlayingSurface = ({
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
    .collection('playingSurfaces')
    .doc(id)

  await ref.update(data)

  dispatch({
    type: UPDATE_PLAYGROUND_PLAYING_SURFACE,
    payload: { ...data, id: ref.id, playgroundId },
  })
}
