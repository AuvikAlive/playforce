import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import { onChange, onClose } from './functions/'

export const SearchBar = props => {
  return (
    <AppBar color="default">
      <Toolbar style={{ minHeight: 56 }}>
        <FormControl fullWidth>
          <Input
            disableUnderline
            id="search"
            type="text"
            onChange={onChange(props)}
            startAdornment={
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={onClose(props)}
                  onMouseDown={onClose(props)}
                >
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
