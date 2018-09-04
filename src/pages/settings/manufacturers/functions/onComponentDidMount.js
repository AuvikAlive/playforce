import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'

export const onComponentDidMount = async component => {
  const { addUnsubscriber } = component.context

  const {
    manufacturersLoaded,
    fetchManufacturersRealTime,
    userId,
  } = component.props

  onComponentDidMountWithTitleLeftNav(component, 'Manufacturers')

  !manufacturersLoaded &&
    addUnsubscriber(await fetchManufacturersRealTime(userId))
}
