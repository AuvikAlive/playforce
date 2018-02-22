import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import { Link } from 'react-router-dom'
import Media from 'react-media'
import { StyledNavBar } from './StyledNavBar'
import { EntryButtons } from './EntryButtons'
import { UserMenu } from './UserMenu'

class NavBar extends Component {
  state = { modalOpen: false, anchorEl: null }

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

  signOut = () => {
    this.closeMenu()
    const { firebase, history } = this.props

    firebase.logout()
    history.push('/signIn')
  }

  render() {
    const { profile, toggleDrawer } = this.props
    const { modalOpen, anchorEl } = this.state

    return (
      <StyledNavBar>
        <AppBar position="static">
          <Toolbar className="toolbar">
            <Media
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
            />

            <Link to="/" className="logo" style={{ flex: 1 }}>
              <Typography variant="title" color="inherit" align="center">
                Play Force
              </Typography>
            </Link>

            <Media
              query="(orientation: landscape)"
              render={() =>
                profile.isEmpty && (
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
                !profile.isEmpty && (
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
          </Toolbar>
        </AppBar>
      </StyledNavBar>
    )
  }
}

export default NavBar
