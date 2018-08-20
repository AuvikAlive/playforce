import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { onComponentDidMountWithTitle } from './onComponentDidMountWithTitle'

export const onComponentDidMountWithTitleLeftNav = (
  component,
  title,
  beforeBack
) => {
  const { setLeftNavComponent } = component.context
  const { history } = component.props

  onComponentDidMountWithTitle(component, title)

  setLeftNavComponent(
    <IconButton
      color="inherit"
      aria-label="navigate back"
      onClick={beforeBack ? beforeBack : () => history.goBack()}
    >
      <ArrowBackIcon />
    </IconButton>
  )
}
