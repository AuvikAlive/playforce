export const onComponentDidMount = async component => {
  const {
    inspectionId,
    userId,
    inspectionLoaded,
    fetchInspectionRealTime,
    conditionRatingsLoaded,
    fetchConditionRatings,
  } = component.props

  const { addUnsubscriber } = component.context

  !inspectionLoaded &&
    inspectionId &&
    addUnsubscriber(await fetchInspectionRealTime(userId, inspectionId))

  !conditionRatingsLoaded && fetchConditionRatings(userId, inspectionId)
}
