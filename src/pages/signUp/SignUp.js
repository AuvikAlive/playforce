import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { CircularProgress } from 'material-ui/Progress'
import { StyledLink } from '../../components/styledLink/StyledLink'
import { StyledForm } from '../../components/styledForm/StyledForm'

export class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    error: '',
    loading: false,
  }

  componentDidMount() {
    const { setNavTitle } = this.context

    setNavTitle('Sign Up')
  }

  componentWillUnmount() {
    const { removeNavTitle } = this.context

    removeNavTitle()
  }

  onNameChange = event => {
    const username = event.target.value
    this.setState({ username })
  }

  onEmailChange = event => {
    const email = event.target.value
    this.setState({ email })
  }

  onPasswordChange = event => {
    const password = event.target.value
    this.setState({ password })
  }

  signUp = () => {
    const { username, email, password } = this.state
    const { firebase, history } = this.props

    this.setState({ error: '' })
    this.setState({ loading: true })

    if (username && email && password) {
      const p = firebase.createUser(
        { email, password },
        { displayName: username, email },
      )

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

  render() {
    const { error, loading } = this.state

    return (
      <StyledForm>
        <form noValidate autoComplete="off">
          <Typography variant="display1" align="center">
            Sign Up
          </Typography>
          <TextField
            id="fullName"
            label="Full Name"
            margin="normal"
            fullWidth
            onChange={this.onNameChange}
          />

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

          {error && <p className="error">{error}</p>}

          {!error &&
            loading && (
              <div className="loading">
                <CircularProgress />
              </div>
            )}

          <Button variant="raised" color="primary" onClick={this.signUp}>
            Sign Up
          </Button>

          <p>
            By signing up you agree to our{' '}
            <StyledLink to="/terms">Terms of service</StyledLink>
          </p>
          <p>
            Already have an account?{' '}
            <StyledLink to="/signIn">Sign In</StyledLink>
          </p>
        </form>
      </StyledForm>
    )
  }
}

SignUp.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
