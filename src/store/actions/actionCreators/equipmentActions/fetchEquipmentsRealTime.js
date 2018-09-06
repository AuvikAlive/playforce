import { FETCH_EQUIPMENTS, FETCH_EQUIPMENTS_COMPLETED } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const fetchEquipmentsRealTime = (userId, siteId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_EQUIPMENTS })

  const rootRef = dispatch(getRootRef)
  const ref = rootRef
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
