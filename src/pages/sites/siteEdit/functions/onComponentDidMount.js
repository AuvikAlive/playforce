import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { setTabBar } from './setTabBar'

export const onComponentDidMount = component => {
  const { history } = component.props
  const { setLeftNavComponent } = component.context

  setTabBar(component)

  setLeftNavComponent(
    <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
      <ArrowBackIcon />
    </IconButton>
  )
}
