import { UPDATE_PLAYGROUND_SURFACE_TEST } from '../../actionTypes'

export const updatePlaygroundSurfaceTest = ({
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
    .collection('impactTests')
    .doc(id)

  await ref.update({ surface: data })

  dispatch({
    type: UPDATE_PLAYGROUND_SURFACE_TEST,
    payload: { surface: data, id, playgroundId },
  })
}
