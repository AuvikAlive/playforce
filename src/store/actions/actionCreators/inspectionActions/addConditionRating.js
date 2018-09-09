import { getSingleImagePath, saveImage } from '../storageActions/'
import { ADD_CONDITION_RATING } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const addConditionRating = (userId, inspectionId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('conditionRatings')
    .doc()

  const { image } = data
  const storagePath = getSingleImagePath(ref)
  const downloadURL = await dispatch(saveImage(storagePath, image))

  data.image = downloadURL

  await ref.set(data)

  dispatch({
    type: ADD_CONDITION_RATING,
    payload: { ...data, id: ref.id, image },
  })

  return ref.id
}
