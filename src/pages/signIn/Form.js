import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { FormControlLabel } from 'material-ui/Form'
import Checkbox from 'material-ui/Checkbox'
import { withTheme } from 'material-ui/styles'
import { StyledForm } from './StyledForm'
import { StyledLink } from '../../components/styledLink/StyledLink'
import Modal from '../../components/modal/Modal'
import SignUp from '../signUp/SignUpContainer'

class Form extends Component {
  state = {
    modalOpen: false,
    email: '',
    password: '',
    error: ''
  }

  openModal = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  onEmailChange = event => {
    const email = event.target.value
    this.setState({ email })
  }

  onPasswordChange = event => {
    const password = event.target.value
    this.setState({ password })
  }

  signIn = () => {
    const { email, password } = this.state
    const { firebase, history } = this.props

    this.setState({ error: '' })

    if (email && password) {
      const p = firebase.login({
        email,
        password
      })

      p
        .then(value => {
          history.push('/dashboard')
        })
        .catch(error => {
          this.setState({ error: error.message })
        })
    } else {
      this.setState({ error: 'Please fill up the form properly!' })
    }
  }

  handleSignUp = event => {
    event.preventDefault()
    this.openModal()
  }

  render() {
    const { error } = this.state
    const { theme } = this.props

    return (
      <StyledForm>
        <form noValidate autoComplete="off">
          <Typography variant="headline">Sign In</Typography>
          <TextField
            id="email"
            label="Email"
            type="email"
            margin="normal"
            fullWidth
            onChange={this.onEmailChange}
          />

          <TextField
            id="password"
            label="Password"
            type="password"
            margin="normal"
            fullWidth
            onChange={this.onPasswordChange}
          />

          <FormControlLabel
            className="checkbox"
            control={<Checkbox color="primary" />}
            label="Keep me signed in"
          />

          {error && (
            <p
              style={{
                color: theme.palette.primary.main
              }}
            >
              {error}
            </p>
          )}

          <Button variant="raised" color="primary" onClick={this.signIn}>
            Sign In
          </Button>

          <p>
            <StyledLink to="/">Forgot your password?</StyledLink>
          </p>

          <p>
            Don't have an account?{' '}
            <StyledLink to="/" onClick={this.handleSignUp}>
              Sign up for free!
            </StyledLink>
          </p>
        </form>
        <Modal open={this.state.modalOpen} handleClose={this.closeModal}>
          <SignUp />
        </Modal>
      </StyledForm>
    )
  }
}

export default withTheme()(Form)
