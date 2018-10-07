import { deleteImage } from '../../storageActions/'

export const deleteConditionRatingStateless = (baseRef, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const ref = baseRef.collection('conditionRatings').doc(id)

  await ref.delete()

  dispatch(deleteImage(ref))
}
