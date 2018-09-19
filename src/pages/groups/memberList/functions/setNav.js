import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import DeleteIcon from '@material-ui/icons/Delete'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { deleteGroup } from './deleteGroup'

export const setNav = component => {
  const {
    setNavTitle,
    setLeftNavComponent,
    setRightNavComponent,
  } = component.context
  const { id, history, openSearchBar, openDialog } = component.props

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
    <div>
      <IconButton color="inherit" aria-label="Search" onClick={openSearchBar}>
        <SearchIcon />
      </IconButton>

      <IconButton
        color="inherit"
        aria-label="delete condition rating"
        onClick={() => openDialog(deleteGroup(component), 'Delete this group?')}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  )
}
