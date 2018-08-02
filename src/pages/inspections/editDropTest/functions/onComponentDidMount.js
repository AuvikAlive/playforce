import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'
import { deleteDropTest } from './deleteDropTest';

export const onComponentDidMount = component => {
  const { setRightNavComponent } = component.context
  const { id, openDialog } = component.props

  const title = `Edit drop ${id}`

  onComponentDidMountWithTitleLeftNav(component, title)

  setRightNavComponent(
    <IconButton
      color="inherit"
      aria-label="delete surface test"
      onClick={() => openDialog(deleteDropTest(component))}
    >
      <DeleteIcon />
    </IconButton>
  )
}
