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

export class SignIn extends Component {
  state = {
    email: '',
    password: '',
    checked: true,
  }

  componentDidMount() {
    const { setNavTitle } = this.context
    setNavTitle('Sign In')
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

  onCheckboxChange = event => {
    const checked = event.target.checked
    this.setState({ checked })
  }

  signIn = async () => {
    const { email, password, checked } = this.state
    const { setFeedback, signIn, history } = this.props

    setFeedback({ error: '', loading: true })

    if (email && password) {
      try {
        await signIn(email, password, checked)
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
    const { checked } = this.state
    const { error, loading } = this.props

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

          <FormControlLabel
            className="checkbox"
            control={
              <Checkbox
                checked={checked}
                onChange={this.onCheckboxChange}
                color="primary"
              />
            }
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
            <StyledLink to="/resetPassword">Forgot your password?</StyledLink>
          </p>

          <p>
            Don't have an account?{' '}
            <StyledLink to="/SignUp">Sign up for free!</StyledLink>
          </p>
        </form>
      </StyledForm>
    )
  }
}

SignIn.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
