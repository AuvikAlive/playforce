import { onComponentDidMountWithTitleLeftRightNavDelete } from '../../../../functions/'
import { deleteDropTest } from './deleteDropTest'

export const onComponentDidMount = component => {
  onComponentDidMountWithTitleLeftRightNavDelete(
    component,
    'Edit Drop Test',
    deleteDropTest
  )
}
