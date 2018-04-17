import { FETCH_EQUIPMENTS, FETCH_EQUIPMENTS_COMPLETED } from '../../actionTypes'

export const fetchEquipments = (userId, siteId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_EQUIPMENTS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const querySnapshot = await db
    .collection('users')
    .doc(userId)
    .collection('sites')
    .doc(siteId)
    .collection('equipments')
    .get()

  let items = []

  querySnapshot.forEach(doc =>
    items.push({
      ...doc.data(),
    })
  )

  dispatch({ type: FETCH_EQUIPMENTS_COMPLETED, payload: items })
}
