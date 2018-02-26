import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui-icons/Search'
import CloseIcon from 'material-ui-icons/Close'
import Input, { InputAdornment } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'

export const SearchBar = ({ close }) => (
  <AppBar color="default">
    <Toolbar>
      <FormControl fullWidth>
        <Input
          disableUnderline
          id="search"
          type="text"
          startAdornment={
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={close} onMouseDown={close}>
                <CloseIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Toolbar>
  </AppBar>
)
