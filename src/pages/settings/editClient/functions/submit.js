export const submit = component => async data => {
  const { updateClient, userId, clientId, setFeedback } = component.props

  await updateClient(userId, clientId, data)
  setFeedback({ success: 'Client updated!' })
}
