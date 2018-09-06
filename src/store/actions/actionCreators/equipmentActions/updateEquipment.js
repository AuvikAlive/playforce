import { saveImage } from '../storageActions/'
import { UPDATE_EQUIPMENT } from '../../actionTypes'
import { getEquipmentRef } from './getEquipmentRef'

export const updateEquipment = (userId, siteId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const { equipment, image } = data
  const ref = dispatch(getEquipmentRef(userId, siteId, data))

  const downloadURL = await dispatch(
    saveImage(`${userId}/images/sites/${siteId}/equipments/${equipment}`, image)
  )

  data.image = downloadURL

  await ref.update(data)

  dispatch({
    type: UPDATE_EQUIPMENT,
    payload: { ...data, id: ref.id, image },
  })
}
