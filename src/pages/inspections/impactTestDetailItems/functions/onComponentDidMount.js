import { onComponentDidMountWithTitleLeftRightNavDelete } from '../../../../functions/'
import { deleteSurfaceTest } from './deleteSurfaceTest'

export const onComponentDidMount = component => {
  const { impactTest } = component.props
  const title = `Edit ${impactTest.surface.location}`

  onComponentDidMountWithTitleLeftRightNavDelete(
    component,
    title,
    deleteSurfaceTest
  )
}
