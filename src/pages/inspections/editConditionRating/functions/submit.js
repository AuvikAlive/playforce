export const submit = component => async updatedValue => {
  const {
    updateConditionRating,
    userId,
    inspectionId,
    conditionRatingId,
    setFeedback,
  } = component.props

  await updateConditionRating(
    userId,
    inspectionId,
    conditionRatingId,
    updatedValue
  )
  setFeedback({ success: 'Rating updated!' })
}
