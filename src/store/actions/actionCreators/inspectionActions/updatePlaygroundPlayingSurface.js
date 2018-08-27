import { UPDATE_PLAYGROUND_PLAYING_SURFACE } from '../../actionTypes'

export const updatePlaygroundPlayingSurface = ({
  userId,
  inspectionId,
  playgroundId,
  id,
  data,
}) => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
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
