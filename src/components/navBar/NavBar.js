import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import { StyledNavBar } from './StyledNavBar'
import SearchBar from '../searchBar'

class NavBar extends Component {
  signOut = () => {
    this.closeMenu()
    const { firebase, history } = this.props

    firebase.logout()
    history.push('/signIn')
  }

  render() {
    const {
      leftComponent,
      rightComponent,
      bottomComponent,
      title,
      shadow,
      toggleSideMenu,
      searchBarOpen,
    } = this.props

    return (
      <StyledNavBar>
        {searchBarOpen ? (
          <SearchBar />
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

              {rightComponent}
            </Toolbar>
            {bottomComponent}
          </AppBar>
        )}
      </StyledNavBar>
    )
  }
}

export default NavBar
