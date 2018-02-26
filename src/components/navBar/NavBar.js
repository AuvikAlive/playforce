import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import SearchIcon from 'material-ui-icons/Search'
// import { Link } from 'react-router-dom'
// import Media from 'react-media'
// import { isEmpty, isLoaded } from 'react-redux-firebase'
import { StyledNavBar } from './StyledNavBar'
// import { EntryButtons } from './EntryButtons'
// import { UserMenu } from './UserMenu'
import { SearchBar } from './SearchBar'

class NavBar extends Component {
  state = { modalOpen: false, anchorEl: null, search: false }

  openModal = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  openMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  closeMenu = () => {
    this.setState({ anchorEl: null })
  }

  openSearch = () => {
    this.setState({ search: true })
  }

  closeSearch = () => {
    this.setState({ search: false })
  }

  toggleSearch = () => {
    this.setState({
      search: !this.state.search
    })
  }

  signOut = () => {
    this.closeMenu()
    const { firebase, history } = this.props

    firebase.logout()
    history.push('/signIn')
  }

  render() {
    const { profile, toggleSideMenu, history } = this.props
    const { modalOpen, anchorEl, search } = this.state

    return (
      <StyledNavBar>
        {search ? (
          <SearchBar close={this.closeSearch} />
        ) : (
          <AppBar>
            <Toolbar className="toolbar">
              {/* <Media
              query="(orientation: portrait)"
              render={() => (
                <IconButton
                  color="inherit"
                  aria-label="Menu"
                  onClick={toggleDrawer}
                >
                  <MenuIcon />
                </IconButton>
              )}
            /> */}
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
                {history.location.state && history.location.state.name}
              </Typography>

              <IconButton
                color="inherit"
                aria-label="Search"
                onClick={this.openSearch}
              >
                <SearchIcon />
              </IconButton>

              {/* {isLoaded(profile) && (
              <div>
                <Media
                  query="(orientation: landscape)"
                  render={() =>
                    isEmpty(profile) && (
                      <EntryButtons
                        modalOpen={modalOpen}
                        openModal={this.openModal}
                        closeModal={this.closeModal}
                      />
                    )
                  }
                />

                <Media
                  query="(orientation: landscape)"
                  render={() =>
                    !isEmpty(profile) && (
                      <UserMenu
                        anchorEl={anchorEl}
                        profile={profile}
                        openMenu={this.openMenu}
                        closeMenu={this.closeMenu}
                        signOut={this.signOut}
                      />
                    )
                  }
                />
              </div>
            )} */}
            </Toolbar>
          </AppBar>
        )}
      </StyledNavBar>
    )
  }
}

export default NavBar
