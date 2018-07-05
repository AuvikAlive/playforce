export const deleteClient = component => async id => {
  const { openDialog, deleteClient, userId } = component.props

  openDialog(() => deleteClient(userId, id))
}
