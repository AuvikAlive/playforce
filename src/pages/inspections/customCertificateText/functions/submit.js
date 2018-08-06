export const submit = component => data => {
  const { saveCustomCertificateText, userId, inspectionId } = component.props

  return saveCustomCertificateText(userId, inspectionId, data)
}
