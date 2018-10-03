import { ADD_PLAYGROUND_CONDITION_RATING } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'
import { saveImage } from '../../../storageActions/'

export const addPlaygroundConditionRating = (
  userId,
  inspectionId,
  playgroundId,
  data
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)
    .collection('conditionRatings')
    .doc()

  const { image } = data
  const downloadURL = await dispatch(saveImage(ref, image))

  data.image = downloadURL

  await ref.set(data)

  dispatch({
    type: ADD_PLAYGROUND_CONDITION_RATING,
    payload: { ...data, id: ref.id, playgroundId, image },
  })

  return ref.id
}
