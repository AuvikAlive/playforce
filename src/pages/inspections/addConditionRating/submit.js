export const submit = component => async conditionRating => {
  const { addConditionRating, userId, inspectionId } = component.props

  const conditionRatingId = await addConditionRating(
    userId,
    inspectionId,
    conditionRating
  )

  return conditionRatingId
}
