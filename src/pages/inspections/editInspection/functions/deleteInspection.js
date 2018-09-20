import { showActionGoBack } from './showActionGoBack'

export const deleteInspection = component => async () => {
  const {
    inspection,
    userId,
    inspectionCount,
    inspectionCompleteCount,
    deleteInspection,
  } = component.props

  await deleteInspection(
    inspection,
    userId,
    inspectionCount,
    inspectionCompleteCount
  )

  showActionGoBack(component, 'Inspection deleted!')()
}
