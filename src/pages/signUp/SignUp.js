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
  }

  componentDidMount() {
    const { setNavTitle } = this.context
    setNavTitle('Sign Up')
  }

  componentWillUnmount() {
    const { removeNavTitle } = this.context
    removeNavTitle()
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  signUp = async () => {
    const { username, email, password } = this.state
    const { setErrorLoadingState, firebase, history } = this.props

    if (username && email && password) {
      setErrorLoadingState({ error: '', loading: true })

      try {
        await firebase.createUser(
          { email, password },
          { displayName: username, email }
        )
        history.push('/dashboard')
      } catch (error) {
        setErrorLoadingState({ error: error.message, loading: false })
      }
    } else {
      setErrorLoadingState({
        error: 'Please fill up the form properly!',
        loading: false,
      })
    }
  }

  render() {
    const { error, loading } = this.props

    return (
      <StyledForm className="StyledForm">
        <form noValidate autoComplete="off">
          <Typography variant="display1" align="center">
            Sign Up
          </Typography>
          <TextField
            id="fullName"
            label="Full Name"
            margin="normal"
            fullWidth
            onChange={this.onInputChange('username')}
          />

          <TextField
            id="email"
            label="Email"
            type="email"
            margin="normal"
            fullWidth
            onChange={this.onInputChange('email')}
          />

          <TextField
            id="password"
            label="Password"
            type="password"
            margin="normal"
            fullWidth
            onChange={this.onInputChange('password')}
          />

          {error && <p className="error">{error}</p>}

          {!error &&
            loading && (
              <div className="loading">
                <CircularProgress />
              </div>
            )}

          {!loading && (
            <Button variant="raised" color="primary" onClick={this.signUp}>
              Sign Up
            </Button>
          )}

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
