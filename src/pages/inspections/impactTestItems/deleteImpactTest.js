import { showActionGoBack } from '../../../functions/'

export const deleteImpactTest = component => async () => {
  const { deleteImpactTest } = component.props

  await deleteImpactTest()

  showActionGoBack(component, 'Impact test deleted!')()
}
