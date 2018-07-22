export const submit = component => async data => {
  const { addEquipment, userId, siteId } = component.props

  return addEquipment(userId, siteId, data)
}
