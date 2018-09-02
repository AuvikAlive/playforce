import { ADD_PLAYGROUND_SURFACE_TEST } from '../../actionTypes'

export const addPlaygroundSurfaceTest = (
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
    .collection('impactTests')
    .doc()

  await ref.set({ surface: data })

  dispatch({
    type: ADD_PLAYGROUND_SURFACE_TEST,
    payload: { surface: data, id: ref.id, playgroundId },
  })

  return ref.id
}
