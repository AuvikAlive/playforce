import { saveImage } from '../storageActions/'

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

  return ref.update(data)
}
