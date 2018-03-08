import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { FormControlLabel } from 'material-ui/Form'
import Checkbox from 'material-ui/Checkbox'
import { CircularProgress } from 'material-ui/Progress'
import { StyledForm } from '../../components/styledForm/StyledForm'
import { StyledLink } from '../../components/styledLink/StyledLink'
import Modal from '../../components/modal/Modal'
import SignUp from '../signUp'

export class SignIn extends Component {
  state = {
    modalOpen: false,
    email: '',
    password: '',
    error: '',
    loading: false,
  }

  componentDidMount() {
    const { setNavTitle } = this.context

    setNavTitle('Sign In')
  }

  componentWillUnmount() {
    const { removeNavTitle } = this.context

    removeNavTitle()
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
    this.setState({ loading: true })

    if (email && password) {
      const p = firebase.login({
        email,
        password,
      })

      p
        .then(value => {
          history.push({
            pathname: '/dashboard',
            state: { name: 'Dashboard' },
          })
        })
        .catch(error => {
          this.setState({ error: error.message })
          this.setState({ loading: false })
        })
    } else {
      this.setState({ error: 'Please fill up the form properly!' })
      this.setState({ loading: false })
    }
  }

  handleSignUp = event => {
    event.preventDefault()
    this.openModal()
  }

  render() {
    const { error, loading } = this.state

    return (
      <StyledForm className="StyledForm">
        <form noValidate autoComplete="off">
          <Typography variant="display1" align="center">
            Sign In
          </Typography>
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

          {error && <p className="error">{error}</p>}

          {!error &&
            loading && (
              <div className="loading">
                <CircularProgress />
              </div>
            )}

          {!loading && (
            <Button variant="raised" color="primary" onClick={this.signIn}>
              Sign In
            </Button>
          )}

          <p>
            <StyledLink to="/">Forgot your password?</StyledLink>
          </p>

          <p>
            Don't have an account?{' '}
            <StyledLink to="/SignUp">Sign up for free!</StyledLink>
          </p>
        </form>
        <Modal open={this.state.modalOpen} handleClose={this.closeModal}>
          <SignUp />
        </Modal>
      </StyledForm>
    )
  }
}

SignIn.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
