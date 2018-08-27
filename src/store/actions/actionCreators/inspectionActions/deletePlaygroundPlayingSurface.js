import { DELETE_PLAYGROUND_PLAYING_SURFACE } from '../../actionTypes'

export const deletePlaygroundPlayingSurface = (
  userId,
  inspectionId,
  playgroundId,
  id
) => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()
  const db = firebase.firestore()

  const ref = db
    .collection('users')
    .doc(userId)
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
