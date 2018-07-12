import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import DeleteIcon from '@material-ui/icons/Delete'
import { deleteInspections } from './deleteInspections'

export const setSelectModeNav = (
  component,
  selectedItemsLength,
  setSelectMode,
  title
) => {
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
      aria-label="add to project"
      onClick={deleteInspections(component, setSelectMode)}
    >
      <DeleteIcon />
    </IconButton>
  )

  searchMode && setSearchOnBottom()
}
