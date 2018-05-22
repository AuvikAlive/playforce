import { deleteImage } from '../storageActions/'
import { DELETE_EQUIPMENT } from '../../actionTypes'

export const deleteEquipment = (userId, siteId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = db
    .collection('users')
    .doc(userId)
    .collection('sites')
    .doc(siteId)
    .collection('equipments')
    .doc(id)

  await dispatch(
    deleteImage(`${userId}/images/sites/${siteId}/equipments/${id}`)
  )

  await ref.delete()

  dispatch({
    type: DELETE_EQUIPMENT,
    payload: ref.id,
  })
}
