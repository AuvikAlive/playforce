export const onComponentDidMount = async component => {
  const {
    inspectionLoaded,
    complianceIssuesLoaded,
    userId,
    inspectionId,
    fetchInspectionRealTime,
    fetchComplianceIssues,
  } = component.props

  const { addUnsubscriber } = component.context

  !inspectionLoaded &&
    addUnsubscriber(await fetchInspectionRealTime(userId, inspectionId))
  !complianceIssuesLoaded && fetchComplianceIssues(userId, inspectionId)
}
