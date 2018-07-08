import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'
import { deleteStandard } from './deleteStandard'

export const onComponentDidMount = component => {
  const { setRightNavComponent } = component.context
  const {
    openDialog,
    fetchStandard,
    userId,
    standard,
    standardId,
  } = component.props
  const title = 'Edit Standard'

  onComponentDidMountWithTitleLeftNav(component, title)

  setRightNavComponent(
    <IconButton
      color="inherit"
      aria-label="delete condition rating"
      onClick={() => openDialog(deleteStandard(component))}
    >
      <DeleteIcon />
    </IconButton>
  )

  !standard && fetchStandard(userId, standardId)
}
