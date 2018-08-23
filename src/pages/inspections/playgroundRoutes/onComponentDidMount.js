export const onComponentDidMount = async component => {
  const {
    inspectionId,
    userId,
    inspectionLoaded,
    fetchInspectionRealTime,
    playgroundsLoaded,
    fetchPlaygrounds,
  } = component.props

  const { addUnsubscriber } = component.context

  !inspectionLoaded &&
    inspectionId &&
    addUnsubscriber(await fetchInspectionRealTime(userId, inspectionId))

  !playgroundsLoaded && inspectionId && fetchPlaygrounds(userId, inspectionId)
}
