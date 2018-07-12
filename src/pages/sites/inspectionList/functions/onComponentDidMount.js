export const onComponentDidMount = async component => {
  const { setNavTitle, addUnsubscriber } = component.context

  const {
    inspectionsBySiteLoaded,
    fetchInspectionsBySiteRealTime,
    userId,
    siteId,
  } = component.props

  setNavTitle('Edit Site')

  !inspectionsBySiteLoaded &&
    addUnsubscriber(await fetchInspectionsBySiteRealTime(userId, siteId))
}
