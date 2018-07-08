import { showActionGoBack } from '../../../../functions/'

export const deleteEquipment = component => async () => {
  const { deleteEquipment, userId, siteId, id } = component.props

  await deleteEquipment(userId, siteId, id)

  const message = 'Equipment deleted!'

  showActionGoBack(component, message)
}
