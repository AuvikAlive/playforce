import { ADD_SURFACE_TEST } from '../../actionTypes'

export const addSurfaceTest = (userId, inspectionId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)
    .collection('impactTests')
    .doc()

  await ref.set({ surface: data })

  dispatch({ type: ADD_SURFACE_TEST, payload: { surface: data, id: ref.id } })

  return ref.id
}
