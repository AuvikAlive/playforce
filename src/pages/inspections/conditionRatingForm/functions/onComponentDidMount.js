import { loadInitialData } from './loadInitialData'

export const onComponentDidMount = async component => {
  const {
    manufacturersLoaded,
    fetchManufacturersRealTime,
    userId,
    equipmentsSite,
    siteId,
    fetchEquipments,
    initialData,
  } = component.props

  const { addUnsubscriber } = component.context

  !manufacturersLoaded &&
    addUnsubscriber(await fetchManufacturersRealTime(userId))

  equipmentsSite !== siteId && fetchEquipments(userId, siteId)

  initialData && loadInitialData(component, initialData)
}
