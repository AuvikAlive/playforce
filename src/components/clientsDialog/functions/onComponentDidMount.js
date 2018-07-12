export const onComponentDidMount = async component => {
  const { userId, clientsLoaded, fetchClientsRealTime } = component.props
  const { addUnsubscriber } = component.context

  !clientsLoaded && addUnsubscriber(await fetchClientsRealTime(userId))
}
