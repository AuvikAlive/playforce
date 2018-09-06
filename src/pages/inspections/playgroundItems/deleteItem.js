import { showActionGoBack } from '../../../functions/'

export const deleteItem = component => async () => {
  const { deletePlayground, userId, inspectionId, playground } = component.props

  await deletePlayground(userId, inspectionId, playground)

  showActionGoBack(component, 'Playground deleted!')()
}
