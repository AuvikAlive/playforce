import { showActionGoBack } from '../../../../functions/'

const message = 'Rating deleted!'

export const deleteConditionRating = component => async () => {
  const {
    deleteConditionRating,
    userId,
    inspectionId,
    conditionRatingId,
  } = component.props

  await deleteConditionRating(userId, inspectionId, conditionRatingId)
  showActionGoBack(component, message)
}
