import { showActionGoBack } from '../../../../functions/'

export const deleteDropTest = component => async () => {
  const {
    inspectionId,
    userId,
    impactTestId,
    id,
    deleteDropTest,
  } = component.props

  await deleteDropTest(userId, inspectionId, impactTestId, id)

  showActionGoBack(component, 'Drop test deleted!')()
}
