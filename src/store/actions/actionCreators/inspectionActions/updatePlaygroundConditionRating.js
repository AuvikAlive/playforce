import { saveImage } from '../storageActions/'
import { UPDATE_PLAYGROUND_CONDITION_RATING } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

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

  const downloadURL = await dispatch(
    saveImage(
      `${userId}/images/${inspectionId}/playgrounds/${playgroundId}/conditionRating-${
        ref.id
      }`,
      image
    )
  )

  data.image = downloadURL

  await ref.update(data)

  dispatch({
    type: UPDATE_PLAYGROUND_CONDITION_RATING,
    payload: { ...data, id, playgroundId, image },
  })
}
