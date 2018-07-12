import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'
import { deleteSurfaceTest } from './deleteSurfaceTest'

export const onComponentDidMount = component => {
  const { setRightNavComponent } = component.context
  const { openDialog, impactTest } = component.props
  const title = `Edit ${impactTest.surface.location}`

  onComponentDidMountWithTitleLeftNav(component, title)

  setRightNavComponent(
    <IconButton
      color="inherit"
      aria-label="delete surface test"
      onClick={() => openDialog(deleteSurfaceTest(component))}
    >
      <DeleteIcon />
    </IconButton>
  )
}
