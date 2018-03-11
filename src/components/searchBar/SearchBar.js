import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui-icons/Search'
import CloseIcon from 'material-ui-icons/Close'
import Input, { InputAdornment } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'

export const SearchBar = ({
  query,
  closeSearchBar,
  setSearchQuery,
  onSearchEnd,
}) => {
  const onSearch = event => {
    const searchTerm = event.target.value
    setSearchQuery(searchTerm)
  }

  const onClose = () => {
    closeSearchBar()
    setSearchQuery('')
    onSearchEnd && onSearchEnd()
  }

  return (
    <AppBar color="default">
      <Toolbar>
        <FormControl fullWidth>
          <Input
            disableUnderline
            id="search"
            type="text"
            onChange={onSearch}
            startAdornment={
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={onClose} onMouseDown={onClose}>
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Toolbar>
    </AppBar>
  )
}
