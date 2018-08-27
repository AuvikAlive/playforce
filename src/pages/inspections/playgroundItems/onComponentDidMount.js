import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {
  openMenu,
  onComponentDidMountWithTitleLeftNav,
} from '../../../functions/'

export const onComponentDidMount = component => {
  const { props, context } = component

  onComponentDidMountWithTitleLeftNav(component, props.playground.name)

  context.setRightNavComponent(
    <IconButton color="inherit" aria-label="More" onClick={openMenu(component)}>
      <MoreVertIcon aria-label="More" />
    </IconButton>
  )
}
