import { ADD_PLAYGROUND_PLAYING_SURFACE } from '../../actionTypes'

export const addPlaygroundPlayingSurface = (
  userId,
  inspectionId,
  playgroundId,
  data
) => async (dispatch, getState, getFirebase) => {
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
    .doc()

  await ref.set(data)

  dispatch({
    type: ADD_PLAYGROUND_PLAYING_SURFACE,
    payload: { ...data, id: ref.id, playgroundId },
  })

  return ref.id
}
