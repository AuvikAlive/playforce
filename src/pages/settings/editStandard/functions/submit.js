export const submit = component => async standard => {
  const { updateStandard, userId, standardId, setFeedback } = component.props

  await updateStandard(userId, standardId, standard)

  setFeedback({ success: 'Standard updated!' })
}
