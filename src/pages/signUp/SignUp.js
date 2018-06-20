import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
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
    const { setFeedback, signUp, history } = this.props

    if (username && email && password) {
      setFeedback({ error: '', loading: true })

      try {
        await signUp(email, password, username)
        history.push({
          pathname: '/dashboard',
          state: { name: 'Dashboard' },
        })
      } catch (error) {
        setFeedback({ error: error.message, loading: false })
      }
    } else {
      setFeedback({
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
