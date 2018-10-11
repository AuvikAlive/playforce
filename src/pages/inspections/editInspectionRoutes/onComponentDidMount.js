export const onComponentDidMount = component => {
  const {
    userId,
    inspectionId,
    inspectionLoaded,
    standardsLoaded,
    reportNotesLoaded,
    fetchInspectionRealTime,
    fetchStandardsRealTime,
    fetchReportNotesRealTime,
  } = component.props

  const { addUnsubscriber } = component.context

  !standardsLoaded && addUnsubscriber(fetchStandardsRealTime(userId))
  !reportNotesLoaded && addUnsubscriber(fetchReportNotesRealTime(userId))

  !inspectionLoaded &&
    addUnsubscriber(fetchInspectionRealTime(userId, inspectionId))
}
