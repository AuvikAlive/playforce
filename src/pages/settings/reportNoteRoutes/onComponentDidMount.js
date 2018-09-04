export const onComponentDidMount = async component => {
  const { addUnsubscriber } = component.context
  const {
    userId,
    reportNotesLoaded,
    fetchReportNotesRealTime,
  } = component.props

  !reportNotesLoaded && addUnsubscriber(await fetchReportNotesRealTime(userId))
}
