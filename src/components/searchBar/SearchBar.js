import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui-icons/Search'
import CloseIcon from 'material-ui-icons/Close'
import Input, { InputAdornment } from 'material-ui/Input'
// import { debounce } from 'lodash'
import { FormControl } from 'material-ui/Form'

export const SearchBar = ({
  query,
  closeSearchBar,
  setSearchQuery,
  setSearchResults,
  onSearch,
  onSearchEnd,
}) => {
  const onChange = event => {
    const searchTerm = event.target.value
    search(searchTerm)
  }

  const search = async searchTerm => {
    const results = await onSearch(searchTerm)
    setSearchResults(results)
  }

  const onClose = () => {
    closeSearchBar()
    // setSearchQuery('')
    setSearchResults([])
    onSearchEnd && onSearchEnd()
  }

  return (
    <AppBar color="default">
      <Toolbar style={{ minHeight: 56 }}>
        <FormControl fullWidth>
          <Input
            disableUnderline
            id="search"
            type="text"
            onChange={onChange}
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
