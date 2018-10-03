import { getRootRef } from '../../../dbActions/'
import { saveImage } from '../../../storageActions/'
import { UPDATE_PLAYGROUND_CONDITION_RATING } from '../../../../actionTypes'

export const updatePlaygroundConditionRating = ({
  userId,
  inspectionId,
  playgroundId,
  id,
  data,
}) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)
    .collection('conditionRatings')
    .doc(id)

  const { image } = data
  const downloadURL = await dispatch(saveImage(ref, image))

  data.image = downloadURL

  await ref.update(data)

  dispatch({
    type: UPDATE_PLAYGROUND_CONDITION_RATING,
    payload: { ...data, id, playgroundId, image },
  })
}
