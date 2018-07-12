import { loadInitialData } from '../../../../functions/'

export const onComponentDidMount = async component => {
  const {
    setRightNav,
    initialData,
    equipmentsSite,
    siteId,
    fetchEquipmentsRealTime,
    userId,
  } = component.props

  const { addUnsubscriber } = component.context

  setRightNav && setRightNav()

  equipmentsSite !== siteId &&
    addUnsubscriber(await fetchEquipmentsRealTime(userId, siteId))

  initialData && loadInitialData(component, initialData)
}
