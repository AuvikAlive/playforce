export const onComponentDidMount = async component => {
  const { setNavTitle, addUnsubscriber } = component.context

  const {
    fetchInspectionsBySiteRealTime,
    userId,
    siteId,
    site,
  } = component.props

  setNavTitle('Edit Site')

  site !== siteId &&
    addUnsubscriber(await fetchInspectionsBySiteRealTime(userId, siteId))
}
