import { FETCH_EQUIPMENT, FETCH_EQUIPMENT_COMPLETED } from '../../actionTypes'
import { fetchImageAsDataUrl } from '../../../../utilities/fetchImageAsDataUrl'

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

  let { image } = doc.data()

  image = await fetchImageAsDataUrl(image)

  const item = { id: doc.id, ...doc.data(), image }

  dispatch({ type: FETCH_EQUIPMENT_COMPLETED, payload: item })
}
