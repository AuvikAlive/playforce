export const toggleInspectionCertificate = component => () => {
  const {
    toggleInspectionCertificate,
    userId,
    inspectionId,
    inspection: { certificate },
  } = component.props

  toggleInspectionCertificate(userId, inspectionId, certificate)
}
