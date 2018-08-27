import { showActionGoBack } from '../../../../functions/'

export const deletePlayingSurface = component => async () => {
  const { deletePlayingSurface } = component.props

  await deletePlayingSurface()

  showActionGoBack(component, 'Playing surface deleted!')()
}
