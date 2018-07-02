import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import AddIcon from '@material-ui/icons/Add'
import { addMembers } from './addMembers'
import { setSelectMode } from './setSelectMode'

export const setSelectModeNav = (component, title, selectedItemsLength) => {
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
      onClick={() => setSelectMode(component, title)(false)}
    >
      <ArrowBackIcon />
    </IconButton>
  )

  setRightNavComponent(
    <IconButton
      color="inherit"
      aria-label="add to group"
      onClick={addMembers(component)}
    >
      <AddIcon />
    </IconButton>
  )

  searchMode && setSearchOnBottom()
}
