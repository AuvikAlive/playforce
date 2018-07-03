import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export const onComponentDidMountWithTitleLeftNav = (component, title) => {
  const { setNavTitle, setLeftNavComponent } = component.context
  const { history } = component.props

  setNavTitle(title)

  setLeftNavComponent(
    <IconButton
      color="inherit"
      aria-label="navigate back"
      onClick={() => history.goBack()}
    >
      <ArrowBackIcon />
    </IconButton>
  )
}
