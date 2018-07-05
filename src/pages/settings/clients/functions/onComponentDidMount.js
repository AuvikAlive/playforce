import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'

export const onComponentDidMount = async component => {
  const { addUnsubscriber } = component.context
  const { userId, clientsLoaded, fetchClientsRealTime } = component.props
  const title = 'Clients'

  onComponentDidMountWithTitleLeftNav(component, title)

  !clientsLoaded && addUnsubscriber(await fetchClientsRealTime(userId))
}
