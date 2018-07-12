import { loadInitialData } from '../../../../functions/'

export const onComponentDidMount = async component => {
  const {
    setRightNav,
    commonIssuesLoaded,
    fetchCommonIssuesRealTime,
    userId,
    equipmentsSite,
    siteId,
    fetchEquipmentsRealTime,
    initialData,
  } = component.props

  const { addUnsubscriber } = component.context

  setRightNav && setRightNav()

  !commonIssuesLoaded &&
    addUnsubscriber(await fetchCommonIssuesRealTime(userId))

  equipmentsSite !== siteId &&
    addUnsubscriber(await fetchEquipmentsRealTime(userId, siteId))

  initialData && loadInitialData(component, initialData)
}
