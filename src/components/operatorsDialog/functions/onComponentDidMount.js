export const onComponentDidMount = async component => {
  const { userId, operatorsLoaded, fetchOperatorsRealTime } = component.props
  const { addUnsubscriber } = component.context

  !operatorsLoaded && addUnsubscriber(await fetchOperatorsRealTime(userId))
}
