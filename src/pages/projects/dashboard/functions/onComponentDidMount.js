import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { openMenu } from '../../../../functions/'

export const onComponentDidMount = component => {
  const {
    setNavTitle,
    setLeftNavComponent,
    setRightNavComponent,
  } = component.context
  const { history, id } = component.props

  setNavTitle(`Manage ${id}`)

  setLeftNavComponent(
    <IconButton
      color="inherit"
      aria-label="navigate back"
      onClick={() => history.goBack()}
    >
      <ArrowBackIcon />
    </IconButton>
  )

  setRightNavComponent(
    <IconButton color="inherit" aria-label="More" onClick={openMenu(component)}>
      <MoreVertIcon aria-label="More" />
    </IconButton>
  )
}
