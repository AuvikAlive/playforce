import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { FormControlLabel } from 'material-ui/Form'
import Checkbox from 'material-ui/Checkbox'
import { Link } from 'react-router-dom'
import { StyledSignIn } from './StyledSignIn'
import { Logo } from '../../components/logo/Logo'
import Modal from '../../components/modal/Modal'
import SignUp from '../signUp/SignUp'

class SignIn extends Component {
  state = { modalOpen: false }

  openModal = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  handleSignUp = event => {
    event.preventDefault()
    this.openModal()
  }

  render() {
    return (
      <StyledSignIn>
        <Grid container spacing={0} className="container">
          <Grid item xs={4}>
            <form noValidate autoComplete="off">
              <Logo />
              <Typography variant="headline">Sign In</Typography>
              <TextField
                id="email"
                label="Email"
                type="email"
                margin="normal"
                fullWidth
              />

              <TextField
                id="password"
                label="Password"
                type="password"
                margin="normal"
                fullWidth
              />

              <FormControlLabel
                className="checkbox"
                control={<Checkbox color="primary" />}
                label="Keep me signed in"
              />

              <Button
                variant="raised"
                color="primary"
                onClick={this.handleOpen}
              >
                Sign In
              </Button>

              <p>
                <Link to="/terms">Forgot your password?</Link>
              </p>

              <p>
                Don't have an account?{' '}
                <Link to="/" onClick={this.handleSignUp}>
                  Sign up for free!
                </Link>
              </p>
            </form>
          </Grid>
        </Grid>
        <Modal open={this.state.modalOpen} handleClose={this.closeModal}>
          <SignUp />
        </Modal>
      </StyledSignIn>
    )
  }
}

export default SignIn
