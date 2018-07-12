import { showActionGoBack } from '../../../../functions/'

export const deleteSurfaceTest = component => async () => {
  const {
    inspectionId,
    userId,
    impactTest,
    deleteSurfaceTest,
  } = component.props

  await deleteSurfaceTest(userId, inspectionId, impactTest)

  const message = `${impactTest.surface.location} deleted!`

  showActionGoBack(component, message)()
}
