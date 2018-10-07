import { saveImage } from '../../storageActions/'

export const addConditionRatingStateless = (baseRef, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const ref = baseRef.collection('conditionRatings').doc()
  const { image } = data
  const downloadURL = await dispatch(saveImage(ref, image))

  data.image = downloadURL

  await ref.set(data)

  return { ...data, id: ref.id, image }
}
