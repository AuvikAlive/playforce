import React, { Component } from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import CircularProgress from "@material-ui/core/CircularProgress"
import { NavContext } from "components/NavContextProvider/"
import { StyledLink } from "../../components/styledLink/StyledLink"
import {
  onComponentDidMountWithTitle,
  onComponentWillUnmountWithTitle,
  onEventInputChange,
} from "../../functions/"
import { StyledSignIn } from "./StyledSignIn"
import { GoogleIcon } from "./GoogleIcon"
// import { FacebookIcon } from './FacebookIcon'
import { onCheckboxChange, signIn, signInWithProvider } from "./functions/"
import { state } from "./state"

export class SignIn extends Component {
  state = state

  componentDidMount() {
    onComponentDidMountWithTitle(this, "Sign In")
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitle(this)
  }

  render() {
    const { checked } = this.state
    const { error, loading } = this.props

    return (
      <StyledSignIn className="StyledSignIn">
        <form noValidate autoComplete="off">
          <Typography variant="h4" align="center">
            Sign In
          </Typography>
          <TextField
            id="email"
            label="Email"
            type="email"
            margin="normal"
            fullWidth
            onChange={onEventInputChange(this, "email")}
          />

          <TextField
            id="password"
            label="Password"
            type="password"
            margin="normal"
            fullWidth
            onChange={onEventInputChange(this, "password")}
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

          {!error && loading && (
            <div className="loading">
              <CircularProgress />
            </div>
          )}

          {!loading && (
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={signIn(this)}
              >
                Sign In
              </Button>
              <Button
                variant="contained"
                className="social-button"
                onClick={signInWithProvider(this, "google")}
              >
                <GoogleIcon />
                With Google
              </Button>

              {/* <Button variant="contained" className="social-button">
                <FacebookIcon />
                With Facebook
              </Button> */}
            </div>
          )}

          <p>
            <StyledLink to="/resetPassword">Forgot your password?</StyledLink>
          </p>

          <p>
            Don't have an account?{" "}
            <StyledLink to="/SignUp">Sign up for free!</StyledLink>
          </p>
        </form>
      </StyledSignIn>
    )
  }
}

SignIn.contextType = NavContext
