import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'
import { deleteImpactTest } from './deleteImpactTest'

export const onComponentDidMount = component => {
  const { setRightNavComponent } = component.context
  const { openDialog } = component.props
  const title = 'Impact Testing'

  onComponentDidMountWithTitleLeftNav(component, title)

  setRightNavComponent(
    <IconButton
      color="inherit"
      aria-label="delete impact test"
      onClick={() => openDialog(deleteImpactTest(component))}
    >
      <DeleteIcon />
    </IconButton>
  )
}
