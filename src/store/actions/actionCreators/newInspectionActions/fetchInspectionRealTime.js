import { FETCH_INSPECTION, FETCH_INSPECTION_COMPLETED } from '../../actionTypes'

export const fetchInspectionRealTime = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_INSPECTION })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)

  return ref.onSnapshot(doc => {
    const item = { id: doc.id, ...doc.data() }

    dispatch({ type: FETCH_INSPECTION_COMPLETED, payload: item })

    return item
  })
}
