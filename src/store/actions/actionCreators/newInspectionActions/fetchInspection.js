import { FETCH_INSPECTION, FETCH_INSPECTION_COMPLETED } from '../../actionTypes'

export const fetchInspection = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_INSPECTION })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const doc = await db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)
    .get()

  const item = { id: doc.id, ...doc.data() }

  dispatch({ type: FETCH_INSPECTION_COMPLETED, payload: item })

  return item
}
