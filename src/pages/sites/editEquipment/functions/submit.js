export const submit = component => async data => {
  const { updateEquipment, userId, setFeedback, siteId } = component.props

  try {
    await updateEquipment(userId, siteId, data)
    setFeedback({ success: 'Equipment updated!' })
  } catch (error) {
    setFeedback({ error: error.message, loading: false })
  }
}
