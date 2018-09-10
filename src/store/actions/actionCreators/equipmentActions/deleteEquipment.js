import { getSingleImagePath, deleteImage } from '../storageActions/'
import { DELETE_EQUIPMENT } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const deleteEquipment = (userId, siteId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef
    .collection('sites')
    .doc(siteId)
    .collection('equipments')
    .doc(id)

  await ref.delete()

  const storagePath = getSingleImagePath(ref)

  dispatch(deleteImage(storagePath))

  dispatch({
    type: DELETE_EQUIPMENT,
    payload: ref.id,
  })
}
