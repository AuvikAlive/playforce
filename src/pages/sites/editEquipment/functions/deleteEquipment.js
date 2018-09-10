import { showActionGoBack } from '../../../../functions/'

export const deleteEquipment = component => async () => {
  const { deleteEquipment, userId, siteId, id } = component.props

  await deleteEquipment(userId, siteId, id)
  showActionGoBack(component, 'Equipment deleted!')()
}
