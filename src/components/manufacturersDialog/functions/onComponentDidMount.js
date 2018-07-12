export const onComponentDidMount = component => {
  const {
    manufacturersLoaded,
    fetchManufacturersRealTime,
    userId,
  } = component.props

  !manufacturersLoaded && fetchManufacturersRealTime(userId)
}
