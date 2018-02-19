import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { StyledNavLink } from '../styledNavLink/StyledNavLink'
import SignUp from '../../pages/signUp/SignUp'
import Modal from '../modal/Modal'

import logo from './logo.JPG'

class NavBar extends Component {
  state = { open: false }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar className={classes.toolBar}>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              <img src={logo} alt="logo" className={classes.image} />
            </Typography>
            <StyledNavLink to="/SignIn">
              <Button color="inherit" className={classes.firstButton}>
                Sign In
              </Button>
            </StyledNavLink>
            <Button variant="raised" color="primary" onClick={this.handleOpen}>
              Try Free
            </Button>

            <Modal open={this.state.open} handleClose={this.handleClose}>
              <SignUp />
            </Modal>
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
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
})

export default withStyles(styles)(NavBar)
