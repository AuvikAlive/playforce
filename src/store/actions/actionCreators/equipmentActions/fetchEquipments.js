import { FETCH_EQUIPMENTS, FETCH_EQUIPMENTS_COMPLETED } from '../../actionTypes'
import { fetchImageAsDataUrl } from '../../../../utilities/fetchImageAsDataUrl'

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

  let items = querySnapshot.docs.map(async doc => {
    let { image } = doc.data()

    image = await fetchImageAsDataUrl(image)

    return {
      ...doc.data(),
      image,
    }
  })

  items = await Promise.all(items)

  dispatch({ type: FETCH_EQUIPMENTS_COMPLETED, payload: { items, siteId } })
}
