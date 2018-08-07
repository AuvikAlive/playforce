import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'
import { deleteClient } from './deleteClient'

export const onComponentDidMount = component => {
  const { setRightNavComponent } = component.context
  const { openDialog, fetchClient, userId, client, clientId } = component.props
  const title = 'Edit Client'

  onComponentDidMountWithTitleLeftNav(component, title)

  setRightNavComponent(
    <IconButton
      color="inherit"
      aria-label="delete client"
      onClick={() => openDialog(deleteClient(component))}
    >
      <DeleteIcon />
    </IconButton>
  )

  !client && fetchClient(userId, clientId)
}
