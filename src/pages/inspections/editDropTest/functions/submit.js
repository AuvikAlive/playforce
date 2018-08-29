export const submit = component => async data => {
  const {
    updateDropTest,
    userId,
    inspectionId,
    impactTestId,
    id,
    setFeedback,
  } = component.props

  await updateDropTest({
    userId,
    inspectionId,
    impactTestId,
    id,
    data,
  })

  setFeedback({ success: 'Drop test updated!' })
}
