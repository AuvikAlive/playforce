export const onComponentDidMount = async component => {
  const {
    inspectionId,
    userId,
    inspectionLoaded,
    playingSurfacesLoaded,
    fetchInspectionRealTime,
    fetchPlayingSufacesRealTime,
  } = component.props

  const { addUnsubscriber } = component.context

  !inspectionLoaded &&
    inspectionId &&
    addUnsubscriber(await fetchInspectionRealTime(userId, inspectionId))

  !playingSurfacesLoaded &&
    addUnsubscriber(await fetchPlayingSufacesRealTime(userId, inspectionId))
}
