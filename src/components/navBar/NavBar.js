import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import SearchIcon from 'material-ui-icons/Search'
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
      toggleSideMenu,
      routerState,
      searchBarOpen,
      openSearchBar
    } = this.props

    const routeName = routerState ? routerState.name : ''

    return (
      <StyledNavBar>
        {searchBarOpen &&
        (routeName === 'Inspections' || routeName === 'Sites') ? (
          <SearchBar />
        ) : (
          <AppBar>
            <Toolbar className="toolbar">
              <IconButton
                color="inherit"
                aria-label="Menu"
                onClick={toggleSideMenu}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                variant="title"
                color="inherit"
                className="page-title"
              >
                {routeName}
              </Typography>

              {(routeName === 'Inspections' || routeName === 'Sites') && (
                <IconButton
                  color="inherit"
                  aria-label="Search"
                  onClick={openSearchBar}
                >
                  <SearchIcon />
                </IconButton>
              )}
            </Toolbar>
          </AppBar>
        )}
      </StyledNavBar>
    )
  }
}

export default NavBar
