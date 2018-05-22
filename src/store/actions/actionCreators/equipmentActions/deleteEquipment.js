import { deleteImage } from '../storageActions/'

export const deleteEquipment = (userId, siteId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()

  await dispatch(
    deleteImage(`${userId}/images/sites/${siteId}/equipments/${id}`)
  )

  return db
    .collection('users')
    .doc(userId)
    .collection('sites')
    .doc(siteId)
    .collection('equipments')
    .doc(id)
    .delete()
}
