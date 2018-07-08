import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { deleteEquipment } from './deleteEquipment'

export const onComponentDidMount = component => {
  const { setNavTitle, setRightNavComponent } = component.context

  const {
    openDialog,
    equipment,
    fetchEquipment,
    userId,
    siteId,
    id,
  } = component.props

  setNavTitle('Edit Equipment')

  setRightNavComponent(
    <IconButton
      color="inherit"
      aria-label="Search"
      onClick={() => openDialog(deleteEquipment(component))}
    >
      <DeleteIcon />
    </IconButton>
  )

  !equipment && fetchEquipment(userId, siteId, id)
}
