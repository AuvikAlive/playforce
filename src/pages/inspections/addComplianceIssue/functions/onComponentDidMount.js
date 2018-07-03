import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export const onComponentDidMount = component => {
  const { setNavTitle, setLeftNavComponent } = component.context
  const { history } = component.props

  setNavTitle('Add Compliance Issue')

  setLeftNavComponent(
    <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
      <ArrowBackIcon />
    </IconButton>
  )
}
