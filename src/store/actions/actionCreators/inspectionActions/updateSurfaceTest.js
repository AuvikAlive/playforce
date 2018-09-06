import { UPDATE__SURFACE_TEST } from '../../actionTypes'

export const updateSurfaceTest = (userId, inspectionId, id, data) => async (
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
    .doc(id)

  await ref.update({ surface: data })

  dispatch({ type: UPDATE__SURFACE_TEST, payload: { surface: data, id } })
}
