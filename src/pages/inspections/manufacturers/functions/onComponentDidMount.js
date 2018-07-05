export const onComponentDidMount = async component => {
  const {
    manufacturersLoaded,
    fetchManufacturersRealTime,
    userId,
  } = component.props

  const { addUnsubscriber } = component.context

  !manufacturersLoaded &&
    addUnsubscriber(await fetchManufacturersRealTime(userId))
}
