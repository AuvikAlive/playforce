import { showActionGoBack } from '../../../../functions/'

export const deleteSurfaceTest = component => async () => {
  const { impactTest, deleteSurfaceTest } = component.props

  await deleteSurfaceTest()

  const message = `${impactTest.surface.location} deleted!`

  showActionGoBack(component, message)()
}
