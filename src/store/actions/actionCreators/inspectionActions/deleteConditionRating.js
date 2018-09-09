import { getSingleImagePath, deleteImage } from '../storageActions/'
import { DELETE_CONDITION_RATING } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const deleteConditionRating = (userId, inspectionId, id) => async (
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

  await ref.delete()

  const storagePath = getSingleImagePath(ref)

  dispatch(deleteImage(storagePath))

  dispatch({
    type: DELETE_CONDITION_RATING,
    payload: id,
  })
}
