import { onComponentDidMountWithTitleLeftRightNavDelete } from '../../../../functions/'
import { deleteDropTest } from './deleteDropTest'

export const onComponentDidMount = component => {
  const { id } = component.props
  const title = `Edit drop ${id}`

  onComponentDidMountWithTitleLeftRightNavDelete(
    component,
    title,
    deleteDropTest
  )
}
