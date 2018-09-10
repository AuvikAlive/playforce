import { getSingleImagePath, saveImage } from '../storageActions/'
import { UPDATE_EQUIPMENT } from '../../actionTypes'
import { getEquipmentRef } from './getEquipmentRef'

export const updateEquipment = (userId, siteId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const ref = dispatch(getEquipmentRef(userId, siteId, data))
  const { image } = data
  const storagePath = getSingleImagePath(ref)
  const downloadURL = await dispatch(saveImage(storagePath, image))

  data.image = downloadURL

  await ref.update(data)

  dispatch({
    type: UPDATE_EQUIPMENT,
    payload: { ...data, id: ref.id, image },
  })
}
