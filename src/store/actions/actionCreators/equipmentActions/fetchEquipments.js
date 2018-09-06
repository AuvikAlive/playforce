import { FETCH_EQUIPMENTS, FETCH_EQUIPMENTS_COMPLETED } from '../../actionTypes'
import { fetchImageAsDataUrl } from '../../../../functions/fetchImageAsDataUrl'
import { getRootRef } from '../dbActions/'

export const fetchEquipments = (userId, siteId) => async (
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

  const querySnapshot = await ref.get()

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
