import { loadInitialData } from '../../../../functions/'

export const onComponentDidMount = async component => {
  const {
    initialData,
    equipmentsSite,
    siteId,
    fetchEquipmentsRealTime,
    userId,
  } = component.props

  const { addUnsubscriber } = component.context

  equipmentsSite !== siteId &&
    addUnsubscriber(await fetchEquipmentsRealTime(userId, siteId))

  initialData && loadInitialData(component, initialData)
}
