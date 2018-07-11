import { loadInitialDataWithImage } from '../../../../functions/'

export const onComponentDidMount = async component => {
  const {
    manufacturersLoaded,
    fetchManufacturersRealTime,
    userId,
    initialData,
  } = component.props

  const { addUnsubscriber } = component.context

  !manufacturersLoaded &&
    addUnsubscriber(await fetchManufacturersRealTime(userId))

  initialData && loadInitialDataWithImage(component, initialData)
}
