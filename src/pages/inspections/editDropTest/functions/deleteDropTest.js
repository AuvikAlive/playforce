import { showActionGoBack } from '../../../../functions/'

export const deleteDropTest = component => async () => {
  const {
    inspectionId,
    userId,
    impactTestId,
    id,
    deleteDropTest,
  } = component.props

  const message = `Drop ${id} deleted!`

  await deleteDropTest(userId, inspectionId, impactTestId, id)

  showActionGoBack(component, message)
}
