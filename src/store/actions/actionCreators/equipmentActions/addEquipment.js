import { saveImage } from '../storageActions/'
import { ADD_EQUIPMENT } from '../../actionTypes'
import { getEquipmentRef } from './getEquipmentRef'

export const addEquipment = (userId, siteId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const { equipment, image } = data
  const ref = dispatch(getEquipmentRef(userId, siteId, data))
  const doc = await ref.get()

  if (doc.exists) {
    throw new Error('This equipment already exists!')
  } else {
    const downloadURL = await dispatch(
      saveImage(
        `${userId}/images/sites/${siteId}/equipments/${equipment}`,
        image
      )
    )

    data.image = downloadURL

    await ref.set(data)

    dispatch({
      type: ADD_EQUIPMENT,
      payload: { ...data, id: ref.id, image },
    })

    return ref.id
  }
}
