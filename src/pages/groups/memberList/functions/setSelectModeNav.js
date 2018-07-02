import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import DeleteIcon from '@material-ui/icons/Delete'
import { deleteMembers } from './deleteMembers'
import { setSelectMode } from './setSelectMode'

export const setSelectModeNav = (component, selectedItemsLength) => {
  const {
    setNavColor,
    setNavTitle,
    setLeftNavComponent,
    setRightNavComponent,
    setSearchOnBottom,
  } = component.context
  const { searchBarOpen, searchResults } = component.props
  const searchMode = searchBarOpen && searchResults && searchResults.length > 0

  setNavColor('default')
  setNavTitle(selectedItemsLength)

  setLeftNavComponent(
    <IconButton
      color="inherit"
      aria-label="back"
      onClick={() => setSelectMode(component)(false)}
    >
      <ArrowBackIcon />
    </IconButton>
  )

  setRightNavComponent(
    <IconButton
      color="inherit"
      aria-label="delete from group"
      onClick={deleteMembers(component)}
    >
      <DeleteIcon />
    </IconButton>
  )

  searchMode && setSearchOnBottom()
}
