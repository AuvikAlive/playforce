export const submit = component => async data => {
  const { updateEquipment, userId, setFeedback, siteId } = component.props

  await updateEquipment(userId, siteId, data)
  setFeedback({ success: 'Equipment updated!' })
}
