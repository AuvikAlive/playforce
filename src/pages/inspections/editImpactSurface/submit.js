export const submit = component => async data => {
  const {
    updateImpactSurface,
    userId,
    id,
    inspectionId,
    setFeedback,
  } = component.props

  await updateImpactSurface(userId, inspectionId, id, data)

  setFeedback({ success: 'Details updated!' })
}
