import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import SearchIcon from '@material-ui/icons/Search'

export const setInspectionNav = (component, title) => {
  const {
    setNavTitle,
    setLeftNavComponent,
    setRightNavComponent,
  } = component.context
  const { history, openSearchBar } = component.props

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

  setRightNavComponent(
    <IconButton color="inherit" aria-label="Search" onClick={openSearchBar}>
      <SearchIcon />
    </IconButton>
  )
}
