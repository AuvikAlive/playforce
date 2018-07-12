export const submit = component => async data => {
  const { addEquipment, userId, siteId } = component.props

  return await addEquipment(userId, siteId, data)
}
