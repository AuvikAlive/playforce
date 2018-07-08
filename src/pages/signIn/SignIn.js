import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import CircularProgress from '@material-ui/core/CircularProgress'
import { contextTypesTitle } from '../../constants/'
import {
  onComponentDidMountWithTitle,
  onComponentWillUnmountWithTitle,
  onEventInputChange,
} from '../../functions/'
import { StyledLink } from '../../components/styledLink/StyledLink'
import { StyledSignIn } from './StyledSignIn'
import { onCheckboxChange, signIn, signInWithProvider } from './functions/'
import { state } from './state'
import google from './google.svg'
// import facebook from './facebook.svg'

export class SignIn extends Component {
  state = state

  componentDidMount() {
    const title = 'Sign In'

    onComponentDidMountWithTitle(this, title)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitle(this)
  }

  onEventInputChange = onEventInputChange

  render() {
    const { checked } = this.state
    const { error, loading } = this.props

    return (
      <StyledSignIn className="StyledSignIn">
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
            onChange={this.onEventInputChange('email')}
          />

          <TextField
            id="password"
            label="Password"
            type="password"
            margin="normal"
            fullWidth
            onChange={this.onEventInputChange('password')}
          />

          <FormControlLabel
            className="checkbox"
            control={
              <Checkbox
                checked={checked}
                onChange={onCheckboxChange(this)}
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
            <div>
              <Button variant="raised" color="primary" onClick={signIn(this)}>
                Sign In
              </Button>
              <Button
                variant="raised"
                className="social-button"
                onClick={signInWithProvider(this, 'google')}
              >
                <img src={google} alt="google sign-in" />
                With Google
              </Button>

              {/* <Button variant="raised" className="social-button">
                <img src={facebook} alt="facebook sign-in" />
                With Facebook
              </Button> */}
            </div>
          )}

          <p>
            <StyledLink to="/resetPassword">Forgot your password?</StyledLink>
          </p>

          <p>
            Don't have an account?{' '}
            <StyledLink to="/SignUp">Sign up for free!</StyledLink>
          </p>
        </form>
      </StyledSignIn>
    )
  }
}

SignIn.contextTypes = contextTypesTitle
