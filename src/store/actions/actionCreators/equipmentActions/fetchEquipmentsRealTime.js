import { FETCH_EQUIPMENTS, FETCH_EQUIPMENTS_COMPLETED } from '../../actionTypes'

export const fetchEquipmentsRealTime = (userId, siteId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_EQUIPMENTS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
    .collection('sites')
    .doc(siteId)
    .collection('equipments')

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc =>
      items.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    dispatch({ type: FETCH_EQUIPMENTS_COMPLETED, payload: { items, siteId } })
  })
}
