import { saveImage } from '../storageActions/'
import { UPDATE_EQUIPMENT } from '../../actionTypes'

export const updateEquipment = (userId, siteId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const { assetId, image } = data
  const ref = db
    .collection('users')
    .doc(userId)
    .collection('sites')
    .doc(siteId)
    .collection('equipments')
    .doc(assetId)

  const downloadURL = await dispatch(
    saveImage(`${userId}/images/sites/${siteId}/equipments/${assetId}`, image)
  )

  data.image = downloadURL

  await ref.update(data)

  dispatch({
    type: UPDATE_EQUIPMENT,
    payload: { ...data, id: ref.id, image },
  })
}
