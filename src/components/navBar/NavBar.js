import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { StyledNavBar } from './StyledNavBar'

class NavBar extends Component {
  signOut = () => {
    this.closeMenu()
    const { firebase, history } = this.props

    firebase.logout()
    history.push('/signIn')
  }

  render() {
    const {
      title,
      leftComponent,
      rightComponent,
      searchComponent,
      shadow,
      color,
      toggleSideMenu,
      searchOnTop,
      searchBarOpen,
    } = this.props

    return (
      <StyledNavBar>
        {!searchOnTop && searchBarOpen && searchComponent}
        <AppBar className={shadow ? '' : 'disable-shadow'} color={color}>
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
              <Typography
                variant="title"
                color="inherit"
                className="page-title"
              >
                {title}
              </Typography>
            )}

            <div className="right-component">{rightComponent}</div>
          </Toolbar>
        </AppBar>
        {searchOnTop && searchBarOpen && searchComponent}
      </StyledNavBar>
    )
  }
}

export default NavBar
