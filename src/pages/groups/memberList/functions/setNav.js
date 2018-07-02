import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export const setNav = component => {
  const {
    setNavTitle,
    setLeftNavComponent,
    setRightNavComponent,
  } = component.context
  const { id, history, openSearchBar } = component.props

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
    <IconButton color="inherit" aria-label="Search" onClick={openSearchBar}>
      <SearchIcon />
    </IconButton>
  )
}
