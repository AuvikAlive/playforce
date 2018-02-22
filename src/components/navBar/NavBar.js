import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Menu, { MenuItem } from 'material-ui/Menu'
import ArrowDropDown from 'material-ui-icons/ArrowDropDown'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import { Link } from 'react-router-dom'
import { StyledNavBar } from './StyledNavBar'
import { StyledNavLink } from '../styledNavLink/StyledNavLink'
import SignUp from '../../pages/signUp/SignUpContainer'
import Modal from '../modal/Modal'

class NavBar extends Component {
  state = { modalOpen: true, anchorEl: null }

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
    const { anchorEl } = this.state

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
              <div>
                <StyledNavLink to="/SignIn">
                  <Button color="inherit" className="sign-in">
                    Sign In
                  </Button>
                </StyledNavLink>
                <Button
                  variant="raised"
                  color="secondary"
                  onClick={this.openModal}
                >
                  Try Free
                </Button>

                <Modal
                  open={this.state.modalOpen}
                  handleClose={this.closeModal}
                >
                  <SignUp />
                </Modal>
              </div>
            )}

            {!profile.isEmpty && (
              <div>
                <Button
                  aria-owns={anchorEl ? 'simple-menu' : null}
                  aria-haspopup="true"
                  onClick={this.openMenu}
                >
                  {profile.username}
                  <ArrowDropDown />
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.closeMenu}
                >
                  <Link to="/settings" className="menu-link">
                    <MenuItem onClick={this.closeMenu}>Settings</MenuItem>
                  </Link>
                  <MenuItem onClick={this.signOut}>Sign Out</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </StyledNavBar>
    )
  }
}

export default NavBar
