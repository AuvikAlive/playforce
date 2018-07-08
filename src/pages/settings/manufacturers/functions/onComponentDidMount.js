import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'

export const onComponentDidMount = async component => {
  const { addUnsubscriber } = component.context

  const {
    manufacturersLoaded,
    fetchManufacturersRealTime,
    userId,
  } = component.props

  const title = 'Manufacturers'

  onComponentDidMountWithTitleLeftNav(component, title)

  !manufacturersLoaded &&
    addUnsubscriber(await fetchManufacturersRealTime(userId))
}
