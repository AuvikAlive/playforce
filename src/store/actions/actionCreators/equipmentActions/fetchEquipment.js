import { FETCH_EQUIPMENT, FETCH_EQUIPMENT_COMPLETED } from '../../actionTypes'

export const fetchEquipment = (userId, siteId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_EQUIPMENT })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const doc = await db
    .collection('users')
    .doc(userId)
    .collection('sites')
    .doc(siteId)
    .collection('equipments')
    .doc(id)
    .get()
  const item = { id: doc.id, ...doc.data() }

  dispatch({ type: FETCH_EQUIPMENT_COMPLETED, payload: item })
}
