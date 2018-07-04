import { showActionGoBack } from './showActionGoBack'

export const deleteInspection = component => async () => {
  const { inspection, inspectionId, userId, deleteInspection } = this.props

  await deleteInspection(inspection, userId, inspectionId)

  const message = 'Inspection deleted!'

  showActionGoBack(component, message)
}
