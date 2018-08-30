export const onComponentDidMount = async component => {
  const {
    inspectionId,
    userId,
    inspectionLoaded,
    fetchInspectionRealTime,
    impactTestsLoaded,
    fetchImpactTests,
  } = component.props

  const { addUnsubscriber } = component.context

  !inspectionLoaded &&
    inspectionId &&
    addUnsubscriber(await fetchInspectionRealTime(userId, inspectionId))
  !impactTestsLoaded && inspectionId && fetchImpactTests(userId, inspectionId)
}
