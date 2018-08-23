export const submit = component => async conditionRating => {
  const { addConditionRating } = component.props

  const conditionRatingId = await addConditionRating(conditionRating)

  return conditionRatingId
}
