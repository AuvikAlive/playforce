import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
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
      toggleSideMenu,
      searchBarOpen,
    } = this.props

    return (
      <StyledNavBar>
        {searchBarOpen && searchComponent ? (
          searchComponent
        ) : (
          <AppBar className={shadow ? '' : 'disable-shadow'}>
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
        )}
      </StyledNavBar>
    )
  }
}

export default NavBar
