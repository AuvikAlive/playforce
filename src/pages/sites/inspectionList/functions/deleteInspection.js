export const deleteInspection = (
  component,
  index,
  inspectionId
) => async () => {
  const {
    inspectionsBySite,
    deleteInspection,
    userId,
    setFeedback,
  } = component.props

  const inspection = inspectionsBySite[index]

  await deleteInspection({
    inspection,
    userId,
    inspectionId,
  })

  setFeedback({ success: 'Inspection deleted!' })
}
