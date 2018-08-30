import { showActionGoBack } from '../../../../functions/'

export const deleteDropTest = component => async () => {
  const { deleteDropTest } = component.props

  await deleteDropTest()

  showActionGoBack(component, 'Drop test deleted!')()
}
