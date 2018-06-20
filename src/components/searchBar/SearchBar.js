import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
// import { debounce } from 'lodash'
import FormControl from '@material-ui/core/FormControl'

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
