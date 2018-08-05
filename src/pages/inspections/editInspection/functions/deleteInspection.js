import { showActionGoBack } from './showActionGoBack'

export const deleteInspection = component => async () => {
  const { inspection, inspectionId, userId, deleteInspection } = component.props

  await deleteInspection(inspection, userId, inspectionId)

  const message = 'Inspection deleted!'

  showActionGoBack(component, message)()
}
