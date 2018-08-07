export const submit = component => data => {
  const { addClient, userId } = component.props

  return addClient(userId, data)
}
