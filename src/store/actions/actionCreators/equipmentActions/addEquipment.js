import { getSingleImagePath, saveImage } from '../storageActions/'
import { ADD_EQUIPMENT } from '../../actionTypes'
import { getEquipmentRef } from './getEquipmentRef'

export const addEquipment = (userId, siteId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const ref = dispatch(getEquipmentRef(userId, siteId, data))
  const doc = await ref.get()

  if (doc.exists) {
    throw new Error('This equipment already exists!')
  } else {
    const { image } = data
    const storagePath = getSingleImagePath(ref)
    const downloadURL = await dispatch(saveImage(storagePath, image))

    data.image = downloadURL

    await ref.set(data)

    dispatch({
      type: ADD_EQUIPMENT,
      payload: { ...data, id: ref.id, image },
    })

    return ref.id
  }
}
