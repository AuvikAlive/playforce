import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export const onComponentDidMount = component => {
  const { history } = component.props
  const { setLeftNavComponent, disableNavBarShadow } = component.context

  setLeftNavComponent(
    <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
      <ArrowBackIcon />
    </IconButton>
  )

  disableNavBarShadow()
}
