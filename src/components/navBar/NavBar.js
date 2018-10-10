import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { StyledNavBar } from './StyledNavBar'

export const NavBar = ({
  title,
  leftComponent,
  rightComponent,
  searchComponent,
  bottomComponent,
  shadow,
  color,
  toggleSideMenu,
  searchOnTop,
  searchBarOpen,
}) => {
  return (
    <StyledNavBar>
      {!searchOnTop && searchBarOpen && searchComponent}
      <AppBar
        className={shadow ? '' : 'disable-shadow'}
        color={color}
        position="static"
      >
        <Toolbar className="toolbar">
          {leftComponent ? (
            leftComponent
          ) : (
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={toggleSideMenu}
            >
              <MenuIcon />
            </IconButton>
          )}

          {title && (
            <Typography variant="title" color="inherit" className="page-title">
              {title}
            </Typography>
          )}

          <div className="right-component">{rightComponent}</div>
        </Toolbar>

        {bottomComponent}
      </AppBar>

      {searchOnTop && searchBarOpen && searchComponent}
    </StyledNavBar>
  )
}
