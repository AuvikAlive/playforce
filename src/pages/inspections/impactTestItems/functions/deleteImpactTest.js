import { showActionGoBack } from '../../../../functions/'

export const deleteImpactTest = component => async () => {
  const { inspectionId, userId, impactTests, deleteImpactTest } = this.props

  await deleteImpactTest(userId, inspectionId, impactTests)

  const message = 'Impact test deleted!'

  showActionGoBack(component, message)()
}
