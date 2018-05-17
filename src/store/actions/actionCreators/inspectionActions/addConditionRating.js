import { saveImage } from '../storageActions/'
import { ADD_CONDITION_RATING } from '../../actionTypes'

export const addConditionRating = (userId, inspectionId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()

  const ref = db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)
    .collection('conditionRatings')
    .doc()

  const { image } = data
  const downloadURL = await dispatch(
    saveImage(
      `${userId}/images/${inspectionId}/conditionRating-${ref.id}`,
      image
    )
  )

  data.image = downloadURL

  await ref.set(data)

  dispatch({
    type: ADD_CONDITION_RATING,
    payload: { ...data, id: ref.id, image },
  })

  return ref.id
}
