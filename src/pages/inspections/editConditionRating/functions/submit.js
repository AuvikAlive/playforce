export const submit = component => async updatedValue => {
  const { updateConditionRating, setFeedback } = component.props

  await updateConditionRating(updatedValue)
  setFeedback({ success: 'Rating updated!' })
}
