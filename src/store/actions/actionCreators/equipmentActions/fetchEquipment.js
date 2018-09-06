import { FETCH_EQUIPMENT, FETCH_EQUIPMENT_COMPLETED } from '../../actionTypes'
import { fetchImageAsDataUrl } from '../../../../functions/fetchImageAsDataUrl'
import { getRootRef } from '../dbActions/'

export const fetchEquipment = (userId, siteId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_EQUIPMENT })

  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('sites')
    .doc(siteId)
    .collection('equipments')
    .doc(id)

  const doc = await ref.get()

  let { image } = doc.data()

  image = await fetchImageAsDataUrl(image)

  const item = { id: doc.id, ...doc.data(), image }

  dispatch({ type: FETCH_EQUIPMENT_COMPLETED, payload: item })
}
