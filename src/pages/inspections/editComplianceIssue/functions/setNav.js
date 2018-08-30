import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'
import { deleteIssue } from './deleteIssue'

export const setNav = component => componentToAppend => {
  onComponentDidMountWithTitleLeftNav(component, 'Edit Issue')

  const { context, props } = component

  context.setRightNavComponent(
    <div>
      <IconButton
        color="inherit"
        aria-label="delete condition rating"
        onClick={() => props.openDialog(deleteIssue(component))}
      >
        <DeleteIcon />
      </IconButton>

      {componentToAppend}
    </div>
  )
}
