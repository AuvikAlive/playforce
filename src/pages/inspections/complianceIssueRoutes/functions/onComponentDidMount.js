export const onComponentDidMount = async component => {
  const {
    inspectionLoaded,
    complianceIssuesLoaded,
    playingSurfacesLoaded,
    userId,
    inspectionId,
    fetchInspectionRealTime,
    fetchPlayingSufacesRealTime,
    fetchComplianceIssues,
  } = component.props

  const { addUnsubscriber } = component.context

  !inspectionLoaded &&
    addUnsubscriber(await fetchInspectionRealTime(userId, inspectionId))

  !playingSurfacesLoaded &&
    addUnsubscriber(await fetchPlayingSufacesRealTime(userId, inspectionId))

  !complianceIssuesLoaded && fetchComplianceIssues(userId, inspectionId)
}
