import { showActionGoBack } from '../../../../functions/'

export const deleteClient = component => async () => {
  const { deleteClient, userId, clientId } = component.props

  await deleteClient(userId, clientId)

  const message = 'Client deleted!'

  showActionGoBack(component, message)()
}
