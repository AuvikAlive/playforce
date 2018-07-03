export const submit = component => async data => {
  const { saveImpactGeneralInfo, userId, inspectionId } = component.props

  await saveImpactGeneralInfo(userId, inspectionId, data)
}
