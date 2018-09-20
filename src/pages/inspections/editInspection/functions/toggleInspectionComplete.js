export const toggleInspectionComplete = component => () => {
  const {
    toggleInspectionComplete,
    userId,
    inspectionId,
    inspectionCompleteCount,
    inspection: { complete },
  } = component.props

  toggleInspectionComplete(
    userId,
    inspectionId,
    complete,
    inspectionCompleteCount
  )
}
