import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import { Link } from 'react-router-dom'
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
    const { profile } = this.props
    const { modalOpen, anchorEl } = this.state

    return (
      <StyledNavBar>
        <AppBar position="static">
          <Toolbar className="toolbar">
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Link to="/" className="logo">
              <Typography variant="title" color="inherit">
                Play Force
              </Typography>
            </Link>

            {profile.isEmpty && (
              <EntryButtons
                modalOpen={modalOpen}
                openModal={this.openModal}
                closeModal={this.closeModal}
              />
            )}

            {!profile.isEmpty && (
              <UserMenu
                anchorEl={anchorEl}
                profile={profile}
                openMenu={this.openMenu}
                closeMenu={this.closeMenu}
                signOut={this.signOut}
              />
            )}
          </Toolbar>
        </AppBar>
      </StyledNavBar>
    )
  }
}

export default NavBar
