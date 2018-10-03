import { UPDATE_CONDITION_RATING } from '../../../actionTypes'
import { saveImage } from '../../storageActions/'
import { getRootRef } from '../../dbActions/'

export const updateConditionRating = (userId, inspectionId, id, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('conditionRatings')
    .doc(id)

  const { image } = data
  const downloadURL = await dispatch(saveImage(ref, image))

  data.image = downloadURL

  await ref.update(data)

  dispatch({
    type: UPDATE_CONDITION_RATING,
    payload: { ...data, id, image },
  })
}
