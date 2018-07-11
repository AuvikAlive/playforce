import { showActionGoBack } from '../../../../functions/'

export const deleteSite = component => async () => {
  const { deleteSite, userId, siteId } = component.props

  await deleteSite(userId, siteId)

  const message = 'Site deleted!'

  showActionGoBack(component, message)()
}
