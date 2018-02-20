import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Menu, { MenuItem } from 'material-ui/Menu'
import ArrowDropDown from 'material-ui-icons/ArrowDropDown'
import { Link } from 'react-router-dom'
import { StyledNavLink } from '../styledNavLink/StyledNavLink'
import SignUp from '../../pages/signUp/SignUpContainer'
import Modal from '../modal/Modal'
import { Logo } from '../logo/Logo'

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
    const { classes, profile } = this.props
    const { anchorEl } = this.state

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar className={classes.toolBar}>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              <Link to="/">
                <Logo className={classes.image} />
              </Link>
            </Typography>

            {profile.isEmpty && (
              <div>
                <StyledNavLink to="/SignIn">
                  <Button color="inherit" className={classes.firstButton}>
                    Sign In
                  </Button>
                </StyledNavLink>
                <Button
                  variant="raised"
                  color="primary"
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
                  <Link to="/settings" className={classes.menuLink}>
                    <MenuItem onClick={this.closeMenu}>Settings</MenuItem>
                  </Link>
                  <MenuItem onClick={this.signOut}>Sign Out</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  toolBar: {
    // padding: '0 64px'
  },
  image: {
    height: 64
  },
  firstButton: {
    marginRight: 8
  },
  menuLink: {
    outline: 'none',
    textDecoration: 'none'
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
})

export default withStyles(styles)(NavBar)
