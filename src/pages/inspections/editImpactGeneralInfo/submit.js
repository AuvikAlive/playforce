export const submit = component => async data => {
  const {
    saveImpactGeneralInfo,
    userId,
    inspectionId,
    setFeedback,
  } = component.props

  await saveImpactGeneralInfo(userId, inspectionId, data)
  setFeedback({ success: 'Info updated!' })
}
