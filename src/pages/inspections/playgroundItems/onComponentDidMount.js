import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {
  openMenu,
  onComponentDidMountWithTitleLeftRightNavDelete,
} from '../../../functions/'
import { deleteItem } from './deleteItem'

export const onComponentDidMount = component => {
  const { props } = component

  onComponentDidMountWithTitleLeftRightNavDelete(
    component,
    props.playground.name,
    deleteItem,
    <IconButton color="inherit" aria-label="More" onClick={openMenu(component)}>
      <MoreVertIcon aria-label="More" />
    </IconButton>
  )
}
