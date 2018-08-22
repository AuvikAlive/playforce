import { saveImage } from '../storageActions/'
import { ADD_PLAYGROUND_CONDITION_RATING } from '../../actionTypes'

export const addPlaygroundConditionRating = (
  userId,
  inspectionId,
  playgroundId,
  data
) => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()
  const db = firebase.firestore()

  const ref = db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)
    .collection('conditionRatings')
    .doc()

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

  await ref.set(data)

  dispatch({
    type: ADD_PLAYGROUND_CONDITION_RATING,
    payload: { ...data, id: ref.id, image, playgroundId },
  })

  return ref.id
}
