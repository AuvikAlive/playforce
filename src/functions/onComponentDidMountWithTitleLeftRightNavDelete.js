import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { onComponentDidMountWithTitleLeftNav } from './onComponentDidMountWithTitleLeftNav'

export const onComponentDidMountWithTitleLeftRightNavDelete = (
  component,
  title,
  deleteItem
) => {
  onComponentDidMountWithTitleLeftNav(component, title)

  const { setRightNavComponent } = component.context
  const { openDialog } = component.props

  setRightNavComponent(
    <IconButton
      color="inherit"
      aria-label="delete condition rating"
      onClick={() => openDialog(deleteItem(component))}
    >
      <DeleteIcon />
    </IconButton>
  )
}
