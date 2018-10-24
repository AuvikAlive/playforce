export const onComponentDidMount = component => {
  const {
    userId,
    inspectionId,
    inspectionLoaded,
    fetchStandaloneImpactTestRealTime,
  } = component.props

  const { addUnsubscriber } = component.context

  !inspectionLoaded &&
    addUnsubscriber(fetchStandaloneImpactTestRealTime(userId, inspectionId))
}
