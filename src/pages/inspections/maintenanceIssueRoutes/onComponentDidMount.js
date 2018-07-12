export const onComponentDidMount = async component => {
  const {
    inspectionLoaded,
    userId,
    inspectionId,
    fetchInspectionRealTime,
    maintenanceIssuesLoaded,
    fetchMaintenanceIssues,
  } = component.props

  const { addUnsubscriber } = component.context

  !inspectionLoaded &&
    addUnsubscriber(await fetchInspectionRealTime(userId, inspectionId))
  !maintenanceIssuesLoaded && fetchMaintenanceIssues(userId, inspectionId)
}
